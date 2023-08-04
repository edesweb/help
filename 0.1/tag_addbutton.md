## AddButton

**[AddButton] [>tag:Mode] | label | title | jsonclick [| id [| css_style [| css_class [| for_scripts ]]]] **

Añade un botón al formulario.

Cada botón tiene "id" único "AddButton[NºBoton]"

---

####Parámetros

**label**:
	Texto del botón (puede ser código html).

**title**:
	Tooltip del botón.

**jsonclick**:
	Javascript a ejecutar en el onclick del botón.

**id**:
	Identificador del botón.

**css_style**:
	Estilo CSS a aplicar al botón.

Se admiten los siguientes textos para ubicar el botón:

- &left
- &center
- &right
- &top

**css_class**:
	Clase/s CSS a aplicar al botón.

El contenido HTML del botón se almacena en uno de los siguientes arrays en función de su ubicación:
	- _BUTTONS_LEFT
	- _BUTTONS_CENTER
	- _BUTTONS_RIGHT
	- _BUTTONS_TOP

---

####Ejemplos

```
[AddButton] mR | Texto del botón | Title del botón | alert('ok')

[AddButton] cR,bR | <IMG src='g/print_1.gif'> | Imprimir | ImprimirDoc() | color:blue; font-size:120%

[AddButton] cR,bR | <IMG src='g/print_1.gif'> | Imprimir | ImprimirDoc() | .miColorAzul
```
