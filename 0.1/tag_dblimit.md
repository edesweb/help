##DBLimit

**[DBLimit] records_per_page, extended_load **

Un listado muestra por defecto una cantidad de registros que está establecida en el archivo de [>tag:settings_ini](configuración), si hay más registros para mostrar se presentan -al final del listado- dos botones para permitir al usuario que cargue más registros, el primer botón carga la siguiente página de registros y el segundo botón carga una cantidad más elevada -**carga ampliada**- de registros. Con esta etiqueta podemos modificar los valores por defecto establecidos en el archivo de configuración.


- - -
####Parámetros

**records_per_page**: número de registros por página, es el número de registros a cargar cada vez que el usuario pulsa el botón "*cargar más*".

**extended_load**: número de registros para la *carga ampliada*.

- - -
####Ejemplos

```
[DBLimit] 15, 500

Establece 15 registros por página y hasta 500 registros en la carga ampliada.

```

>En el [>tag:settings_ini](settings.ini) *records_per_page* se corresponde con la variable *brwNumRecords* y *extended_load* se corresponde con *brwMaxRec*.