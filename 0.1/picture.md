### Pictures

Las *pictures* se utilizan en la [columna CTL](tag_fields_2_edt.md) de la etiqueta Fields, sirven para decirle al sistema el formato de un dato, cómo lo queremos ver o qué puede contener.

Por ejemplo un tipo de dato numérico sólo debería contener números, pero además querríamos limitar el número de dígitos y también querríamos que tuviera o no decimales, separación de miles. 
Además queremos indicar esto tanto para que funcione en listados como en formularios y así tener control sobre lo que el usuario introduce.

Las *pictures* pueden comenzar por los siguientes caracteres:

| Carácter | Descripción           |
|:--------:|-----------------------|
| N        | Números               |
| S        | Cualquier carácter    |
| D        | Fecha                 |
| T        | Hora                  |
| P        | Patrón                |
| @        | Picture personal      |

A continuación cada uno tiene una serie de números, caracteres o símbolos.

En este enlace dispone de herramienta fácil para conformar el PICTURE: 
### <a href="../gobpic.html" target="_blank">GENERADOR - TESTEADOR DE PICTURES</a>


Ejemplos
```
N4      -> -9999 a 9999
N04     -> igual que N4 pero pinta ceros a la izquierda -9999 a 9999 (p.e. 24 -> 0024)
N.6,2   -> 4 enteros con el punto como separador de miles y 2 decimales separados por coma
N%+4,2  -> un porcentaje positivo de 2 enteros, dos decimales separados por una coma y el símbolo "%" al final
N%<+4,2 -> igual que el ejemplo anterior, pero el símbolo "%" a la izquierda
N$6     -> 6 enteros con signo Dolar al final (999999$)
N$<6    -> 6 enteros con signo Dolar al principio ($999999)
```

```
S30     -> 30 caracteres alfanumérico, mayúsculas o minúsculas
S30U    -> 30 caracteres alfanumérico sólo mayúsculas
S2~REVA~[abc]{2}    -> permite sólo 2 caracteres, en *onchange* chequea que sean 2 y sólo sean los caracteres abc
```

#### Pictures personales

Son definiciones que, además de contener la sintáxis de una picture, puede contener código PHP y/o Javascript para realizar validaciones.

Se definen en archivos externos o en el mismo script de Goblin que se ejecute.

El sistema carga automáticamente (si existen) los siguientes archivos con las definiciones que tengan:
* [[lang]](config.ini.md#paths)/pictures.gob
* [[sources]](config.ini.md#paths)/goblin/pictures.gob

Para ver la definición de las Pictures personales vea la etiqueta [[Picture]](tag_picture.md)