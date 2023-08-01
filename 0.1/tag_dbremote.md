##DBRemote

**[DBRemote]** RemoteServerId

Indica al motor que la base de datos se encuentra en el servidor remoto indicado por el parámetro.

Si no indicamos esta etiqueta el motor entiende que estamos utlizando la base de datos actual.

Al establecer conexión con la bbdd tendremos el manejador en la variable **$this->p** y se añadirá un registro al array *_DBREMOTE_RESOURCES*:

	$this->_DBREMOTE_RESOURCES[ RemoteServerId ]['options']
    
	$this->_DBREMOTE_RESOURCES[ RemoteServerId ]['handler']

**Nota**: el manejador de la base de datos *wepedes* siempre estará almacenado también en **$this->pw**


- - -

####Parámetros

**RemoteServerId**:
	Los identificadores de los servidores de bases de datos remotos se encuentran en la tabla **cms_remoteserver**.
    Este parámetro se corresponde con el campo **uniqid** de la tabla **cms_remoteserver**.

- - -

####Ejemplos

```
[DBTable] log_sms
[DBRemote] bbdd_statistics

```

   