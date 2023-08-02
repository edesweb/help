## PHPStart

<div align="right">Server-side TAG</div>

**[PHPStart]** [mode](mode.md) [ [ | edf,.../else ] | UNIQUE/Condition ]
	...
	Código PHP
	...

Código PHP a ejecutar antes de abrir la base de datos.

#### Ejemplos

```
[PHPStart] mR
	if( $_SESSION['_User']!=44 ){
		wMessage('No tiene permisos para modificar la ficha.');
	}
```

Ver también:
	[[PHPIni]](tag_phpini.md)
	[[PHPEnd]](tag_phpend.md)
