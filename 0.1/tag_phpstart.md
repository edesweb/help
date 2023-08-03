## PHPStart

<div align="right">Server-side TAG - Multiline</div>

**[PHPStart]** [mode](tag_param_mode.md) [ [ | [edf,.../else](tag_param_edf_else.md) ] | [UNIQUE/Condition](tag_param_unique.md) ]

*... PHP code ...*

Código PHP a ejecutar en el inicio, antes de abrir la base de datos.

Si se quiere acceder a base de datos hay que llamar a la función  " [eInclude](pf_einclude.md) ( [$_Sql](pv_sql.md) ); "

#### Ejemplos

```
[PHPStart] mR
	if( $_SESSION['_User']!=44 ){
		eMessage('No tiene permisos para modificar la ficha.');
	}
```

Ver también:
	[[PHPIni]](tag_phpini.md)
	[[PHPEnd]](tag_phpend.md)
