### Fields

**[Fields]** [[mode [ | device [ | format]]]  
`...multiline...`

Define los campos del formulario en el modo indicado, estos se indican en las siguientes líneas.

Si no se indica el modo se aplica a todos.

Si hay varias etiquetas `Fields`, cada una con un modo y la última con el modo `else`, el motor evalúa secuencialmente una por una para comprobar cual es la que tiene que utilizar, si al final no obtiene ninguna, se quedará con la que tiene el modo `else`.

#### mode

Modo al que afecta esta etiqueta


#### device

Indica los dispositivos para los que se está definiendo esta etiqueta, si se omite esta etiqueta es válida para todos los dispositivos.

Posibles valores:

| Valor     | Description       |
| --------  | ------------------- |
| DESKTOP   | Ordenador Personal |
| MOBILE    | Cualquier dispositivo móvil (smartphone o tablet ) |
| TABLET    | Sólo Tablets |
| PHONE     | Sólo smartphones  |
| IOS       | Sólo para dispositivos con sistema operativo iOS |
| ANDROID   | Sólo para dispositivos con sistema operativo Android |

Se permite indicar más de un valor separando por coma cada uno.
```
[Fields] c | DESKTOP,TABLET
[Fields] c | IOS,PHONE
```


#### format

Indica el formato de salida, por defecto HTML.

-NO OPERATIVO ACTUALMENTE-

---
#### Definición de los campos 

Debajo de esta etiqueta se definen todos los campos necesarios para el formulario o listado, un campo por línea.

Los parámetros de cada campo se separan por pipas `|`.

Los parámetros de cada campo son:

| Seq.| Required | Parameter | Description       |
| --: | :---:    |-----------|-------------------|
|  1. |          | [LBL - LABEL](tag_fields_0_lbl.md) | Prompt o etiqueta del campo |
|  2. | yes      | [FLD - FIELD](tag_fields_1_fld.md) | Nombre del campo |
|  3. | yes      | [EDT - EDITION](tag_fields_2_edt.md) | Tipo de edición |
|  4. | yes      | [CTL - CONTROL TYPE](tag_fields_3_ctl.md) | Tipo de control |
|  5. |          | [LNG - LENGTH](tag_fields_4_lng.md) | Longitud |
|  6. |          | [WID - WIDTH](tag_fields_5_wid.md) | Ancho en pixels |
|  7. | yes      | [MOD - MODE](tag_fields_6_mod.md) | Modo |
|  8. |          | [DEF - DEFAULT VALUE](tag_fields_7_def.md) | Valor por defecto |
|  9. |          | [COND - CONDITION](tag_fields_8_con.md) | Condición del campo |
| 10. |          | [ERR - ERRR MESSAGE](tag_fields_9_err.md) | Mensaje en caso de error en la condición del campo  |
| 11. |          | [HLP - HELP](tag_fields_10_hlp.md) | Ayuda del campo |
| 12. |          | [PLH - PLACEHOLDER](tag_fields_11_plh.md) | Placeholder  |
| 13. |          | [ATR - FIELD ATTRIBUTES](tag_fields_12_atr.md) | Atributos html del campo |
| 14. |          | [STF - INLINE CSS FOR FIELD](tag_fields_13_stf.md) | Estilo en línea del campo (FLD) |
| 15. |          | [STL - INLINE CSS FOR LABEL](tag_fields_14_stl.md) | Estilo en línea del prompt (LBL) |
| 16. |          | [CLF  - CSS CLASSES FOR FIELD](tag_fields_15_clf.md) | Clases CSS a añadir al campo (FLD) |
| 17. |          | [CLL - CSS CLASSES FOR LABEL](tag_fields_16_cll.md) | Clases CSS a añadir al prompt (LBL) |
| 18. |          | [TIT - TITLE](tag_fields_17_tit.md) | Title del campo |


Como son muchos los parámetros posibles por cada campo, tenemos la opción de añadir definiciones adicionales de estos mediante la etiqueta [Field](tag_field.md) de la siguiente forma:

```
[Fields] c
	CÓDIGO      | cd_persona    | N.9       | T |   |   | UQ    |   |   | 
    DNI/NIE     | dni           | @DNINIE   | T |   |   | UQ    |   | # | El DNI es obligatorio
	NOMBRE      | nombre        | S20U      | T |   |   | UQ    |   | # | 
	
[Field] * | dni
    ERR="El DNI es obligatorio"
    STL="color:red;"
[Field] * | nombre
    ERR="El NOMBRE es obligatorio"
    PLH="Nombre"
```



- - -

#### Ver también:

[Field](tag_field.md)

- - -



#### Ejemplos
```
[Fields] *
	CÓDIGO      | cd_persona    | N.9       | T |   |   | UQ    |   |   | 
	DNI/NIE     | dni           | @DNINIE   | T |   |   | UQ    |   | # | 
	Autonomía   | cd_auto       |           | S |   |   | UQ    |   |   | 
	NOMBRE      | nombre        | S20U      | T |   |   | UQ    |   | # | 
    APELLIDO 1  | apel1         | S30U      | T |   |   | UQ    |   | # | 
  , APELLIDO 2  | apel2         | S30U      | T |   |   | UQ    |   | # | 
```
```
[Fields] c
	CÓDIGO      | cd_persona    | N.9       | T |   |   | UQ    |   |   | 
1   DNI/NIE     | dni           | @DNINIE   | T |   |   | UQ    |   | # | El DNI es obligatorio
1	Autonomía   | cd_auto       |           | S |   |   | UQ    | 01|   |                       | Autonomía de residencia
1	NOMBRE      | nombre        | S20U      | T |   |   | UQ    |   | # | 
,2  APELLIDO 1  | apel1         | S30U      | T |   |   | UQ    |   | # | 
,3  APELLIDO 2  | apel2         | S30U      | T |   |   | UQ    |   | # | 
```
