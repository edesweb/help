##Html

**[Html] [>tag:Mode] | where_to_place**
<br>...<br>Código HTML<br>...

Añadir código HTML al elemento WPEDES en una ubicación concreta.

Por regla general un elemento WPEDES esquemáticamente tiene una cabecera, un cuerpo y un pie, su esqueleto viene a ser:

```
<div-contenedor>
	<div-cabecera>
    	<elementos de la cabecera>
    </div-cabecera> 
    <div-cuerpo>
    	<elementos del cuerpo>
    </div-cuerpo>
    <div-pie>
    	<elementos del pie>
    </div-pie>
</div-contenedor>
```
Esta etiqueta nos permite añadir código HTML en las siguiente ubicaciones (encerradas entre paréntesis):

```
(before)
<div-contenedor>
	(start)
	<div-cabecera>
    	(header-start)
        <elementos de la cabecera>
        (header-end)
    </div-cabecera> 
    <div-cuerpo>
    	(body-start)
    	<elementos del cuerpo>
        (body-end)
    </div-cuerpo>
    <div-pie>
    	(footer-start)
    	<elementos del pie>
        (footer-end)
    </div-pie>
    (end)
</div-contenedor>
(after)
```

- - -
####Parámetros

**where_to_place**: Ubicación del código HTML

Las posibles ubicaciones son:
- before
- start
- header-start
- header-end
- body-start
- body-end
- footer-start
- footer-end
- end
- after

<br>

- - -

**$this->_HTML**

También está disponible esta etiqueta en modo variable PHP, ejemplo:

```
[DBEnd] *
	$this->_HTML['header-end'][] = '<h4>Este es un subtítulo</h4>';
```

- - -
####Ejemplos

```
[Html] mR | header-end
	<h4>Otro subtítulo</h4>


```
