##PreserveVar

**[PreserveVar]** variable [ , variable, variable, ... ]

    
Preserva las variables indicadas entre llamadas de listados y fichas.

Podemos añadir variables en tiempo de ejecución añadiéndolas a *$this->_PRESERVEVAR*

- - -

####Parámetros

**variable**:
	Variable $_GET

- - -


####Ejemplos

```
[Fields]
    Code	| code	| 0 | T  | 4	|    | M   |	|     | 
    {H} mybutton
    
[H] mybutton
	<button onclick="wpeLoadOn( $('#mydiv') ,'un_edf.edf','Llcmab',{_FILTER:'cd_gs_user=9',mivariable:'hola'});">
    	cargar un_edf.edf
    </button>
    <div id="mydiv" style="width:100%,height:400px"></div>
```
En el ejemplo anterior, en el script *un_edf.edf* si introducimos:

*[PreserveVar] mivariable*

la variable viajará en las subsiguientes llamadas a otros edf



```
[PHPIni] l
	$this->_PRESERVEVAR['color_de_ojos'] = 'azul';
    
[PHPIni] mR

	echo $this->_Params['color_de_ojos'];
```
En este ejemplo añadimos manualmente una variable al array *_PRESERVEVAR* para que viaje desde el listado a la ficha de mantenimiento.

Luego en el modo *mR* obtenemos la variable.




- - -

Ver también:
	[>tag:field_ctl](Fields CTL)
   