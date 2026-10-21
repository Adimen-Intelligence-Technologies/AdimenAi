---
title: "AI and data protection: what you can (and cannot) feed to ChatGPT, Claude or Gemini"
slug: ia-rgpd-datos
excerpt: "Can you paste invoices into ChatGPT? What about customer emails? This guide tells you what's allowed, what isn't, and the 3 safe alternatives for SMEs in 2026."
tags: ["AI", "Privacy", "GDPR"]
metaDescription: "AI and GDPR: what data you can share with ChatGPT, Claude or Gemini without breaking the law. Practical guide for SMEs with real examples."
publishedAt: 2026-08-17
language: en
---

# AI and data protection: what you can (and cannot) feed to ChatGPT, Claude or Gemini

**TL;DR.** The most frequent question we hear in Basque SMEs is: **"can I paste my invoices into ChatGPT without breaking anything?"** The short answer is: **it depends on the tool and the volume of data**. In 2026, regulations demand that **any company handling customer data must be careful**. Here's what you can do safely and what each alternative means.

## Why does AI and privacy generate fear?

Because the fear is legitimate. AI isn't a safe: **it's a system that learns from global patterns**. When you paste an email containing an ID number, amount, and customer name, you don't always know what stays behind.

Real cases we've seen:

- A hair salon uploading scanned invoices to a free tool, then discovering the provider used that data to train public models.
- A café pasting customer details into a prompt and ending up with purchase history exposed.
- A company uploading invoices to AI and the tax office reclaiming due to risk of leaking sensitive information.

**No fines yet for this**, but **regulations already warn**: "the data controller must assess whether AI use involves risks for the rights of data subjects."

## The golden rule: if leaking it would harm your customer, don't paste it

If your customer found out tomorrow that their ID, email, purchase amount, or history was in another company's database, they'd sue you. That's your threshold.

**Data you must NOT paste into free AI:**
- Customer emails (contain recognizable patterns).
- Complete invoices (name, ID, amount, payment method).
- Private WhatsApp or email messages with sensitive content.
- Photos of ID cards or documents with personal data.
- Customer lists with phone numbers or IDs.

**Data you can paste with relative safety:**
- Texts already anonymized (no names or numbers).
- General questions ("how do I answer a complaint email?").
- Data structures (without real values).

## What the main platforms say

| Platform | Can you use real data? | Conditions |
|---|---|---|
| **ChatGPT (free)** | ❌ No | No retention statement |
| **ChatGPT Plus / Teams** | ⚠️ With limits | "Don't train" options available since 2026 |
| **Claude (Anthropic)** | ⚠️ Not by default | Can disable training in settings |
| **Gemini (Google)** | ⚠️ Not by default | Won't retain for training if using Workspace |
| **Copilot (Microsoft)** | ⚠️ In Enterprise yes | Requires corporate agreement |
| **GPT for Work / Azure OpenAI** | ✅ Yes, with agreement | Enterprises can sign data processing agreements |
| **Mistral or Llama local** | ✅ Yes | If processed on your servers |

## 3 safe alternatives for SMEs

### 1. Anonymize first
Substitute names with `[CUSTOMER]`, amounts with `[AMOUNT]`, phone numbers with `[PHONE]`. AI understands context without exposing data.

### 2. Use business AI (not free)
Tools like **GPT for Work**, **Azure OpenAI** or **Claude for Work** allow signing data processing agreements (LOPDGDD). They don't use your data to train public models.

### 3. Process locally (on-premise)
Models like **Mistral** or **Llama** can be installed on your servers. More complex, but zero risk of leakage.

## Real examples: is this okay?

**Example 1: Reading an invoice with AI**
- ❌ Uploading the original invoice to ChatGPT.
- ✅ Scanning it, blanking sensitive data, asking only about the format.
- ✅ Or better: use specific OCR tools like **Azure Form Recognizer** or **Google Document AI**, designed for privacy.

**Example 2: Summarizing customer emails**
- ❌ Pasting the full email including name, address, amount.
- ✅ Extract only relevant info by hand, or anonymize it.

**Example 3: Creating automatic replies**
- ❌ "Reply to this email from John Smith with ID 12345678Z..."
- ✅ "Reply to a customer asking about delivery time."

## Quick privacy checklist

Ask yourself before pasting any data into AI:

1. **Is it sensitive or personal data?** (ID, amount, address, history)
2. **Does the platform retain it for training?** (check settings)
3. **Can you sign a data processing agreement?** (only business versions)
4. **Can you anonymize the data?** (always the safest option)
5. **Is there a specialized tool for this case?** (OCR, CRM with built-in AI)

## Tools for SMEs (2026)

- **Microsoft Copilot (Business):** includes Office 365, data processing agreement.
- **Google Workspace + Gemini:** integrated, with privacy controls.
- **OpenArt (for images):** DALL-E alternative with private data.
- **N8N / Make + private OCR:** for data flows without exposing them.
- **Local AI (LM Studio):** run Llama3/Mistral on your computer. Ideal for SMEs with sensitive info.

## In summary

- **Free AI = generic or anonymized data only.**
- **Business AI = real data (with agreement).**
- **Local AI = real data (on your servers).**

The rule isn't "don't use AI with customers". It's "use AI **responsibly** with customers". Regulations reward the effort to protect data, not punishment for mistakes.

---

At **AdimenAi** (Elgoibar, Gipuzkoa) we use business AI with data processing agreements for SMEs. The first privacy audit is **free**: we'll tell you which tools you can use and how to anonymize without losing functionality.

📞 +34 650 60 90 28 · [Get in touch](https://adimenai.com/contactar)