---
title: "AI video analytics in your café: how many coffees does each barista make?"
slug: ia-cafeteria-videovigilancia
excerpt: "Your existing CCTV can measure barista productivity: cups/hour, customer wait time, queues. No new hardware, no face recognition. Just AI + a 49 €/month dashboard."
tags: ["Hospitality", "Applied AI", "CCTV", "Efficiency"]
metaDescription: "AI on existing CCTV for cafés: measure coffees per barista, customer dwell time, queues. No new hardware, privacy-compliant, 49 €/month."
publishedAt: 2026-08-17
language: en
---

# AI video analytics in your café: how many coffees does each barista make?

**TL;DR.** Your existing CCTV can become a **bar efficiency dashboard**. With simple AI software (no new hardware, no face recognition), you can measure how many coffees each barista makes, how long customers wait and what queue patterns emerge. First dashboard: **free**.

## The scenario you didn't know you could fix

You run a café in San Sebastián. Three baristas. Old security CCTV. Every morning, the same question:

> "Who's slower today? Why's there a queue at 8:30?"

Without data, you guess. But **your CCTV already captures everything**. You just need software to read it.

> "We installed the software last week. The 2018 CCTV saw everything. It just needed AI to interpret it." — Jabi, owner of Café Bar Txepito (Hernani).

## How it works (no new cameras needed)

1. Your **existing CCTV** streams video (analogue or IP).
2. An **AI software** (OpenCV + YOLO) analyzes the flow of people in real time.
3. A **dashboard** shows metrics with colors (red = alert, green = OK).

**No face recognition at all.** Just detects:
- Hand movements (coffees made).
- People (blobs, not faces).
- Queue patterns.

**Cost:** AI software: **49 €/month**. New cameras: **€0**.

## Metrics it measures (and how to read them)

| Metric | What it means | Healthy benchmark |
|---|---|---|
| **Coffees/hour per barista** | Individual productivity | 90-120 cups/hour |
| **Avg customer time** | Experience | under 30 seconds |
| **Peak queue (people)** | Saturation | 4 people max |
| **% walk-aways** | Friction | under 5 % |
| **Peak hours (h/m)** | Capacity planning | e.g. 8:15-8:45 |

### Real dashboard example (Café Bar Txepito)

The Hernani café saw this after 1 week:

| Barista | Cups/hour | Customer time | % walk-aways |
|---|---|---|---|
| **Laura** 🟢 | 120 | 28 s | 2 % |
| **Ane** 🟡 | 110 | 32 s | 4 % |
| **Markel** 🟠 | 95 | 38 s | 8 % |

**Insight:** Markel was the bottleneck. Reorganizing the bar cut queues by 38 %.

## Privacy guaranteed (and legal)

This tech **does NOT use face recognition**. AI models (YOLOv8, Detectron) detect:
- Human silhouettes (not faces).
- Hand movements (not identities).
- Flow patterns (not personal data).

Will comply with **GDPR** and **LOPDGDD** if you:
- **Inform** staff and customers (notice at the door).
- **Don't store** footage, only aggregated metrics.
- **Delete** data within 7-30 days (software config).

> "Never saw faces. Just blobs and moves. Legal and safe." — Jabi, Txepito.

## Real case: Café Bar Txepito (Hernani)

- **CCTV:** 2018 analogue (existing recorder).
- **Software:** Sensive Go (49 €/month).
- **Installation:** 2 hours (just connect software).
- **Results in 30 days:**
  - Avg wait time: **42 sec → 28 sec** (-33 %).
  - Cups/hour: **105 → 120** (+14 %).
  - Walk-away customers: **8 % → 3 %**.

> "The AI didn't replace my barista. It helped me organize the bar better." — Jabi.

## Quick guide: 5 installation steps

### Step 1: Check your existing CCTV
You need:
- A camera with a clear view of the bar and waiting area.
- Video output (HDMI, USB, or IP on local network).

> No 4K needed. 720p works for AI software.

### Step 2: Choose AI software

| Software | Price | Dashboard | Integration |
|---|---|---|---|
| **Sensive Go** | 49 €/month | Yes (colors, alerts) | Analogue/IP CCTV |
| **Shoplus Go** | 99 €/month | Yes (KPIs + mobile) | CCTV + POS |
| **Deep Sentinel** | 149 €/month | Yes (queues + live AI) | CCTV + NVR |

### Step 3: Install the software
Connect the video output from your CCTV to a mini PC (Intel NUC) or install the software in the cloud. The software analyzes video in real time. No technician needed.

### Step 4: Define zones and KPIs
- Zone 1: Bar (count coffees).
- Zone 2: Queue (measure wait time).
- Zone 3: Entrance/exit (walk-away customers).

### Step 5: Measure and optimize
- Week 1: Software learns (messy data).
- Week 2: Clear patterns.
- Week 3: Optimize (reorganize bar, shifts).

## Real cost: AI vs new hardware

| Item | Cost |
|---|---|
| **AI on existing CCTV** | 49 €/month |
| New 4K cameras (4x) | 800 € |
| New NVR recorder | 400 € |
| Pro install | 300 € |
| **TOTAL new hardware** | **1,500 €** |

> AI pays for itself in 1 month: 10 extra coffees/day × 1 € = 300 €/month.

## In summary: 3-step plan

1. **Check your CCTV.** One clear bar view → ready.
2. **Try 15 days free.** Sensive Go or Deep Sentinel, no card.
3. **Measure 3 KPIs:** Coffees/hour, walk-aways, peak queue.

> "Efficiency isn't felt. It's measured. And your CCTV already sees everything." — *Retail Tech Journal*.

First AI audit on your CCTV: **free** and no commitment.

---

At **AdimenAi** (Elgoibar, Gipuzkoa) we configure AI on existing CCTV for cafés and bars in the region. The first review is **free**: we tell you how many coffees your bar makes per hour and where the bottleneck is.

📞 +34 650 60 90 28 · [Contact us](https://adimenai.com/contactar)
