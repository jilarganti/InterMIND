---
title: Roles de usuario
description: Comprende los roles de usuario de InterMIND - Anfitrión, Moderador, Participante e Invitado. Conoce los permisos y capacidades de cada rol.
---

# Roles de usuario

InterMIND define cuatro roles de usuario distintos, cada uno meticulosamente diseñado para mejorar las experiencias de reuniones seguras, colaborativas y adaptables. El rol de Anfitrión está dotado del más alto nivel de autoridad, mientras que los otros roles ofrecen diferentes niveles de interacción.

## Anfitrión

El Anfitrión es responsable de iniciar la reunión y posee privilegios administrativos completos. Aprende cómo [crear reuniones](./creating-meetings).

**Capacidades Principales:**

- Iniciar y finalizar reuniones
- Silenciar cualquier participante
- Promover o degradar moderadores
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Moderador
- Remover cualquier participante de la llamada
- Admitir o denegar invitados
- Acceder al [historial de reuniones](./meeting-history)
- Utilizar cualquier [función de IA](./ai-features)
- Ajustar configuraciones personales, diseño, desenfoque y opciones de vista (ver [Interfaz de Reunión](./meeting-interface))

## Moderador

Los moderadores son designados por el Anfitrión para ayudar a gestionar la sesión de manera efectiva.

**Habilidades Clave:**

- Silenciar a cualquier participante
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Anfitrión
- Admitir o denegar invitados
- Remover a cualquier participante de la llamada, excepto al Anfitrión
- Usar el [Traductor de Voz en Línea](./ai-features#online-voice-translation) y cambiar idioma (para su propio audio)
- Usar el [Asistente de IA](./ai-features#ai-assistant) (para su propia vista)
- Participar en el chat, levantar o bajar la mano
- Acceder a transcripciones e [historial de reuniones](./meeting-history)
- Promover o degradar a otros moderadores

## Participante (Usuario Autorizado)

Los participantes autorizados son usuarios con sesión iniciada que se unen a la reunión sin privilegios especiales.

**Capacidades Principales:**

- Silenciar o activar su propio micrófono
- Habilitar o deshabilitar su propia cámara
- Compartir su pantalla (navegador de escritorio)
- Usar el [Asistente de IA](./ai-features#ai-assistant) (para su propia vista)
- Usar el [Traductor de Voz en Línea](./ai-features#online-voice-translation) y cambiar idioma (para su propio audio)
- Modificar diseño personal y configuraciones
- Acceder al chat, levantar la mano, transcripciones e [historial de reuniones](./meeting-history)

## Invitado (Usuario Anónimo)

Los invitados son usuarios que se unen a la reunión sin iniciar sesión.

**Capacidades Principales:**

- Usar su propio micrófono y cámara
- Compartir su pantalla (navegador de escritorio)
- Usar el [Traductor de Voz en Línea](./ai-features#online-voice-translation) y cambiar idioma (para su propio audio)
- Utilizar opciones de diseño y visualización (solo personal)
- Participar en el chat y levantar la mano

> [!WARNING]
> Los invitados no pueden gestionar otros participantes.

## Tabla Resumen de Permisos por Rol

| Función                        | Anfitrión | Moderador | Participante | Invitado |
| ------------------------------ | --------- | --------- | ------------ | -------- |
| Iniciar Reunión                | ✅        | ❌        | ❌           | ❌       |
| Silenciar Cualquier Participante | ✅        | ✅        | ❌           | ❌       |
| Activar Audio de Cualquier Participante | ❌        | ❌        | ❌           | ❌       |
| Silenciar/Activar Propio Micrófono | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar Propia Cámara | ✅        | ✅        | ✅           | ✅       |
| Iniciar/Detener Grabación     | ✅        | ✅        | ❌           | ❌       |
| Compartir Pantalla (Escritorio) | ✅        | ✅        | ✅           | ✅       |
| Usar Asistente IA              | ✅        | ✅        | ✅           | ❌       |
| Usar Traducción en Línea       | ✅        | ✅        | ✅           | ✅       |
| Cambiar Idioma de Traducción   | ✅        | ✅        | ✅           | ✅       |
| Levantar / Bajar Mano          | ✅/✅     | ✅/✅     | ✅/❌        | ✅/❌    |
| Cambiar Diseño / Configuración | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar Difuminado de Fondo | ✅        | ✅        | ✅           | ✅       |
| Admitir/Rechazar Invitado      | ✅        | ✅        | ❌           | ❌       |
| Acceder al Historial de Reuniones | ✅        | ✅        | ✅           | ❌       |
| Remover Participantes          | ✅        | ✅        | ❌           | ❌       |
| Promover/Degradar Moderador    | ✅        | ✅        | ❌           | ❌       |