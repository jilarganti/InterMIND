# Privacidad Regional de Datos para Reuniones de IA

## Introducción

InterMind es una plataforma para reuniones por video multilingües con interpretación en vivo impulsada por IA. Estamos diseñados para profesionales — donde no solo importa el mensaje, sino también la privacidad de ese mensaje.

> [!tip] Interpretación en tiempo real. Comprensión a nivel nativo. Sin subtítulos. Sin retrasos.

Para ofrecer una experiencia fluida, InterMind integra servicios de terceros para video, audio, almacenamiento en la nube, interpretación en tiempo real y análisis. Estos proveedores externos nos ayudan a garantizar el rendimiento y la escalabilidad, pero también introducen una capa que no podemos controlar directamente.

Creemos en la **transparencia por encima de las promesas**. Solo podemos garantizar la privacidad y seguridad de los componentes bajo nuestro control directo — nuestro software, la lógica de la interfaz y cómo enrutamos los datos. Para todo lo demás, te ofrecemos **el poder de elegir**.

Por eso diseñamos InterMind con **confidencialidad basada en regiones**: tú eliges dónde se procesan tus datos, qué marco legal los gobierna y qué modelos de IA se utilizan — según tu zona de privacidad seleccionada.

## Principios Fundamentales de Privacidad

### 1. **Modelo de Responsabilidad Compartida**

- InterMind **no posee ni opera** la infraestructura en la nube subyacente ni los LLMs (modelos de lenguaje extenso).
- No almacenamos sus archivos multimedia, ni procesamos directamente su voz para el entrenamiento de modelos.
- **Controlamos** el software del lado del cliente, las reglas de enrutamiento y la lógica de cumplimiento, incluyendo la región por la que fluyen sus datos, qué modelo se utiliza y bajo qué condiciones.

### 2. **Transparencia Arquitectónica**

- Puede ver explícitamente qué región está activa para su sesión y qué leyes se aplican (por ejemplo, GDPR en Europa, CCPA en EE. UU., PDPL en los EAU).
- Cada sesión se ejecuta en un **modo de cumplimiento** designado, y esta configuración es visible y auditable.

### 3. **Privacidad por Defecto**

- InterMind **nunca** almacena ni reutiliza su contenido para entrenamiento, perfilado o análisis comercial.
- No conservamos transcripciones ni medios a menos que usted lo solicite explícitamente.
- Si desactiva la interpretación, **ningún dato del usuario sale de su dispositivo**.

## Confidencialidad por Región: Cómo Funciona

Al inicio de cada sesión, o como parte de la configuración de la cuenta de su organización, puede seleccionar una zona de privacidad preferida:

