# Modos

Definimos modo a la forma de interpretar un script de Goblin.

La mayoría de tags tienen el parámetro "mode", este parámetro condiciona la inclusión de la tag en la interpretación del script.

Mejor con un ejemplo:
```
[JSIni] r
    ....
    Este código javascript sólo se ejecuta en el modo "r"
[JSIni] rR
    ....
    Este código javascript sólo se ejecuta en el modo "rR"
[DBEnd] C
    Este código PHP sólo se ejecuta en el modo "C"
[DBEnd] U
    Este código PHP sólo se ejecuta en el modo "U"
```

Los modos definidos por defecto en Goblin son los necesarios para realizar las tareas **CRUD**.

Cada elemento del CRUD requiere la ejecución de varios modos, que no es ni más ni menos que la secuencia lógica en la ejecución de un formulario.

Por ejemplo, si queremos visualizar [(read)](mode_r.md) un registro de una tabla :
1. Presentar formulario de búsqueda (filtro) (**modo r**).
2. Comprobar si existe algún registro con el filtro indicado (**modo Q**)
    1. Si no hay registros que cumplan la condición volver al punto 1.
    2. Si hay más de un registro, mostrar un listado (**modo LrR**) con las coincidencias del filtro para que el usuario seleccione uno de ellos y mostrarlo (**modo rR**).
    3. Si sólo hay un registro, mostrarlo (**modo rR**).

Goblin es configurable y permite la creación de nuevos modos para otras tareas que no estén previstas.
