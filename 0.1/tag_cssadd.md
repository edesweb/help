##CSSAdd

**[CSSAdd] [>tag:Mode] [ | cssfile [ , cssfile, ...] ] **
<br>
[ código css ... ]

Permite incluir tanto archivos de estilo como código css.



- - -
####Parámetros

**cssfile**: vía y nombre del archivo css.La carpeta base es "http" (Document Root). Puede contener los caracteres de carpetas especiales (ver [>tag:php_eScript](eScript)).

**código css**: código css a incluir, puede contenes variables php.
- - -
####Ejemplos

```
[CSSAdd] mR | xxx/myfile.css , otherfile.css

Incluye los archivos ...http/xxx/myfile.css y ...http/otherfile.css
```

```
[CSSAdd] * | #xxx/myfile.css

En este caso (si por ejemplo cd_cli=5) incluye el contenido del archivo ubicado en ../../xxxx.datos/000005/xxx/myfile.css
```

```
[CSSAdd] * | myfile.css
	body{
    	color:red;
	}
    .myclass{
    	color:blue;
    }
    
En este caso incluye el archivo http/myfile.css y además el código css indicado.    
```

```
[CSSAdd] *
	body{
    	color:red;
	}
```

```
[PHPIni] *
	$GLOBALS['micss']='zzz/test.css';
[CSSAdd] c | {$GLOBALS['micss']}
```

```
[PHPStart] c
	$GLOBALS['micolor']='#FF0000';
[CSSAdd] c 
	body{
		color:{$GLOBALS['micolor']};
	}
```

