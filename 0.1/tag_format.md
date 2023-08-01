##Format

**[Format]** [FormatCol1 [, FormatCol2] ... [, FormatColN] ] [ | utf8=''{E,D,blanco} [ | htmlentities=false ] ]
<br>...<br>código php<br>...


En los listados da formato a los datos de cada columna.

Todos los parámetros son opcionales.

- - -

####Parámetros

**FormatCol1**:
	Los posibles valores de formateo son:
    - C - Centrar
    - L - Alinear a la izquierda
    - R - Alinear a la derecha
    - H - No mostrar el dato
    - B - Si el valor es cero no mostrar nada

**utf8**:
	Podemos forzar un [utf8_encode](http://php.net/manual/es/function.utf8-encode.php) o [utf8_decode](http://php.net/manual/es/function.utf8-decode.php) de cada dato si es preciso, los posibles valores son:
	- E - Realizará un *utf8_encode* del dato
    - D - Realizará un *utf8_decode* del dato

Si no se indica nada, se hará lo que esté establecido en la configuración de WEPEDES, en la variable *$GLOBALS['SETTINGS']['wepedes']['brwUTF8']* y si esta variable no existe se hará un *utf8_encode* por defecto.

**htmlentities**:
	Si es *true* hará un *htmlentities* del dato.
    
Si no se indica nada se aplicará lo que contengan la variable *$GLOBALS['SETTINGS']['wepedes']['brwUTF8']*; si esta variable contiene un guión medio (-) se hará un *htmlentities* al dato.
	

**código php**:
	Si introducimos código PHP este se ejecutará por cada registro leído, teniendo a nuestra disposición el array (zero based) **$_vF** para poder modificar el contenido del dato de cada columna.
    
    
- - -

####Ejemplos

```
[Fields]
    Sexo	| sex	| N | T  | 1	|    | M   |	|     | 
    Edad	| edad	| 0 | T  | 2	|    | M   |	|     | 
[Format] C,R
```

```
[Fields]
	Importe	| imp			| 0 | T  | 4	|    | M   |	|     | 
    Cobrado	| dt_cobro		| N | T  | 1	|    | M   |	|     | 
    Enviado	| flg_enviado	| N | T  | 1	|    | M   |	|     | 
[Format] R,C,C 
	$_vF[0] .= "€";
    if( $_vF[1]!='' ){
    	$_vF[1] = 'SI';
    }else{
    	$_vF[1] = 'NO';
    }
	

```
```
Ejemplo de cómo añadir un icono de acción en la primera columna:
[Format]
	$_icon['miicono']=array(
		'icon'=>'<i class="fa fa-cogs fa-2x"></i>',
		'onclick'=>"mifuncion( {$_vF[0]} )",
		'title'=>'Configuración'
	);

```

Ver también:
	[>tag:formatheader](FormatHeader)
   