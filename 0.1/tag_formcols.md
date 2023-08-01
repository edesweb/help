##FormCols

**[FormCols]** [>tag:mode] | labelcols, fieldcols [ | labelcols, fieldcols | labelcols, fieldcols ... ]

En un formulario, permite indicar cuanto espacio horizontal hay que dejar para el label (o prompt) y el campo de cada columna indicada en Fields (una por defecto).

Cada campo de la etiqueta [>tag:Fields] se compone de un label (o prompt) y del control del campo. 

En la etiqueta [>tag:Fields] podemos indicar el número de columnas de las que se compone el formulario, si no se indican, por defecto el formulario se presenta en una columna que a su vez se divide en dos (label y campo). Esta etiquea permite especificar el espacio disponible para cada label y field.

Cada campo de [>tag:Fields] se ubica en una rejilla de 12 columnas, de esas 12 columnas por defecto se asignan 3 para el label y 9 para el campo, con esta etiqueta se puede modificar ese número de columnas.

Cada par de parámetros labelcols y fieldcols indican el espacio (columnas) de cada una de las columnas de Fields.


La suma de cada par de labelcols y fieldcols debe ser 12 como máximo ( ver sistema de rejilla de [Bootstrap](http://getbootstrap.com/css/#grid) )

Si no se especifica fieldcols el generador lo calcula automáticamente en base a labelcols (12-labelcols).


**Alineamiento horizontal**

A labelcols y fieldcols se le puede añadir una letra para indicar el alineamiento horizontal.

Los posibles valores son:

- L (left)

- C (center)

- R (right)

La alineación por defecto es a la izquierda (L).

- - -

####Parámetros

**labelcols**:
	Número de columnas para el label (3 por defecto).

**fieldcols**:
	Número de columnas para el field (9 por defecto).

- - -

####Ejemplos

```
[FormCols] * | 5,7

[FormCols] * | 4R

[FormCols] * | 4R,8C

```

```

[FormCols] * | 4,8 | 5,7C | 2R,10

[Fields] * | 3
...
...
```



