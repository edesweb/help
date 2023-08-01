##OnFocus

**[OnFocus]** [>tag:mode] | Field [,Field,..] [ | JavaScript ] 
	<br>
        [ Javascript-Multilínea ]
    
En el(los) campo/s indicados se ejecuta código javascript cuando se produce el evento "onfocus", 
es decir, cuando el campo obtiene el foco(cursor).

- - -

####Parámetros

**Field**:
	Campo de la etiqueta [>tag:fields](Fields)

**Javascript**:
	Código Javascript a ejecutar.
	
**Javascript-Multilínea**:
	Es posible utilizar las siguientes líneas para introducir Javascript en vez de utilizar el anterior parámetro Javascript.

- - -

####Ejemplos

```
[OnFocus] a | edad | $(this).css('background','gray');
[OnBlur]  a | edad | $(this).css('background','');

```


```
[OnFocus] a | edad | chgBg(this)
[JSEnd] * 
	function chgBg(obj){
    	$(obj).css('background','gray');
    }

```	

Ver también:
	[>tag:onblur](OnBlur) [>tag:onchange](OnChange)

