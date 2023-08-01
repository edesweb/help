##DB

**[DB] sql_ini_file **

Indica que deseamos utilizar otro controlador u otra base de datos distinta a la actual, deberemos proporcionar un archivo PHP que contenga la inicialización de variables adecuadas para la conexión a la base de datos.

La lógica de esta etiqueta es la siguiente:

- primero comprueba que el archivo indicado exista en el path actual, si exite realiza una inclusión del mismo,
- si no existe en el path actual, trata de encontrarlo en el path de configuración del sistema (variable global **WEPE_CONFIG_PATH**) y realiza una inclusión,
- por último, si no lo encuentra, el sistema se detiene reportando un error.

El archivo PHP debe contener por lo menos las siguientes variables establecidas:

- **_Sql** tipo de base de datos (mysql,informix,oracle,...)
- **_SqlHostName** 
- **_SqlUsuario**
- **_SqlPassword**
- **_SqlDiccionario** 
- **_SqlInit** array de sentencias sql a ejecutar justo después de la conexión a la base de datos


A continuación el sistema trata de realizar una conexión con los parámetros dados, si tiene éxito, estarán disponibles las siguientes propiedades de clase:

- **$this->_DB_RESOURCES[ sql_ini_file ]['options']** opciones de conexión a la base de datos
- **$this->_DB_RESOURCES[ sql_ini_file ]['handler']** puntero a la instancia de la clase qPDO (para los controladores que admiten PDO)




