##DBEnd

**[DBEnd] [>tag:Mode]**
<br>...<br>código php<br>...

Código PHP a ejecutar después de las operaciones finales de base de datos, por ejemplo después de realizar una inserción (A), modificación (M), eliminación (B), después de leer el registro en modo mR, cR, etc.

- - -
####Ejemplos

```
[DBEnd] A
	$cd_vo_regform=$_Serial;	// $_Serial es el valor del campo autoincremental que se acaba de insertar.
	$p->qQuery("insert into vo_regformcampo set cd_vo_regform={$cd_vo_regform}, .....");
    
[DBEnd] a,mR
	global $p,$_vF;
	if( $_vF['orden']*1==0 && $_vF['cd_vo_encu']!=0 ){
		$p->qQuery("select max(orden) from vo_encupreg where cd_vo_encu={$_vF['cd_vo_encu']}",$p2);
		$row2=$p->qRow($p2);
		$_vF['orden']=($row2[0]*1)+100;
	}else if( $_vF['orden']*1 ==0 ){
		$_vF['orden']=100;
	}
```
