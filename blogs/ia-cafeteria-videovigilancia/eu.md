---
title: "Videoanalitika AI kafetarian: zenbat irits tenpero egiten du barista bakoitzak?"
slug: ia-cafeteria-videovigilancia
excerpt: "Zure CCTV-kin barista produktibotasuna neurtu: irits tenpero/ordu, bezeroen itxaropen denbora, lerroak. Hardware berririk gabe, aurpegi ez. Software IA bat eta 49 €/hilabete dashboard."
tags: ["Hostelería", "IA aplicatua", "CCTV", "Errendimendua"]
metaDescription: "IA CCTV existitik kafetarako: irits tenpero barista bakoitzaren, bezeroen itxaropen denbora, lerroak. Hardware berririk gabe, pribatutasuna, 49 €/hilabete."
publishedAt: 2026-08-17
language: eu
---

# Videoanalitika AI kafetarian: zenbat irits tenpero egiten du barista bakoitzak?

**TL;DR.** Zure CCTV existitik **bararen errendimendu dashboard bat** izan daiteke. Software IA batekin (hardware berririk gabe, aurpegi ez), neurtu dezakezu zenbat irits tenpero egiten duen barista bakoitzak, zenbat denbura itxaroten duen bezerroak eta lerroaren patronak. Lehen dashboard: **doan**.

## Ez zagutzen egin dezakeen egoera

Kafetaria bat Dago Donostiaren. Hiru barista. CCTV zaioatzera zaharra. Egunero, galdera bererea:

> "Nork dago aste honetan atzean? Zergatik larriroa 8:30-tan?"

Daturik gabe, intuitsioaren oinarri gain. Baina **zuri CCTV-k ikusten du guztia**. Software bat soilik behar du irakurtzeko.

> "Ast egun instalatugen software-a. CCTV-aren 2018-k ikusten zuen guztia. IA-k soilik interpreta nahi zuen." — Jabi, Kafe Bar Txepito (Hernani) jabea.

## Nola funtzionatzen du (hardware berririk gabe)

1. Zure **CCTV existitik** ikusten du video (analogo edo IP).
2. **Software IA** bat (OpenCV + YOLO) pertsonen mugimendua denbema errealan aztertzen du.
3. **Dashboard** bat metrikoak erakusten ditu kolorekin (gorri = alerta, hai = OK).

**AURPEGI EZ da erabiltzen.** Soilik dantzan dago:
- Esku hankien mugimendua (irts tenpero egiten direnak).
- Pertsonak (blobak, aurpegiak ez).
- Lerroaren patronak.

**Kostua:** Software IA: **49 €/hilabete**. Kámara berriak: **0 €**.

## Neurtzen dituen metrikoak

| Metrikoa | Zergatik da garrantzitsua | Oinarri osagarri |
|---|---|---|
| **Irits tenpero/ordu** | Produktibitatea | 90-120 irits tenpero/ordu |
| **Bezero bakoitzaren denbora (s)** | esperientzia | <30 segundu |
| **Lerro gehiena (pertsona)** | Saturation | 4 pertsona gehienez |
| **% bezerroak iristen** | Frixioa | <5 % |
| **Piko orduak (h/m)** | Helburu planifikazio | adib. 8:15-8:45 |

### Adibidea erreala (Café Bar Txepito)

Hernani dagoen kafetariak 1 astearen ondorioz ikusitakoa:

| Barista | Irits tenpero/ordu | Bezero denbora | % iristen |
|---|---|---|---|
| **Laura** 🟢 | 120 | 28 s | 2 % |
| **Ane** 🟡 | 110 | 32 s | 4 % |
| **Markel** 🟠 | 95 | 38 s | 8 % |

**Ezagutza:** Markel zen leihoa. Bara lerroa antzekan aldatzean, lerroak %38 gutxiarazi dituen.

## Pribatutasuna ziurtatuta (eta legala)

Teknologia honek **EZ du aurpegi errekurtsoa** erabiltzen. IA modeluak (YOLOv8, Detectron) dantzan dago:
- Pertsonen siluetak (aurpegiak ez).
- Esku hankien mugimenduak (identitateak ez).
- Mugimenduaren patronak (datu pertsonalak ez).

