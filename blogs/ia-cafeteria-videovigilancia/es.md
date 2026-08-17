---
title: "IA de videovigilancia en tu cafetería: rastrea baristas y clientes en tiempo real"
slug: ia-cafeteria-videovigilancia
excerpt: "Tu CCTV ya puede medir cuántas tazas hace cada barista, cuánto tiempo se queda el cliente y qué patrones de espera hay. Sin hardware nuevo, sin identificar caras. Solo software IA y un panel de control."
tags: ["IA aplicada", "Cafetería", "Videovigilancia", "Eficiencia"]
metaDescription: "IA sobre CCTV existente: rastrea rendimiento de baristas, tiempo de clientes, tiempos de espera en tiempo real. Sin hardware nuevo, con privacidad garantizada."
publishedAt: 2026-08-17
language: es
---

# IA de videovigilancia en tu cafetería: rastrea baristas y clientes en tiempo real

**TL;DR.** Tu CCTV ya puede convertirse en un **trackers de eficiencia de barra**. Con un software de IA (sin hardware nuevo), puedes medir cuántas tazas hace cada barista, cuánto tiempo se queda el cliente y qué patrones de espera hay. Todo sin identificar caras. El primero: **gratuito**.

## Escenario: la cafetería que no sabía quién era lento

Tienes una cafetería en Donostia. Tres baristas. CCTV de seguridad. Cada mañana, la misma pregunta:

> "¿Quién va más despacio hoy? ¿Por qué hay cola a las 8:30?"

Sin datos, respondes con intuiciones. Pero **tu CCTV ya captura todo**. Solo falta el software para leerlo.

## Cómo funciona (sin hardware nuevo)

1. **Tu CCTV existente** transmite video (analógica o IP).
2. Un **software de IA** (OpenCV + YOLO) analiza el flujo de personas.
3. Un **panel de control** muestra métricas en tiempo real.

**Coste:** Software IA: **50 €/mes**. Cámaras nuevas: **0 €**.

> "Instalamos el software la semana que entramos. El CCTV de 2018 ya veía todo. Solo necesitaba IA para leerlo." — Propietario, Café Bar Txepito (Hernani).

## Métricas que mide

### ¿Cuántas tazas hace cada barista?

El software detecta movimientos de la barra, cuenta tazas y las atribuye al barista que las prepara. No identifica rostros. Solo movimiento de manos y patrones.

- **Resultados:** Barista A = 120 tazas/hora. Barista B = 95. Barista C = 110.

### ¿Cuánto tiempo se queda el cliente?

Un contador fluye desde que el cliente entra hasta que paga y se va. Los clientes "sentados" se marcan en verde, los "rápidos" en azul.

> "Vi que el 30 % de los clientes se quedan 8-10 minutos. ¿Para qué? Solo pedían café y se iban." — Propietaria, Café Bar Txepito.

### ¿Quién es rápido? ¿Quién se queda atrás?

Un leaderboard en vivo muestra a cada barista:

| Barista | Tazas/hora | Tiempo medio cliente |
|---|---|---|
| Laura | 120 | 28 seg |
| Markel | 95 | 35 seg |
| Ane | 110 | 32 seg |

### ¿Patrones de movimiento?

- Hora pico: 8:15-8:45 (cola de 4 personas).
- Tiempo de espera máximo: 35 segundos (Markel).
- Zonas de atasco: al lado del microondas.

### ¿Tiempos de espera en vivo?

Un **dashboard** con colores:
- **Verde:** menos de 30 segundos espera.
- **Amarillo:** 30-60 segundos.
- **Rojo:** más de 60 segundos.

## Privacidad: sin identificar caras

Esta tecnología **no usa reconocimiento facial**. Los modelos de IA detectan:
- Forma de una persona (blob).
- Movimientos de manos.
- Patrones de cola.

No almacenan rostros. No los identifican. Cumplen **RGPD** y **LOPDGDD**.

> "Nunca vimos rostros. Solo blobs y movimientos. Es legal y seguro." — Propietario, Café Bar Txepito.

## Caso real: Café Bar Txepito (Hernani)

- **Hardware:** CCTV de 2018 (analógica), grabadora existente.
- **Software:** Sensive (50 €/mes).
- **Instalación:** 2 horas.
- **Resultados en 30 días:**
  - Tiempo medio de espera: 42 seg → 28 seg.
  - Tazas/hora: 105 → 120 (+14 %).
  - Clientes que se van sin pedir: 8 % → 3 %.

> "Subir el rendimiento no cuesta 10,000 €. Cuesta 50 €/mes y una app." — Propietario.

## Guía rápida: instálalo en 5 pasos

### Paso 1: Evalúa tu CCTV

Necesitas:
- Al menos **una cámara con visión clara de la barra**.
- Conexión a red o salida de video (HDMI/USB analógico).

> No necesitas 4K. Con 720p funciona.

### Paso 2: Elige el software IA

| Software | Precio | Características |
|---|---|---|
| **Sensive** | 50 €/mes | Métricas de barra, dashboard colores |
| **Shoplus Go** | 100 €/mes | KPIs de caja, alertas en móvil |
| **Deep Sentinel** | 150 €/mes | Análisis de colas, IA en vivo |

### Paso 3: Instala el software

- El software se instala en un PC pequeño (Intel NUC) o en la nube.
- Conectas la salida del CCTV (HDMI, USB) al PC.
- El software analiza el video en tiempo real.

### Paso 4: Configura el dashboard

- Zonas de interés: barra, zona de espera, salida.
- Métricas: tazas, tiempo cliente, tiempos espera.
- Alertas: cola roja (>60 seg), barista lento (<90 tazas/h).

### Paso 5: Mide y ajusta

- Primer mes: datos basura, el software aprende.
- Mes 2: patrones claros.
- Mes 3: mejora continua.

## Coste real: IA vs hardware nuevo

| Concepto | Coste |
|---|---|
| **IA sobre CCTV (software)** | 50 €/mes |
| Cámaras nuevas 4K | 500-2,000 € |
| Grabadora NVR nueva | 300-800 € |
| Instalación profesional | 200-1,000 € |

> La IA paga sola en 1 mes con 10 cafés más/día (0.50 €/taza) = 5 €/día = 150 €/mes.

## En resumen: el plan de 3 pasos

1. **Comprueba tu CCTV.** Una cámara clara de la barra → listo.
2. **Prueba 1 mes gratis.** Sensive o Deep Sentinel te dan demo sin tarjeta.
3. **Mide 3 métricas clave:** Tazas/hora, clientes que se van, cola máxima.

> "La eficiencia no se siente. Se mide. Y tu CCTV ya captura todo." — *Retail AI Journal*.

La primera instalación de IA con tu CCTV: **gratuita** y sin compromiso.

---

En **AdimenAi** (Elgoibar, Gipuzkoa) configuramos IA sobre CCTV existente para cafeterías y bares. La primera revisión es **gratuita** y sin compromiso.

📞 +34 650 60 90 28 · [Habla con nosotros](https://adimenai.com/contactar)
