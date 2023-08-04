## Sublist

**[Sublist]** [&gt;tag:mode](Mode) | idSublist | edfFile | relationField | size | options

Define una sublista (o listado) dentro de un formulario.

---

####Parámetros

**idSublist**:
	Identificador de la sublista.

**edfFile**:
	Archivo *EDF* que contiene la definición del listado.

**relationField**:
	Campo de relación entre el *edf* actual con el *edf* de la sublista.

**size**:
	*este parámetro no tiene efecto*

**options**:
	Modos que se permiten en la sublista (c,m,a,b), si no se indica nada será simplemente un listado.

---

####Ejemplos

```
edf que contiene la sublista :

[Fields]
    Código  | cd_cms_conte   | *  | T  | 5 |  | *   |	|   | 
  ]         | _videos        | N  | SL | 1 |  | M   |	|   | 

[SubList] a | _videos | cms_conte_vid.edf | cd_cms_conte |  | cmab
```

```
cms_conte_vid.edf :


[Title] Vídeos

[DBTable]  cms_conte_media
[DBIndex]  cd_cms_conte_media
[DBSerial] cd_cms_conte_media
[DBOrder]  orden
[DBAddFilter] type_file='V'

[Fields]
    cd_cms_conte_media	 | cd_cms_conte_media	| *  | T  | 5  | 400 | *  |   |   | 
    cd_cms_conte         | cd_cms_conte         | 0  | T  | 5  | 400 | *  |   |   | 
    type_file            | type_file	        | X  | T  | 1  |     | *  | V |   | 
    Orden                | orden		     	| 0  | T  | 11 | 100 | M  |   |   | 
    Vídeo                | cd_gs_img	        | 0  | MS | 5  | 100%| M  |   |   |

[Format] ,,,C

[MMSelector] * | cd_gs_img | V 
```
