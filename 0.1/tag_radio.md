## Radio

**[Radio]** [>tag:mode] | Field | Config  | Value,Text [; Value2,Text2]...[; ValueN,TextN] [ | Title ]

Configurar las posibles selecciones de un campo definido como tipo de control **R** en fields.

---

####Parámetros

**Field**:
	Campo de la etiqueta [&gt;tag:fields](Fields)

**Config**:
	*Parámetro reservado para uso futuro*

**Value,Text**:
	Valor y texto de cada *radio*.

**Title**:
	Tooltip a mostrar en todos los *radio*.

---

####Ejemplos

```
[RADIO] * | sexo |   | -,NO APLICA; M,MUJER; H,HOMBRE

[Fields]
    Sexo	| sexo	| X | R  | 1	|    | M   |	|     | 
  
```

Ver también:
	[>tag:field_ctl](Fields CTL)
