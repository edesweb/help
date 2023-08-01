##WhereSelect

**[WhereSelect] [>tag:Mode] | field | sql_filter**

Está relacionada con los campos tipo [>tag:field_ctl](Select) de la etiqueta [>tag:fields](Fields), se utiliza para añadir un filtro a los resultados.

Para una mejor comprensión ver la etiqueta [>tag:defaux]([DefAux])

- - -
####Parámetros

**field**: Campo de la etiqueta Fields del tipo "S" ( [>tag:field_ctl](Select) ).

**sql_filter**: Filtro SQL a aplicar. Se pueden utilizar variables PHP encerradas entre corchetes.

- - -

####Ejemplos

```
[DBTable] personas
[DefAux] cd_pais | paises, cd_pais, nm_pais | nm_pais
[WhereSelect] * | cd_pais_persona | nm_pais like 'a%'
[Fields]
    País	| cd_pais_persona	| 0 | S  | 2	|    | M   |	|     | 
```

En el ejemplo tenemos un listado o una ficha de la tabla *personas*, esta tabla tiene un campo llamado *cd_pais_persona* en el cual deseamos grabar el código del país.

Por otro lado disponemos de la tabla *paises*, esta tabla contiene dos campos:
- cd_pais
- nm_pais

En *Fields* hemos definido el campo *cd_pais_persona* como un tipo de control *S* para que muestre un select al usuario.

En la etiqueta *DefAux* le estamos indicando que monte un desplegable con los datos de la tabla **paises**, mostrando el nombre del país (**nm_pais**) y grabando en el campo *cd_pais_persona* el dato **cd_pais**.

En la etiqueta *WhereSelect* indicamos que sólo queremos mostrar los países cuyo nombre comience por "a".

Realmente lo que hace *WEPEDES* es montar la siguiente sentencia SQL para generar el tipo de control [>tag:field_ctl](Select):

	SELECT cd_pais, nm_pais FROM paises WHERE nm_pais like 'a%' ORDER BY nm_pais


- - -
```
[DBTable] clientes
[DefAux] cd_comercial | gs_user, cd_gs_user, user_name,' ',user_surname | user_name, user_surname
[WhereSelect] a, mR | cd_comercial | cd_gs_user<>{$_SESSION['_User']}
[Fields]
    Comercial asignado	| cd_comercial	| 0 | S  | 4	|    | M   |	|     | 
```

En *DefAux* indicamos queremos visualizar en el select el nombre y apellidos y grabar el dato de cd_gs_user en el campo cd_comercial.

Además en *WhereSelect* indicamos que muestre todos los usuarios menos el usuario de la sesión actual.

El SQL que montaría *WEPEDES* sería:

	SELECT cd_gs_user, CONCAT(user_name,' ',user_surname) FROM gs_user WHERE cd_gs_user<>{$_SESSION['_User']} ORDER BY user_name, user_surname
    
