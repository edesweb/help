## MsgSubmit 1

**[MsgSubmit] [>tag:Mode] [ | message_or_function [ | js_condition] ]**

Mostrar al usuario un mensaje de confirmación antes de realizar el submit de un formulario.

---

#### Parámetros

**message_or_function**: Mensaje a mostrar o función javascript (sin parámetros). En caso de función se muestra el valor de retorno de la misma.

**js_condition**: Condición javascript a cumplir para que se muestre el mensaje. 

![1690903863421](image/tag_msgsubmit/1690903863421.png)

---

#### Ejemplos

```
[MsgSubmit] a | Confirme que desea realizar el alta
[MsgSubmit] bR | Confirme que desea eliminar el registro.
[MsgSubmit] a | mifuncion() 
[MsgSubmit] a | Confirmación | _vF['uncampo']=='M'
[MsgSubmit] a | No ha introducido el nombre,<br>¿ desea continuar ? | _vF['nombre']==''
[MsgSubmit] a | No ha introducido el nombre,<br>¿ desea continuar ? | checkNombre(_vF)


[JSIni] a
	function checkNombre(_vF){
    	return ( _vF['nombre']=='' );
    }

```
