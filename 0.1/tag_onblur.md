##OnBlur

**[OnBlur]** [>tag:mode] | Field [,Field,..] [ | JavaScript ] 
	<br>
        [ Javascript-Multilínea ]
    
En el(los) campo/s indicados se ejecuta código javascript cuando se produce el evento "onblur", 
es decir, cuando el campo pierde el foco(cursor).

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
[OnBlur] a | edad | chgBg(this)
[JSEnd] * 
	function chgBg(obj){
    	$(obj).css('background','gray');
    }

```	

Ver también:
	[>tag:onfocus](OnFocus) [>tag:onchange](OnChange)

