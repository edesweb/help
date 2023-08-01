##Title

**[Title] texto [ | phpFunction ]**

Pone título a una ficha, grupo de fichas o listado.

Se puede poner etiquetas HTML.

En los modos *cR*, *mR*, *a*, *bR* añade la acción que se va a realizar si se pulsa el botón de grabación del formulario; si se desea forzar sólo el título simplemente le ponemos un igual *=* delante.


- - -
####Parámetros

**texto**: Título de la ficha o listado

**phpFunction**: Función que devuelve el texto del título

- - -

**Ejemplos**

```
[Title] Clientes

[Title] =Clientes


[Title] Clientes | titulo()
[PHPIni] *
	function titulo(){
    	return "LISTADO DE CLIENTES";
    }
```
