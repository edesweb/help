##DBEndUploadFile

**[DBEndUploadFile] [>tag:Mode]**
<br>...<br>código php<br>...

Código PHP a ejecutar después de la subida de cada archivo generada por la etiqueta **[>tag:UploadFile]**.

En esta etiqueta están disponibles las siguientes variables:

$UploadingFileError (bool) Contiene true si se ha producido algún error en la subida del archivo, false en caso contrario.

$UploadFileName (string) Contiene el path y el nombre de la ubicación final del archivo.

$UploadFileNameField (string) Contiene el nombre del campo asociado en la etiqueta **[>tag:UploadFile]**.

$UploadSourceName (string) Contiene el nombre original del archivo.

- - -
####Ejemplos

```
[Fields]
	Imagen | mi_imagen | #D| F | 80 | | MLDO | | # | 
    
[UploadFile] mi_imagen | [folder_originals] | mi_imagen_file.jpg  | jpg | 5000000

[DBEndUploadFile] A

	echo "console.log('Campo: {$UploadFileNameField}');";
    En la consola del explorador mostrará: "Campo: mi_imagen"
    
	echo "console.log('UploadFileName: {$UploadFileName}');";
    En la consola del explorador mostrará: "UploadFileName: ./cms/cli/00000X/o/mi_imagen_file.jpg"

```
