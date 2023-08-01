##CodeEditor

**[CodeEditor]** [>tag:mode] | Field 
	<br>
        [ CodeMirror-config-values ]
    
El campo indicado, que debe ser tipo [>tag:field_ctl](TextArea), se reemplaza por un editor [CodeMirror](https://codemirror.net/doc/manual.html#config).


- - -

####Parámetros

**Field**:
	Campo de la etiqueta [>tag:fields](Fields)

**CodeMirror-config-values**:
	Se trata de la misma configuración que tiene el editor CodeMirror, algunos de los parámetros más comunes son:
    - mode:"htmlmixed | javascript | css | php | edes |..."
    - lineNumbers:true|false
    - styleActiveLine:true|false
    - tabSize:4
    - ...
    
    [Ver la documentación oficial de CodeMirror](https://codemirror.net/doc/manual.html#config)
    

- - -

####Ejemplos

```
[Fields]
    Code	| code	| #X | A  | 1	|    | M   |	|     | 
    
[CodeEditor] a,mR | code 
mode:"htmlmixed",
lineNumbers:true,
styleActiveLine:true

```

Ver también:
	[>tag:field_ctl](Fields CTL)
   