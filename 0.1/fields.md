##Fields

**[Fields]** [ [>tag:mode]/else [ | numcols ] ]

Define los campos del formulario en el modo indicado, estos se indican en las siguientes líneas.

Si no se indica el modo se aplica a todos.

Si hay varias etiquetas Fields, cada una con un modo y la última con el modo `else`, el motor evalúa secuencialmente una por una para
comprobar cual es la que tiene que utilizar, si al final no obtiene ninguna, se quedará con la que tiene el modo `else`.

El parámetro **numcols** indica de cuantas columnas se compone el formulario. Cada columna se compone a su vez de dos columnas, una para el label (o prompt) y otra para el campo. El espacio de cada label y campo se puede modificar con la etiqueta [>tag:formcols]([FormCols]).

**Sintaxis para la descripción de los campos**

Cada campo se indica en una línea y los parámetros de cada campo se separan por tubos `|`.

Los parámetros de cada campo son:

1. [>tag:field_lbl](LBL) - Prompt o etiqueta del campo
2. [>tag:field_fld](FLD) - Nombre del campo
3. [>tag:field_edt](EDT) - Tipo de edición
4. [>tag:field_ctl](CTL) - Tipo de control
5. [>tag:field_lng](LNG) - Longitud
6. [>tag:field_wid](WID) - Ancho en pixels
7. [>tag:field_mod](MOD) - Modo
8. [>tag:field_def](DEF) - Valor por defecto
9. [>tag:field_con](CON) - Condición del campo
10. [>tag:field_err](ERR) - Mensaje en caso de error en la condición del campo 
11. [>tag:field_hlp](HLP) - Ayuda del campo
12. [>tag:field_plh](PLH) - Placeholder 
13. [>tag:field_atr](ATR) - Atributos html del campo
14. [>tag:field_sty](STY) - Estilo en línea del campo

- - -

#### Ver también:

[>tag:FormCols]

- - -

####Ejemplos

```
[Fields] 
    Provincia     | cd_prov      | N | T | 2   |  | M |  |   | 
    Partidospoli  | nm_prov      | D | T | 45  |  | M |  |   | 

```