### LBL - Label ( columna 0 de [Fields] )
[ver Fields](tag_fields.md)

En un formulario es el texto del prompt.

En un listado indica el texto de la cabecera.

Puede contener código HTML.

Puede tener varios **prefijos** para modificar su ubicación en el formulario.

| Prefijo  | Descripción                                                                                  |
|----------|----------------------------------------------------------------------------------------------|
| ```,``` (coma) | Coloca el campo a continuación del anterior.                                                 |
| número   | Indica en qué columna se desea colocar el campo. La primera columna es la número cero ( 0 ). |


Ejemplo
```
[Fields] c
	CÓDIGO      | cd_persona | N.9      | T |   |   | UQ |   |   | 
    DNI/NIE     | dni        | @DNINIE  | T |   |   | UQ |   | # | El DNI es obligatorio
,   Autonomía   | cd_auto    |          | S |   |   | UQ | 01|   |
1   NOMBRE      | nombre     | S20U     | T |   |   | UQ |   | # | 
,2  APELLIDO 1  | apel1      | S30U     | T |   |   | UQ |   | # | 
,3  APELLIDO 2  | apel2      | S30U     | T |   |   | UQ |   | # |
```

```
[Fields] * | ANDROID,DESKTOP
   NOMBRE                   | nombre     | S20U     | T |   |   | UQ |   | # | 
,  Primer<br>Apellido       | apel1      | S30U     | T |   |   | UQ |   | # | 
,  <i>Segundo</i> Apellido  | apel2      | S30U     | T |   |   | UQ |   | # |
```


