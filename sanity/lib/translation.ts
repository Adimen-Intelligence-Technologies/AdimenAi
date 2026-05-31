type Locale = 'es' | 'en' | 'eu'

type OpenAIResponse = {
  output?: Array<{
    content?: Array<{ text?: string }>;
    text?: string;
  }>;
}

const localeDisplayNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  eu: 'Euskera',
}

const translateCache = new Map<string, string>()

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_MODEL = process.env.OPENAI_TRANSLATION_MODEL ?? 'gpt-4.1-mini'

function getCacheKey(targetLocale: Locale, text: string) {
  return `${targetLocale}:${text}`
}

function normalizeOutputText(response: OpenAIResponse): string {
  if (!response.output) {
    return ''
  }

  return response.output
    .map((item) => {
      if (typeof item.text === 'string') {
        return item.text
      }

      if (Array.isArray(item.content)) {
        return item.content.map((contentItem) => contentItem.text ?? '').join('')
      }

      return ''
    })
    .join('')
}

async function translateStrings(strings: string[], targetLocale: Locale): Promise<string[]> {
  if (targetLocale === 'es' || strings.length === 0) {
    return strings
  }

  if (!OPENAI_API_KEY) {
    return strings
  }

  const textToTranslate = strings.map((text) => text.trim())
  const prompt = `Translate the following JSON array of strings into ${localeDisplayNames[targetLocale]}. Return only a valid JSON array with the same number of strings, and do not add any explanation or extra text. Preserve punctuation, formatting, and line breaks as in each string.\n\n${JSON.stringify(textToTranslate)}`

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: prompt,
      max_output_tokens: 2000,
    }),
  })

  if (!response.ok) {
    return strings
  }

  const result = (await response.json()) as OpenAIResponse
  const rawText = normalizeOutputText(result).trim()

  try {
    const parsed = JSON.parse(rawText)
    if (Array.isArray(parsed) && parsed.every((item) => typeof item === 'string')) {
      return parsed as string[]
    }
  } catch (error) {
    // Fallback path: if JSON parsing fails, return original strings
  }

  return strings
}

function collectTextNodes(value: unknown, texts: string[] = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectTextNodes(item, texts))
    return texts
  }

  if (typeof value === 'object' && value !== null) {
    const entry = value as Record<string, unknown>

    if (typeof entry.text === 'string') {
      texts.push(entry.text)
      return texts
    }

    Object.values(entry).forEach((item) => collectTextNodes(item, texts))
  }

  return texts
}

function translateTextNodes(value: unknown, translations: string[], indexRef: { current: number }): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => translateTextNodes(item, translations, indexRef))
  }

  if (typeof value === 'object' && value !== null) {
    const entry = value as Record<string, unknown>

    if (typeof entry.text === 'string') {
      const translated = translations[indexRef.current] ?? entry.text
      indexRef.current += 1
      return {
        ...entry,
        text: translated,
      }
    }

    return Object.fromEntries(
      Object.entries(entry).map(([key, item]) => [key, translateTextNodes(item, translations, indexRef)]),
    )
  }

  return value
}

export async function translatePostContent<T extends Record<string, unknown>>(
  post: T,
  targetLocale: Locale,
): Promise<T> {
  if (targetLocale === 'es' || !post || typeof post !== 'object') {
    return post
  }

  const postLanguage = typeof post.language === 'string' ? post.language : undefined
  if (postLanguage === targetLocale) {
    return post
  }

  const title = typeof post.title === 'string' ? post.title : undefined
  const excerpt = typeof post.excerpt === 'string' ? post.excerpt : undefined
  const body = post.body

  const hasSpanishSource = title || excerpt || body
  if (!hasSpanishSource) {
    return post
  }

  const textSegments: string[] = []
  if (title) textSegments.push(title)
  if (excerpt) textSegments.push(excerpt)
  collectTextNodes(body, textSegments)

  const uniqueTexts = Array.from(new Set(textSegments))
  const translations = await translateStrings(uniqueTexts, targetLocale)
  const translationMap = new Map(uniqueTexts.map((text, index) => [text, translations[index] ?? text]))

  const translateOrKeep = (value: string | undefined) => (value ? translationMap.get(value) ?? value : value)

  const translatedBody = translateTextNodes(body, textSegments.map((text) => translationMap.get(text) ?? text), { current: 0 })

  return {
    ...post,
    title: translateOrKeep(title),
    excerpt: translateOrKeep(excerpt),
    body: translatedBody,
  }
}

export async function translatePostListItem<T extends Record<string, unknown>>(
  post: T,
  targetLocale: Locale,
): Promise<T> {
  if (targetLocale === 'es' || !post || typeof post !== 'object') {
    return post
  }

  const postLanguage = typeof post.language === 'string' ? post.language : undefined
  if (postLanguage === targetLocale) {
    return post
  }

  const title = typeof post.title === 'string' ? post.title : undefined
  const excerpt = typeof post.excerpt === 'string' ? post.excerpt : undefined
  const textSegments: string[] = []

  if (title) textSegments.push(title)
  if (excerpt) textSegments.push(excerpt)

  const translations = await translateStrings(textSegments, targetLocale)

  return {
    ...post,
    title: translations[0] ?? title,
    excerpt: translations[1] ?? excerpt,
  }
}
