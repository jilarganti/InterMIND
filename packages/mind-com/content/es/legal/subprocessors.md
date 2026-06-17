---
title: Subencargados del tratamiento
description: Los proveedores de infraestructura y servicios que InterMIND utiliza para procesar datos personales — el propósito, la región de procesamiento y las salvaguardias de cada proveedor.
updated: "2026-06-17"
---

Para operar InterMIND, utilizamos un pequeño conjunto de proveedores de infraestructura y servicios ("subencargados del tratamiento"). Esta página enumera a cada uno, qué procesa, dónde y bajo qué salvaguardias. **Operador del Servicio y Entidad Contratante:** Golden Fish CSP LLC (EAU). **Editor y Propietario de la Propiedad Intelectual:** MindMeeting OÜ (EE).

El procesamiento se realiza en la UE por defecto. Cuando la entidad corporativa de un proveedor se encuentra fuera de la UE/EEE, las transferencias están cubiertas por las Cláusulas Contractuales Estándar (CCE) y/o el Marco de Privacidad de Datos UE-EE. UU. (DPF). Actualizamos esta lista cada vez que se añade o elimina un subencargado del tratamiento.

| Subencargado del tratamiento | Domicilio de la entidad | Propósito | Datos personales procesados | Ubicación de procesamiento | Salvaguardias |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Alojamiento de aplicaciones web, funciones sin servidor, AI Gateway (proxy) | Todo el tráfico de la aplicación, incluidos los metadatos de las reuniones, chat | Funciones fijadas en Fráncfort (fra1); AI Gateway tiene una política de retención de datos cero (sin retención de prompts) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Alojamiento de servidor WebSocket en tiempo real | Distribución de chat, eventos de conferencia, palabras de transcripción en tránsito | París (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (base de datos principal) | Cuentas, reuniones, mensajes, transcripciones, uso de facturación | Fráncfort (AWS eu-central-1) | DPA + SCCs; cifrado en reposo |
| Tigris Data Inc. | US | Almacenamiento de objetos | Grabaciones de reuniones, archivos adjuntos de chat, documentos, archivos de exportación | Multi-región de la UE (Fráncfort + Ámsterdam) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Medios de reunión (SFU), reconocimiento de voz, traducción en tiempo real | Flujos de audio/video, voz, nombres/roles de los participantes | OVH, Francia | Acuerdo intragrupo |
| Mistral AI SAS | FR | Resumen de IA posterior a la reunión | Transcripción de la reunión (una vez, al finalizar la reunión) | EU | DPA; retención de datos cero; sin entrenamiento con datos de API de pago |
| DeepL SE | DE | Traducción de documentos | Contenido de los documentos que los usuarios envían para su traducción | EU (Colonia) | DPA; sin retención para entrenamiento |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Facturación | Nombre, correo electrónico, dirección de facturación, método de pago (la tarjeta nunca toca InterMIND) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Análisis de producto, reproducción de sesiones | Eventos de uso, consola/reproducción (con consentimiento, exclusión voluntaria por defecto; el discurso de la reunión se elimina de los registros) | EU (eu.posthog.com) | DPA; residencia en la UE |
| Functional Software Inc. (Sentry) | US (EU region) | Monitorización de errores | Rastros de error, migas de pan (sin contenido de reunión) | EU (de.sentry.io) | DPA; residencia en la UE |
| Resend | US | Correo electrónico transaccional (códigos de inicio de sesión, notificaciones) | Correo electrónico del destinatario, contenido del mensaje | Irlanda (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | Caché de sesión OIDC (Redis) | Caché de sesión/token cifrado | Fráncfort (fra1) | DPA + SCCs; cargas útiles cifradas |
| Pipedrive OÜ | EE | CRM de ventas (formularios de contacto / socios) | Nombre del lead, correo electrónico, empresa, mensaje | EU | DPA |
| Google LLC / Microsoft Corp. | US | Solo inicio de sesión OAuth | Nombre, correo electrónico, foto de perfil (ámbitos OAuth estándar) | US | DPF / SCCs |

Para preguntas sobre esta lista o para solicitar una copia de las salvaguardias de transferencia relevantes, contacte con privacy@mind.com.
