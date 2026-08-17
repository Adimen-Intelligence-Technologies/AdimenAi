---
title: "AI video surveillance in your café: track baristas and customers in real time"
slug: ia-cafeteria-videovigilancia
excerpt: "Your existing CCTV can measure how many coffees each barista makes, how long customers stay, and what wait patterns emerge. No new hardware, no face recognition."
tags: ["Applied AI", "Café", "Video surveillance", "Efficiency"]
metaDescription: "AI on existing CCTV: track barista performance, customer dwell time, wait times in real time. No new hardware, privacy-compliant."
publishedAt: 2026-08-17
language: en
---

# AI video surveillance in your café: track baristas and customers in real time

**TL;DR.** Your existing CCTV can become a **bar efficiency tracker**. With a simple AI software (no new hardware), you can measure how many coffees each barista makes, how long customers stay, and what wait patterns emerge. All without face recognition. First audit: **free**.

## Scenario: the café that didn't know who was slow

You have a café in San Sebastián. Three baristas. Security CCTV. Every morning, the same question:

> "Who's slower today? Why's there a queue at 8:30?"

Without data, you rely on gut feelings. But **your CCTV already captures everything**. You just need the software to read it.

## How it works (no new hardware)

1. Your **existing CCTV** streams video (analogue or IP).
2. An **AI software** (OpenCV + YOLO) analyzes the flow of people.
3. A **dashboard** shows metrics in real time.

**Cost:** AI software: **50 €/month**. New cameras: **0 €**.

> "We installed the software the week before. The 2018 CCTV saw everything already. It just needed AI to read it." — Owner, Café Bar Txepito (Hernani).

## Metrics it measures

### How many coffees does each barista make?

The software detects bar movements, counts coffee cups and attributes them to the barista preparing them. No face recognition. Only hand motion and patterns.

- **Result:** Barista A = 120 cups/hour. Barista B = 95. Barista C = 110.

### How long does the customer stay?

A counter flows from when the customer enters until they pay and leave. Customers who sit are marked green, "in-a-rush" in blue.

> "Saw 30 % lingered 8-10 minutes. Just for coffee? Something was off." — Owner, Café Bar Txepito.

### Who's fast? Who's falling behind?

A live leaderboard shows each barista:

| Barista | Cups/hour | Avg customer time |
|---|---|---|
| Laura | 120 | 28 sec |
| Markel | 95 | 35 sec |
| Ane | 110 | 32 sec |

### Movement patterns?

- Peak hours: 8:15-8:45 (queue of 4 people).
- Max wait time: 35 seconds (Markel).
- Bottlenecks: next to the microwave.

### Wait times live

A **color dashboard**:
- **Green:** under 30 seconds wait.
- **Yellow:** 30-60 seconds.
- **Red:** over 60 seconds.

## Privacy: no face recognition

This tech **doesn't use facial recognition**. AI models detect:
- Human shape blobs.
- Hand movements.
- Queue patterns.

No faces stored. No identities tracked. GDPR and LOPDGDD compliant.

> "Never saw faces. Just blobs and moves. Legal and safe." — Owner, Café Bar Txepito.

## Real case: Café Bar Txepito (Hernani)

- **Hardware:** 2018 CCTV (analog), existing recorder.
- **Software:** Sensive (50 €/month).
- **Install:** 2 hours.
- **Results in 30 days:**
  - Avg wait time: 42 sec → 28 sec.
  - Cups/hour: 105 → 120 (+14 %).
  - Customers leaving without ordering: 8 % → 3 %.

> "Efficiency doesn't cost 10k. It costs 50 €/month and an app." — Owner.

## Quick guide: install in 5 steps

### Step 1: Check your CCTV

You need:
- At least **one camera with clear view of the bar**.
- Network connection or video output (HDMI/USB analogue).

> No need for 4K. 720p works.

### Step 2: Choose AI software

| Software | Price | Features |
|---|---|---|
| **Sensive** | 50 €/month | Bar metrics, color dashboard |
| **Shoplus Go** | 100 €/month | POS KPIs, mobile alerts |
| **Deep Sentinel** | 150 €/month | Queue analysis, live AI |

### Step 3: Install software

- Software on mini PC (Intel NUC) or cloud.
- Connect CCTV output (HDMI, USB) to PC.
- AI analyzes video in real time.

### Step 4: Configure dashboard

- Zones of interest: bar, queue zone, exit.
- Metrics: cups, dwell time, wait times.
- Alerts: red queue (>60 sec), slow barista (<90 cups/hour).

### Step 5: Measure and adjust

- Month 1: garbage data, AI learns.
- Month 2: clear patterns.
- Month 3: continuous improvement.

## Real cost: AI vs new hardware

| Item | Cost |
|---|---|
| **AI on existing CCTV** | 50 €/month |
| New 4K cameras | 500-2,000 € |
| New NVR recorder | 300-800 € |
| Pro installation | 200-1,000 € |

> AI pays for itself in 1 month with 10 extra coffees/day (0.50 €/cup) = 5 €/day = 150 €/month.

## In summary: 3-step plan

1. Check your CCTV. Clear bar view → ready.
2. Try 1 month free. Sensive or Deep Sentinel demo, no card.
3. Measure 3 key metrics: cups/hour, walk-aways, max queue.

> "Efficiency isn't felt. It's measured. And your CCTV already captures everything." — *Retail AI Journal*.

First AI install on your CCTV: **free** and no commitment.

---

At **AdimenAi** (Elgoibar, Gipuzkoa) we set up AI on existing CCTV for cafés and bars. First review is **free** and without commitment.

📞 +34 650 60 90 28 · [Contact us](https://adimenai.com/contactar)
