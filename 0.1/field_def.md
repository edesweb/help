##8 DEF - Label ([>tag:fields](Fields))

Valor por defecto.

- Si comienza por barra baja "**_**" buscará la variable de sesión (sin la barra baja).
- Si comienza con una almohadilla "**#**" buscará la variable global.
- **\#y2s#** insertará la fecha y hora actual: *date('Y-m-d H:i:s')*
- **\#today#** o **\#clock#** insertará la hora actual
- Si comienza por "**$**" insertará la variable.
