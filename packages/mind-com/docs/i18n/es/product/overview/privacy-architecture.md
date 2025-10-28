---
title: Privacidad de datos para reuniones con IA
description: Arquitectura de privacidad transparente de InterMIND con confidencialidad basada en regiones, cumplimiento GDPR y elección del usuario para ubicaciones de procesamiento de datos.
---

# Privacidad de datos para reuniones con IA

## Introducción

InterMind es una plataforma para videoconferencias multilingües con interpretación en vivo impulsada por IA. Estamos diseñados para profesionales — donde no solo importa el mensaje, sino también la privacidad de ese mensaje.

Para ofrecer una experiencia fluida, InterMind integra servicios de terceros para video, audio, almacenamiento en la nube, interpretación en tiempo real y análisis. Estos proveedores externos nos ayudan a garantizar el rendimiento y la escalabilidad — pero también introducen una capa que no podemos controlar directamente.

Conoce más sobre [cómo funciona nuestra plataforma](./how-it-works) y nuestras [funciones de videoconferencias](./video-meeting-platform).

Creemos en la **transparencia por encima de las promesas**. Solo podemos garantizar privacidad y seguridad para los componentes bajo nuestro control directo — nuestro software, lógica de interfaz y cómo enrutamos los datos. Para todo lo demás, te ofrecemos **el poder de elección**.

Por eso diseñamos InterMind con **confidencialidad basada en regiones**: tú eliges dónde se procesan tus datos, qué marco legal los rige y qué modelos de IA se utilizan — basado en tu zona de privacidad seleccionada.

> **¿Qué es una Zona de Privacidad?**  
> _Una región configurable (UE, EE.UU., Asia) que determina dónde se procesan tus datos y bajo qué marco legal._

## Principios Fundamentales de Privacidad

### 1. **Modelo de Responsabilidad Compartida**

- InterMind **no posee ni opera** la infraestructura de nube subyacente o los LLMs (modelos de lenguaje grandes).
- No almacenamos tus archivos multimedia, ni procesamos directamente tu voz para el entrenamiento de modelos.
- **Sí controlamos** el software del lado del cliente, las reglas de enrutamiento y la lógica de cumplimiento — incluyendo por qué región fluyen tus datos, qué modelo se utiliza y bajo qué condiciones.

### 2. **Transparencia Arquitectónica**

- Puedes ver explícitamente qué región está activa para tu sesión y qué leyes aplican (ej. GDPR en Europa, CCPA en EE.UU., PDPL en los EAU).
- Cada sesión se ejecuta en un **modo de cumplimiento** designado, y esta configuración es visible y auditable.

### 3. **Privacidad por Defecto**

- InterMind **nunca** almacena o reutiliza tu contenido para entrenamiento, perfilado o análisis comercial.
- No conservamos transcripciones o multimedia a menos que lo solicites explícitamente.
- Si desactivas la interpretación, **ningún dato del usuario sale de tu dispositivo en absoluto**.

## Confidencialidad basada en regiones: Cómo funciona

Al inicio de cada sesión, o como parte de la configuración de la cuenta de tu organización, puedes seleccionar una zona de privacidad preferida:

