# Roles de usuario

InterMIND delinea cuatro roles de usuario distintos, cada uno meticulosamente diseñado para mejorar las experiencias de reuniones seguras, colaborativas y adaptables. El rol de Anfitrión está dotado del más alto nivel de autoridad, mientras que los otros roles ofrecen diferentes niveles de interacción.

## Anfitrión

El Anfitrión es responsable de iniciar la reunión y posee privilegios administrativos completos.

**Capacidades principales:**

- Iniciar y finalizar reuniones
- Silenciar a cualquier participante
- Promover o degradar moderadores
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Moderador
- Remover a cualquier participante de la llamada
- Admitir o denegar invitados
- Acceder al historial de reuniones
- Utilizar cualquier función de IA
- Ajustar configuraciones personales, diseño, desenfoque y opciones de vista

## Moderador

Los moderadores son designados por el Anfitrión para ayudar a gestionar la sesión de manera efectiva.

**Habilidades principales:**

- Silenciar a cualquier participante
- Iniciar y detener grabaciones
  - Esto incluye cualquier grabación iniciada por el Anfitrión
- Admitir o denegar invitados
- Remover a cualquier participante de la llamada, excepto al Anfitrión
- Usar el Traductor de Voz en Línea y cambiar idioma (para su propio audio)
- Usar el Asistente de IA (para su propia vista)
- Participar en el chat, levantar o bajar las manos
- Acceder a transcripciones e historial de reuniones
- Promover o degradar a otros moderadores

## Participante (Usuario Autorizado)

Los participantes autorizados son usuarios que han iniciado sesión y se unen a la reunión sin privilegios especiales.

**Capacidades principales:**

- Silenciar o activar su propio micrófono
- Habilitar o deshabilitar su propia cámara
- Compartir su pantalla (navegador de escritorio)
- Usar el Asistente de IA (para su propia vista)
- Usar el Traductor de Voz en Línea y cambiar idioma (para su propio audio)
- Modificar diseño personal y configuraciones
- Acceder al chat, levantar la mano, transcripciones e historial de reuniones

## Invitado (Usuario Anónimo)

Los invitados son usuarios que se unen a la reunión sin iniciar sesión.

**Capacidades Principales:**

- Usar su propio micrófono y cámara
- Compartir su pantalla (navegador de escritorio)
- Usar el Traductor de Voz en Línea y cambiar idioma (para su propio audio)
- Utilizar opciones de diseño y visualización (solo personal)
- Participar en el chat y levantar la mano

> [!WARNING]
> Los invitados no pueden gestionar otros participantes.

## Tabla resumen de permisos por rol

| Función                        | Anfitrión | Moderador | Participante | Invitado |
| ------------------------------ | --------- | --------- | ------------ | -------- |
| Iniciar reunión                | ✅        | ❌        | ❌           | ❌       |
| Silenciar cualquier participante | ✅        | ✅        | ❌           | ❌       |
| Activar audio de cualquier participante | ❌        | ❌        | ❌           | ❌       |
| Silenciar/Activar propio micrófono | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar propia cámara | ✅        | ✅        | ✅           | ✅       |
| Iniciar/Detener grabación      | ✅        | ✅        | ❌           | ❌       |
| Compartir pantalla (escritorio) | ✅        | ✅        | ✅           | ✅       |
| Usar asistente de IA           | ✅        | ✅        | ✅           | ❌       |
| Usar traducción en línea       | ✅        | ✅        | ✅           | ✅       |
| Cambiar idioma de traducción   | ✅        | ✅        | ✅           | ✅       |
| Levantar / Bajar la mano       | ✅/✅     | ✅/✅     | ✅/❌        | ✅/❌    |
| Cambiar diseño / Configuración | ✅        | ✅        | ✅           | ✅       |
| Activar/Desactivar desenfoque de fondo | ✅        | ✅        | ✅           | ✅       |
| Admitir/Rechazar invitado      | ✅        | ✅        | ❌           | ❌       |
| Acceder al historial de reuniones | ✅        | ✅        | ✅           | ❌       |
| Remover participantes          | ✅        | ✅        | ❌           | ❌       |
| Promover/Degradar moderador    | ✅        | ✅        | ❌           | ❌       |