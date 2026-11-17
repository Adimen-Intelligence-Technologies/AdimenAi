---
title: "IA de videovigilancia en su cafetería: cuántas tazas hace cada barista y cuánto tiempo espera el cliente"
slug: ia-cafeteria-videovigilancia
excerpt: "Su CCTV ya puede medir el rendimiento de cada barista: tazas/hora, tiempo de cliente, colas. Sin hardware nuevo, sin reconocimiento facial. Solo IA + un panel de control en 50 €/mes."
tags: ["Hostelería", "IA aplicada", "CCTV", "Eficiencia"]
metaDescription: "IA sobre CCTV existente para cafeterías: medir tazas por barista, tiempo cliente y colas. Sin hardware nuevo, privacidad garantizada, 50 €/mes."
publishedAt: 2026-08-17
language: es
---

# IA de videovigilancia en su cafetería: cuántas tazas hace cada barista y cuánto tiempo espera el cliente

**** Su CCTV ya puede convertirse en un **dashboard de eficiencia de barra**. Con un software de IA (sin hardware nuevo, sin reconocimiento facial), puede medir cuántas tazas hace cada barista, cuánto tiempo se queda el cliente y qué patrones de espera hay. El primer dashboard: **gratuito**.

## El escenario que no sabía que podía resolver

Tiene una cafetería en Donostia. Tres baristas. CCTV de seguridad viejo. Cada mañana, la misma pregunta:

> "¿Quién va más despacio hoy? ¿Por qué hay cola a las 8:30?"

Sin datos, responde con intuiciones. Pero **su CCTV ya captura todo**. Solo falta un software para leerlo.

> "Instalamos el software la semana pasada. El CCTV de 2018 ya veía todo. Solo necesitaba IA para interpretarlo." — Jabi, dueño de Café Bar Txepito (Hernani).

## Cómo funciona (sin comprar cámaras nuevas)

1. Su **CCTV existente** transmite video (analógica o IP).
2. Un **software de IA** (OpenCV + YOLO) analiza el flujo de personas en tiempo real.
3. Un **panel de control** muestra métricas con colores (rojo = alerta, verde = OK).

**Nada de reconocimiento facial.** Solo detecta:
- Movimiento de manos (tazas preparadas).
- Personas (blobs, no rostros).
- Patrones de cola.

**Coste:** Software IA: **50 €/mes**. Cámaras nuevas: **0 €**.

## Métricas que mido (y cómo leerlas)

| Métrica | Qué significa | Benchmark healthy |
|---|---|---|
| **Tazas/hora por barista** | Productividad individual | 90-120 tazas/hora |
| **Tiempo medio cliente (s)** | Experiencia | <30 segundos |
| **Cola máxima (personas)** | Saturación | ≤4 personas |
| **% clientes que se van** | Fricción | <5 % |
| **Patrones pico (h/m)** | Dimensionamiento | Identificar horas 8:15-8:45 |

### Ejemplo real del dashboard

La cafetería Café Bar Txepito (Hernani) vio esto tras 1 semana:

| Barista | Tazas/hora | Tiempo cliente | % que se van |
|---|---|---|---|
| **Laura** 🟢 | 120 | 28 s | 2 % |
| **Ane** 🟡 | 110 | 32 s | 4 % |
| **Markel** 🟠 | 95 | 38 s | 8 % |

**Insight:** Markel era el cuello de botella. Se le reorganizó la barra y redujo colas un 38 %.

## Privacidad garantizada (y legal)

Esta tecnología **no usa reconocimiento facial**. Los modelos de IA (YOLOv8, Detectron) detectan:
- Siluetas de personas (no rostros).
- Movimientos de manos (no identidades).
- Patrones de flujo (no datos personales).

Cumplirá con **RGPD** y **LOPDGDD** siempre que:
- **Informe** a empleados y clientes (cartel en la entrada).
- **No almacene** imágenes, solo métricas agregadas.
- **Borre** datos en 7-30 días (config de software).

> "Nunca vimos caras. Solo blobs y movimientos. Legal y seguro." — Jabi, Txepito.

## Caso real: Café Bar Txepito (Hernani)

- **CCTV:** Analógico de 2018 (grabación existente).
- **Software:** Sensive Go (49 €/mes).
- **Instalación:** 2 horas (solo conectar software).
- **Resultados en 30 días:**
  - Tiempo medio espera: **42 seg → 28 seg** (-33 %).
  - Tazas/hora: **105 → 120** (+14 %).
  - Clientes que se van sin pedir: **8 % → 3 %**.

> "La IA no reemplazó a mi camarero. Me ayudó a organizar mejor la barra." — Jabi.

## Guía rápida: 5 pasos para instalar

### Paso 1: Evalþe su CCTV existente
Necesita:
- Cámara con visión clara de la barra y zona de espera.
- Salida de video (HDMI, USB o IP en red local).

> No necesita 4K. Con 720p funciona el software IA.

### Paso 2: Elija el software IA
| Software | Precio | Dashboard | Integración |
|---|---|---|---|
| **Sensive Go** | 49 €/mes | Sí (colores, alertas) | CCTV IP/analógico |
| **Shoplus Go** | 99 €/mes | Sí (KPIs + móvil) | CCTV + POS |
| **Deep Sentinel** | 149 €/mes | Sí (colas + IA en vivo) | CCTV + NVR |

### Paso 3: Instale el software
Conecte la salida de video de su CCTV a un mini PC (Intel NUC) o instale el software en la nube. El software analiza el video en tiempo real. Sin técnico.

### Paso 4: Defina zonas y KPIs
- Zona 1: Barra (contar tazas).
- Zona 2: Cola (medir espera).
- Zona 3: Entrada/Salida (clientes que se van).

### Paso 5: Mida y optimice
- Semana 1: El software aprende (datos basura).
- Semana 2: Patrones claros.
- Semana 3: Optimice (reorganice barra, turnos).

## Coste real: IA vs hardware nuevo

| Concepto | Coste |
|---|---|
| **IA sobre CCTV existente** | 49 €/mes |
| Cámaras nuevas 4K (4x) | 800 € |
| Grabadora NVR nueva | 400 € |
| Instalación profesional | 300 € |
| **TOTAL hardware nuevo** | **1,500 €** |

> La IA paga sola en 1 mes: 10 tazas extras/día × 1 € = 300 €/mes.

## En resumen: plan de 3 pasos

1. **Verifique su CCTV.** Una cámara clara de la barra → listo.
2. **Pruebe 15 días gratis.** Sensive Go o Deep Sentinel sin tarjeta.
3. **Mida 3 KPIs:** Tazas/hora, clientes que se van, cola máxima.

> "La eficiencia no se siente. Se mide. Y su CCTV ya ve todo." — *Retail Tech Journal*.

La primera auditoría de IA con su CCTV: **gratuita** y sin compromiso.

---

En **AdimenAi** (Gipuzkoa) configuramos IA sobre CCTV existente para cafeterías y bares del territorio. La primera revisión es **gratuita** y sin compromiso: le decimos cuántas tazas produce su barra cada hora y dónde está el cuello de botella.

📞 +34 641 195184 · [Habla con nosotros](https://adimenai.com/contactar)
