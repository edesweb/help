##H

**[H]** RefName
	<br>...<br>Código HTML<br>...
        
    
Se utiliza para incluir código HTML dentro de un formulario.

Dentro de la etiqueta [>tag:fields](Fields) antes o después de cada campo podemos indicar que deseamos incluir código HTML, para ello lo hacemos de la forma:

	{H} miReferencia
    
Después definimos esta etiqueta donde incluimos HTML de la forma:

	[H] miReferencia
    	...
        código HTML
        ...

- - -

####Parámetros

**RefName**:
	Identificador

- - -

####Ejemplos

```
[Fields]
    	Cliente	| cd_cli	| 0 | T  | 4	|    | *   |	|     |
    	Nombre	| nm_cli	| X | T  | 40	|    | M   |	|     | 
    	{H} aviso
    	Email	| email		| @ | T  | 80	|    | M   |	|     | 
#(m,mR)	{H} otrohtml
    
[H] aviso
	<span>Texto del aviso</html>
    
[H] otrohtml
	<div>
    	Esto es un div
	</div>


```

Ver también:
	[>tag:fields](Fields)
   