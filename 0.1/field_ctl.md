##4 CTL - Tipo de Control ([>tag:fields](Fields))

Indica el tipo de control que se presenta en el formulario, en función del tipo el control se comportará de diferente manera.


| TIPO  |        |
|-------|--------|
| T		|  Text (una línea) |
| A		|  TextArea. La longitud se definirá como: "LongMax,ColAncho,LinAlto"  |
| R		|  RadioButton  |
| C		|  Checkbox |
| S		|  [>tag:field_types#select](Select) |
| Ss	|  SubSelect |
| SB	|  Select Browser |
| H		|  TextArea con HTML  |
| P		|  Password  |
| F		|  File. Selección de archivo para enviar al servidor. Ver [>tag:uploadfile](UploadFile)  |
| SL	|  [>tag:sublist](Sublist) |
| MS	|  Multimedia Selector |
| ~~I~~	|  ~~Solo en modo listado para el tipo de control "F" mostrará un Icono para ver el fichero~~ |


**Tipo H - Textarea con HTML**

Para realizar el cometido, utiliza el editor [Tinymce](https://www.tinymce.com/).

Las opciones de setup de Tinymce para cada control, como la altura del control, plugins, toolbar, etc, pueden ser reemplazadas de forma unitaria o de forma global utilizando la etiqueta [>tag:JSIni].

Al iniciar el editor se espera un objeto nombrado de la forma:
TinyOptions_{NOMBRE_DEL_CAMPO}

Por ejemplo si el nombre del campo es "*notas*", la configuración del editor espera encontrar la variable: "TinyOptions_*notas*".

Para ver las posibles opciones de configuración ver

Para sobreescribir la altura en el ejemplo anterior: ``` TinyOptions_notas.height=100; ```

En Javascript, para obtener el contenido de este tipo de campos tenemos dos opciones:
- wGF('notas') que devuelve el contenido con el código html incluído.
- wGFPlain('notas') que devuelve el contenido sin el código html.

Para manipular a más bajo nivel el comportamiento del editor se puede acceder a su editor con: ``` tinymce.get( field_id ) ``` Lo más sencillo siempre es meter una instrucción *debugger* en javascript para acceder a las propiedades-métodos del editor y una vez tengamos las instrucciones deseadas trasladarlas a nuestro código.

