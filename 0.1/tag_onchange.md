## OnChange

**[OnChange]** [>tag:mode] | Field [,Field,..] [ | JavaScript ] [ | EjecutarEnLaCarga=1 ]
	`<br>`
        [ Javascript-Multilínea ]

En el(los) campo/s indicados se ejecuta código javascript cuando se produce el evento "onchange",
es decir:
	- cuando el usuario modifica el contenido del campo.
    - cuando por programación se modifica el contenido del campo.

---

####Parámetros

**Field**:
	Campo de la etiqueta [&gt;tag:fields](Fields)

**Javascript**:
	Código Javascript a ejecutar.

**EjecutarEnLaCarga**:
	Indica si el Javascript se ha de ejecutar una vez en la carga del formulario.
	- Si se trata de el nombre de una función y ésta empieza por barra baja "_" entonces no se ejecutará en la carga del formulario.

**Javascript-Multilínea**:
	Es posible utilizar las siguientes líneas para introducir Javascript en vez de utilizar el anterior parámetro Javascript.

---

#### Ver también:

[&gt;tag:onfocus](OnFocus) [&gt;tag:onblur](OnBlur)

---

####Ejemplos

En este ejemplo se ejecuta el alert en la carga del formulario y
cuando se produce el evento "onchange" en los campos sexo y edad.

```
[OnChange] mR | sexo,edad | alert('onchange')
```

En el siguiente ejemplo no se ejecuta el alert en la carga del formulario.

```
[OnChange] mR | sexo,edad | alert('onchange') | 0
```

Se ejecuta la función "mialerta" en la carga del formulario y
en el evento "onchange" de los campos sexo y edad.

```
[OnChange] mR | sexo,edad | mialerta(this)
[JSEnd] mR
	function mialerta(o){
    	alert('onchange en '+o.id);
    }
```

En el siguiente ejemplo no se ejecuta la función en la carga del formulario.

```
[OnChange] mR | sexo,edad | _mialerta(this)
[JSEnd] mR
	function _mialerta(o){
    	alert('onchange en '+o.id);
    }
```

Ejemplo de uso de Javascript en multilínea

```
[OnChange] mR | sexo,edad
	_mialerta(this);
    var v=eGF('edad');
    alert('Valor de edad: '+v);
```

En el siguiente ejemplo al modificar el campo sexo se modifica el campo edad con la función **[>tag:ePF]**
y esto provoca que se ejecute el evento "onchange" en el campo edad mostrando el alert.

```
[OnChange] mR | sexo | ePF('edad',18)
[OnChange] mR | edad | alert('La edad cambió')

```
