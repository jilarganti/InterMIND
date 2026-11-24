---
title: "Cómo se construye el sitio web de Mind.com: Una arquitectura Nuxt 4"
description: "Un recorrido técnico por el sitio de marketing de Mind.com — Nuxt 4 SSR, @nuxt/content, i18n, rutas de servidor Nitro y las compensaciones detrás de cada elección."
date: "2025-08-15"
author: "[Jilarganti](https://github.com/jilarganti)"
image: "/blog/iStock-681469612.jpg"
---

# Cómo se construye el sitio web de Mind.com: Una arquitectura Nuxt 4

<img src="/blog/iStock-681469612.jpg" alt="Arquitectura de Mind.com" width="500" align="right" style="padding: 1.5rem"/>

Este es un recorrido por cómo se construye realmente [mind.com](https://mind.com) y por qué tomamos las decisiones que tomamos. Es un sitio de marketing —una superficie de aterrizaje, un blog, páginas legales y un formulario de contacto—, por lo que la parte interesante no es ninguna pieza tecnológica en particular. Es dónde trazamos las líneas: qué se renderiza en el servidor, qué se envía al navegador y qué permanece como un script de tiempo de compilación. Cuando una decisión fue una compensación en lugar de una victoria obvia, así lo indicamos.

El sitio es un paquete en un monorepo pnpm (el repositorio se llama `InterMIND`). Se ejecuta en **Nuxt 4** y se despliega en Vercel. Nada aquí es exótico; el valor reside en la conexión entre las piezas.

## Por qué Nuxt 4 con SSR, no una compilación estática

Un sitio de marketing podría ser una salida puramente estática. En su lugar, renderizamos en el servidor, usando el motor Nitro de Nuxt con el preajuste `vercel`, y las razones son concretas en lugar de aspiracionales.

Tenemos un formulario de contacto que envía datos a un backend, enrutamiento por localización en siete idiomas y contenido que cambia con la suficiente frecuencia como para no querer pensar qué páginas están obsoletas. SSR permite que una única base de código maneje las páginas de marketing, las rutas localizadas y el endpoint del formulario sin tener que añadir un servicio separado a un paquete estático. Nitro compila el servidor en funciones de Vercel en tiempo de compilación, por lo que obtenemos renderizado en el servidor sin necesidad de ejecutar o mantener nuestro propio servidor.

La compensación es honesta: SSR implica un trabajo en tiempo de solicitud que un sitio totalmente estático no tendría. Para un sitio de este tamaño, ese costo es pequeño, y a cambio evitamos los problemas de coordinación de unir un frontend estático a una API separada. Si este fuera un sitio de documentación de 10.000 páginas sin superficie dinámica, la generación estática sería la mejor opción. No lo es, por lo que SSR es la opción ganadora.

## Contenido: @nuxt/content y MDC

El contenido del blog y el legal son archivos Markdown bajo `content/blog/` y `content/legal/`. Usamos **@nuxt/content v3**, que analiza esos archivos en una base de datos local better-sqlite3 en tiempo de compilación y nos permite consultarlos como datos. La forma del frontmatter se valida con esquemas Zod en `content.config.ts`, por lo que una publicación a la que le falte un `title` o tenga una `date` mal formada falla la compilación en lugar de publicarse con errores.

El blog está escrito en **MDC** — Markdown con componentes. Una llamada de atención es `:::tip{title="..."}` en lugar de HTML puro, lo que mantiene el código fuente legible y nos permite controlar la renderización en un solo lugar (el componente `ProseTip`) en lugar de dispersar el marcado por cada publicación.

Mantener el contenido como archivos en el repositorio significa que está versionado, revisado en solicitudes pull y es diferenciable. No hay un CMS separado para iniciar sesión ni una base de datos para respaldar. La limitación es la otra cara de la moneda: la edición requiere un commit, por lo que esto se adapta a un equipo que ya vive en Git, no a un gran equipo editorial no técnico.

## Internacionalización y cómo funciona la traducción

El sitio se entrega en siete idiomas — inglés, español, portugués, francés, alemán, ruso y chino — a través de **@nuxtjs/i18n** con la estrategia `prefix_except_default`. El inglés se sirve desde la raíz; cada otro idioma se encuentra bajo su propio prefijo de ruta. Las cadenas de la interfaz de usuario se encuentran en `app/locales/<code>.json`.

La traducción es un trabajo de dos vías, y mantenemos las vías separadas. Las cadenas de la interfaz de usuario y el contenido son traducidos por dos scripts de Node — `scripts/i18n-translate-ui.ts` y `scripts/i18n-translate-content.ts` — construidos sobre el AI SDK con modelos de Anthropic. Estos se ejecutan como un paso de autoría en tiempo de compilación, no en tiempo de solicitud: un humano los activa, revisa la salida y la sube. Las traducciones son archivos ordinarios en el repositorio como todo lo demás.

Esa es la frontera deliberada. No hay traducción en tiempo de ejecución, ni llamadas a modelos de lenguaje sobre la marcha cuando un visitante carga una página. Las traducciones se generan con antelación y se sirven como rutas localizadas simples, lo que mantiene la renderización predecible y nos permite revisar las pruebas antes de que algo se publique.

## Sistema de diseño: Tailwind v4 y @nuxt/ui

El estilo es **Tailwind CSS v4** con **@nuxt/ui v4** encima. Los nuevos visitantes acceden por defecto al modo oscuro; el fondo de la página es un negro casi puro deliberado, `#0a0b0d`, en lugar de negro puro. Cada página y componente está construido para funcionar tanto en modo claro como oscuro — es una restricción que mantenemos, no una ocurrencia tardía, por lo que nada codifica un color solo para el modo claro.

Apoyarse en @nuxt/ui significa que heredamos componentes accesibles y consistentes en lugar de reconstruir botones, controles de formulario y superposiciones desde cero. El costo es una dependencia cuyas convenciones seguimos en lugar de un sistema totalmente a medida, lo cual para un sitio de marketing es el lado correcto de esa compensación.

## El backend: rutas de servidor Nitro y Pipedrive

El backend es pequeño y reside en el mismo proyecto, como rutas de servidor Nitro bajo `server/`:

- `server/api/submit-form.post.ts` maneja el formulario de contacto.
- `server/api/health.get.ts` es una verificación de estado.
- `server/api/__sitemap__/urls.ts` alimenta el mapa del sitio.
- `server/routes/llms.txt.ts` y `llms-full.txt.ts` sirven resúmenes legibles por máquina para rastreadores de IA.
- `server/middleware/` contiene lógica transversal, incluyendo un manejador 410-gone para URLs retiradas y manejo de audiencia.

Cuando alguien envía el formulario de contacto, el lead va a **Pipedrive** a través de `server/utils/pipedrive.ts`, que crea una persona y un lead. Esa es la única integración de CRM y el único lugar donde van los datos del formulario. No hay cola, ni pipeline de datos, ni almacenamiento de objetos intermedio — el endpoint valida la entrada y llama a una API. Mantenerlo así de directo significa que hay muy poco que pueda fallar y muy poco sobre lo que razonar cuando algo lo hace.

Además, deliberadamente, no hay autenticación de usuario en el sitio de marketing. Es un folleto y un formulario de contacto, no una aplicación; añadir inicio de sesión y sesiones sería una superficie que tendríamos que asegurar sin ningún beneficio.

## Observabilidad: Sentry y PostHog, con control de consentimiento

Ejecutamos dos herramientas de observabilidad, y cumplen funciones diferentes.

**Sentry** (`@sentry/nuxt`) captura errores. Está integrado como un módulo de tiempo de compilación y permanece desactivado en desarrollo, para que el ruido local no lo alcance. Su trabajo es avisarnos cuando algo falla en producción.

**PostHog** (`nuxt-posthog`) maneja la analítica del producto, y su comportamiento respecto al consentimiento es la parte que merece la pena explicar. Comienza **excluido**. El sitio no muestra ningún banner de cookies: para un visitante del Espacio Económico Europeo, el Reino Unido o Suiza, la analítica simplemente permanece desactivada, y para todos los demás `app/plugins/posthog-consent.client.ts` la habilita. El valor por defecto es no rastrear; se activa solo donde no se necesita consentimiento. PostHog cubre la analítica y Sentry cubre los errores — esa es la imagen completa, sin un gestor de etiquetas separado o una capa de analítica de terceros añadida.

## SEO y rastreadores de IA

El SEO es gestionado por `@nuxtjs/sitemap` y `@nuxtjs/robots` para el mapa del sitio y las directivas de robots. Las redirecciones y los encabezados de caché —incluida la larga lista de redirecciones de URLs heredadas que el sitio ha acumulado— residen en `vercel.json`, cerca de donde surten efecto en el edge.

Las rutas `llms.txt` y `llms-full.txt` mencionadas anteriormente son un guiño a cómo se lee la web ahora: proporcionan a los rastreadores de IA un resumen limpio y estructurado del sitio en lugar de dejarlos raspar páginas renderizadas. Es barato de servir y significa que las máquinas que leen el sitio obtienen una versión precisa del mismo.

## Despliegue

Todo se despliega en **Vercel**. El preset `vercel` de Nitro convierte las rutas del servidor en funciones de Vercel y las páginas en salida renderizada por el servidor, por lo que un `git push` se convierte en un despliegue sin una pipeline separada de compilación y envío que mantener. Al estar dentro del monorepo pnpm, mind.com comparte herramientas y disciplina de archivos de bloqueo con los otros paquetes mientras permanece desplegable de forma independiente.

## La estructura

Nada de esto es inusual, y ese es el punto. Nuxt 4 nos proporciona SSR sin ejecutar servidores; @nuxt/content mantiene las publicaciones y páginas legales como archivos revisables; i18n y los scripts de traducción localizan el sitio como un paso de compilación que podemos revisar; un delgado backend de Nitro entrega los leads a Pipedrive; Sentry y PostHog vigilan las fallas y el comportamiento, con la analítica desactivada dondequiera que necesite consentimiento.

El sitio es fácil de entender porque mantuvimos pocas piezas móviles y colocamos cada una donde corresponde. Para un sitio de marketing, lo aburrido y legible supera a lo ingenioso cada vez.
