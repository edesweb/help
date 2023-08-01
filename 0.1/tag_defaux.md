### [DefAux] - Definición de la relación entre un campo y una tabla para un *Select*

**[DefAux]** field | relation_table, field_to_save, fields_to_show | where | order_by

Esta etiqueta está relacionada con la [columna CTL de Fields](tag_fields_3_ctl.md) cuando queremos presentar un [*Select*](tag_radio.md@s-select) al usuario.

Indicando un campo de [Fields], nos permite relacionarlo con otra tabla para rellenar los datos de un *Select*. 

#### field

Campo que queremos relacionar.

#### relation_table

Tabla a relacionar.

#### field_to_save

Campo de la tabla *relation_table* a grabar en la tabla definida en [[DBTable]](tag_dbtable.md) a la que pertenece el campo *field*.

#### fields_to_show

Campo o campos a mostrar en el *Select*.  
Si queremos poner más de un campo los separaremos teniendo en cuenta la función *CONCAT* de SQL, realmente el sistema hará un CONCAT de este parámetro.

Ejemplo:
```
[DefAux] cd_user | user, cd_user, user_name,' ',user_surname

El sistema entenderá:
select cd_user, CONCAT(user_name,' ',user_surname) from user
```

#### where

Filtro a añadir a la búsqueda.

Ejemplo:
```
[DefAux] cd_user | user, cd_user, user_name,' ',user_surname | is_active=1

El sistema entenderá:
select cd_user, CONCAT(user_name,' ',user_surname) from user where is_active=1
```

#### order_by

Ordenación a utilizar.

Ejemplo:
```
[DefAux] cd_user | user, cd_user, user_name,' ',user_surname |  | user_name DESC, user_surname

El sistema entenderá:
select cd_user, CONCAT(user_name,' ',user_surname) from user order by user_name DESC, user_surname
```
