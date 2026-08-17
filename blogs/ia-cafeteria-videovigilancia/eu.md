---
title: "Videozaintza IA kafetarian: rastrekatu baristak eta bezeroak denbora errealan"
slug: ia-cafeteria-videovigilancia
excerpt: "Zure CCTV-kin taza kopuruak neurtu, bezeroen gelditze denbora, itxaropen patronak. Hardware berririk gabe, aurpegiak ez. Software IA bat eta panel bat soilik."
tags: ["IA aplicatua", "Kafetaria", "Videozaintza", "Errendimendua"]
metaDescription: "IA CCTV existitik: barista rendimendua, bezeroen gelditze denbora, itxaropenak denbora errealan. Hardware berririk gabe, pribatutasuna ziurtatuta."
publishedAt: 2026-08-17
language: eu
---

# IA videozaintza kafetarian: rastrekatu baristak eta bezeroak denboma errealan

**TL;DR.** Zure CCTV existitik **bararen errendimendu tracker bat** izan daiteke. Software IA bat (hardware berririk gabe), neurtu dezake: zenbat iristrak egiten dituen barista bakoitzak, zenbat denbora gelditzen den bezeroak, itxaropen patronak. Aurpegi ez. Lehen begirada: **doan**.

## Helburu: CCTV duen kafetaria, ez ziada zicharraren lentea

Kafetaria bat Dago Donostiaren. Hiru barista. CCTV segurtasunekoa. Egunero, galdera bererea:

> "Sartu zaio lehen denbora? Zergatik larriroa 8:30-tan?"

Daturik gabe, intuitsioaren oinarri gain. Baina **zuri CCTV-k ikusten du guztia**. Software bat soilik behar du irakurtzeko.

## Nola funtzionatzen du (hardware berririk gabe)

1. Zure **CCTV existitik** ikustzen du (analogo edo IP).
2. **Software IA** bat (OpenCV + YOLO) pertsonen mugimendua azterten du.
3. **Panel** bat metrikoak erakusten ditu denbema errealan.

**Kostua:** Software IA: **50 €/hilabete**. Kámara berriak: **0 €**.

> "Software-a instalatu genuen aste aurreko. CCTV-aren 2018-k ikusten zuen guztia dudanez. IA-k soilik irakurri behar zuen." — Jabea, Kafe Bar Txepito (Hernani).

## Neurtzen dituen metrikoak

### Zenbat irista egiten du barista bakoitzak?

Software-a barraaren mugimendua dantzan dagoela, iristrak zenbatzen ditu eta barista horren ondorengoak ditu. Aurpegi ez da. Handik eta mugimenduak soilik.

- **Emaitza:** Barista A = 120 kop/hordu. Barista B = 95. Barista C = 110.

### Zenbat denbura gelditzen da bezeroak?

Kontadorea bezeroak sartzen denean hasten da eta ordean paga eta irtenean amaitzen da. Gelditzen direnak geluhiña, "pro prozesuak" blue-n.

> "%30 gelditzen ziren 8-10 minutu. Soilik kafe bat? Ez zen egokia." — Jabea, Kafe Bar Txepito.

### Noren argi? Nork atzean?

Leaderboard bat denbema errealan erakusten du:

| Barista | Kop/hordu | Bezero bakoitzaren denbura |
|---|---|---|
| Laura | 120 | 28 seg |
| Markel | 95 | 35 seg |
| Ane | 110 | 32 seg |

### Mugimendu patronak?

- Ordu garrantzitsuak: 8:15-8:45 (4 pertsonen lerroan).
- Itxaropen denbura maximoa: 35 seg (Markel).
- Zelaiak: mikrohobia lerroan.

### Itxaropen denbura denbema errealan

**Dashboard kolorekin:**
- **Hazi (green):** 30 segundu azalantzea.
- **Horizondi (yellow):** 30-60 segundu.
- **Gorri (red):** 60 segundu gain.

## Pribatutasuna: aurpegi ez da

