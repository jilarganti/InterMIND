---
title: Subprocesadores
description: La infraestructura y los proveedores de servicios que InterMIND utiliza para procesar datos personales — el propósito de cada proveedor, la región de procesamiento y las salvaguardias.
updated: "2026-09-02"
---

Para operar InterMIND utilizamos un pequeño conjunto de proveedores de infraestructura y servicios ("subprocesadores"). Esta página enumera cada uno de ellos, qué procesan, dónde y bajo qué salvaguardias. **Operador del Servicio y Entidad Contratante:** Golden Fish LLC (EAU). **Editor y Propietario de la Propiedad Intelectual:** MindMeeting OÜ (EE).

El procesamiento se realiza en la UE por defecto. Cuando la entidad corporativa de un proveedor se encuentra fuera de la UE/EEE, las transferencias están cubiertas por las Cláusulas Contractuales Tipo (CCT) y/o el Marco de Privacidad de Datos UE-EE. UU. (DPF). Actualizamos esta lista cada vez que se añade o elimina un subprocesador.

| Subprocesador | Domicilio de la entidad | Propósito | Datos personales procesados | Ubicación del procesamiento | Salvaguardias |
| --- | --- | --- | --- | --- | --- |
| Vercel Inc. | US | Alojamiento de aplicaciones web, funciones sin servidor, pasarela de IA (proxy) | Todo el tráfico de la aplicación, incluida la metadata de reuniones, chat | Funciones fijadas en Frankfurt (fra1); la pasarela de IA tiene una política de retención de datos cero (sin retención de prompts) | DPA + SCCs; ZDR |
| Fly.io Inc. | US | Alojamiento de servidor WebSocket en tiempo real | Distribución de chat, eventos de conferencia, palabras de transcripción en tránsito | Paris (CDG) | DPA + SCCs |
| Neon Inc. | US | Postgres (base de datos principal) | Cuentas, reuniones, mensajes, transcripciones, uso de facturación | Frankfurt (AWS eu-central-1) | DPA + SCCs; cifrado en reposo |
| Tigris Data Inc. | US | Almacenamiento de objetos | Grabaciones de reuniones, adjuntos de chat, documentos, archivos de exportación | EU multi-region (Frankfurt + Amsterdam) | DPA; TLS |
| MindMeeting OÜ (Mind API) | EE | Medios de reunión (SFU), reconocimiento de voz, traducción en tiempo real | Flujos de audio/video, voz, nombres/roles de los participantes | OVH, France | Acuerdo intragrupal |
| Mistral AI SAS | FR | Resumen de IA posterior a la reunión | Transcripción de la reunión (una vez, al finalizar la reunión) | EU | DPA; retención de datos cero; no se entrena con datos de API de pago |
| DeepL SE | DE | Traducción de documentos | Contenido de los documentos que los usuarios envían para traducción | EU (Cologne) | DPA; sin retención para entrenamiento |
| Stripe Payments Europe Ltd / Stripe Inc. | IE / US | Facturación | Nombre, correo electrónico, dirección de facturación, método de pago (la tarjeta nunca toca InterMIND) | EU / US | DPA + SCCs; PCI-DSS |
| PostHog | US (EU Cloud) | Análisis de producto, repetición de sesión | Eventos de uso, consola/repetición (requiere consentimiento, exclusión voluntaria por defecto; el habla de la reunión se elimina de los registros) | EU (eu.posthog.com) | DPA; residencia en la UE |
| Functional Software Inc. (Sentry) | US (EU region) | Monitoreo de errores | Rastros de errores, migas de pan (sin contenido de reunión) | EU (de.sentry.io) | DPA; residencia en la UE |
| Resend | US | Correo electrónico transaccional (códigos de inicio de sesión, notificaciones) | Correo electrónico del destinatario, contenido del mensaje | Ireland (eu-west-1) | DPA + SCCs |
| Upstash Inc. | US | Caché de sesión OIDC (Redis) | Caché de sesión/token cifrado | Frankfurt (fra1) | DPA + SCCs; cargas útiles cifradas |
| Pipedrive OÜ | EE | CRM de ventas (formularios de contacto / socios) | Nombre del prospecto, correo electrónico, empresa, mensaje | EU | DPA |
| Google LLC / Microsoft Corp. | US | Solo inicio de sesión OAuth | Nombre, correo electrónico, foto de perfil (ámbitos OAuth estándar) | US | DPF / SCCs |

Para preguntas sobre esta lista o para solicitar una copia de las salvaguardias de transferencia relevantes, contacte a privacy@mind.com.
