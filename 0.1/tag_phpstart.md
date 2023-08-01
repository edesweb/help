##PHPStart

**[PHPStart]** [>tag:mode]
	<br>...<br>Código PHP<br>...

Código PHP a ejecutar antes de abrir la base de datos.


####Ejemplos

```
[PHPStart] mR

	if( $_SESSION['_User']!=44 ){
		wMessage('No tiene permisos para modificar la ficha.');
	}


```	

Ver también:
	[>tag:phpini](PHPIni) [>tag:phpend](PHPEnd)
	[>tag:js_wmessage](wMessage)

