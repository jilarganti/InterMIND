# Roles de Usuario

iMind Meeting define cuatro roles de usuario distintos, cada uno meticulosamente diseñado para mejorar experiencias de reuniones seguras, colaborativas y adaptables. El rol de Anfitrión está dotado del más alto nivel de autoridad, mientras que los otros roles ofrecen diferentes niveles de interacción.

## Anfitrión

El Anfitrión es responsable de iniciar la reunión y posee privilegios administrativos completos.

**Capacidades principales:**

- Iniciar y finalizar reuniones
- Silenciar a cualquier participante
- Promover o degradar moderadores
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Moderador
- Eliminar a cualquier participante de la llamada
- Activar o desactivar el asistente de voz (Jarvis)
- Admitir o denegar invitados
- Acceder al historial de reuniones
- Utilizar cualquier función de IA
- Ajustar la configuración personal, diseño, desenfoque y opciones de visualización

## Moderador

Los moderadores son designados por el Anfitrión para ayudar a gestionar la sesión de manera efectiva.

**Capacidades principales:**

- Silenciar a cualquier participante
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Anfitrión
- Activar o desactivar el asistente de voz (Jarvis)
- Admitir o denegar invitados
- Eliminar a cualquier participante de la llamada, excepto al Anfitrión
- Usar el Traductor de Voz en Línea y cambiar el idioma (para su propio audio)
- Usar el Asistente de IA (para su propia vista)
- Participar en el chat, levantar o bajar la mano
- Acceder a transcripciones e historial de reuniones
- Promover o degradar a otros moderadores

## Participante (Usuario Autorizado)

Los participantes autorizados son usuarios que han iniciado sesión y se unen a la reunión sin privilegios especiales.

**Capacidades Principales:**

- Activar o desactivar su propio micrófono
- Activar o desactivar su propia cámara
- Compartir su pantalla (navegador de escritorio)
- Comunicarse con el Asistente de Voz AI
  - Siempre que haya sido habilitado por el Anfitrión o Moderador
- Usar el Asistente AI (para su propia vista)
- Usar el Traductor de Voz en Línea y cambiar el idioma (para su propio audio)
- Modificar el diseño y configuración personal
- Acceder al chat, levantar la mano, transcripciones e historial de reuniones

## Invitado (Usuario Anónimo)

Los invitados son usuarios que se unen a la reunión sin iniciar sesión.

**Capacidades principales:**

- Usar su propio micrófono y cámara
- Compartir su pantalla (navegador de escritorio)
- Usar el Traductor de Voz en Línea y cambiar el idioma (para su propio audio)
- Utilizar opciones de diseño y visualización (solo personales)
- Participar en el chat y levantar la mano

> [!WARNING]
> Los invitados no pueden acceder a ninguna función de IA, ver transcripciones ni gestionar otros participantes.

## Resumen de Permisos por Rol

| Función                           | Anfitrión | Moderador | Participante | Invitado |
| -------------------------------- | --------- | --------- | ------------ | -------- |
| Iniciar Reunión                   | ✅        | ❌        | ❌           | ❌       |
| Silenciar Cualquier Participante  | ✅        | ✅        | ❌           | ❌       |
| Activar Audio de Cualquier Participante | ❌  | ❌        | ❌           | ❌       |
| Activar/Desactivar Propio Micrófono | ✅     | ✅        | ✅           | ✅       |
| Activar/Desactivar Propia Cámara  | ✅        | ✅        | ✅           | ✅       |
| Iniciar/Detener Grabación         | ✅        | ✅        | ❌           | ❌       |
| Compartir Pantalla (Escritorio)    | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar Asistente de Voz | ✅      | ✅        | ❌           | ❌       |
| Usar Asistente IA                 | ✅        | ✅        | ✅           | ❌       |
| Usar Traducción en Línea          | ✅        | ✅        | ✅           | ✅       |
| Cambiar Idioma de Traducción      | ✅        | ✅        | ✅           | ✅       |
| Levantar / Bajar Mano             | ✅/✅     | ✅/✅     | ✅/❌        | ✅/❌    |
| Ver Transcripción                 | ✅        | ✅        | ✅           | ❌       |
| Cambiar Diseño / Configuración    | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar Desenfoque de Fondo | ✅   | ✅        | ✅           | ✅       |
| Admitir/Denegar Invitado          | ✅        | ✅        | ❌           | ❌       |
| Acceder al Historial de Reuniones | ✅        | ✅        | ✅           | ❌       |
| Eliminar Participantes            | ✅        | ✅        | ❌           | ❌       |
| Promover/Degradar Moderador       | ✅        | ✅        | ❌           | ❌       |