| Región        | Leyes aplicables                                                                               | Infraestructura                 | Proveedores de LLM              |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europa        | [GDPR](https://gdpr.eu)                                                                       | Solo centros de datos de la UE           | Alojados en la UE o compatibles con la UE  |
| Estados Unidos | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (EE.UU.)         | OpenAI US / Anthropic US   |
| EAU / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Nube de EAU o Baréin           | LLMs regionales o compatibles |
| Asia / China  | Leyes locales de privacidad de China                                                                    | Alibaba, Huawei, Tencent Cloud | Solo LLMs con base en China      |

Esta elección determina cómo se procesan tu video, audio y contenido interpretado, y bajo qué jurisdicción.

Puedes:

- **Establecer una región predeterminada** para tu organización
- **Anular la región por sesión**
- **Incluir ciertas regiones en lista negra** completamente

## Lo que InterMind Garantiza

Implementamos salvaguardas técnicas y legales estrictas dentro de nuestro dominio de control:

### 1. **Ejecución Local Primero**

Las funciones del lado del cliente como la captura de voz y la renderización de la interfaz de usuario se manejan localmente siempre que sea posible.

### 2. **Minimización de Datos**

Solo se transmiten los datos mínimos necesarios para la tarea actual.

### 3. **Cifrado de Extremo a Extremo**

Todos los datos de audio/video se transmiten a través de canales cifrados. Las solicitudes de interpretación se canalizan a través de proxies seguros, evitando la exposición pública.

### 4. **Sin Almacenamiento por Defecto**

No almacenamos sus reuniones, transcripciones o conversaciones a menos que usted lo elija. Todo el almacenamiento está limitado por región.

## Cumplimiento Legal y Regulatorio

InterMind ofrece compatibilidad completa con:

- **GDPR** — Derecho de acceso, eliminación, exportación y restricción del procesamiento. Sin perfilado de IA.
- **CCPA** — Sin venta de datos personales, opciones de exclusión y prácticas de recopilación transparentes.
- **UAE PDPL** — Almacenamiento local si se solicita, controles de acceso estrictos, sin transferencias internacionales sin consentimiento.
- **China DSL/PIPL** — Procesamiento únicamente en la región, sin enrutamiento extranjero si se selecciona China.

## Lo que podemos y no podemos garantizar

Estamos comprometidos con la honestidad total, no solo con jerga legal.

> InterMind no puede garantizar cómo los LLM de terceros o los proveedores de infraestructura procesan los datos una vez que salen de nuestro control.

### NO garantizamos:

- Que OpenAI, Anthropic u otros proveedores de LLM no registren o retengan datos de entrada.
- Que los hosts en la nube no tengan acceso a los medios transmitidos a través de sus sistemas (a menos que estés usando un enclave seguro o implementación empresarial).
- Que el contenido pasado a un modelo de terceros esté fuera de su alcance de entrenamiento (a menos que sea bajo contrato privado).

### SÍ garantizamos:

- Siempre sabes **dónde y cómo** se están procesando tus datos.
- Tienes herramientas para **controlar el riesgo** seleccionando tu región y modo de cumplimiento.
- InterMind **nunca** almacena o explota tu contenido — ni siquiera temporalmente — sin tu consentimiento.

## Modos de Confianza y Niveles de Privacidad

Puedes personalizar tu sesión para que coincida con tus necesidades de confidencialidad:

| Modo de Confianza | Interpretación | Transferencia Entre Regiones | Almacenamiento     | Mejor Para                                    |
| ----------------- | -------------- | ----------------------------- | ------------------ | --------------------------------------------- |
| 🔒 Solo Local     | ❌             | ❌                            | ❌                 | Legal, gobierno, revisiones internas         |
| 🔐 Bloqueado por Región | ✅       | ✅ (solo dentro de la zona)   | ❌ o solo sesión   | Salud, finanzas, recursos humanos            |
| 🌐 Flexibilidad Global | ✅        | ✅ (multi-región)             | ✅                 | Soporte, ventas, equipos multinacionales     |

## Lo que obtienes desde el primer momento

- Uso de LLM específico por región, con transparencia en tiempo real.
- Sin entrenamiento ni perfilado de tu contenido — nunca.
- Cero transmisión de datos si la interpretación está desactivada.
- Almacenamiento de datos opcional, siempre limitado por región.
- Herramientas completas de auditoría y exportación para clientes empresariales.

## Conclusión

> La privacidad no es una promesa — es una arquitectura.

InterMind no se esconde detrás de garantías vagas. En su lugar, te damos **opciones**, **visibilidad** y **control**.

- Tú eliges tu región.
- Tú eliges tu nivel de interpretación.
- Tú decides qué riesgo estás dispuesto a aceptar — y te ayudamos a mantenerte en cumplimiento en cada nivel.

**InterMind — construido para profesionales, respaldado por el cumplimiento, gobernado por la confianza.**

> **¿Preguntas sobre privacidad?** [Contact us](../../resources/company/contacts) o lee sobre [our company values](../../resources/company/about).