## UploadFile

**[UploadFile] field | folder | disk_filename [ | extensions [ | max_bytes [ | button_text [ | button_delete [ | button_cancel ] ] ] ] ]**

Complementa la información de un campo tipo "F" (file) para permitir al usuario enviar un archivo al servidor.

Cuando el usuario selecciona un archivo automáticamente comienza el envío al servidor, mientras, el usuario puede seguir rellenando el formulario. Si el usuario pulsa el botón aceptar del formulario y la subida aún no se ha completado, se le informa con un aviso de la situación y no se le permite enviar el formulario hasta que la subida del archivo se haya completado. El archivo se almacena en una carpeta temporal en el servidor hasta que el usuario acepte el formulario o hasta que lo cancele.

---

####Parámetros

**field**: Campo de la etiqueta Fields del tipo "F" (File).

**folder**: Carpeta de destino. Ver más abajo los posibles parámetros para folder.

**disk_filename**: Nombre del archivo al guardarlo en disco, es decir, el nombre físico del archivo. Ver más abajo los posibles parámetros para disk_filename.

**extensions**: Estensiones de archivo permitidas. Las extensiones se indican separadas por coma. Si no se indica se permite cualquier tipo de archivo.

**max_bytes**: Tamaño máximo del archivo. Si no se indica no se limita el tamaño.

**button_text**: Texto del botón para seleccionar el archivo del PC local del usuario. Por defecto: "seleccionar archivo".

**button_delete**: Texo del botón para eliminar un archivo que ya estaba grabado en el servidor. Por defecto: "eliminar".

**button_cancel**: Texto del botón para cancelar el envío del archivo. Por defecto: "cancelar".

---

#####folder

Existen una serie de posibles constantes que serán sustituídas por determinados valores.

- [publicweb] o [folder_client] -> se sustituye por el valor devuelto por la función php getCliFolder.
- [originals] o [folder_originals] -> se sustituye por el valor devuelto por la función php getCliFolderOriginals.
- [thumbnails] o [folder_thumbnails] -> se sustituye por el valor devuelto por la función php getCliFolderThumbnails.
- [adaptative] o [folder_adaptative] -> se sustituye por el valor devuelto por la función php getCliFolderAdaptatives.

#####disk_filename

Existen una serie de posibles constantes que serán sustituídas por determinados valores.

- [serial] -> se sustotuye por el valor del campo [DBSerial] indicado en el edf.
- [extension] o [ext] -> se sustituye por la extensión del archivo que se envía al servidor.

 

---

####Ejemplos

```
[UploadFile] nm_gs_img | [folder_client] | [serial].[extension] 

[UploadFile] nm_gs_img | [folder_client]/otra_carpeta/ | foto_[serial].[extension]  | gif,png

[UploadFile] nm_gs_img | [folder_originals] | [serial]_file.[extension]  | gif,png | 5000000

[UploadFile] nm_gs_img | [folder_adaptative]/ | movie_[serial]_movie.[extension]  | mp4,mpg | | Seleccione un archivo |  Eliminar archivo | Cancelar envío
```
