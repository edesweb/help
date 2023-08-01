##Assign

**[Assign]** [>tag:mode] [| FLD, FLD...., FLD ]

Asigna los valores por defecto a los campos indicados.

Esta etiqueta está ligada al valor por defecto indicado en el parámetro 8 ([>tag:field_def](DEF)) de la etiqueta [[>tag:fields](Fields)].

De forma predeterminada, el motor sólo asigna los valores por defecto en el modo alta (a).

- - -

####Parámetros

**FLD**:
	Lista de campos separados por coma de la etiqueta Fields.

- - -

####Ejemplos

```
[Assign] mR
[Fields]
	Fecha | fecha | F4 | T | 10 | | - | #today# | |  

Por defecto solo en el alta establece el valor de la fecha actual (#today#), 
pero al poner "[Assign] mR" si al modificar el campo está vacío lo rellena. 

```