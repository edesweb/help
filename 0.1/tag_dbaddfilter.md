##DBAddFilter

**[DBAddFilter] sql_filter **

Condición SQL que se añade a la cláusula "where".

El filtro se almacena en la variable **_DBADDFILTER** que puede ser modificada en la etiqueta [>tag:dbini]([DBIni]).

- - -
####Parámetros

**sql_filter**: condición SQL

- - -
####Ejemplos

```
[DBAddFilter] cms_noti.cd_cms_prj={$_SESSION['CD_CMS_PRJ']}

¿ $_SystemUser!='S' ? [DBAddFilter] cd_cli='{$_Cli_}'

[DBAddFilter] cms_remoteserver.cd_cli={$_SESSION['CD_CLI']} 

[DBAddFilter] cms_tpl.cd_cms_prj={$_SESSION['CD_CMS_PRJ']} 


[DBIni] *
	$this->_DBADDFILTER = "cms_noti.cd_cms_prj={$_SESSION['CD_CMS_PRJ']}";


```