| Región        | Leyes Aplicables                                                                               | Infraestructura                | Proveedores LLM            |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------------------ | -------------------------- |
| Europa        | [GDPR](https://gdpr.eu)                                                                       | Solo centros de datos de la UE | Alojados en UE o conformes |
| United States | [CCPA](https://oag.ca.gov/privacy/ccpa)                                                       | AWS / GCP / Azure (US)         | OpenAI US / Anthropic US   |
| UAE / MENA    | [PDPL](https://www.signzy.com/data-privacy-laws-in-the-uae-2025-everything-you-need-to-know/) | Nube de UAE o Bahréin          | LLMs regionales o conformes |
| Asia / China  | Leyes locales de privacidad chinas                                                            | Alibaba, Huawei, Tencent Cloud | Solo LLMs basados en China  |

Esta elección determina cómo se procesan sus videos, audio y contenido interpretado y a través de qué jurisdicción.

Usted puede:

- **Establecer una región predeterminada** para su organización
- **Anular la región por sesión**
- **Incluir regiones en lista negra** por completo

## Lo que InterMind Garantiza

Implementamos estrictas salvaguardas técnicas y legales dentro de nuestro dominio de control:

### 1. **Ejecución Local Primero**

Las funciones del lado del cliente, como la captura de voz y la renderización de la interfaz de usuario, se manejan localmente siempre que sea posible.

### 2. **Minimización de Datos**

Solo se transmiten los datos mínimos necesarios para la tarea actual.

### 3. **Cifrado de Extremo a Extremo**

Todos los datos de audio/video se transmiten a través de canales cifrados. Las solicitudes de interpretación se canalizan a través de proxies seguros, evitando la exposición pública.

### 4. **Sin Almacenamiento por Defecto**

No almacenamos sus reuniones, transcripciones o conversaciones a menos que usted lo autorice. Todo el almacenamiento está limitado por región.

## Cumplimiento Legal y Regulatorio

InterMind garantiza la compatibilidad total con:

- **GDPR** — Derecho de acceso, eliminación, exportación y restricción del procesamiento. Sin perfilado de IA.
- **CCPA** — Sin venta de datos personales, opciones de exclusión y prácticas de recopilación transparentes.
- **UAE PDPL** — Almacenamiento local si se solicita, controles de acceso estrictos, sin transferencias internacionales sin consentimiento.
- **China DSL/PIPL** — Procesamiento solo en la región, sin enrutamiento extranjero si se selecciona China.

## Lo que Podemos y No Podemos Garantizar

Estamos comprometidos con la honestidad total, no solo con términos legales.

> InterMind **no puede garantizar** cómo los LLMs de terceros o los proveedores de infraestructura procesan los datos una vez que salen de nuestro control.

### NO garantizamos:

- Que OpenAI, Anthropic u otros proveedores de LLM no registren o retengan datos de entrada.
- Que los proveedores de servicios en la nube no tengan acceso a los medios transmitidos a través de sus sistemas (a menos que utilice un enclave seguro o implementación empresarial).
- Que el contenido enviado a un modelo de terceros esté fuera de su alcance de entrenamiento (a menos que exista un contrato privado).

### SÍ garantizamos:

- Siempre sabrá **dónde y cómo** se procesan sus datos.
- Tiene herramientas para **controlar el riesgo** seleccionando su región y modo de cumplimiento.
- InterMind **nunca** almacena ni explota su contenido — ni siquiera temporalmente — sin su consentimiento.

## Modos de Confianza y Niveles de Privacidad

Puede personalizar su sesión según sus necesidades de confidencialidad:

| Modo de Confianza | Interpretación | Transferencia Entre Regiones | Almacenamiento     | Mejor Para                                    |
| ----------------- | -------------- | ---------------------------- | ------------------ | --------------------------------------------- |
| 🔒 Solo Local     | ❌             | ❌                           | ❌                 | Legal, gobierno, revisiones internas          |
| 🔐 Bloqueado por Región | ✅       | ✅ (solo dentro de la zona)  | ❌ o solo sesión   | Salud, finanzas, recursos humanos            |
| 🌐 Flexibilidad Global | ✅        | ✅ (multi-región)            | ✅                 | Soporte, ventas, equipos multinacionales     |

## Lo Que Obtienes de Inmediato

- Uso de LLM específico por región, con transparencia en tiempo real.
- Sin entrenamiento ni perfilado de tu contenido — nunca.
- Cero transmisión de datos si la interpretación está desactivada.
- Almacenamiento de datos opcional, siempre limitado por región.
- Herramientas completas de auditoría y exportación para clientes empresariales.

## Conclusión

> [!note] La privacidad no es una promesa — es una arquitectura.

InterMind no se esconde detrás de garantías vagas. En cambio, te ofrecemos **opciones**, **visibilidad** y **control**.

- Tú eliges tu región.
- Tú eliges tu nivel de interpretación.
- Tú decides qué riesgo estás dispuesto a aceptar — y nosotros te ayudamos a mantener el cumplimiento en todos los niveles.

**InterMind — construido para profesionales, respaldado por el cumplimiento, gobernado por la confianza.**