/**
 * Goblin Picture
 * ver: 24/10/2022
 * 
 * 
 * ES UN FORMATO ??
 *	^(?<TYPE>[SNDTEP]){1}(?<FORMAT>.+)
 *
 * NUMBER & CURRENCY (N)
 *	^(?<CURRENCY>[$€£¥]?|(~.{1,10}~)?)(?<CURRENCY_POS>\<|\>?)(?<THOUSANDS_SEP>[,\._]?)(?<SIGN>[\[\(+-]?)(?<SIGN_POS>\<|\>?)(?<FILL>[0_\*]?)(?<SIZE>[0-9]{1,})(?<DECIMALS_SEP>[,\._]?)(?<DECIMALS>[0-9]*)(?<BLANK_IF_ZERO>B?)(?<ALIGN>[LCR]?)
 *
 * STRING (S)
 *	^(?<SIZE>[0-9]+)(?<CASE>[ULCA]?)
 *
 * DATE (D)
 *	^(?<FORMAT>[0-9]+|.+)(?<SEPARATOR>[\/,\-\.\_]?)
 *
 * TIME (T)
 *	^(?<FORMAT>[0-9]+|.+)(?<SEPARATOR>[:,\-\.\_]?)
 *
 * DATETIME (I)
 *	^(?<PARAM1>(?<DATEORTIME1>[DT]{1})(?<FORMAT1>[0-9]+)(?<SEPARATOR1>[:,\/\-\.\_]?)){1}(?<SEPARATOR>.*)(?<PARAM2>(?<DATEORTIME2>[DT]{1})(?<FORMAT2>[0-9]+)(?<SEPARATOR2>[:,\/\-\.\_]?)){1}
 *
 * PATTERN (P)
 *	^(?<FORMAT>.*)
 *
 */