Teknologia honek **ez du aurpegi errekurtsoa** erabiltzen. Modelu IA-k hau dantzan dago:
- Pertsonen forma (blob).
- Esku hankien mugimenduak.
- Lerroaren patronak.

Ez da aurpegiak gordetzen. Ez da identitateak. GDPR eta LOPDGDD onarpenak.

> "Inoiz ere ez da ikusita aurpegiak. Blob-a eta mugimenduak soilik. Legala eta segurtasuna." — Jabea, Kafe Bar Txepito.

## Kausa erreala: Kafe Bar Txepito (Hernani)

- **Hardware:** 2018-k CCTV (analogo), grabatzaile existitik.
- **Software:** Sensive (50 €/hilabete).
- **Instalazioa:** 2 ordu.
- **Emaitzak 30 egunetan:**
  - Itxaropen denbura: 42 seg → 28 seg.
  - Kop/hordu: 105 → 120 (+14 %).
  - Etorrikoak (kafe bat soilik): 8 % → 3 %.

> "Errendimendua ez da 10,000 € izan behar. 50 €/hilabete eta app bat." — Jabea.

## Gida azelaa: instalatzea pausak 5-ean

### Pausa 1: Egitiatsu zure CCTV

Behar duzu:
- Gutxienez **kamera bat bararen ikusmena argi duena**.
- Sareko konexioa edo bidea (HDMI/USB analogikoa).

> Ez behar 4K. 720p batekin funtzionatzen du.

### Pausa 2: Aukeratu software IA

| Software | Prezioa | Ezaugarriak |
|---|---|---|
| **Sensive** | 50 €/hilabete | Bararen metrikoak, dashboard kolorekin |
| **Shoplus Go** | 100 €/hilabete | POS KPIs, alertak mugikortan |
| **Deep Sentinel** | 150 €/hilabete | Lerroaren azterketa, IA denbema errealan |

### Pausa 3: Instalatu software-a

- Software mini PC-n (Intel NUC) edo web-eremuan.
- CCTV-aren irterpena (HDMI, USB) PC-ra konektatu.
- IA-a video-a denbema errealan aztertzen du.

### Pausa 4: Konfiguratu dashboard-a

- Intereseko tokian: bararra, itxaropen lekua, irteerak.
- Metrikoak: kopuruak, gelditze denbura, itxaropen denbura.
- Alertak: lerro gorri (>60 seg), barista atzean (<90 kop/hordu).

### Pausa 5: Neurtu eta doitzu

- Hilabete 1: datuak zaharra, IA-ak ikasten.
- Hilabete 2: patronak argi.
- Hilabete 3: hobetzea jarraian.

## Kostu erreala: IA vs hardware berria

| Kontzeptua | Kostua |
|---|---|
| **IA CCTV existitian** | 50 €/hilabete |
| Kámara berri 4K | 500-2,000 € |
| Grabatzaile NVR berria | 300-800 € |
| Profesiona instalazioa | 200-1,000 € |

> IA-k ordainduko du 1 hilabete 10 iriste gehiago/egun (0.50 €/kafea) = 5 €/egun = 150 €/hilabete.

## Laburbilduz: pausak 3-ek

1. **Egitiatsu zure CCTV.** Bararen ikusmena argi → prest.
2. **Probatu hilabete bat doan.** Sensive edo Deep Sentinel demo, barik kreditu kartarik.
3. **Neurtu metrikoak garrantzitsu 3-ek:** Kop/hordu, irtenbideak, lerro maximoa.

> "Errendimendua sentitzen ez da. Neurtzen da. Eta zure CCTV-k ikusten du guztia dudanez." — *Retail AI Journal*.

Zure CCTV-ri IA jaritzeko lehen instalazioa: **doan** eta konpromisurik gabekoa.

---

**AdimenAi**-n (Elgoibar, Gipuzkoa) instalatzen dugu IA CCTV existitik kafetarako eta barestarako. Lehen begirada **doan** profitala.

📞 +34 650 60 90 28 · [Jarri harremanetan](https://adimenai.com/contactar)
