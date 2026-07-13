---
title: "Cómo se construye el sitio web de Mind.com: Una arquitectura Nuxt 4"
description: "Un recorrido técnico por el sitio de marketing de Mind.com: Nuxt 4 SSR, @nuxt/content, i18n, rutas de servidor Nitro y las compensaciones detrás de cada elección."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Cómo se construye el sitio web de Mind.com: Una arquitectura Nuxt 4

<img src="/blog/iStock-681469612.jpg" alt="Arquitectura de Mind.com" width="500" align="right" style="padding: 1.5rem"/>

Este es un recorrido por cómo se construye [mind.com](https://mind.com) y por qué tomamos las decisiones que tomamos. Es un sitio de marketing — una superficie de aterrizaje, un blog, páginas legales y un formulario de contacto — por lo que la parte interesante no es ninguna pieza tecnológica en particular. Es dónde trazamos las líneas: qué se renderiza en el servidor, qué se envía al navegador y qué permanece como un script de tiempo de compilación. Cuando una decisión fue una compensación en lugar de una victoria obvia, lo decimos.

El sitio es un paquete dentro de un monorepo pnpm (el repositorio se llama `InterMIND`). Se ejecuta en **Nuxt 4** y se despliega en Vercel. Nada aquí es exótico; el valor reside en el ajuste entre las piezas.

## Por qué Nuxt 4 con SSR, no una compilación estática

Un sitio de marketing podría ser una salida puramente estática. En cambio, renderizamos en el servidor, utilizando el motor Nitro de Nuxt con el preajuste `vercel`, y las razones son concretas en lugar de aspiracionales.

Tenemos un formulario de contacto que publica datos en un backend, enrutamiento por idioma a través de siete lenguajes y contenido que cambia con la suficiente frecuencia como para no querer pensar qué páginas están desactualizadas. SSR permite que una única base de código maneje las páginas de marketing, las rutas localizadas y el punto final del formulario sin tener que adjuntar un servicio separado a un paquete estático. Nitro compila el servidor en funciones de Vercel en tiempo de compilación, por lo que obtenemos renderizado en el servidor sin tener que ejecutar o mantener nuestro propio servidor.

La compensación es honesta: SSR significa que hay trabajo en tiempo de solicitud que un sitio completamente estático no tendría. Para un sitio de este tamaño, ese costo es pequeño, y a cambio evitamos los problemas de coordinación de unir un frontend estático a una API separada. Si este fuera un sitio de documentación de 10,000 páginas sin superficie dinámica, la generación estática sería la mejor opción. No lo es, así que SSR gana.

## Contenido: @nuxt/content y MDC

El contenido del blog y el legal son archivos Markdown bajo `content/blog/` y `content/legal/`. Usamos **@nuxt/content v3**, que analiza esos archivos en una base de datos local better-sqlite3 en tiempo de compilación y nos permite consultarlos como datos. La forma del frontmatter se valida con esquemas Zod en `content.config.ts`, por lo que una publicación a la que le falte un `title` o con una `date` malformada falla la compilación en lugar de desplegarse rota.

El blog está escrito en **MDC** — Markdown con componentes. Una llamada es `:::tip{title="..."}` en lugar de HTML puro, lo que mantiene la fuente legible y nos permite controlar el renderizado en un solo lugar (el componente `ProseTip`) en lugar de dispersar el marcado en cada publicación.

Mantener el contenido como archivos en el repositorio significa que está versionado, revisado en solicitudes de extracción (pull requests) y es susceptible de comparación (diffable). No hay un CMS separado al que iniciar sesión ni una base de datos de la que hacer copias de seguridad. El límite es la otra cara de la moneda: la edición requiere un commit, por lo que esto se adapta a un equipo que ya vive en Git, no a un gran equipo editorial no técnico.

## Internacionalización y cómo funciona la traducción

El sitio se entrega en siete idiomas — inglés, español, portugués, francés, alemán, ruso y chino — a través de **@nuxtjs/i18n** con la estrategia `prefix_except_default`. El inglés se sirve desde la raíz; cada otra configuración regional se encuentra bajo su propio prefijo de ruta. Las cadenas de la interfaz de usuario viven en `app/locales/<code>.json`.

La traducción es un trabajo de dos vías, y mantenemos las vías separadas. Las cadenas de la interfaz de usuario y el contenido son traducidos por dos scripts de Node — `scripts/i18n-translate-ui.ts` y `scripts/i18n-translate-content.ts` — construidos sobre el AI SDK con modelos Anthropic. Estos se ejecutan como un paso de autoría en tiempo de compilación, no en tiempo de solicitud: un humano los activa, revisa la salida y la envía (commits). Las traducciones son archivos ordinarios en el repositorio como todo lo demás.

Esa es la frontera deliberada. No hay traducción en tiempo de ejecución, ni llamada al modelo de lenguaje sobre la marcha cuando un visitante carga una página. Las traducciones se generan con anticipación y se sirven como rutas localizadas simples, lo que mantiene la renderización predecible y nos permite corregir antes de que algo se publique.

## Sistema de diseño: Tailwind v4 y @nuxt/ui

El estilo es **Tailwind CSS v4** con **@nuxt/ui v4** encima. Los nuevos visitantes acceden al modo oscuro por defecto; el fondo de la página es un negro casi puro deliberado, `#0a0b0d`, en lugar de un negro puro. Cada página y componente está construido para funcionar tanto en modo claro como oscuro — esa es una restricción que mantenemos, no una ocurrencia tardía, por lo que nada codifica un color solo para el modo claro.

Apoyarse en @nuxt/ui significa que heredamos componentes accesibles y consistentes en lugar de reconstruir botones, controles de formulario y superposiciones desde cero. El costo es una dependencia cuyas convenciones seguimos en lugar de un sistema completamente a medida, lo cual para un sitio de marketing es el lado correcto de esa compensación.

## El backend: rutas del servidor Nitro y Pipedrive

El backend es pequeño y reside en el mismo proyecto, como rutas del servidor Nitro bajo `server/`:

- `server/api/submit-form.post.ts` maneja el formulario de contacto.
- `server/api/health.get.ts` es una verificación de estado.
- `server/api/__sitemap__/urls.ts` alimenta el mapa del sitio.
- `server/routes/llms.txt.ts` y `llms-full.txt.ts` sirven resúmenes legibles por máquina para rastreadores de IA.
- `server/middleware/` contiene lógica transversal, incluyendo un manejador 410-gone para URLs retiradas y manejo de audiencia.

Cuando alguien envía el formulario de contacto, el lead se envía a **Pipedrive** a través de `server/utils/pipedrive.ts`, que crea una persona y un lead. Esa es la única integración con CRM y el único lugar al que van los datos del formulario. No hay cola, no hay pipeline de datos, no hay almacenamiento de objetos intermedio — el endpoint valida la entrada y llama a una API. Mantenerlo tan directo significa que hay muy poco que pueda fallar y muy poco sobre lo que haya que razonar cuando algo lo hace.

Además, deliberadamente, no hay autenticación de usuario en el sitio de marketing. Es un folleto y un formulario de contacto, no una aplicación; añadir inicio de sesión y sesiones sería una superficie que tendríamos que asegurar sin ningún beneficio.

## Observabilidad: Sentry y PostHog, con control de consentimiento

Ejecutamos dos herramientas de observabilidad, y cumplen funciones diferentes.

**Sentry** (`@sentry/nuxt`) captura errores. Está conectado como un módulo en tiempo de compilación y permanece desactivado en desarrollo, para que el ruido local no lo alcance. Su trabajo es avisarnos cuando algo falla en producción.

**PostHog** (`nuxt-posthog`) gestiona la analítica de producto, y su comportamiento en torno al consentimiento es la parte que vale la pena explicar. Comienza **excluido (opted out)**. No se captura nada hasta que la plataforma de consentimiento Usercentrics otorga permiso, momento en el cual `app/plugins/posthog-consent.client.ts` lo habilita. El valor predeterminado es no rastrear; el consentimiento lo activa, no al revés. PostHog cubre la analítica y Sentry cubre los errores — esa es la imagen completa, sin un gestor de etiquetas separado o una capa de analítica de terceros añadida.

## SEO y rastreadores de IA

El SEO es gestionado por `@nuxtjs/sitemap` y `@nuxtjs/robots` para el mapa del sitio y las directivas de robots. Las redirecciones y los encabezados de caché — incluida la larga lista de redirecciones de URL heredadas que el sitio ha acumulado — residen en `vercel.json`, cerca de donde surten efecto en el borde.

Las rutas `llms.txt` y `llms-full.txt` mencionadas anteriormente son un guiño a cómo se lee la web ahora: proporcionan a los rastreadores de IA un resumen limpio y estructurado del sitio en lugar de dejar que raspen páginas renderizadas. Es económico de servir y significa que las máquinas que leen el sitio obtienen una versión precisa del mismo.

## Despliegue

Todo se despliega en **Vercel**. El preajuste `vercel` de Nitro convierte las rutas del servidor en funciones de Vercel y las páginas en una salida renderizada por el servidor, por lo que un `git push` se convierte en un despliegue sin una pipeline de compilación y envío separada que mantener. Al estar dentro del monorepo pnpm, mind.com comparte herramientas y la disciplina del archivo de bloqueo con los otros paquetes, mientras sigue siendo desplegable de forma independiente.

## Su forma

Nada de esto es inusual, y ese es el punto. Nuxt 4 nos proporciona SSR sin ejecutar servidores; @nuxt/content mantiene las publicaciones y páginas legales como archivos revisables; i18n y los scripts de traducción localizan el sitio como un paso de compilación que podemos corregir; un backend Nitro delgado entrega leads a Pipedrive; Sentry y PostHog vigilan fallos y comportamientos, con la analítica desactivada hasta que el consentimiento indique lo contrario.

El sitio es fácil de entender porque mantuvimos pocas partes móviles y colocamos cada una donde le corresponde. Para un sitio de marketing, lo aburrido y legible siempre supera a lo ingenioso.
