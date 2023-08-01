### [Field] - Field
[ver Fields](tag_fields.md)

**[Field]** mode  
`...multiline...`

Declaración de parámetros (columnas) de cada campo del formulario o listado definido en [[Fields]](tag_fields.md)

La etiqueta [Fields] dispone de muchos parámetros pudiendo a veces confundirnos con la ubicación de los datos de cada columna. Con esta etiqueta podemos añadir columnas adicionales a cada campo de la siguiente forma:

```
[Fields] c
	CÓDIGO      | cd_persona    | N.9       | T |   |   | UQ    |   |   | 
    DNI/NIE     | dni           | @DNINIE   | T |   |   | UQ    |   | # | El DNI es obligatorio
	NOMBRE      | nombre        | S20U      | T |   |   | UQ    |   | # | 
	
[Field] * | dni
    ERR="El DNI es obligatorio"
    STL="color:red;"
[Field] * | nombre
    ERR="El NOMBRE es obligatorio"
    PLH="Nombre"
```
