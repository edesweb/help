<?php
/**
 * help editor
 * 
 */

if( isset($_GET['gob']) )   {

    $action = $_POST['action'];
    if( $action!='save' ) die( array('code'=>400) );

    $target = $_POST['target'];
    $md     = $_POST['md'];

    
    if( file_exists($target) ){
        if( file_put_contents($target,$md)===false ){
            die( json_encode( array('code'=>400, 'msg'=>'Error grabando') ) );
        }
    }else{
        die( json_encode( array('code'=>400, 'msg'=>'Archivo no existe') ) );
    }


    $ret=array(
        'code'=>200,
//        'target'=>$target,
//        'md'=>$md
    );
    echo json_encode($ret);
    exit;
}


$target = $_GET['f'];
//echo basename($target);

$target = realpath('../'.$target);
$target = str_replace("\\",'/',$target);
echo "Editando archivo: ".$target;  
 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
    <script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
<style>

    
</style>
</head>
<body>
    Editor...
    <textarea id='ta'><?php  echo file_get_contents($target) ?></textarea>
</body>
<script>
   
    var simplemde = new SimpleMDE({ 
        element: document.getElementById("ta") ,
        toolbar: ["bold","italic","strikethrough","heading","heading-smaller","heading-bigger","heading-1","heading-2","heading-3",
                    "code","quote","unordered-list","ordered-list","clean-block","link","image","table","horizontal-rule","preview",
                    "side-by-side","fullscreen","guide",
                    "|",
                {
                    name: "save",
                    action: function customFunction(editor){
                        savedata();
                    },
                    className: "fa fa-save",
                    title: "Save Button",
                }],
    });

    simplemde.codemirror.on("change", function(){
        document.getElementsByClassName('fa-save')[0].style.backgroundColor='#F00';
    });    
    /*
var simplemde = new SimpleMDE({
	autofocus: true,
	autosave: {
		enabled: true,
		uniqueId: "MyUniqueID",
		delay: 1000,
	},
	blockStyles: {
		bold: "__",
		italic: "_"
	},
	element: document.getElementById("ta"),
	forceSync: true,
	hideIcons: ["guide", "heading"],
	indentWithTabs: false,
	initialValue: "Hello world!",
	insertTexts: {
		horizontalRule: ["", "\n\n-----\n\n"],
		image: ["![](http://", ")"],
		link: ["[", "](http://)"],
		table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
	},
	lineWrapping: false,
	parsingConfig: {
		allowAtxHeaderWithoutSpace: true,
		strikethrough: false,
		underscoresBreakWords: true,
	},
	placeholder: "Type here...",
	previewRender: function(plainText) {
		return customMarkdownParser(plainText); // Returns HTML from a custom parser
	},
	previewRender: function(plainText, preview) { // Async method
		setTimeout(function(){
			preview.innerHTML = customMarkdownParser(plainText);
		}, 250);

		return "Loading...";
	},
	promptURLs: true,
	renderingConfig: {
		singleLineBreaks: false,
		codeSyntaxHighlighting: true,
	},
	shortcuts: {
		drawTable: "Cmd-Alt-T"
	},
	showIcons: ["code", "table"],
	spellChecker: false,
	status: false,
	status: ["autosave", "lines", "words", "cursor"], // Optional usage
	status: ["autosave", "lines", "words", "cursor", {
		className: "keystrokes",
		defaultValue: function(el) {
			this.keystrokes = 0;
			el.innerHTML = "0 Keystrokes";
		},
		onUpdate: function(el) {
			el.innerHTML = ++this.keystrokes + " Keystrokes";
		}
	}], // Another optional usage, with a custom status bar item that counts keystrokes
	styleSelectedText: false,
	tabSize: 4,
	toolbar: false,
	toolbarTips: false,
});
*/


async function savedata(){

    //if(!cmHelpChanged)return;
    //preview = (preview==undefined || preview==false)? false : true;
    //var v=cmHelpEditor.getValue();
    //var sav=$('#div_geHelpEditor_save').html();
    //if(!preview)
    //	$('#div_geHelpEditor_save').html('<i class="fa fa-cog fa-spin fa-2x"></i>');

    

    var datForm = new FormData();
	datForm.append( 'action', 'save' );
    datForm.append( 'target', '<?=$target;?>' );
    datForm.append( 'md', simplemde.value() );


    var ops={
            data:datForm,
            url:'edithelp.php', //this.url,
            callbackDone:ret=>{
//                goblin.busyCover(false);
                let sve = document.getElementsByClassName('fa-save');
                sve[0].style.backgroundColor='';

                if(ret.js!=null){
                    eval(ret.js);
                    return;
                }
            },
            callbackError:ret=>{
//                goblin.busyCover(false);
                if(ret.msg)
                    alert(ret.msg);
                if(ret.js!=null){
                    eval(ret.js);
                    return;
                }
            },
        };

 
        try{
//            goblin.busyCover();
            var ret = await gobform.send(ops);
        }catch(e){
//            goblin.busyCover(false);
        }
 

}


window.gobform={
	debug:false,

    send:async (data,url,ok,nok,settings) => {
        if(url==undefined){
            var url=data.url;
            var callbackDone=data.callbackDone;
            var callbackError=data.callbackError;
            var settings=data.settings;
            var data=data.data;
        }
        if(url==undefined){
            url=window.location.href;
        }else{
            if(url[0]!='=')
                url='?gob='+url;
        }
        if(settings==undefined){
            settings = {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    //'Content-Type': 'application/json',
                    //Accept: 'application/json',
                    //'Accept': 'application/json, text/plain, */*',
                    //'Content-Type': 'application/json',
                    //'Accept': 'application/json, text/plain, */*',
                },
                //body: JSON.stringify(data)
                body: data
            };
        }
        try {
            const fetchResponse = await fetch(url, settings);
            //const fetchResponse = await fetch('?gob=FC:public/auto.gob', settings);
            //const fetchResponse = await fetch(`?http://${location}:9000/api/sensors/`, settings);
            const data = await fetchResponse.json();
            if(data.code==200){
                if(callbackDone!=undefined)callbackDone(data);
            }else{
                if(callbackError!=undefined)callbackError(data);    
            }
        } catch (e) {
            if(callbackError!=undefined)callbackError(e);
        }    
    },
    sendCallSrv:async (ops) => {
        let id=ops.id??null;
        const url=ops.url;
        const callbackDone=ops.callbackDone??null;
        const callbackError=ops.callbackError??null;
//            var settings=data.settings;
        const data=ops.data;
        let settings=ops.settings??null;
        if(settings==null){
            settings = {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    //'Content-Type': 'application/json',
                    //'Accept': 'application/json, text/plain, */*',
                },
                //body: JSON.stringify(data)
                body: data
            };
        }
        try {
            const fetchResponse = await fetch(url, settings);
            const data = await fetchResponse.text();//  .json();
            if(callbackDone!=null){
                callbackDone(data);
            }else{
                let s = document.createElement('script');
                id=(id==null)?goblin.getNewScriptId():id;
                s.setAttribute('id',id);
                //data += "\n document.getElementById('"+id+"').remove();";
                s.innerHTML = data;
                document.body.appendChild(s);
            }
        } catch (e) {
            if(callbackError!=null)callbackError(e);
        }    
    },    
}


</script>
</html>