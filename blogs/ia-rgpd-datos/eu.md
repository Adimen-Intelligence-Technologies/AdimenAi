---
title: "IA eta datu pribatutasuna: zer pasa dezakezu (eta ezin) ChatGPT, Claude edo Gemini-ra"
slug: ia-rgpd-datos
excerpt: "Fakturak ChatGPT-ra pasa dezakezu? Bezeroen emailak? Gida honek esaten du zuzena eta ez dena, eta 2026ko SMEentzako alternatiba seguru 3."
tags: ["IA", "Pribatutasuna", "GDPR"]
metaDescription: "IA eta RGPD: zer datu pasa deitzakezu ChatGPT, Claude edo Gemini-ra ez egiaztagirizkoa. SMEentzako gida praktikoa adibide errealak."
publishedAt: 2026-08-17
language: eu
---

# IA eta datu pribatutasuna: zer pasa dezakezu (eta ezin) ChatGPT, Claude edo Gemini-ra

**Laburpena.** Gipuzkoako SME-ek galdu dituzten galdera nagusietako bat da: **"Fakturak ChatGPT-ra pasa dezaket nik ez inork aldeak?"** Erantzun laburra da: **trebailuantza horrek eta datu kopuruaren arabera**. 2026, norma arriskutzen duenez **enpresa edozein bezeroen datuak tratatzen dituenez, kontrol egitea** izan behar du. Hemen esaten dutzu nola egin dezakezu segurtasunez eta zer esan daiteke alternatiba.

## Zergatik sortzen du IA pribatutasunaren bezpan?

Belaunaldia zuzena da, datu pribatutasuna IA-aren kontextuan. IA ez da "aurrekontua bat": **errenkera globali bat ikasten du**. Faktura bat pasatzen duzunean, ID zenbaki bat, importa bat eta bezeroaren izena daudenak badago, ez baduzu beti ezagutzen zergatik geratzen den.

Kasu errealak, horren arabera:

- Oiartzun batek fakturak eskaneatu eta oraindik aurkitu zuenenez, hornitzaileak horiek erabiltzen ari zen datuetan errenkatu.
- Kafetxe batek bezeroen datuak promptean eta oraindik errepikatzen.
- Enpresa batek fakturak pasatzen AI-ra eta gero egiaztagirizkoa eran.

**Ez dago ezarririk oraindik**, baina **norma jadanik abaia du**: "datuetatik zuzendu, AI erabilerak errepikatzen duena".

## Ikerketa: bezeroaren datuak pasatzen direnak?

Zure bezeroak etorriko litekeena, IDa, emaila, trukea edo istorioa beste enpresa baten datu-basean dagoela ikusteko. Hor da zure atala.

**Datuak ez dagoizula izan beharrizkoak:**
- Bezeroen emailak.
- Faktura osoak (izena, ID, importa, ordainketa modua).
- WhatsApp edo email komunikazio pertsonalak.
- I.D.-ko argazkiak edo dokumentuak datu pertsonalak dituztenekin.
- Telefonoa edo ID-zenbakeekin bezeroen zerrenda bat.

**Datuak erabili daitezkeenak:**
- Testuak anonimitzatutakoak (izena edo zenbakirik gabe).
- Galdera orokorrak.
- Datu egiturra (balio errealrik gabe).

## Plataformak eta horiek esaten dutenak

| Plataforma | Datu errealak erabili daitezke? | Kondizioak |
|---|---|---|
| **ChatGPT (doanikoa)** | ❌ Ez | Ez duretarako ezagutza |
| **ChatGPT Plus / Teams** | ⚠️ Mugekkin | "Ez da entrenamendurik" aukera 2026-ean |
| **Claude (Anthropic)** | ⚠️ Ez defektuan | Settings-n ez daiteke antzeman |
| **Gemini (Google)** | ⚠️ Ez defektuan | Ez da entrenamendurik Workspace erabiltzen baduzu |
| **Copilot (Microsoft)** | ⚠️ Enterprise-n Bai | Akordio enpresariala behar da |
| **GPT for Work / Azure OpenAI** | ✅ Bai, akordioarekin | Enpresak datu-tratamendu akordioa sin dezake |
| **Mistral edo Llama lokala** | ✅ Bai | Zure zerbitzuetan prozesatzen badira |

## SMEentzako alternatiba seguruak

### 1. Anonimitizatu lehen
Izenak ordez [`BEZEROA`], importuak `[IMPOTURA]>, telefonoak `[TELEFONOA]>. IA-k kontzeptuaren arabaina ulertzen du barik datuetik.

### 2. IA negoziala (ez doanikoa)
Tresnak bezalakoak **GPT for Work**, **Azure OpenAI** edo **Claude for Work** datu-tratamendu akordioak (LOPDGDD) sin dezakete. Besteekin ez dute erabili zure datuak trebetasun publikoak trebailatzeko.

### 3. Lokala (on-premise)
Modeloak **Mistral** edo **Llama** zure zerbitzuetan instalatu daitezke. Zailagoa da, baina iraultze-risgua zeroa da.

## Adibide errealak: zuzen al dago?

**Adibide 1: Faktura bat AI-rekin irakurtzea**
- ❌ Faktura originala ChatGPT-era igoztea.
- ✅ Escaneatu, datu empozitiboak ezabatu, formatuari buruz soilik galdetzea.
- ✅ Hau da: OCR tresnak bezalakoak **Azure Form Recognizer** edo **Google Document AI**, pribatutasunarentzat diseiniatutakoak.

**Adibide 2: Bezeroen emailak laburpenik egitea**
- ❌ Email osoa, izena, helbidea, importa-pasatzea.
- ✅ Argibideak eskura eskuz, edo anonimitizatu.

**Adibide 3: Erantzun automatikoak sortzea**
- ❌ "Erantzun Johan Etxeberriaren ID-aren... email-era"
- ✅ "Bezero batek eskatzen duenerantz erantzun"

## Kontrol-errorea batzuk

Pasa dezakeela IA-era edozein datua:

1. **Datu pertsonal edo sentikoa dago?**
2. **Plataformak irakaspentzeko iraten du?**
3. **Akordioa sin dezakezu?**
4. **Anonimitizatu?**
5. **Treska zehatza dago?**

## Tresnak SMEentzako

- **Microsoft Copilot (Business):** Office 365-tik, datu-tratamendu akordioa.
- **Google Workspace + Gemini:** integratuta, pribatutasun-kontrolarekin.
- **OpenArt (irudiak):** DALL-E alternatiba pribatuaren datuetan.
- **N8N / Make + OCR pribatutua:** datu-flusak espizialki prozesatzeko.
- **IA lokala (LM Studio):** Llama3/Mistral zure ordenagailuan. Datu soinkidea duen SMEentzat.

## Laburbilki

- IA doanikoa = datu generiko edo anonimitizatuak.
- IA enpresailua = datu errealak (akordioarekin).
- IA lokala = datu errealak (zure zerbitzuetan).

Iragarkia ez da "IA erabiltzea galdu". "IA **arduratsua** erabiltzea". Normaek pribatutasuna babesten dute, ez gertaeraren ondorioak.

---

AdimenAi-kin (Elgoibar, Gipuzkoa) IA enpresailuarekin erabiltzen laguntzen dugu SMEentzat. Lehenengo pribatutasun-azterketa **doanikoa** da.

📞 +34 650 60 90 28 · [Habla con nosotros](https://adimenai.com/contactar)