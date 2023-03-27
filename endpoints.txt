//Endpoints:

Información de la organización:
GET /organization: para obtener información general sobre la ONG.
GET /team: para obtener información sobre el equipo de liderazgo de AfricaNdoto.
Proyectos:
GET /projects: para obtener una lista de todos los proyectos actuales y pasados de AfricaNdoto.
GET /projects/{id}: para obtener información detallada sobre un proyecto específico, identificado por su ID.
GET /projects/{id}/volunteer: para identificar el número de voluntarios por proyecto y así poder reasignar o distribuir mejor las labores a realizar.

Donaciones:
GET /doners/: para obtener una lista de todos los donantesg.
GET /doners/{id}: para obtener una lista de los donantes por ID.
GET /donations: para obtener una lista de todas las donaciones recibidas por AfricaNdoto.
GET /donations/{id}: para obtener información detallada sobre una donación específica, identificada por su ID.

Voluntarios:
GET /volunteer: para obtener una lista de todo los voluntarios, así como su rol de voluntariado.
Get /volunteer/{id}/projects/: para obtener información detallada de un voluntario concreto, así como su rol y proyecto en el que participa.

Eventos:
GET /events: para obtener una lista de todos los eventos organizados por AfricaNdoto.
GET /events/{id}: para obtener información detallada sobre un evento específico, identificado por su ID.

Voluntariado:
GET /volunteering: para obtener una lista de todas las oportunidades de voluntariado disponibles en AfricaNdoto(aclarar si el voluntario tiene un rol activo en la organizzación o simplemente dona dinero).
GET /volunteering/{id}: para obtener información detallada sobre una oportunidad de voluntariado específica, identificada por su ID.

Programas y servicios:
GET /programs: para obtener una lista de todos los programas y servicios ofrecidos por AfricaNdoto, como programas educativos, servicios de salud y apoyo comunitario.
GET /programs/{id}: para obtener información detallada sobre un programa o servicio específico, identificado por su ID.

Autenticación:
POST /auth/signup: método para registrarnos en la organización.
POST /auth/login: método para logearnos en la web de AfricaNdoto y disponer de los servicios que nos ofrezca la web.

Proposiciones:
GET /proposals: para obtener una lista de las propuestas hechas por los voluntarios y/o donantes.
GET /volunteer/{id}/proposal: para obtener una lista de las proposiciones hechas por los donantes y/o voluntarios.
