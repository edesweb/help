### [DB] - Database

[[DB] ini_filename [ | alias ]](#db-ini_filename-alias-)  
[[DB] php_filename [ | alias ]](#db-php_filename-alias-)  
[[DB] config_db_id [ | alias ]](#db-config_db_id-alias-)



Declaración de la base de datos a utilizar.

Con el parámetro opcional `alias` asignamos un alias a la base de datos que estamos definiendo.

A continuación se detallan las diferentes opciones de configuración.


### [DB] ini_filename [ | alias ]

Archivo que contiene los datos de acceso a una base de datos.

Ejemplo:
```
[DB] ../config/mysql_b.ini

Contenido de mysql_b.ini
engine  = mysql
host    = localhost
db      = midatabase
user    = root
pass    = xxxx
init    =
dateformat = D5 ; Picture format to save dates in database
```

```
[DB] ../config/mysql_a.ini

Contenido de mysql_a.ini
db_by_host=yes

[mytenant.com]
engine  = mysql
host    = 172.16.16.01
db      = mydatabase
user    = userdb
pass    = xxxxxx
init    =
dateformat = D5 ; Picture format to save dates in database

[localhost]
engine  = mysql
host    = localhost
db      = mydatabase
user    = userdb
pass    = xxxxxx
init    =
dateformat = D5 ; Picture format to save dates in database
```
En esta definición de mysql_a.ini tenemos la clave `db_by_host`, si su valor es "yes" o "true" el sistema obtendrá la variable `$_SERVER['HTTP_HOST']` y esa será la *sección* que escoja para obtener los parámetros.

En el ejemplo anterior, si `$_SERVER['HTTP_HOST']` contiene "mytenant.com", entonces los datos de acceso a la base de datos serán los de la sección `[mytenant.com]`.


### [DB] php_filename [ | alias ]

Archivo PHP con los datos de configuración de acceso a la BBDD.

El script debe declarar el array **$dbData** como se indica en el ejemplo:
```
[DB] ../config/mysql_a.php

Contenido de mysql_a.php

$dbData=[
    'engine'=> 'mysql',
    'host'  => 'localhost',
    'db'    => 'vcard',
    'user'  => 'root',
    'pass'  => 'xxxxx',
    'init'  => '',
    'dateformat' => 'D5' // Picture format to save dates in database
];
```

### [DB] config_db_id [ | alias ]

Identificador de base de datos definido en el archivo de configuración global **[config.ini](config.ini.md)**

En la sección [db] de config.ini se define entre otras cosas los archivos de configuración de bases de datos.

Por ejemplo
```
...config.ini...
[db]
	mysqla	= "../config/mysqla.ini"
	mysqlb	= "../config/mysqlb.php"
	dblimit_maxrec = 500
```
De tal forma que podríamos indicar "mysqla" o "mysqlb" en la etiqueta [DB]:
```
[DB] mysqla
```
```
[DB] mysqlb
```


