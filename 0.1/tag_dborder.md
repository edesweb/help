##DBOrder

**[DBOrder] Field [DESC] [, Field [DESC]] ... [, Field [DESC]]  **

En un listado, indica la ordenación de los datos a mostrar.


- - -
####Parámetros

**Field [DESC]**: nombre de un campo de la tabla. DESC, para invertir el orden.

- - -
####Ejemplos

```
[DBOrder] nm_auto

[DBOrder] nm_auto DESC

```

>Esta etiqueta establece la variable global $_DBORDER para su posible utilización posterior.