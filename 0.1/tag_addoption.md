## AddOption

**[AddOption]** [>tag:mode] | Field | Options_List

En un campo tipo `<SELECT>` permite añadir más opciones `<option>` al principio de la lista.

---

####Parámetros

**Field**:
	Campo de la etiqueta [&gt;tag:fields](Fields)

**Options_List**:
	Se puede utilizar tres tipos de parámetros:
    - Pares de datos separados por punto y coma `;` compuestos de un valor para el "option" y un texto a mostrar.`Valor1, Texto1; Valor2, Texto2; ...; ValorN, TextoN`  Si el "Valor" es una tilde `~` indica una  linea divisoria.

    - El nombre de una función PHP. La función tiene que devolver una matriz bidimensional con el valor y el texto de las opciones.

    - Una sentencia SQL que devuelva dos datos, el valor y el texto de las opciones.

---

####Ejemplos

```
[AddOption] a | sexo | H,HOMBRE; M,MUJER

[AddOption] a | horario | getHorario()
[PHPIni] *
function getHorario(){
	$p = array();
	$p[0] = array('M','MAÑANA');
	$p[1] = array('T','TARDE');
	$p[2] = array('N','NOCHE');
	return $p;
}

[AddOption] mR | autonomia | select cd_auto,nm_auto from auto order by nm_auto



```
