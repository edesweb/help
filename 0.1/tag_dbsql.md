##DBSql

**[DBSql] [>tag:Mode]**
<br>...<br>código php<br>...

En los listados permite tomar el control de los registros que se van a enviar al usuario.

El sistema no ejecuta ninguna sentencia SQL para generar la consulta, es responsabilidad del programador rellenar el array **$GLOBALS['\_SQLDATA\_']** con los registros que van a componer el listado.

El sistema espera que la clave única de cada registro sea el primer dato de cada registro almacenado en **\_SQLDATA\_**  , pero si deseamos que no sea el primer dato lo podemos indicar en la variable **$GLOBALS['serialFieldOrder']**, asignandole la posición en la que va (zero based).

Abajo, en la base del listado existe un elemento SPAN donde se "pinta" información de los registros del listado. Para modificar su contenido se puede modificar la variable **$GLOBALS['_FOOTERSPAN']**

Hay que tener en cuenta que cuando se utiliza esta etiqueta el sistema no proporciona el paginado de registros.

####Ejemplos

```
[Fields] l
	Cod.Auto	| cd_auto	| 0  | T  | 2   |  | *  |    |   | 
	Nom.Auto	| nm_auto	| N  | T  | 45  |  | M  |    |   | 

[DBSql] l

	$GLOBALS['_SQLDATA_']   = readData();
	$GLOBALS['_FOOTERSPAN'] = count( $GLOBALS['_SQLDATA_'] ).' registros';


[PHPIni] l

	function readData(){
    	global $p;
        
        $ret=array();
        
        $p->qQuery("select codigo,nombre from auto order by 2");
        while( $r=$p->qRow() ){
        	$ret = $r;
        }
        return $ret;
	}
```
