##PHPIni

**[PHPIni]** [>tag:mode]
	<br>...<br>Código PHP<br>...

Código PHP a ejecutar antes de *atacar* a la base de datos.


####Ejemplos

```
[Fields] else
	Código			| cd_cli		| 0  | T  | 5   |	| - |	|   | 
	CLI				| cd_cli		| 0  | S  | 5   |	| - |	|   | 
	Nombre			| user_name		| #X | T  | 50  |	| - |	|   | 
	Apellidos		| user_surname	| #X | T  | 50  |	| - |	|   | 
	Email			| email			| #X | T  | 50  |	| - |	|   | 
#(m,mR) Menu		| menu			| #X | SV | 50  |	| M |	|   | 
#(mL)	Menu		| menu			| #X | T  | 50  |	| M |	|   | 

[AddOption] * | menu | load_menu()

[PHPIni] *

	function load_menu(){
		$ret=array(array('',''));
		$p->qQuery("select cd_menu,nm_menu from menu order by nm_menu");
        while( $p->qRow() ){
			$ret[] = array( $r[0], $r[1] );
		}
		return $ret;
	}


```	

Ver también:
	[>tag:phpend](PHPEnd)