window.gobpic={
	debug:false,
	re_isPic:/^(?<TYPE>[SNDTEP]){1}(?<FORMAT>.+)/,
	re_formats:{
		'S':/^(?<SIZE>[0-9]+)(?<CASE>[ULCA]?)(~REAC~(?<REAC>[^~]*))?(~REVA~(?<REVA>[^~]*))?(~RETY~(?<RETY>[^~]*))?/,
		'N':/^(?<CURRENCY>[$€£¥%]?|(~.{1,10}~)?)(?<CURRENCY_POS>\<|\>?)(?<THOUSANDS_SEP>[,\._]?)(?<SIGN>[\[\(+-]?)(?<SIGN_POS>\<|\>?)(?<FILL>[0_\*]?)(?<SIZE>[0-9]{1,})(?<DECIMALS_SEP>[,\._]?)(?<DECIMALS>[0-9]*)(?<BLANK_IF_ZERO>B?)(?<ALIGN>[LCR]?)/,
		'D':/^(?<FORMAT>[0-9]+|.+)(?<SEPARATOR>[\/,\-\.\_]?)/,
		'T':/^(?<FORMAT>[0-9]+|.+)(?<SEPARATOR>[:,\-\.\_]?)/,
		'I':/^(?<PARAM1>(?<DATEORTIME1>[DT]{1})(?<FORMAT1>[0-9]+)(?<SEPARATOR1>[:,\/\-\.\_]?)){1}(?<SEPARATOR>.*)(?<PARAM2>(?<DATEORTIME2>[DT]{1})(?<FORMAT2>[0-9]+)(?<SEPARATOR2>[:,\/\-\.\_]?)){1}/,
		'P':/^(?<FORMAT>.*)/
	},
	re_date:{
		'1':{
			'FORMAT'	:'d/m/Y',
			//'ALLOWED'	:'[0-9·]',
			//'VALIDATION':'^(?<DAY1>[0-3]{1})(?<DAY2>[0-9]{1})(?<SEP1>·)(?<MONTH1>[0-1]{1})(?<MONTH2>[0-9]{1})(?<SEP2>·)(?<YEAR>[0-9]{4})$'
		},
		'2':{'FORMAT':'d/m/y'},
		'3':{'FORMAT':'m/d/Y'},
		'4':{'FORMAT':'m/d/y'},
		'5':{'FORMAT':'Y/m/d'},
		'6':{'FORMAT':'Y/d/m'},
		/*
		'4':{
			'FORMAT'	:'m/d/Y',
			//'ALLOWED'	:'[0-9·]',
			//'VALIDATION':'^(?<MONTH1>[0-1]{1})(?<MONTH2>[0-9]{1})(?<SEP1>·)(?<DAY1>[0-3]{1})(?<DAY2>[0-9]{1})(?<SEP2>·)(?<YEAR>[0-9]{4})$'
		},
		*/
	},
	re_date_formats:{
		'd':'(?<DAY1>[0-3]{1})(?<DAY2>[0-9]{1})',
		'm':'(?<MONTH1>[0-1]{1})(?<MONTH2>[0-9]{1})',
		'Y':'(?<YEAR>[0-9]{4})'
	},
	re_time:{
		'1':{'FORMAT':'H:i:s'},
		'2':{'FORMAT':'H:i'},
	},
	re_time_formats:{
		'H':'(?<HOUR>[0-2]{1})(?<HOUR2>[0-9]{1})',
		'i':'(?<MIN1>[0-5]{1})(?<MIN2>[0-9]{1})',
		's':'(?<SEC1>[0-5]{1})(?<SEC2>[0-9]{1})'
	},

	CURRENCY_POS: 	'>',
	THOUSANDS_SEP: 	'',
	DECIMALS_SEP:  	',',
	SIGN: 			'-',
	SIGN_POS: 		'<',
	DATE_SEPARATOR:	'/',
	TIME_SEPARATOR:	':',
	DATE_CONFIG: 	{
		'EN':{
			'D':['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			'l':['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			'N':[1,2,3,4,5,6,7],
			'w':[0,1,2,3,4,5,6],
			'F':['January','February','March','April','May','June','July','August','September','October','November','December'],
			'M':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		},
		'ES':{
			'D':['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
			'l':['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
			'N':[7,1,2,3,4,5,6],
			'w':[0,1,2,3,4,5,6],
			'F':['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
			'M':['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
		}
	},
	DATE_LNG: 		'ES',

	STRING_LNG: 	'ES',
	// Para los Patterns
	STRING: {
		'EN':{
			'a':'a-z',
			'A':'A-Z',
		},
		'ES': {
			'a':'a-zñ',
			'A':'A-ZÑ',
		}
	},

	log:function(s){
		if(!this.debug)return;
		console.log('gobpic| '+ this.log.caller.name + "\n     " +s);
	},

	isPic:function(pic){
		if( !this.re_isPic.test(pic) ) return false;
	    var r0 = this.re_isPic.exec(pic);
	    if( !this.re_formats[ r0.groups.TYPE ].test( r0.groups.FORMAT )  ) return false;
	    return true;
	},

	capitalize:function(s,all){
		if(all==undefined) return s.charAt(0).toUpperCase()+s.slice(1);
		return s.replace(/\b\w/g, function(l){ return l.toUpperCase() })
	},
	setCharAt:function(str,index,chr) {
    	//if(index > str.length-1) return str;
    	return str.substring(0,index) + chr + str.substring(index+1);
	},
	setPatternUnderlined:function(el,border){
		var char_w  = 1;
		var gap 	= 0.5*char_w;
		var n_char 	= el.PIC.TYPINGARRAY.length;
		var in_w 	= n_char * (char_w + gap);
		el.style.width 			= in_w+2+'ch';
		el.style.background 	= "repeating-linear-gradient(90deg, dimgrey 0, dimgrey "+char_w+"ch, transparent 0,transparent "+(char_w+gap)+"ch ) 10px 100%/"+(in_w-gap)+"ch 2px no-repeat";
		el.style.letterSpacing 	= '0.5ch';
		el.style.fontFamily     = "droid sans mono, consolas, monospace";
//		console.log(border||false)
//		if(border||false==false)
//			el.style.border 		= 'none';
		//		el.style.fontSize 		= '150%';
		el.style.paddingLeft 	= '10px';		
	},

	/* --------------------------------------------------------------------
		FUNCIONES PARA HORA
	--------------------------------------------------------------------- */
			getAMPM:function(h,m,s){
				s=s||'00';
				if(m==undefined){
					var x=h.split(':');h=x[0];m=x[1];s=x[2]||'00';
				}
				return (h>=12)? 'PM':'AM';
				//var n=new Date().setHours(h,m,s);
			},
			getampm:function(h,m,s){
				s=s||'00';
				if(m==undefined){
					var x=h.split(':');h=x[0];m=x[1];s=x[2]||'00';
				}
				return (h>=12)? 'pm':'am';
				//var n=new Date().setHours(h,m,s);
			},

	
	/* --------------------------------------------------------------------
		FUNCIONES PARA FECHA
	--------------------------------------------------------------------- */
			// Es un año bisiesto
			isLeapYear:function(y){
				y=Number(y);
				if((y&3) != 0) return false;
		    	return ((y % 100) != 0 || (y % 400) == 0);
			},
			// Get Day of Year
			getDayOfYear:function(d,m){
				d=Number(d);
				m=Number(m);
		    	var dayCount = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
				var dayOfYear = dayCount[m] + d;
				if(m>2 && this.isLeapYear()) dayOfYear++;
				return dayOfYear;
			},
			getDayOfWeek:function(v,format){
				//var n=new Date(v).getDay();
		//		if(format=='l'){
		//			z=this.DATE_CONFIG[this.DATE_LNG][format][ new Date(v).getDay() ];
		//			debugger;
		//		}
				return this.DATE_CONFIG[this.DATE_LNG][format][ new Date(v).getDay() ];
			},
			getMonth:function(v,format){
				//var n=new Date(v).getDay();
				return this.DATE_CONFIG[this.DATE_LNG][format][ new Date(v).getMonth() ];
			},
			getWeekOfYear:function(v){	//  ISO-8601
				var d=new Date(v);
				var d=new Date( Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
				var dayNum = d.getUTCDay() || 7;
				d.setUTCDate(d.getUTCDate() + 4 - dayNum);
				var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
				return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
			},
			getDaysInMonth:function(v){
				var d=new Date(v);
				return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
			},


	/* -------------------------------------------------------------------------------


	-------------------------------------------------------------------------------- */
	getData:function(picture){
		if( !this.re_isPic.test(picture) ) return false;
		var r0  		= this.re_isPic.exec(picture);
		try{
//debugger;
			var groups 				= this.re_formats[ r0.groups.TYPE ].exec( r0.groups.FORMAT ).groups;
			groups.TYPE 			= r0.groups.TYPE;
			groups.PICTURE 			= picture;

			if(groups.TYPE=='x' && groups.REAC||null!=null ){

				groups.PATTERN 			= groups.REAC;
				groups.PATTERNRE 		= new RegExp( groups.PATTERN );

				groups.PATTERNVAL 		= '^'+groups.REVA+'{,'+groups.SIZE+'}$';
				groups.PATTERNVALRE  	= new RegExp( groups.PATTERNVAL );

				groups.PATTERNTYPING  	= groups.RETY;
				groups.PATTERNTYPINGRE  = new RegExp( groups.PATTERNTYPING );

			}else if(groups.TYPE=='P'){
				var tp 					= this[ 'getTypingRexExp_'+groups.TYPE ]( groups );
				groups.PATTERN  		= this[ 'getAllowedChars_'+groups.TYPE ]( groups ); 	// todos los caracteres que puede tener el campo
				groups.PATTERNRE 		= new RegExp( groups.PATTERN );
				groups.PATTERNVALRE		= groups.PATTERNRE;
				groups.PATTERNTYPING  	= tp.PATTERNTYPING;			// mientras están tecleando, qué pueden pulsar
				groups.PATTERNTYPINGRE  = new RegExp( groups.PATTERNTYPING );
				groups.TYPINGARRAY 		= tp.TYPINGARRAY;
				groups.TYPINGARRAY2 	= tp.TYPINGARRAY2;
				groups.TYPINGARRAYRE	= tp.TYPINGARRAYRE;

			}else{
				groups.PATTERN  		= this[ 'getAllowedChars_'+groups.TYPE ]( groups ); 	// todos los caracteres que puede tener el campo
				groups.PATTERNVAL  	 	= this[ 'getValidationRexExp_'+groups.TYPE ]( groups );	// exp.regular al salir del campo para validar el contenido
				groups.PATTERNTYPING  	= this[ 'getTypingRexExp_'+groups.TYPE ]( groups );		// mientras están tecleando, qué pueden pulsar
				groups.PATTERNTYPINGRE  = new RegExp( groups.PATTERNTYPING );
				groups.PATTERNRE 		= new RegExp( groups.PATTERN );
				groups.PATTERNVALRE  	= new RegExp( groups.PATTERNVAL );
			}


			if( groups.TYPE=='D' ){
				if( this.re_date[groups.FORMAT]==undefined ){
					groups.re_date  = {'FORMAT':groups.FORMAT};
					groups.SEPARATOR= null;
				}else{
					groups.re_date = this.re_date[groups.FORMAT];
					if( groups.SEPARATOR=='' ) groups.SEPARATOR=this.DATE_SEPARATOR;
				}
			}else if( groups.TYPE=='T' ){
				
				if( this.re_time[groups.FORMAT]==undefined ){
					groups.re_time  = {'FORMAT':groups.FORMAT};
					groups.SEPARATOR= null;
				}else{
					groups.re_time = this.re_time[groups.FORMAT];
					if( groups.SEPARATOR=='' ) groups.SEPARATOR=this.TIME_SEPARATOR;
				}
			} 
		}catch(e){
			console.log('GOBPIC: '+picture+' => '+e.message);
			return false;
		}

		return groups;
		//return Object.assign( {'TYPE':r0.groups.TYPE }, {'PICTURE':picture}, groups );
	},



	format:function( data, picture ){
//debugger;		
		picture = this.getData(picture);
		if(!picture) return false;
		return this[ 'format_'+picture.TYPE ](data,picture);
	},
	deformat:function( data, picture ){
		picture = this.getData(picture);
		if(!picture) return false;
		return this[ 'deformat_'+picture.TYPE ](data,picture);
		//return Number( this[ 'deformat_'+picture.TYPE ](data,picture) );
	},
	// Quitar relleno por la izquierda
	removeFill:function( data, picture ){
		picture = this.getData(picture);
		if(!picture) return false;
		if( picture.FILL!='' )
			return data.replace( new RegExp("^"+picture.FILL+"+"), '')*1;
		return data*1;
	},


	/* --------------------------------------------------------------------------
		TYPE => P   Pattern
	-------------------------------------------------------------------------- */
					format_P:function( data, pic ){
						data+='';
						var ret='';
						var ixdata=0;
						for(var x in pic.TYPINGARRAY){
							if(pic.TYPINGARRAY[x]!=''){
								ret+=pic.TYPINGARRAY[x];
							}else{
								var c=data[ixdata]||'';
								var ta2=pic.TYPINGARRAY2[x];
								if(ta2=='#' && (c=='' ||c==' ') ){
									c='0';
								}else if(ta2=='a' || ta2=='â'){
									c=c.toLowerCase();
								}else if(ta2=='A' || ta2=='Â'){
									c=c.toUpperCase();									
								}else if(c!='' && (ta2=='<' || ta2=='#') ){
									if(!Number.isInteger(Number(c)))
										c=' ';
								}
								if(c=='') c=' ';
								ret+=c;
								ixdata+=1;
							}
						}
						return ret;
					},
					// ***********************************************************************
					deformat_P:function( data, pic ){
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						data=data+'';
//return String(data);						
						var ret='';
						for(var x in pic.TYPINGARRAY){
							if(pic.TYPINGARRAY[x]=='')
								ret+=data[x]||'';
						}

						return ret;						

						return String(data);
					},	
					// Obtener RegExp que sirve para validar cada tecla que se pulsa en OnKeyPress (los carácteres que se pueden teclear)
					getAllowedChars_P:function(pic){
						var r='';
						const regex = /(?<VAR>[^~])|(?<CONST>(~[^~]*~))/g;
						
						while ((m = regex.exec(pic.FORMAT)) !== null) {
						    if(m.index === regex.lastIndex)regex.lastIndex++;	// avoid infinite loops
						    if( m.groups.CONST!=undefined ){
						    	r += '\\'+  m.groups.CONST.replace(/~/g,'').split('').join('\\');
						    	continue;
						    }
						    for(var x in m.groups.VAR){
						    	var x=m.groups.VAR[x];
						    	if(x=='<' || x=='#'){
						    		r += '0-9';
						    	}else if( x=='A'){
						    		r += this.STRING[this.STRING_LNG]['A']+' ';
						    	}else if( x=='Â'){
						    		r += this.STRING[this.STRING_LNG]['A'];
						    		//r += 'A-Z';
						    	}else if( x=='a'){
						    		r += this.STRING[this.STRING_LNG]['a']+' ';
						    	}else if( x=='â'){
						    		r += this.STRING[this.STRING_LNG]['a'];
						    		//r += 'a-z';
						    	}else if( x=='*'){
						    		r += '.';
						    	}else{
						    		r += '\\'+x;
						    	}
						    }
						}				
						r= '['+r+']*';
						return r;
					},
					// Obtener RegExp que sirve para validar el dato en el OnChange
					getValidationRexExp_P:function(pic){
						var r = '';
						const regex = /(?<VAR>[^~])|(?<CONST>(~[^~]*~))/g;
						while ((m = regex.exec(pic.FORMAT)) !== null) {
						    if(m.index === regex.lastIndex)regex.lastIndex++;	// avoid infinite loops
						    if( m.groups.CONST!=undefined ){
						    	r += '\\'+  m.groups.CONST.replace(/~/g,'').split('').join('\\');
						    	continue;
						    }
						    for(var x in m.groups.VAR){
						    	var x=m.groups.VAR[x];
						    	if(x=='<'){
						    		r += '[0-9 ]?';
						    	}else if( x=='#'){
						    		r += '[0-9]{1}';
						    	}else if( x=='A'){
						    		r += '['+this.STRING[this.STRING_LNG]['A']+' ]{1}';
						    		//r += '[A-Z ]{1}';
						    	}else if( x=='Â'){
						    		r += '['+this.STRING[this.STRING_LNG]['A']+']{1}';
						    		//r += '[A-Z]{1}';
						    	}else if( x=='a'){
						    		r += '['+this.STRING[this.STRING_LNG]['a']+' ]{1}';
						    		//r += '[a-z ]{1}';
						    	}else if( x=='â'){
						    		r += '['+this.STRING[this.STRING_LNG]['a']+']{1}';
						    		//r += '[a-z]{1}';
						    	}else if( x=='*'){
						    		r += '.{1}';
						    	}else{
						    		r += '\\'+x;
						    	}
						    }
						}				
						return '^'+r+'$';
					},
					// Obtener RegExp que sirve para validar el dato en el OnKeypress
					getTypingRexExp_P:function(pic){
						var a=[];
						var b=[];
						var c=[];
						var r = '';
						const regex = /(?<VAR>[^~])|(?<CONST>(~[^~]*~))/g;
						while ((m = regex.exec(pic.FORMAT)) !== null) {
						    if(m.index === regex.lastIndex)regex.lastIndex++;	// avoid infinite loops
						    var str1='';
						    var str2='';
						    if( m.groups.CONST!=undefined ){
						    	var z=m.groups.CONST.replace(/~/g,'').split('');
						    	for(var x in z ){
						    		a.push( new RegExp( '\\x'+ z[x].charCodeAt(0).toString(16), 'g') );
						    		b.push( z[x] );
						    		r += '\\'+  m.groups.CONST.replace(/~/g,'').split('').join('\\');
						    		c.push( '' );
						    	}
						    	continue;
						    }
						    for(var x in m.groups.VAR){
						    	var x=m.groups.VAR[x];
						    	if(x=='<'){
						    		str1 = '[0-9 ]{1}';
						    	}else if( x=='#'){
						    		str1 = '[0-9]{1}';
						    	}else if( x=='A'){
						    		str1 = '['+this.STRING[this.STRING_LNG]['A']+' ]{1}';
						    		//str1 = '[A-Z ]{1}';
						    	}else if( x=='Â'){
						    		str1 = '['+this.STRING[this.STRING_LNG]['A']+']{1}';
						    		//str1 = '[A-Z]{1}';
						    	}else if( x=='a'){
						    		str1 = '['+this.STRING[this.STRING_LNG]['a']+' ]{1}';
						    		//str1 = '[a-z ]{1}';
						    	}else if( x=='â'){
						    		str1 = '['+this.STRING[this.STRING_LNG]['a']+']{1}';
						    		//str1 = '[a-z]{1}';
						    	}else if( x=='*'){
						    		str1 = '.{1}';
						    	}else{
						    		str1 = '\\x'+ x.charCodeAt(0).toString(16);
						    		str2 = x;
						    	}
						    	a.push( new RegExp(str1) );
						    	b.push( str2 );
						    	c.push(x);
						    }
						}
/*
console.log('getTypingRexExp_P:');
console.log('      PATTERNTYPING=> '+r);
console.log('      TYPINGARRAYRE=> '+b);
console.log('      TYPINGARRAY=> '+a );
*/
						return {PATTERNTYPING:r, TYPINGARRAYRE:a, TYPINGARRAY:b, TYPINGARRAY2:c };
					},



	/* --------------------------------------------------------------------------
		TYPE => T   TIME - ^(?<FORMAT>[0-9]+|.+)(?<SEPARATOR>[:,\-\.\_]?)
	-------------------------------------------------------------------------- */
					format_T:function( data, pic ){
//console.log('format_D  data=> '+data);
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						data+='';
						return data;
					},
					// ***********************************************************************
					_deformat_T_item:function(item,hms,h,m,s){
						if( /a/.test(item) ) return this.getampm(h,m,s);
						if( /A/.test(item) ) return this.getAMPM(h,m,s);
						if( /g/.test(item) ) return (Number(h)%12)||12;
						if( /G/.test(item) ) return Number(h);
						//if( /h/.test(item) ) return ( (Number(h)%12)||12 )<10;
						if( /H/.test(item) ) return h;
						if( /i/.test(item) ) return m;
						if( /s/.test(item) ) return s;
						return item;
					},
					deformat_T:function( data, pic ){
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						var v=data+'';
						if(v=='') return '';
//console.log('deformat_D  data=> '+data);
//console.log(pic);
//console.log(pic.re_date.FORMAT+ '__ '+pic.SEPARATOR);
						x=v.split(':');
						hor=x[0];
						min=x[1];
						seg=x[2]||'00';
						const regex = /(?<VAR>[^~])|(?<CONST>(~[^~]*~))/g;
						var v='';
						while ((m = regex.exec(pic.re_time.FORMAT)) !== null) {
						    if(m.index === regex.lastIndex)regex.lastIndex++;	// avoid infinite loops
						    if( m.groups.CONST!=undefined ){
						    	v += m.groups.CONST.replace(/~/g,'');
						    	continue;
						    }
						    if( pic.SEPARATOR!=null && /:/.test(m.groups.VAR) ){
						    	v+=pic.SEPARATOR;
						    	continue;
						    }
						    v+=this._deformat_T_item(m.groups.VAR,data,hor,min,seg);
						}				
						return String(v);
					},	
					// Obtener RegExp que sirve para validar cada tecla que se pulsa en OnKeyPress (los carácteres que se pueden teclear)
					getAllowedChars_T:function(pic){
						pic.SEPARATOR = (pic.SEPARATOR=='')?this.TIME_SEPARATOR:pic.SEPARATOR;
						vali='[0-9·]';
						return vali.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},
					// Obtener RegExp que sirve para validar el dato en el OnChange
					getValidationRexExp_T:function(pic){
						if(this.re_time[pic.FORMAT]==undefined){
							return '^.+$';
						}
						var vali=this.re_time[pic.FORMAT].VALIDATION;
						if( vali==undefined ){
							var f=this.re_time[ pic.FORMAT ].FORMAT.split(':');
							vali=new Array();
							for(var x in f){
								vali.push( this.re_time_formats[f[x]] );
							}
							pic.SEPARATOR = (pic.SEPARATOR=='')?this.TIME_SEPARATOR:pic.SEPARATOR;
							vali = '^'+vali.join( pic.SEPARATOR )+'$';
						}
						return vali.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},
					// Obtener RegExp que sirve para validar el dato en el OnKeypress
					getTypingRexExp_T:function(pic){
						return '';
						return this.re_time[pic.FORMAT].TYPING.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},


	/* --------------------------------------------------------------------------
		TYPE => D   DATE - ^(?<FORMAT>[0-9]+)(?<SEPARATOR>[\/,\-\.\_]?)
	-------------------------------------------------------------------------- */
					format_D:function( data, pic ){
//console.log('format_D  data=> '+data);
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						data+='';
//						switch(pic.CASE){
						return data;
					},
					// ***********************************************************************
					_deformat_D_item:function(item,amd,dia,mes,ano){
						//if( /\//.test(item) ) return pic.SEPARATOR;
						if( /d/.test(item) ) return dia;
						if( /j/.test(item) ) return Number(dia);			// Día del mes sin ceros iniciales 1-31
						if( /m/.test(item) ) return mes;
						if( /n/.test(item) ) return Number(mes)
						if( /Y/.test(item) ) return ano;
						if( /y/.test(item) ) return ano.substring(2);
						if( /z/.test(item) ) return this.getDayOfYear(dia,mes);			// día del año 0-365
						if( /D/.test(item) ) return this.getDayOfWeek(amd,'D');			// Día de la semana Sun(0)=>Sat(6)
						if( /l/.test(item) ) return this.getDayOfWeek(amd,'l');			// Día de la semana Sunday(0)=>Saturday(6)
						if( /N/.test(item) ) return this.getDayOfWeek(amd,'N');			// Día de la semana 1(lunes)=>7(domingo)
						if( /w/.test(item) ) return this.getDayOfWeek(amd,'w');			// Día de la semana 0(Sun)=>6(Sat)
						if( /W/.test(item) ) return this.getWeekOfYear(amd);			// Semana del año
						if( /F/.test(item) ) return this.getMonth(amd,'F');				// Nombre completo del mes 
						if( /M/.test(item) ) return this.getMonth(amd,'M');				// Nombre del mes (Ene)=>(Dic)
						if( /t/.test(item) ) return this.getDaysInMonth(amd);			// Número de días del mes dado 28=>31
						if( /L/.test(item) ) return Number(this.isLeapYear(ano));				// (1)Si es un año bisiesto
						return item;
					},
					deformat_D:function( data, pic ){
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						var v=data+'';
						if(v=='') return '';

//console.log('deformat_D  data=> '+data);
//console.log(pic);
//console.log(pic.re_date.FORMAT+ '__ '+pic.SEPARATOR);
						x=v.split('-');
						ano=x[0];
						mes=x[1];
						dia=x[2];
						const regex = /(?<VAR>[^~])|(?<CONST>(~[^~]*~))/g;
						var v='';
						while ((m = regex.exec(pic.re_date.FORMAT)) !== null) {
						    if(m.index === regex.lastIndex)regex.lastIndex++;	// avoid infinite loops
						    if( m.groups.CONST!=undefined ){
						    	v += m.groups.CONST.replace(/~/g,'');
						    	continue;
						    }
						    if( pic.SEPARATOR!=null && /\//.test(m.groups.VAR) ){
						    	v+=pic.SEPARATOR;
						    	continue;
						    }
						    v+=this._deformat_D_item(m.groups.VAR,data,dia,mes,ano);
						}				
						return String(v);
					},	
					// Obtener RegExp que sirve para validar cada tecla que se pulsa en OnKeyPress (los carácteres que se pueden teclear)
					getAllowedChars_D:function(pic){
						pic.SEPARATOR = (pic.SEPARATOR=='')?this.DATE_SEPARATOR:pic.SEPARATOR;
						vali='[0-9·]';
						return vali.replace( new RegExp(/·/,'g'),pic.SEPARATOR);

						pic.SEPARATOR = (pic.SEPARATOR=='')?this.DATE_SEPARATOR:pic.SEPARATOR;
						var vali=this.re_date[pic.FORMAT].ALLOWED;
						if( vali==undefined ) vali='[0-9·]';
						return vali.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},
					// Obtener RegExp que sirve para validar el dato en el OnChange
					getValidationRexExp_D:function(pic){

						if(this.re_date[pic.FORMAT]==undefined){
							return '^.+$';
						}
						var vali=this.re_date[pic.FORMAT].VALIDATION;
						if( vali==undefined ){
							var f=this.re_date[ pic.FORMAT ].FORMAT.split('/');
							vali=new Array();
							for(var x in f){
								vali.push( this.re_date_formats[f[x]] );
							}
							pic.SEPARATOR = (pic.SEPARATOR=='')?this.DATE_SEPARATOR:pic.SEPARATOR;
							vali = '^'+vali.join( pic.SEPARATOR )+'$';
						}
						return vali.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},
					// Obtener RegExp que sirve para validar el dato en el OnKeypress
					getTypingRexExp_D:function(pic){
						return '';
						return this.re_date[pic.FORMAT].TYPING.replace( new RegExp(/·/,'g'),pic.SEPARATOR);
					},


	/* --------------------------------------------------------------------------
		TYPE => S   String
	-------------------------------------------------------------------------- */
					format_S:function( data, pic ){
						data+='';
						switch(pic.CASE){
							case 'U':
								data=data.toUpperCase();
								break;
							case 'L':
								data=data.toLowerCase();
								break;
							case 'C':
								data=this.capitalize( data.toLowerCase() );
								break;
							case 'A':
								data=this.capitalize( data.toLowerCase(),1 );
								break;
						}
						return data.substring(0,pic.SIZE);
					},
					// ***********************************************************************
					deformat_S:function( data, pic ){
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						var v=data+'';
						switch(pic.CASE){
							case 'U': v=v.toUpperCase();break;
							case 'L': v=v.toLowerCase();break;
							case 'C': v=this.capitalize( v.toLowerCase() );break;
							case 'A': v=this.capitalize( v.toLowerCase(),1 );break;
						}
						return String(v);
					},	
					// Obtener RegExp que sirve para validar cada tecla que se pulsa en OnKeyPress (los carácteres que se pueden teclear)
					getAllowedChars_S:function(pic){
						if(pic.REAC||null!==null)
							return pic.REAC;
						return '.';
					},
					// Obtener RegExp que sirve para validar el dato en el OnChange
					getValidationRexExp_S:function(pic){
						if( pic.REVA||null!=null)
							return '^'+pic.REVA+'$';
							//return '^'+pic.REVA+'{,'+pic.SIZE+'}$';
							
						return '^.{0,'+pic.SIZE+'}$';
					},
					// Obtener RegExp que sirve para validar el dato en el OnKeypress
					getTypingRexExp_S:function(pic){
						if( pic.RETY||null!=null)
							return '^'+pic.REAC+'$';
						return '^.{0,'+pic.SIZE+'}$';
					},

	/* --------------------------------------------------------------------------
		TYPE => N  Number
	-------------------------------------------------------------------------- */
					format_N:function( data, pic ){
						this.log('1 => '+data);

						pic.THOUSANDS_SEP 	= ( pic.THOUSANDS_SEP=='' )? this.THOUSANDS_SEP 	: pic.THOUSANDS_SEP;
						pic.DECIMALS_SEP	= ( pic.DECIMALS_SEP =='' )? this.DECIMALS_SEP		: pic.DECIMALS_SEP;
						pic.DECIMALS		= ( pic.DECIMALS 	 =='' )? 0						: pic.DECIMALS;
						pic.SIGN 			= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
						pic.SIGN_POS 		= ( pic.SIGN_POS=='' )? this.SIGN_POS 	: pic.SIGN_POS;
						if( pic.SIGN!='' && pic.SIGN_POS=='>' && (data+'').indexOf('-')>-1 ){
							data = (data+'').replace(/\-/,'');
							data = Number(data)*-1;
						}
						this.log('1a => '+data);

						if( pic.BLANK_IF_ZERO=='B' && data==0 ) return '';

						var v 				= this.number_format( data, pic.DECIMALS, pic.DECIMALS_SEP, pic.THOUSANDS_SEP );

						this.log('2 => '+v);


						// FILL - Rellenar por la izquierda
						if( pic.FILL!='' ){
							var f =( pic.THOUSANDS_SEP=='' )? 0 : (v.match(new RegExp( "\\"+pic.THOUSANDS_SEP, "g")) || []).length;
							    f+=( pic.DECIMALS_SEP=='' )?  0 : (v.match(new RegExp( "\\"+pic.DECIMALS_SEP, "g")) || []).length;
				//console.log('pic.THOUSANDS_SEP => '+ pic.THOUSANDS_SEP);
				//console.log('pic.DECIMALS_SEP  => '+ pic.DECIMALS_SEP);
				//console.log('v=> '+v);
				//console.log('FILL f=>'+f+' pic.SIZE=>'+pic.SIZE +' ---> '+ (Number(pic.SIZE)+f)  );
							v = v.padStart( Number(pic.SIZE)+f, pic.FILL );
							this.log('3FILL => '+v);
						}else{
							var v 				= this.number_format( data, pic.DECIMALS, pic.DECIMALS_SEP, pic.THOUSANDS_SEP );			
						}

						// SIGN - Signo negativo
						if(data<0){
							//pic.SIGN 		= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
							//pic.SIGN_POS 	= ( pic.SIGN_POS=='' )? this.SIGN_POS 	: pic.SIGN_POS;
							if( pic.SIGN=='[' ){
								v  = v.replace(/\-/,'[');
								v += ']';
							}else if( pic.SIGN=='(' ){
								v  = v.replace(/\-/,'(');
								v += ')';
							}else if( pic.SIGN=='+' ){
								v  = v.replace(/\-/,'');
							}else if( pic.SIGN_POS=='>' ){
								v  = v.replace(/\-/,'');
								v += pic.SIGN;
							}
							this.log('4SIGN => '+v);
						}

						// CURRENCY
						if( pic.CURRENCY!='' ){
							pic.CURRENCY_POS = ( pic.CURRENCY_POS=='' )? this.CURRENCY_POS : pic.CURRENCY_POS;
							pic.CURRENCY 	 = pic.CURRENCY.replace(/~/g,'');
							v = ( pic.CURRENCY_POS=='>' )? (v+pic.CURRENCY+'') : (pic.CURRENCY+v+'');
							this.log('5CURRENCY => '+v);
						}
						this.log('6RETURN => '+v);
						return v;
					},
					// ***********************************************************************
					deformat_N:function( data, pic ){
						this.log('1 =>'+data+ '__  Picture => '+pic.PICTURE);
						var v=data+'';
						// Currency
						if( pic.CURRENCY!='' ){
							pic.CURRENCY 	 = pic.CURRENCY.replace(/~/g,'');
							v = data.replace(pic.CURRENCY,'');
							this.log('2CURRENCY => '+data);
						}
						// Signo negativo
							pic.SIGN 		= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
							pic.SIGN_POS 	= ( pic.SIGN_POS=='' )? this.SIGN_POS 	: pic.SIGN_POS;
							v = v.replace(/\]|\)/g,'');
							v = v.replace(/\[|\(/g,'-');
							if( v.indexOf('-')>-1 && pic.SIGN_POS=='>' ){
								v = v.replace('-','');
								v = '-'+v;
							}
						this.log('3 => '+v);

						pic.THOUSANDS_SEP 	= ( pic.THOUSANDS_SEP=='' )? this.THOUSANDS_SEP 	: pic.THOUSANDS_SEP;
						pic.DECIMALS_SEP	= ( pic.DECIMALS_SEP =='' )? this.DECIMALS_SEP		: pic.DECIMALS_SEP;
						pic.DECIMALS		= ( pic.DECIMALS 	 =='' )? 0						: pic.DECIMALS;

						// Miles y decimales
						if( pic.DECIMALS_SEP!=''  ) v = v.replace( new RegExp('\\'+pic.DECIMALS_SEP, 'g'), '~');
						if( pic.THOUSANDS_SEP!='' ) v = v.replace( new RegExp('\\'+pic.THOUSANDS_SEP,'g'), '');
						v = v.replace( new RegExp('~+','g') ,'.');

						this.log('4 => '+v);

						// Si tiene relleno por la izquierda se devuelve tal cual
						if( pic.FILL!='' ){
							this.log('5FILL-RETURN => '+v);
							return v;
						}
						this.log('6RETURN => '+v);
						// Como es un número se devuelve un número
						return Number(v);
					},

					// Obtener RegExp que sirve para validar cada tecla que se pulsa en OnKeyPress (los carácteres que se pueden teclear)
					getAllowedChars_N:function(pic){
						var r = '0-9';
						pic.SIGN 		= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
						if( pic.SIGN!='' && pic.SIGN!='+' )
							r += "\\-";
						if( pic.DECIMALS!=0 )
							r += '\\.';
						return '['+r+']';
					},
					// Obtener RegExp que sirve para validar el dato en el OnChange
					getValidationRexExp_N:function(pic){
						var r = '^';
						var e = '$';
						pic.SIGN 		= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
						pic.SIGN_POS 	= ( pic.SIGN_POS=='' )? this.SIGN_POS 	: pic.SIGN_POS;
						if( pic.SIGN!='' && pic.SIGN!='+' ){
							if( pic.SIGN_POS=='>' ){
								e = '\\-?$';
							}else{
								r = "^\\-?";
							}
						}
						if( pic.DECIMALS!=0 ){
							var enteros = pic.SIZE - pic.DECIMALS;
							//r += '[0-9]{1,'+enteros+'}\\.{1}[0-9]{'+pic.DECIMALS+'}';
							//r += '[0-9]{0,'+enteros+'}\\.{1}[0-9]{0,'+pic.DECIMALS+'}';
							r += '(([0-9]{0,'+enteros+'}\\.{1}[0-9]{0,'+pic.DECIMALS+'})|([0-9]{0,'+enteros+'})|(\\.{1}[0-9]{0,'+pic.DECIMALS+'}))' + e;
							//r += e;
						}else{
							r += '[0-9]{0,'+pic.SIZE+'}'+e;
						}
						return r;
					},
					// Obtener RegExp que sirve para validar el dato en el OnKeypress
					getTypingRexExp_N:function(pic){
						var r = '';
						var e = '';
						pic.SIGN 		= ( pic.SIGN 	=='' )? this.SIGN 		: pic.SIGN;
						pic.SIGN_POS 	= ( pic.SIGN_POS=='' )? this.SIGN_POS 	: pic.SIGN_POS;
						if( pic.SIGN!='' && pic.SIGN!='+' ){
							if( pic.SIGN_POS=='>' ){
								e = '\\-?';
							}else{
								r = "^\\-?";
							}
						}
						if( pic.DECIMALS!=0 ){
							var enteros = pic.SIZE - pic.DECIMALS;
							r += '[0-9]{0,'+enteros+'}\\.?[0-9]{0,'+pic.DECIMALS+'}' + e;
						}else{
							r += '[0-9]{0,'+pic.SIZE+'}'+e;
						}
						return r+'$';
					},










	/* --------------------------------------------------------------------------
		NUMBER_FORMAT
	-------------------------------------------------------------------------- */
	number_format:function(number, decimals, decPoint, thousandsSep) { // eslint-disable-line camelcase
	  //  discuss at: https://locutus.io/php/number_format/
	  // original by: Jonas Raoni Soares Silva (https://www.jsfromhell.com)
	  // improved by: Kevin van Zonneveld (https://kvz.io)
	  // improved by: davook
	  // improved by: Brett Zamir (https://brett-zamir.me)
	  // improved by: Brett Zamir (https://brett-zamir.me)
	  // improved by: Theriault (https://github.com/Theriault)
	  // improved by: Kevin van Zonneveld (https://kvz.io)
	  // bugfixed by: Michael White (https://getsprink.com)
	  // bugfixed by: Benjamin Lupton
	  // bugfixed by: Allan Jensen (https://www.winternet.no)
	  // bugfixed by: Howard Yeend
	  // bugfixed by: Diogo Resende
	  // bugfixed by: Rival
	  // bugfixed by: Brett Zamir (https://brett-zamir.me)
	  //  revised by: Jonas Raoni Soares Silva (https://www.jsfromhell.com)
	  //  revised by: Luke Smith (https://lucassmith.name)
	  //    input by: Kheang Hok Chin (https://www.distantia.ca/)
	  //    input by: Jay Klehr
	  //    input by: Amir Habibi (https://www.residence-mixte.com/)
	  //    input by: Amirouche
	  //   example 1: number_format(1234.56)
	  //   returns 1: '1,235'
	  //   example 2: number_format(1234.56, 2, ',', ' ')
	  //   returns 2: '1 234,56'
	  //   example 3: number_format(1234.5678, 2, '.', '')
	  //   returns 3: '1234.57'
	  //   example 4: number_format(67, 2, ',', '.')
	  //   returns 4: '67,00'
	  //   example 5: number_format(1000)
	  //   returns 5: '1,000'
	  //   example 6: number_format(67.311, 2)
	  //   returns 6: '67.31'
	  //   example 7: number_format(1000.55, 1)
	  //   returns 7: '1,000.6'
	  //   example 8: number_format(67000, 5, ',', '.')
	  //   returns 8: '67.000,00000'
	  //   example 9: number_format(0.9, 0)
	  //   returns 9: '1'
	  //  example 10: number_format('1.20', 2)
	  //  returns 10: '1.20'
	  //  example 11: number_format('1.20', 4)
	  //  returns 11: '1.2000'
	  //  example 12: number_format('1.2000', 3)
	  //  returns 12: '1.200'
	  //  example 13: number_format('1 000,50', 2, '.', ' ')
	  //  returns 13: '100 050.00'
	  //  example 14: number_format(1e-8, 8, '.', '')
	  //  returns 14: '0.00000001'
	  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
	  const n = !isFinite(+number) ? 0 : +number
	  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
	  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
	  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint
	  let s = ''
	  const toFixedFix = function (n, prec) {
	    if (('' + n).indexOf('e') === -1) {
	      return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
	    } else {
	      const arr = ('' + n).split('e')
	      let sig = ''
	      if (+arr[1] + prec > 0) {
	        sig = '+'
	      }
	      return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
	    }
	  }
	  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
	  s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.')
	  if (s[0].length > 3) {
	    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	  }
	  if ((s[1] || '').length < prec) {
	    s[1] = s[1] || ''
	    s[1] += new Array(prec - s[1].length + 1).join('0')
	  }
	  return s.join(dec)
	},



	/* --------------------------------------------------------------------------
		INIT ELEMENT
	-------------------------------------------------------------------------- */
	init:function(el,pic){
            var pic = pic||el.getAttribute('pic');
            if( !this.re_isPic.test(pic) ) return false;
            try{
                var iv  = el.val();    
            }catch(e){
                var iv  = el.value;    
            }
			el.value= this.format( iv, pic ); 
            el.PIC  = this.getData(pic);
            if( el.PIC.PATTERN!='' ){
//console.log('init '+el.id+'  el.PIC.TYPE=> '+el.PIC.TYPE);
                
                if( el.PIC.TYPE=='D' ){
                	// DATE
                	 //el.addEventListener("blur"      ,this.onblurDate);
                	 el.addEventListener("blur"      ,this.onblur);
               	}else if( el.PIC.TYPE=='D' ){
               		// TIME
               		//el.addEventListener("blur"      ,this.onblurTime);
               		el.addEventListener("blur"      ,this.onblur);
               	}else if( el.PIC.TYPE=='P' ){
               		this.initPatternValue(el);
               		el.addEventListener("keypress"  ,this.onkeypressPattern);
               		el.addEventListener("keydown"   ,this.onkeydownPattern);
               		el.addEventListener("click"     ,this.onclickPattern);
               		el.addEventListener("blur"      ,this.onblur);
                }else{
                	el.addEventListener("blur"      ,this.onblur);
                	el.addEventListener("change"    ,this.onchange);
                	el.addEventListener("keypress"  ,this.onkeypress);
                }

                el.addEventListener("focus"     ,this.onfocus);
                el.addEventListener("paste"     ,this.onpaste);
                //el.addEventListener("beforeinput"     ,pat.oninput);
            }
            if( el.PIC.TYPE=='S' && el.PIC.CASE!='' ){
            	el.style.textTransform = (el.PIC.CASE=='U')? 'uppercase': (el.PIC.CASE=='L')? 'lowercase' : (el.PIC.CASE=='C')? 'capitalize' : 'initial';
            }

            el.val = el.rval =  function(v){
//debugger;				
                if(v==undefined){
                	if(el.PIC.TYPE=='P')
                		return this.value;
               		return gobpic.deformat( this.value, this.PIC.PICTURE );
                }
                el.setAttribute('value',v);
                //this.value = v;
                this.value = gobpic.format( v, this.PIC.PICTURE );
                return this.value;
                //this.value = gobpic.deformat( v, this.PIC.PICTURE );
                //return gobpic.deformat( this.value, this.PIC.PICTURE );
            }
            el.format = function(pic){
// console.log('************************* '+this.value+'   this.PIC.PICTURE = '+this.PIC.PICTURE);
//                if(pic==undefined)return gobpic.format( gobpic.deformat( this.value, this.PIC.PICTURE ) , this.PIC.PICTURE ); 
				//if(pic==undefined)return gobpic.format( this.value , this.PIC.PICTURE ); 
				if(pic==undefined)return gobpic.format( this.getAttribute('value') , this.PIC.PICTURE ); 
				
                el.PIC.PICTURE=pic;
                return gobpic.format( this.value, this.PIC.PICTURE ); 
            }
            el.isvalid = function(v){
                v=(v==undefined)?this.val():v;
                return this.PIC.PATTERNVALRE.test(v);
            }
			el.isempty = function(){
				var v=this.val();
				if(v=='')return true;
				if(this.PIC.TYPE=='N'){
					if(v*1==0)return true;
				}
				return false;
			}
            if( el.PIC.TYPE=='P' ){
            	// Devolver los datos variables sin el patrón
            	el.deformat = function(data){
					data = (data==undefined)? data=el.val() : data;
					return gobpic.deformat(data,el.PIC.PICTURE);
/*
					return gobpic.deformat_P(data,el.PIC);
					var n='';
					for(var x in el.PIC.TYPINGARRAY2){
						if(el.PIC.TYPINGARRAY2[x]=='' ) continue;
						var d=data[x]||' ';
						if(el.PIC.TYPINGARRAY2[x]=='#' && d==' ')
							d='0';
						n+=d;
					}
					return String(n);
*/					
            	}
            }
	},

		initPatternValue:function(el){
			/*
				border:none;
			*/
/*		
			var char_w  = 1;
			var gap 	= 0.5*char_w;
			var n_char 	= el.PIC.TYPINGARRAY.length;
			var in_w 	= n_char * (char_w + gap);
			el.style.width 			= in_w+2+'ch';
			el.style.background 	= "repeating-linear-gradient(90deg, dimgrey 0, dimgrey "+char_w+"ch, transparent 0,transparent "+(char_w+gap)+"ch ) 10px 100%/"+(in_w-gap)+"ch 2px no-repeat";
			el.style.letterSpacing 	= '0.5ch';
			el.style.fontFamily     = "droid sans mono, consolas, monospace";
			el.style.border 		= 'none';
			el.style.fontSize 		= '150%';
			el.style.paddingLeft 	= '10px';
*/
			var s='';
			for(var x in el.PIC.TYPINGARRAY){
				s+=(el.PIC.TYPINGARRAY[x]=='')? ' ': el.PIC.TYPINGARRAY[x];
			}
			el.value=s;
		},
        onfocus:function(event){
            var e   = event || window.event;
            var o   = e.currentTarget;

            if( o.PIC.TYPE!='D' && o.PIC.TYPE!='P')
            	o.value = o.val();
            if( o.PIC.TYPE=='N'){
                o.style.textAlign = ( o.PIC.ALIGN=='R' )?  'right' : ( o.PIC.ALIGN=='C' )? 'center' : 'left';
                o.select();
            }else if( o.PIC.TYPE=='P'){

            	o.value = o.format();

            	for(var x in o.PIC.TYPINGARRAY){
            		if(o.PIC.TYPINGARRAY[x]==''){
            			e.target.selectionStart = e.target.selectionEnd = x;
            			break;
            		}
            	}

            }else{
            	o.select();
            	//e.target.selectionStart = 0;
            	//e.target.selectionEnd   = o.value.length;
            }
        },
        onblur:function(event){
//console.log('goblin.pic.js blur');
//debugger;
            var e   = event || window.event;
            var o   = e.currentTarget;
            var pic = o.getAttribute('pic');
            var val = o.value;
			gobpic.log('onblur => val= '+val);			
            if( o.PIC.TYPE!='D' && o.PIC.TYPE!='T'){
            	o.value = o.format();
				gobpic.log('onblur => o.value= '+o.value);			
            }else{
				if( !o.PIC.PATTERNVALRE.test(o.val()) ){
            		o.setAttribute('isvalid',false);
//console.log('goblin.pic.js onblur NO ES UNA FECHA VALIDA !!!!!');
				}else{
					o.setAttribute('isvalid',true);
//console.log('goblin.pic.js onblur SIIIIIIII ES UNA FECHA VALIDA !!!!!');					
				}
            }
            if( o.PIC.TYPE=='N') o.style.textAlign = 'initial';

        },
        onchange:function(event){
//debugger;			
//console.log('goblin.pic.js  onchange');
            var e   = event || window.event;
            var o   = e.currentTarget;
			o.setAttribute('value',o.value);

			//console.log('ONCHANGE '+o.id+' => '+o.value+' isvalid => '+ o.PIC.PATTERNVALRE.test(o.value) + ' RegExp => '+o.PIC.PATTERNVALRE );

			if( o.PIC.TYPE=='D' ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
			}

            if( o.PIC.TYPE!='D' && o.PIC.TYPE!='T' && !o.PIC.PATTERNVALRE.test(o.value) ){
            	o.setAttribute('isvalid',false);
//console.log('goblin.pic.js onchange NO ES VALIDO !!!!!');
                return;
            }
            o.setAttribute('isvalid',true);
        },
        onkeypress:function(event){

            var e   = event || window.event;
            var key = e.keyCode || e.which;
            //var o   = e.currentTarget;
			var o   = e.currentTarget;
            key     = String.fromCharCode(key);

            if( !o.PIC.PATTERNRE.test(key) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
            var ss  = e.target.selectionStart;
            var v   = o.value.substring(0,ss)+key+o.value.substring(ss);
            if( e.target.selectionStart==0 && e.target.selectionEnd==o.value.length ) return true;
//console.log('v=> '+v+'   o.PIC.PATTERNTYPINGRE => '+o.PIC.PATTERNTYPINGRE);
            if( !o.PIC.PATTERNTYPINGRE.test( v ) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
        },
        onclickPattern:function(event){
            var e   = event || window.event;
            var o   = e.currentTarget;

			for(var x=e.target.selectionStart ; x<o.PIC.TYPINGARRAY.length ;x++){
				if(o.PIC.TYPINGARRAY[x]==''){
            		e.target.selectionStart = x;
            		break;
            	}
			}

			/*
			for(var x=e.target.selectionEnd ; x<o.PIC.TYPINGARRAY.length ;x--){
				if(o.PIC.TYPINGARRAY[x]==''){
            		e.target.selectionEnd = x;
            		break;
            	}
			}
			*/
        },
        onkeypressPattern:function(event){
            var e   = event || window.event;
            var keyc= e.keyCode || e.which;
            var o   = e.currentTarget;
            var key     = String.fromCharCode(keyc);


			// get old value
	        var start 	 = e.target.selectionStart;
	        var end 	 = e.target.selectionEnd;
	        var oldValue = e.currentTarget.value;

//console.log("keyc=> "+keyc+"  start=> "+start+' end=> '+end+' key=> '+key+'  o.PIC.TYPINGARRAY=> '+o.PIC.TYPINGARRAYRE[start]);

			if( o.PIC.TYPINGARRAYRE[start]==undefined ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
                return;
			}
//console.log('-----> '+  o.PIC.TYPINGARRAYRE[start].test( key ));

	        if( !o.PIC.TYPINGARRAYRE[start].test( key )  ){
//console.log('goblin.pic.js onkeypressPattern => FAILLLLLLLLL');
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
                return;
	        }

			var append='';
			var xtart=start;
			var npos=0;
			while(1){
				xtart+=1;
				var nextChar = o.PIC.TYPINGARRAY[xtart];
				if(nextChar==undefined) break;
//				console.log('nextChar=> '+nextChar);
				//if(nextChar!='' && e.currentTarget.value[xtart]==undefined ){
				if(nextChar!='' ){
					append += nextChar;	//.substring(1);
					npos+=1;
				}else{
					break;
				}
			}
			if( append!='' ){
				//debugger;
				//var newValue = oldValue.slice(0, start) + key + append + oldValue.slice(end)
				//var newValue = oldValue.slice(0, start) + key + append + oldValue.slice(start+1)
				var newValue = oldValue.slice(0, start) + key + oldValue.slice(start+1)
				e.currentTarget.value = newValue;
				// replace cursor
				e.target.selectionStart = e.target.selectionEnd = start + npos +1;
				e.preventDefault();
				return;
			}


			//debugger;
			//var newValue = oldValue.slice(0, start) + key + oldValue.slice(end);
			var newValue = oldValue.slice(0, start) + key + oldValue.slice(start+1)
			e.currentTarget.value = newValue;
			// replace cursor
			e.target.selectionStart = e.target.selectionEnd = start + 1;
			e.returnValue = false;
			if( e.preventDefault )e.preventDefault();	



			/*
            if( !o.PIC.PATTERNRE.test(key) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
            var ss  = e.target.selectionStart;
            var v   = o.value.substring(0,ss)+key+o.value.substring(ss);
            if( e.target.selectionStart==0 && e.target.selectionEnd==o.value.length ) return true;
//console.log('v=> '+v+'   o.PIC.PATTERNTYPINGRE => '+o.PIC.PATTERNTYPINGRE);
            if( !o.PIC.PATTERNTYPINGRE.test( v ) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
            */
        },
        onkeydownPattern:function(event){

            var e   = event || window.event;
            var key = e.keyCode || e.which;
            var o   = e.currentTarget;
			keys     = String.fromCharCode(key);
//console.log('goblin.pic.js onkeydownPattern key=> '+key +'    keys=> '+keys);

			// get old value
	        var start 	 = e.target.selectionStart;
	        var end 	 = e.target.selectionEnd;
	        var oldValue = e.currentTarget.value;


//debugger;
	        if( key==8 ){	//Backspace
				if( o.PIC.TYPINGARRAY[start-1]!='' ){
					while( o.PIC.TYPINGARRAY[start-1]!=''){
						if(start-1<=1) break;
						start-=1;
					}
				}else{
					var newValue   = oldValue.slice(0, start-1) + ' ' + oldValue.slice(start);
					e.currentTarget.value = newValue;
					start -=1; 
				}

				e.target.selectionStart = e.target.selectionEnd = start;

				e.returnValue = false;
				if( e.preventDefault )e.preventDefault();	

			}else if( key==46 ){	//Suprimir
				var ov = oldValue;
				var spc='';
				for(var x=start; x<=end; x++){
					if(o.PIC.TYPINGARRAY[x]!='')continue;
					ov = gobpic.setCharAt(ov,x,'~');
					spc+=' ';
				}
				for( x=0; x<ov.length; x++ ){
					if( o.PIC.TYPINGARRAY[x]!='' ){
						ov = gobpic.setCharAt(ov,x,'~');
					}
				}
				ov= ov.replace(/~/g,'')+spc;
				for( x=0; x<ov.length; x++ ){
					if( o.PIC.TYPINGARRAY[x]!='' ){
						ov = ov.substring(0,x)+o.PIC.TYPINGARRAY[x]+ov.substring(x);
					}
				}
				e.currentTarget.value = ov;	//+spc;
				e.target.selectionStart = e.target.selectionEnd = start;
				e.returnValue = false; if( e.preventDefault )e.preventDefault();	
			}else if( key==36 ){			//Inicio
				if(e.shiftKey){
					e.target.selectionEnd=e.target.selectionStart;
					e.target.selectionStart=0;
					e.returnValue = false; if( e.preventDefault )e.preventDefault();
					return;
				}
            	for(var x in o.PIC.TYPINGARRAY){
            		if(o.PIC.TYPINGARRAY[x]==''){
            			e.returnValue = false; if( e.preventDefault )e.preventDefault();
            			e.target.selectionStart = e.target.selectionEnd = x;
            			return;
            		}
            	}
			}else if( key==37 ){	//Left
				var xtart=start-1;
				//console.log('start=> '+start+' end=> '+end+' o.PIC.TYPINGARRAY[start]=> '+o.PIC.TYPINGARRAY[start]);
				while(1){
					if( o.PIC.TYPINGARRAY[xtart]=='' )break;
					if(xtart<=1){
						e.target.selectionStart = e.target.selectionEnd = start;
						e.returnValue = false; if( e.preventDefault )e.preventDefault();	
						break;
					}
					xtart-=1;
		        	e.target.selectionStart = e.target.selectionEnd = xtart+2;
			    }
			}else if( key==39 ){	//Right
				//console.log('start=> '+start+' end=> '+end+' o.PIC.TYPINGARRAY[start]=> '+o.PIC.TYPINGARRAY[start]);
				var xtart=start;
				while(1){
					if( o.PIC.TYPINGARRAY[xtart]=='' )break;
					xtart+=1;
		        	e.target.selectionStart = e.target.selectionEnd = xtart-1;
		        	if(xtart>=e.currentTarget.value.length) break;
		        	
			    }
			}
		},

/*
		onkeydownDate:function(event){
            var e   = event || window.event;
            var key = e.keyCode || e.which;
            var o   = e.currentTarget;
console.log('onkeydownDate key=> '+key);
            key     = String.fromCharCode(key);

		},
		
        onkeypressDate:function(event){

            var e   = event || window.event;
            var key = e.keyCode || e.which;
            var o   = e.currentTarget;
            key     = String.fromCharCode(key);
            if( !o.PIC.PATTERNRE.test(key) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
            var ss  = e.target.selectionStart;
            var v   = o.value.substring(0,ss)+key+o.value.substring(ss);
            if( e.target.selectionStart==0 && e.target.selectionEnd==o.value.length )
            	v=key;
console.log(v);            

			// get old value
	        var start 	 = e.target.selectionStart;
	        var end 	 = e.target.selectionEnd;
	        var oldValue = e.currentTarget.value;

//            var r= o.PIC.PATTERNTYPINGRE.exec(v);
//console.log(r.groups);
console.log("e.target.selectionStart=> "+e.target.selectionStart+" e.target.selectionEnd=> "+e.target.selectionStart );
console.log("gobpic.re_date[o.PIC.FORMAT].FORMAT=> "+gobpic.re_date[o.PIC.FORMAT].FORMAT);
			var queDatoToca = gobpic.re_date[o.PIC.FORMAT].FORMAT[ e.target.selectionStart ];
console.log("queDatoToca=> "+queDatoToca);

			if( queDatoToca=='/' ){

				if( oldValue[start+1]!=undefined){
console.log('oldValue[start+1]=> '+oldValue[start+1]);
					// replace point and change input value
					var newValue = oldValue.slice(0, start) + '/'+ key + oldValue.slice(end)
					e.currentTarget.value = newValue;
				}else{
					var newValue = oldValue.slice(0, start) + key + oldValue.slice(end)
					e.currentTarget.value = newValue;
				}

				// replace cursor
				e.target.selectionStart = e.target.selectionEnd = start + 2;

				e.preventDefault();

			}

        },
*/
        onpaste:function(event){
            var e               = event || window.event;
            var o               = e.currentTarget;
            var clipboardData   = e.clipboardData || window.clipboardData;
            var pastedData      = clipboardData.getData('Text');
            if( o.PIC.TYPE=='S' ){
            	navigator.clipboard.writeText(pastedData.substring(0,o.PIC.SIZE));
            }
            //console.log('ONPASTE => datos =>__'+pastedData+'__  o.PIC.PATTERNVALRE => '+ o.PIC.PATTERNVALRE+'  isvalid? => '+ o.PIC.PATTERNVALRE.test(pastedData) );
            if( !o.PIC.PATTERNVALRE.test(pastedData) ){
                    e.returnValue = false;
                if( e.preventDefault )
                    e.preventDefault();
            }
        },        



/*
		parser:function (input) {
		    var tokenStack = [];
		    var suggestions = [];
		    var suggestion;
		    var lookAhead;

		    if (input[0] === '/') input = input.slice(1, input.length - 1);

		    var i;
		    for (i = 0; i < input.length - 1; i++) {
		        lookAhead = input[i + 1];
		        switch (input[i]) {
		            case '(':
		                tokenStack.push('(');
		                break;
		            case '[':
		                tokenStack.push('[');
		                break;
		            case ')':
		                if (tokenStack[tokenStack.length - 1] === '(') {
		                    tokenStack.pop();
		                    if (tokenStack.length === 0) {
		                        suggestion = this.generateSuggestion(input, i);
		                        if (suggestion !== null) suggestions.push(suggestion);
		                    }
		                } else throw 'bracket mismatch';
		                break;
		            case ']':
		                if (lookAhead === '{') {
		                    while (input[i] !== '}')
		                    i++;
		                }
		                if (tokenStack[tokenStack.length - 1] === '[') {
		                    tokenStack.pop();
		                    if (tokenStack.length === 0) {
		                        suggestion = this.generateSuggestion(input, i);
		                        if (suggestion !== null) suggestions.push(suggestion);
		                    }
		                } else throw 'bracket mismatch';
		                break;
		            default:
		                if (tokenStack.length === 0) {
		                    suggestion = this.generateSuggestion(input, i);
		                    if (suggestion !== null) suggestions.push(suggestion);
		                }
		                break;
		        }
		    }
		    return suggestions;
		},
		generateSuggestion:function (input, index) {
		    if (input[index].match(/[a-zA-Z\-\ \.,:]/) !== null) return {
		        'regex': input.slice(0, index) + '$',
		            'suggestion': input[index]
		    };
		    else return null;
		}
*/



}