**RGPD** eta **LOPDGDD** onarduko dira, hauek egitzat:
- **Informatzea** langilei eta bezeroei (ilara sarreran).
- **Ez gordetzea** grabazioak, soilik metrikoak.
- **Ezabatzea** datuak 7-30 egunetan (software konfigurazioa).

> "Inoiz ere ez da ikusita aurpegiak. Blobak eta mugimenduak soilik. Legala eta segurtasuna." — Jabi, Txepito.

## Kausa erreala: Café Bar Txepito (Hernani)

- **CCTV:** 2018-k analógico (grabatzaile existitik).
- **Software:** Sensive Go (49 €/hilabete).
- **Instalazioa:** 2 ordu (software bat konektatu soilik).
- **Emaitzak 30 egunetan:**
  - Itxaropen denbora: **42 seg → 28 seg** (-33 %).
  - Irits tenpero/ordu: **105 → 120** (+14 %).
  - Bezerroak iristen: **8 % → 3 %**.

> "IA-k ez du ordezkatu barista. Bara lorain azalpena eman zuen." — Jabi.

## Gida azelaa: 5 pausa instalatzeko

### Pausa 1: Egitiatsu zure CCTV existitik
Behar duzu:
- Bararen eta itxaropen lekuaren ikusmena argi duen kamera bat.
- Bidea (HDMI, USB edo IP lokalan).

> Ez behar 4K. 720p software-arentzat behar baitira.

### Pausa 2: Aukeratu software IA

| Software | Prezioa | Dashboard | Integrazioa |
|---|---|---|---|
| **Sensive Go** | 49 €/hilabete | Bai (koloreak, alertak) | CCTV analógikoa/IP |
| **Shoplus Go** | 99 €/hilabete | Bai (KPIs + mugikorta) | CCTV + POS |
| **Deep Sentinel** | 149 €/hilabete | Bai (lerroak + IA denbema errealan) | CCTV + NVR |

### Pausa 3: Instalatu software-a
CCTV-aren bidea mini PC-ra (Intel NUC) edo softwarea web-eremuan instalatu. Software-a video-a denbema errealan aztertzen du. Teknikaria ezinbestez.

### Pausa 4: Zehaztu tokian eta KPIs
- Toki 1: Bararra (zenbatu irits tenpero).
- Toki 2: Lerroa (neurtu itxaropen denbora).
- Toki 3: Sarrera/irteerak (% bezerroak iristen).

### Pausa 5: Neurtu eta doitzu
- Astelehena: software-a ikasten (datuak zaharrak).
- Astebetea: patronak argi.
- Astehirua: Doitu (barra antzekan, jarduera).

## Kostu erreala: IA vs hardware berria

| Kontzeptua | Kostua |
|---|---|
| **IA CCTV existitik** | 49 €/hilabete |
| Kámara berri 4K (4x) | 800 € |
| Grabatzaile NVR berria | 400 € |
| Profesiona instalazioa | 300 € |
| **hardware berri TOTAL** | **1,500 €** |

> IA-k oraindik ordaintzen du 1 hilabete: egunero 10 irits tenpero gehiago × 1 € = 300 €/hilabete.

## Laburbilduz: pausa plana 3-ek

1. **Egitiatsu zure CCTV.** Bararen ikusmena argi bat → prest.
2. **Probatu egun 15 doan.** Sensive Go edo Deep Sentinel, kreditua ez.
3. **Neurtu KPIs garrantzitsu 3-ek:** Irits tenpero/ordu, bezerroak iristen, lerro gehiena.

> "Errendimendua sentitzen ez da. Neurtzen da. Eta zure CCTV-k ikusten du guztia." — *Retail Tech Journal*.

Zure CCTV-ri IA jaritzeko lehen egiaztatza: **doan** eta konpromisurik gabekoa.

---

**AdimenAi**-n (Elgoibar, Gipuzkoa) instalatzen dugu IA CCTV existitik kafetarako eta barestarako. Lehen begiradak **doan**: esaten dugu zenbat irits tenpero egiten duen bara ordukoan eta nola dago leihoa.

📞 +34 650 60 90 28 · [Jarri harremanetan](https://adimenai.com/contactar)
