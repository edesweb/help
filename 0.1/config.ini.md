### config.ini

Archivo de configuración global.

Secciones:


#### [paths]

Se definen los paths suponiendo que un script Goblin se llama desde el Document Root.

	goblin              = "../goblin/"
	goblin_objects      = "../goblin/objects/"
	goblin_uicontrols   = "../goblin/uicontrols/"
	lang                = "../goblin/lang/"
	app                 = "../"
	sources             = "../src/"
	src_public          = "../src/public/"
	src_protected       = "../src/protected/"
	db_descriptors      = "../config/"
	_tmp                = "../_tmp/"
	_tmp_upload         = "../_tmp/upload/"
	session_files       = "../_tmp/session/"
	uploaded_files      = "../uploaded.files/"
	icons               = "../goblin/icons/"
	
* **goblin**   
Ubicación principal de Goblin

* **goblin_objects**  
Ubicación de los objetos que utiliza Goblin.

* **goblin_uicontrols**  
Ubicación de los [controles UI](ui_controls.md) que utiliza Globlin.

* **lang**   
Se ubican subcarpetas con los diferentes idiomas establecidos, por ejemplo:  

    * ../goblin/lang/es_ES  
    * ../goblin/lang/en_EN
    
    En cada una de las carpetas de idiomas se encuentran los archivos.

    * pictures.gob
    * aa_commons.ini
    
    
---


#### [setup]

* **uicontrols_set** = "goblin"  
    Juego de controles a utilizar: `path->goblin_uicontrols + uicontrols_set`
    
* **icon_set** = "flaticons"  
    Sistema de iconos a utilizar, cargará el archivo `path->goblin/icons/{icon_set}.php`  
    Los sets de iconos disponibles son: flaticons , bootstrap , lineicons , coreui , boxicons

* **checkBoxTrue** = 1  
    Valor por defecto que tiene un checkbox marcado.
    
* **checkBoxFalse** = 0  
    Valor por defecto que tiene un checkbox desmarcado    


---



#### [db]

* **dblimit_maxrec** = 500  
    Indica el número máximo de registros a mostrar en los listados.  
    `$GLOBALS['_DBLIMIT_MAXREC']` 
    
    
---
