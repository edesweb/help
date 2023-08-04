## CallSrv

**[CallSrv]** call_srv_id
`<br>`...`<br>`Código PHP`<br>`...

Representa una porción de código PHP que se ejecuta mediante la función javascript **[&gt;tag:js_eCallSrv](eCallSrv)**.

---

####Parámetros

**call_srv_id**:
	Identificador de la porción de código PHP.

---

####Ejemplos

```
[AddCode] a,mR | cd_gs_img_1 | A | <a href="#" id="btn_cd_gs_img_1" onclick="selImg('cd_gs_img_1')"><i class="fa fa-search fa-2x"></i></a>

[JSIni] a,mR 
	function setImg(id){
		var cd=$('#'+id).val()*1;
		if( cd==0 ){
			$("#img_"+id).attr("src",'');
		}else{
			eCallSrv('GETIMG', {cd:cd} , function(ret){
				$("#img_"+id).attr("src",'th'+ret);
			});
		}

	}

[CALLSRV] GETIMG
	$p=getPdo();
	$p->qQuery("select CONCAT(md5,LPAD(cd_cli,6,'0'),'.',extension) from gs_img where cd_gs_img={$cd}");
	$r=$p->qRow();
	$srcImg1=$r[0];
	echo $srcImg1;
```
