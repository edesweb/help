### [DBOrder]

`[DBOrder] fieldList`

Indica la ordenación (ORDER BY) de los datos en un listado.

#### fieldList

Lista de campos separados por coma.

Al tratarse del ORDER BY de una SELECT, podemos indicar el orden ascendente o descendente de cada campo.


ejemplo
```
[DBTable] usuario
[DBSerial] cd_usuario
[DBOrder] nm_usuario
```

```
[DBTable] usuario
[DBSerial] cd_usuario
[DBOrder] dt_add desc, nm_usuario
```