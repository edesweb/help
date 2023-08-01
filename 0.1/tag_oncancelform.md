##OnCancelForm

**[OnCancelForm]** [>tag:mode] 
	<br>...<br>código Javascript<br>...

En un formulario, en modo indicado, código Javascript a ejecutar al pulsar el botón de cancelación.

####Ejemplos

```
[Fields]
    Código				| cd_cli	| 0  | T  | 4	|    | *   |	|     | 
    Nombre				| nm_cli	| X  | T  | 40	|    | M   |	|  #  | 
    Fecha necimiento	| dt_nac	| D4 | T  | 10	|    | M   |	|     | 
    Edad				| edad		| 0  | T  | 2	|    | M   |	|     | 

[OnCancelForm] a,mR
	wConfirm( '¿ Desea cancelar la edición de los datos ?', { 
		title:'ATENCIÓN',
		okbutton:'SI',
		cnclbutton:'NO',
		defaultButton:'NO',
		okCallback:function(){
			wHistoryBack(_WPE_CONTEXT._WPE_HISTORY);
		},
		cnclCallback:function(){
	        	return;
		}
	});
	return;

```

Ver también: [>tag:js_wconfirm](wConfirm)  [>tag:js_whistoryback](wHistoryBack)
