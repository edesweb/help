##DBSqlReplace

**[DBSqlReplace] [>tag:Mode]**
<br>...<br>código php<br>...

En los listados permite reemplazar la sentencia SQL a ejecutar, el sistema sigue teniendo el control del listado.

En el código php de esta etiqueta están disponibles las siguientes variables globales:

- **\_SQL\_** sentencia SQL propuesta por el sistema
- **_DBTABLE** tabla propuesta por el sistema
- **_SERIAL** campo clave de la tabla
- **_DBJOINS** joins propuestos por el sistema (si es que hubiera alguno)
- **_DBWHERE** filtro propuesto por el sistema
- **_DBORDERBY** ordenación propuesta por el sistema
- **_DBLIMIT** cantidad e registros propuesto por el sistema

Se puede modificar la variable \_SQL\_, ésta es la que el sistema ejecutará a continuación.

Hay que tener en cuenta que cuando se utiliza esta etiqueta el sistema sí proporciona el paginado de registros.

####Ejemplos

```
[Fields] l
	Cod.Auto	| cd_auto	| 0  | T  | 2   |  | *  |    |   | 
	Nom.Auto	| nm_auto	| N  | T  | 45  |  | M  |    |   | 

[DBSqlReplace] l

	$GLOBALS['_SQL_'] = "select * from auto where nm_auto like 'a%'";

