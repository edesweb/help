##DefAux

**[DefAux]** Field | RelationTable, FieldToSave, FieldToShow [ | orderby ]

Con esta etiqueta definimos la composición de un campo tipo [>tag:field_ctl](Select), es decir, qué se muestra en el desplegable y qué dato se graba en el campo Fields.
Llevado a HTML sería la forma de definir las etiquetas OPTION de un SELECT de una forma automática desde una tabla de la base de datos.

Esta etiqueta puede funcionar conjuntamente con [>tag:whereselect]([WhereSelect]) para filtrar los datos que se muestran en el desplegable.

- - -

####Parámetros

**Field**:
	Campo de la etiqueta [>tag:fields](Fields)

**RelationTable**:
	Tabla que contiene los datos.
    
**FieldToSave**:
	Campo de la tabla *RelationTable* que se va a almacenar en el campo *Field*
    
**FieldToShow**:
	Campo o campos de la tabla *RelationTable* a mostrar en el desplegable del Select.
    Si deseamos mostrar más de un campo simplemente los separaremos con comas.
    
**orderby**:
	Orden que deseamos en el select. Pondremos el campo o campos de la tabla *RelationTable* con la misma sintáxis que la cláusula WHERE de SQL. Si se omite este parámetro no se hará ninguna ordenación.

- - -

####Ejemplos

```
[DBTable] personas
[DefAux] cd_pais | paises, cd_pais, nm_pais | nm_pais
[Fields]
    País	| cd_pais_persona	| 0 | S  | 2	|    | M   |	|     | 
```

En el ejemplo tenemos un listado o una ficha de la tabla *personas*, esta tabla tiene un campo llamado *cd_pais_persona* en el cual deseamos grabar el código del país.

Por otro lado disponemos de la tabla *paises*, esta tabla contiene dos campos:
- cd_pais
- nm_pais

En *Fields* hemos definido el campo *cd_pais_persona* como un tipo de control *S* para que muestre un select al usuario.

En la etiqueta *DefAux* le estamos indicando que monte un desplegable con los datos de la tabla **paises**, mostrando el nombre del país (**nm_pais**) y grabando en el campo *cd_pais_persona* el dato **cd_pais**.

Realmente lo que hace *WEPEDES* es montar la siguiente sentencia SQL para generar el tipo de control [>tag:field_ctl](Select):

	SELECT cd_pais, nm_pais FROM paises ORDER BY nm_pais


- - -
```
[DBTable] clientes
[DefAux] cd_comercial | comerciales, cd_comercial, apellidos,', ',nombre | apellidos, nombre
[WhereSelect] a, mR | cd_comercial | edad_comercial>30
[Fields]
    Comercial asignado	| cd_comercial	| 0 | S  | 4	|    | M   |	|     | 
```

Este ejemplo es similar al anterior, solo que además queremos visualizar en el select los apellidos y nombre del comercial y sólo mostrar los comerciales que tengan más de 30 años.

El SQL que montaría *WEPEDES* sería:

	SELECT cd_comercial, CONCAT(apellidos,', ',nombre) FROM comerciales WHERE edad_comercial>30 ORDER BY apellidos, nombre

- - -
```
[DefAux] cd_gs_user | gs_user,cd_gs_user,user_name,' ',user_surname

[Fields]
	Propietario	| cd_gs_user	| 0 | S | 5 |	| - | $_SESSION['_User'] |   | 

```
En este ejemplo definimos un campo tipo Select pero sólo de lectura ("-") con un valor por defecto y en el *DefAux* definimos qué deseamos mostrar.




