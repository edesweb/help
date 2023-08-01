##DBIni

**[DBIni]**  [>tag:mode]
<br>...<br>código php<br>...

**En un listado:**

Código PHP antes de hacer el conteo de los registros a mostrar en el listado.

Variables disponibles:

- $where
- $this->_DBADDFILTER
- $tabla
- $joins

**En una ficha y multificha:**

- En los modos cR, mR o bR es el código PHP justo antes de elaborar la variable $GLOBALS['_SQL'] que contiene el SELECT para la obtención del registro a tratar. Las variables disponibles son:

	- $GLOBALS['_SQL']  - Sentencia SQL propuesta para obtener el registro
    - $GLOBALS['_QueryFields'] - Array de los campos a obtener
    - $GLOBALS['_Where'] - Cláusula SQL
    - $GLOBALS['_Table'] - Tabla del SELECT
    - $recordExists - Número de registros encontrados con _Where. Después del DBIni, si el valor de este campo es 0 se muestra un 
    	mensaje de error al usuario, si cambiamos su valor podemos saltar el mensaje.
    
    Si modificamos _QueryFields, _Where o _Table, después del DBIni se volverá a regenerar la variable _SQL.
    Podemos alterar _SQL para elaborar nosotros mismos la sentencia SQL.

- En los modos A, M y B tenemos disponible el array $_vF para poder modificar el contenido de los campos.

<br>    

- - -


####Ejemplos

```
[DBIni] mR
	$_vF['phone'] = '+34'.$_vF['phone'];
```

```
[DBIni] mR
	$GLOBALS['_Where'] .= " and cd_auto='03'";
```

Ver también:
	[>tag:dbend](DBEnd)
   