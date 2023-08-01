##PHPEnd

**[PHPEnd]** [>tag:mode]
	<br>...<br>Código PHP<br>...

Código PHP a ejecutar después de elaborar el formulario y el listado.


####Ejemplos

```
[Fields] else
	Código			| cd_gs_user	| 0  | T  | 5   |	| M |	|   | 
	Nombre			| user_name		| #X | T  | 50  |	| M |	|   | 
	Apellidos		| user_surname	| #X | T  | 50  |	| M |	|   | 
	Email			| email			| #X | T  | 50  |	| M |	|   | 

[AddOption] * | menu | load_menu()

[PHPEnd] mR
	if( $_vF['cd_gs_user']=='' ){

	echo <<<EOD
		<script>
			$('#cd_gs_user').focus();
		</script>
EOD;
	}


```	

Ver también:
	[>tag:phpini](PHPIni)

