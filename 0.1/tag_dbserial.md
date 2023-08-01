### [DBSerial]

`[DBSerial] field`

Indica la *Primary Key* de la tabla especificada en [[DBTable]](tag_dbtable.md).

Este dato es relevante para Goblin en el sentido de poder actualizar datos de un registro determinado o en la selección de un registro en un listado. Normalmente se trata de un campo serial o autoincremental.

El campo no será editable en modificaciones, pero sí en altas, si no deseamos que sea editable en altas le pondremos oculto o de salida.

Si esta etiqueta no está presente el sistema utilizará el parámetro *primaryKey* de la etiqueta [[DBIndex]](tag_dbindex.md) para saber cómo actualizar los registros.


Ejemplo
```
[DBTable] usuario
[DBSerial] cd_usuario

>> no modificable en Modificaciones
[Fields] uR
    Código usuario | cd_usuario | N.9 | T |   |   | U    |   |   |

>> campo oculto en Altas
[Fields] c
    Código usuario | cd_usuario | N.9 | T |   |   | *U   |   |   |

>>> campo no editable en Altas
[Fields] c
    Código usuario | cd_usuario | N.9 | T |   |   | -U   |   |   |
```
