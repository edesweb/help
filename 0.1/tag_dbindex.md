### [DBIndex]

`[DBIndex]  [primaryKey [| message]]`  
`unique = field ; field,field ; ...`  
`checkUniques = true|false`  
`message = Custom error message`

Esta etiqueta sirve para controlar los índices únicos de la tabla definida en [[DBTable]](tag_dbtable.md).

El sistema va a comprobar antes de las grabaciones que no se produzcan conflictos con las claves únicas aquí definidas.

#### primaryKey

Definición de la clave principal de la tabla (opcional). Puede ser un único campo o varios campos separados por coma.

Si no se indica la etiqueta [[DBSerial]](tag_dbserial.md) el sistema utilizará esta primaryKey para saber cómo actualizar los registros.

#### message

En caso de error, mensaje que queremos mostrar al usuario, si no lo definimos el sistema mostrará un mensaje por defecto.

Los siguientes parámetros son opcionales, se indica un parámetro por línea a continuación de la etiqueta:

#### unique

Claves únicas de la tabla que deseamos que se chequeen antes de las grabaciones de datos.  
Poner las claves únicas separadas por punto y coma ( ; ) y los campos de cada clave separados por comas ( , ).

#### checkUniques

Indicamos si deseamos que se chequeen las claves únicas, por defecto se chequean.

#### message

Es el mismo parámetro que el indicado en la misma línea de la etiqueta, se puede poner en uno de los sitios.


Ejemplos
```
[DBTable] usuario
[DBSerial] cd_usuario
[DBIndex] 
    unique = nm_usuario ; email
    checkUniques = true
    message = Usuario duplicado
```

```
[DBTable] provincia
[DBIndex] cd_provincia
    unique = nm_provincia
    checkUniques = true
```
