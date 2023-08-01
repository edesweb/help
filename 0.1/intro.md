# INTRODUCCIÓNssss

Es un framework a base de etiquetas (TAGS) para generar formularios de mantenimiento en bases de datos (CRUD).

El framework es _Mobile First_, es decir, está enfocado para priorizar el diseño de formularios y listados en dispositivos móviles por encima de desktops.

#### Modos

La principal característica son los **modos**, estos son las secuencias lógicas de cada uno de los elementos del CRUD.

Por ejemplo, para visualizar un registro en concreto de una tabla de base de datos deberíamos buscar por algún filtro, comprobar si hay registros coincidentes con el filtro, si no se encuentra nada se regresa a la búsqueda, si hay un sólo registro se muestra al usuario y, si hay más de un registro coincidente con la búsqueda se muestra un listado para que el usuario seleccione cual quiere ver.

A cada uno de los pasos en esta secuencia lógica le denominamos _modos_.

#### TAGS

En la ejecución de un formulario intervienen dos partes, por un lado el servidor o backend y por otro el cliente o frontend. En el backend el framework utiliza PHP y en el frontend obviamente un navegador web, ambas partes interactúan entre sí para la correcta resolución de un formulario.

A la hora de generar código fuente, en cada una de las partes existe una secuencia lógica que todos hemos tenido que cumplir cuando hemos realizado formularios _manualmente_.

Por ejemplo en el lado del cliente, antes de enviar los datos del formulario al servidor tenemos que realizar validaciones, cuando los datos llegan al servidor debemos realizar validaciones también, antes de grabar los datos en una tabla debemos sanitizarlos... bien, pues en cada una de estas secuencias lógicas intervienen las TAGS donde parametrizamos, declaramos y definimos la lógica del formulario.

Goblin interpreta estas tags y genera dinámicamente formularios, existiendo tags que se ejecutan en el lado del servidor y otras en el lado del cliente.