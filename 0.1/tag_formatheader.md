##FormatHeader

**[FormatHeader]**
<br>...<br>código php<br>...


Permite modificar los textos e iconos de las cabeceras de los listados.

En el código PHP están disponibles dos variables:

- **$_TH** - Contiene los datos de cabecera de cada campo del listado.
- **$_THIcons** - Contiene los datos de los iconos que van a aparecer en la primera columma del listado.


**$_TH**

Se trata de un array asociativo multidimensional que contiene:

- $_TH[ nombre_del_campo ]['label'] - Texto de la cabecera (puede contener HTML).
- $_TH[ nombre_del_campo ]['style'] - Array asociativo de cada propiedad y valor del estilo.

	Ejemplo
    
    `$_TH['nomcli']['label'] = 'Nombre Cliente';`
    
    `$_TH['nomcli']['style']['color'] = '#FF0000';`
    
    `$_TH['nomcli']['style']['background-color'] = '#00FF00';`

**$_THIcons**

Array asociativo que contiene, si el modo del listado contiene una "a" (por ejemplo "Llcmab"):

- $_THIcons['add']['icon'] => '<i class="fa fa-plus-square-o ge-fa-15x"></i>' (html del icono)
- $_THIcons['add']['onclick'] => "{$this->_ScriptId}.{$this->_ScriptId}_onclicktr(this,'a')" (javascript del onclick)
- $_THIcons['add']['title'] => $this->getLng('icon_add')   (Title del icono)
- $_THIcons['add']['mode'] =>'a' (modo)

Podemos añadir cuantos iconos necesitemos.


- - -

Ver también:
	[>tag:format](Format)
   