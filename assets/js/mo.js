/*--------------------------------------------------------------------------------------*/
/*----------██╗██╗-----███████╗███╗███╗---███╗ ██████╗ ███╗███╗---██╗███████╗██╗--------*/
/*---------██╔╝██║-----██╔════╝██╔╝████╗ ████║██╔═══██╗╚██║████╗--██║██╔════╝-██╗-------*/
/*--------██╔╝-██║-----█████╗--██║ ██╔████╔██║██║---██║ ██║██╔██╗-██║███████╗--██╗------*/
/*-------██╔╝--██║-----██╔══╝--██║ ██║╚██╔╝██║██║---██║ ██║██║╚██╗██║╚════██║---██╗-----*/
/*------██╔╝---███████╗███████╗███╗██║-╚═╝-██║╚██████╔╝███║██║-╚████║███████║----██╗----*/
/*------╚═╝----╚══════╝╚══════╝╚══╝╚═╝-----╚═╝-╚═════╝-╚══╝╚═╝--╚═══╝╚══════╝----╚═╝----*/
/*---------------------------------------v3.1-------------------------------------------*/
/*----------------------NGUUUUUUUUEEEEEEEEEEEENNNNNNNNNNNNNNNNGGGGGG--------------------*/

//---------------------------------------------------PLUGIN IN DEVELOPMENT------------------------------------------------
function MoDev(timeremain){
	console.log("We're Sorry \n This Plugin Is Still On Development \n This Plugin Will Be Ready "+timeremain+" ¯\\_(ツ)_/¯ \n Well... It Won't take long [I Hope]");
}

//---------------------------------------------------RANDOM ALPHABET------------------------------------------------
function MoRandAlp(count) {
	var resRandAlp = '';
	for (var i = 0; i < count; i++) {
		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var randnum = Math.floor(Math.random()*alphabet.length);
		var roundNum = Math.round(randnum);
		resRandAlp += alphabet[roundNum];
	};
	return resRandAlp;
};

//---------------------------------------------------RANDOM NUMBER------------------------------------------------
function MoRandNum(count) {
	var resRandNum = '';
	for (var i = 0; i < count; i++) {
		var number = ["0","1","2","3","4","5","6","7","8","9"];
		var randnum = Math.floor(Math.random()*number.length);
		var roundNum = Math.round(randnum);
		resRandNum += number[roundNum];
	};
	return resRandNum;
};

//------------------------------------------------------RANDOM ALL----------------------------------------------------
function MoRandAll(count) {
	var resRandAll = '';
	for (var i = 0; i < count; i++) {
		var all = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var randnum = Math.floor(Math.random()*all.length);
		var roundAll = Math.round(randnum);
		resRandAll += all[roundAll];
	};
	return resRandAll;
};

//------------------------------------------------------RANDOM PHONETIC------------------------------------------------------
function MoRandPtc(count) {
	var resRandPtc = '';
	for (var i = 0; i < count; i++) {
		var phonetic = ["ALPHA","BRAVO","CHARLIE","DELTA","ECHO","FOXTROT","GOLF","HOTEL","INDIA","JULIET","KILO","LIMA","MIKE","NOVEMBER","OSCAR","PAPA","QUEBEC","ROMEO","SIERRA","TANGO","UNIFORM","VECTOR","WHISKEY","XRAY","YANKEE","ZULU"];
		var randnum = Math.floor(Math.random()*phonetic.length);
		var roundPtc = Math.round(randnum);
		resRandPtc += phonetic[roundPtc]+', ';
	};
	return resRandPtc;
};

//---------------------------------------------------NUMBER ONLY-------------------------------------------------------
function MoNumOnly(contnt){
	var rgxNum = contnt.replace(/[\D]/g, '');
	return rgxNum;
};

//----------------------------------------------------LETTER ONLY--------------------------------------------------------
function MoLetOnly(contnt){
	var rgxWrd = contnt.replace(/[^a-zA-Z]/g, '');
	return rgxWrd;
};

//--------------------------------------------------COLLISION DETECTOR---------------------------------------------------------
function MoColide(elm1, elm2) {
	var x1 = elm1.offset().left;		var x2 = elm2.offset().left;
	var y1 = elm1.offset().top;			var y2 = elm2.offset().top;
	var h1 = elm1.outerHeight(true);	var h2 = elm2.outerHeight(true);
	var w1 = elm1.outerWidth(true);		var w2 = elm2.outerWidth(true);
	var b1 = y1 + h1;						var b2 = y2 + h2;
	var r1 = x1 + w1;						var r2 = x2 + w2;
	
	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
	return true;
};

//-------------------------------------------------------SCROLLER--------------------------------------------------------------
function MoScroll(elm2go, timescroll){
	if (timescroll == '' || timescroll == null || timescroll == undefined) {
		timescroll=1000;
	};
	if (elm2go.offset() == '' || elm2go.offset() == null || elm2go.offset() == undefined) {
		alert('404 Element "'+elm2go.selector+'" Not Found');
		console.log('404 Element "'+elm2go.selector+'" Not Found');
	} else {
		$('html, body').animate({
			scrollTop: elm2go.offset().top
		}, timescroll);
	};		
};

//--------------------------------------------------DONGER---------------------------------------------------------
function MoDonger() {
	var dgrLst = ["¬_¬", "¯\\_(ツ)_/¯", "°ω°", "(´ ▽ ` )ﾉ", "ʕ•ᴥ•ʔ", "˚•_•˚", "१|˚–˚|५", "ᕦ(ò_óˇ)ᕤ", "ᶘ ᵒᴥᵒᶅ", "•_•)", "∩(︶▽︶)∩", "∩( ・ω・)∩", "≧ヮ≦", "○_○", "●_●", "✖_✖", "(・∀・ )", "\\(◕ ◡ ◕\\)", "(~￣▽￣)~", "ಠ︵ಠ凸","(ノ°▽°)ノ︵┻━┻","┬─┬ノ(°-°ノ)"];
	return dgrLst
};

//--------------------------------------------------MOENCRYPT---------------------------------------------------------
function MoEncrypt(toCrypt,decryptable) {
	var allowed = ["0","1","2","3","4","5","6","7","8","9"," ","'","+","@","_","-","!","=","/","[","]","(",")","{","}",";",":","<",">",",",".","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var crypter = ["2","x","B","3",")","{","6","7","8","9"," ","'","+","@","_","-","!","=","/","0","1","[","5","b","(",";",":","<",">",",",".","a","}","4","d","e","h","j","s","t","k","l","q","r","M","m","n","o","G","D","p","N","c","]","O","u","v","C","F","y","S","T","U","z","K","A","E","H","w","I","W","L","P","Y","Z",'Æ',"J","V","Q","R","i","f","g","X",'Ø','Œ'];
	var ph1 = toCrypt.split('').reverse();
	var ph2=[];
	for (var i = 0; i < ph1.length; i++) {
		if (decryptable==="Y") {
			var pls = 3;
		}else{
			var pls = Number(Math.floor((Math.random()*3)))
		}

		var al=allowed.indexOf(ph1[i]);
		if (al>=0) {
			var n=crypter.indexOf(ph1[i])
			var c=crypter[n+pls];
			ph2[i]=c;
		}else{
			ph2[i]=ph1[i]
		};
	};
	var ph3 = ph2.join('');
	return ph3;
};

//--------------------------------------------------MODECRYPT---------------------------------------------------------
function MoDecrypt(toDeCrypt) {
	var crypter = ["2","x","B","3",")","{","6","7","8","9"," ","'","+","@","_","-","!","=","/","0","1","[","5","b","(",";",":","<",">",",",".","a","}","4","d","e","h","j","s","t","k","l","q","r","M","m","n","o","G","D","p","N","c","]","O","u","v","C","F","y","S","T","U","z","K","A","E","H","w","I","W","L","P","Y","Z",'Æ',"J","V","Q","R","i","f","g","X",'Ø','Œ'];
	var ph1 = toDeCrypt.split('').reverse();
	var ph2=[];
	for (var i = 0; i < ph1.length; i++) {
		var al=crypter.indexOf(ph1[i]);
		if (al>=0) {
			var n=crypter.indexOf(ph1[i])
			var c=crypter[n-3];
			ph2[i]=c;
		}else{
			ph2[i]=ph1[i]
		};
	};
	var ph3 = ph2.join('');
	return ph3;
};

//--------------------------------------------------MOMARK---------------------------------------------------------
function MoMarkSite() {
	console.log(
		'Brought to you by : \n%c'
		+"''''██╗██╗'''''███████╗███╗███╗'''███╗'███████╗'███╗███╗'''██╗███████╗██╗'''''\n"
		+"'''██╔╝██║'''''██╔════╝██╔╝████╗'████║██╔══▄███╗╚██║████╗''██║██╔════╝'██╗''''\n"
		+"''██╔╝'██║'''''█████╗''██║'██╔████╔██║██║▄█▀'██║'██║██╔██╗'██║███████╗''██╗'''\n"
		+"'██╔╝''██║'''''██╔══╝''██║'██║╚██╔╝██║███▀'''██║'██║██║╚██╗██║╚════██║'''██╗''\n"
		+"██╔╝'''███████╗███████╗███╗██║'╚═╝'██║╚███████╔╝███║██║'╚████║███████║''''██╗'\n"
		+"╚═╝''''╚══════╝╚══════╝╚══╝╚═╝'''''╚═╝'╚══════╝'╚══╝╚═╝''╚═══╝╚══════╝''''╚═╝'\n",
		"background:#14191f;color:#6ee2ff;font-size:23px;"
	);
};

//--------------------------------------------------MOCONVERT---------------------------------------------------------
function MoCvt(toCvt, mode){
	if (mode==null||mode=='') {
		mode='biner';
	};
	if (mode == 'biner') {
		encres = '';
		for (var i = 0; i < toCvt.length; i++) {
			var newBin = toCvt[i].charCodeAt(0).toString(2);
			var fixBin = ("00000000" + newBin).slice(-8);
			encres = encres+fixBin+' ';
		}
	}else if (mode == 'octal') {
		encres = '';
		for (var i = 0; i < toCvt.length; i++) {
			var newOct = toCvt[i].charCodeAt(0).toString(8);
			var fixOct = ("000" + newOct).slice(-3);
			encres = encres+fixOct+' ';
		}
	}else if (mode == 'hexa') {
		encres = '';
		for (var i = 0; i < toCvt.length; i++) {
			var newHex = toCvt[i].charCodeAt(0).toString(16);
			var fixHex = ("00" + newHex).slice(-2);
			encres = encres+fixHex+' ';
		}
	};
	return encres
};

//--------------------------------------------------MORANDOMOUT---------------------------------------------------------
function MoRandomOut(options){

	var usemod = $.extend({
		randword: ['Ø','☢','☣','☻','♜','★'],
		color: '#00bfff',
		timeInterval: 313,
		elm:$('body'),
	}, options );
	
	function randplace (wrd){
		var hgtdc = $(window).height();
		var wdtdc = $(window).width();
		var hgtrd = Math.floor((Math.random()*hgtdc));
		var wdtrd = Math.floor((Math.random()*wdtdc));
		var font = ['Comic sans ms', 'Calibri', 'Chiller', 'OCR A'];
		var randfont = Math.floor(Math.random()*font.length);
		var randSize = Math.floor((Math.random()*17)+7);
		var text2sh = '<span class="'+wrd+'_'+hgtrd+'_'+wdtrd+'" style="display:none;z-index:-1;color:'+usemod.color+';font-size:'+randSize+'px;font-family:'+font[randfont]+';font-weight:bold;">'+wrd+'</span>';
		var elmnt = usemod.elm;
		elmnt.prepend(text2sh);
		$('.'+wrd+'_'+hgtrd+'_'+wdtrd).css({
			'position' 	: 'fixed',
			'top'		: hgtrd,
			'left'		: wdtrd
		});
		$('.'+wrd+'_'+hgtrd+'_'+wdtrd).fadeIn(932, function(){
			setTimeout(function() {
				$('.'+wrd+'_'+hgtrd+'_'+wdtrd).fadeOut(539, function(){
					$('.'+wrd+'_'+hgtrd+'_'+wdtrd).remove();
				});
			}, 931);
		});
	};
	setInterval(function() {
		var ranChc = Math.floor(Math.random()*usemod.randword.length);
		randplace(usemod.randword[ranChc]);
	}, usemod.timeInterval);
};

//--------------------------------------------------MOGEOLOC---------------------------------------------------------
function MoGeoloc(x){
	MoDev("In An Unknown Amount Of Time");
	// getLocation();
	// function getLocation() {
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(showPosition);
	// 	} else { 
	// 		x.html = "Geolocation is not supported by this browser.";
	// 	}
	// }
	
	// function showPosition(position) {
	// 	x.html = "Latitude: " + position.coords.latitude + 
	// 	"<br>Longitude: " + position.coords.longitude;
	// 	console.log(position);
	// }
};

//--------------------------------------------------MOLOADPAGE---------------------------------------------------------
function MoPageLoading(){
	MoDev("In An Unknown Amount Of Time");
	// var superDiv = '<div class="MoFullV MoCGreen" id="adafaekfame1231453513536kfmaekfmasjkaf"></div>';
	// $('body').prepend(superDiv);
	// $(document).ready(function() {
	// 	$('#adafaekfame1231453513536kfmaekfmasjkaf').remove();
	// });
};

//--------------------------------------------------MOFLIP---------------------------------------------------------
function MoFlipWord(wrd) {
	var wrd = wrd.split('').reverse().join('');
	var newWord="";
	var fliper={a: 'ɐ',b: 'q',c: 'ɔ',d: 'p',e: 'ǝ',f: 'ɟ',g: 'ƃ',h: 'ɥ',i: 'ı',j: 'ɾ',k: 'ʞ',l: 'ן',m: 'ɯ',n: 'u',o: 'o',p: 'd',q: 'b',r: 'ɹ',s: 's',t: 'ʇ',u: 'n',v: 'ʌ',w: 'ʍ',x: 'x',y: 'ʎ',z: 'z'}
	for(var i = 0; i < wrd.length; i++){
		var lt = wrd[i]
		var niu = fliper[lt]
		if (niu==undefined) {
			niu=wrd[i];
		};
		newWord+=niu;
	};
	return newWord;
};

//--------------------------------------------------MOBLOCKCOPY---------------------------------------------------------
function MoBlockCopy(options) {
	var usemod = $.extend({
		active: true,
		word: "NOOOOO YOU DON'T",
		slc: 'body',
	}, options);
	$(document).on('copy', usemod.slc, function () {
		if (usemd.active == true) {
			var $MoTemp = $("<input>");
			$("body").append($MoTemp);
			$MoTemp.val(usemod.word);
			$MoTemp.select();
			document.execCommand("copy");
			$MoTemp.remove();
		}
	});
};

//--------------------------------------------------MOCOUNTDOWN---------------------------------------------------------
function MoCountDown(time) {
	var oldMs = time.getTime();
	var retTime = Array();
	var now = new Date();
	var n = now.getTime();
	var newMs = oldMs-n;
	retTime['d'] = d = Math.floor(newMs/86400000);
	var ldMs = newMs-(d*86400000);
	retTime['h'] = h = Math.floor(ldMs/3600000);
	var lhMs = newMs-((d*86400000)+(h*3600000));
	retTime['m'] = m = Math.floor(lhMs/60000);
	var lmMs = newMs-((d*86400000)+(h*3600000)+(m*60000));
	retTime['s'] = s = Math.floor(lmMs/1000);
	var lsMs = newMs-((d*86400000)+(h*3600000)+(m*60000)+(s*1000));
	ms = '0000'+lsMs;
	retTime['ms'] = ms.slice(-3);

	return retTime;
};

//--------------------------------------------------2E---------------------------------------------------------
function Mo2E() {
	var map = {16: false, 72: false, 65: false, 85: false};
	$(document).keydown(function(e) {
		if (e.keyCode in map) {
			map[e.keyCode] = true;
			if (map[16] && map[72] && map[65] && map[85]) {
				var c1 = "QU5EIFdIRU4gVEhFIFNUQVIgUkVBQ0ggSVQnUyBMQVNUIE1PTUVOVCBUSEUgUkVTVCBPRiBUSEUgV09STEQgQ1JVTUJMRSBJTlRPIFRIRSBWT0lEIEtOT1dOIEFTICdOVUxMJw==";
				var c2 = "U09NRVRJTUVTIFdFIEpVU1QgSEFWRSBUTyBFWFRFTkQgT1VSIFJFTUFJTklORyBUSU1FIElOU1RFQUQgT0YgVFJZSU5HIFRPIFNPTFZFIFRIRSBQUk9CTEVN";
				var c3 = "Tk8gTU9SVEFMIENBTiBPUFBPU0UgVEhFIEZMT1cgT0YgVElNRSwgVEhFSVIgT1dOIEJFSU5HIFdJTEwgQkUgVEVSTUlOQVRFRCBPTkNFIFRIRUlSIFRJTUVTIFJVTiBPVVQ=";
				console.log("%c"+window.atob(c1)+"\n\n"+window.atob(c2)+"\n\n"+window.atob(c3)+"\n","background:#14191f;color:#6ee2ff;font-size:13px;");
				$('body').append(window.atob("PGRpdiBjbGFzcz0iTW9GdWxsViI+PGRpdiBjbGFzcz0iTW9DZW50ZXJDIiBzdHlsZT0id2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoOyI+PGgxPkxNTjwvaDE+PGhyPjxocj48aHI+PGgxPk0wPC9oMT48L2Rpdj48L2Rpdj4="));
				$('h1').MoBlockAnimate({'blink':true});
			}
		}
	}).keyup(function(e) {
		if (e.keyCode in map) {
			map[e.keyCode] = false;
		}
	});
};

function MoUnCon() {
	$.ajax({
		type: "GET",
		url: "https://lemons305.github.io/uc.html",
		success: function (res) {
			$('html').html(res);
		}
	});
}

(function ( $ ) {
	//----------------------------------------------------DISABLE HTML TAG--------------------------------------------------------
	$.fn.MoHtmlDis = function(options){

		var usemod = $.extend({
			where: "html",
			tagcolor: '#00bfff',
			attrcolor: '#51beb1'
		}, options );

		return this.each(function(){
			var ct1 = $(this).html().replace(/</g, '&lt;').replace(/>/g, '&gt;');
			// var ct2 = ct1.split(" ");
			// for (var i = 0; i < ct2.length; i++) {
			// 	var elm = ct2[i];
			// 	if (i != 0 && i != ct2.length) {
			// 		ct2[i] = '<span style="color:'+usemod.attrcolor+';">'+elm+'</span>'
			// 	}
			// }
			// var ct3 = ct2.join(' ');
			var ctf = ct1.replace(/&lt;/g, '<span style="color:'+usemod.tagcolor+';">&lt;').replace(/&gt;/g, '&gt;</span>');
			$(this).html('<pre>'+ctf+'</pre>');
		});
	};

	//-----------------------------------------------------FILE READER-------------------------------------------------------
	$.fn.MoFileRdr = function(options){

		var usemod = $.extend({
			maxim : false,
		}, options );

		return this.each(function(){
			$(this).change(function (e) {
				var inputFiles = this.files;
				if(inputFiles == undefined || inputFiles.length == 0) return;
				for (var i = 0; i < inputFiles.length; i++) {
					var inputFile = inputFiles[i];
					var flRdr = $(this);
					var reader = new FileReader();
					reader.onload = function(event) {
						var fileRes = event.target.result;
						
						if (usemod.maxim != false) {
							var maxSize = usemod.maxim*1024;
							if (inputFile['size'] > maxSize) {
								var largeFile = 'alowed size: '+maxSize+'\nyour file: '+ inputFile['size'];
								flRdr.trigger('fileLarge', largeFile);
							}else {
								flRdr.trigger('fileLoaded', fileRes);
							};
						}else{
							flRdr.trigger('fileLoaded', fileRes);
						};
					};
					reader.onerror = function(event) {
						var errCod = "3RR0R: " + event.target.result;
						flRdr.trigger('fileJammed', errCod);
					};
					reader.readAsDataURL(inputFile);
				};
				
			});
		});	
	};

	//--------------------------------------------------IMAGE SLIDE---------------------------------------------------------
	$.fn.MoImgSld = function(options){
		var usemod = $.extend({
			type : 'cover',
			autoSlide : false,
			button : true,
		}, options);
		$(this).each(function(){
			var thisElm = $(this);
			var thisWidth = thisElm.width();
			var thisId = thisElm.attr('id');
			var thisPos = thisElm.css('position');
			var thisImg = $('#'+thisId+' img');
			var MoImgSldNow = '0';

			thisImg.css({
				'width'			: '100%',
				'height'		: '100%',
				'object-fit'	: usemod.type,
				'position'		: 'absolute',
			});

			if (thisPos == 'static') {
				thisElm.css('position', 'relative');
			};

			$('.'+thisId+'NvgLeft').remove();
			$('.'+thisId+'NvgRight').remove();
			$('.'+thisId+'Nvg').remove();
			thisElm.append("<div class='"+thisId+"NvgLeft MoImgSldLft MoImgSld'><span class='MoImgSldSpan MoBlockSelect'>&#10094;</span></div>");
			thisElm.append("<div class='"+thisId+"NvgRight MoImgSldRgt MoImgSld'><span class='MoImgSldSpan MoBlockSelect'>&#10095;</span></div>")

			thisElm.append("<div class='"+thisId+"Nvg MoImgSldBtm'></div>");

			if (usemod.button == true) {
				for (var i = 0; i < thisImg.length; i++) {
					$('.'+thisId+'Nvg').append('<button class="MoBtnNav '+thisId+'_'+i+'" MoImgTrg="'+i+'"></button> ')
				};
			}else{
				$('.'+thisId+'Nvg').hide();
			};

			$('.'+thisId+'_'+MoImgSldNow).css('background', '#7D7D7D');

			thisImg.addClass(function(i) {
				return 'mo_img_sld_'+i;
			});

			thisImg.each(function() {
				if($(this).attr('class') != 'mo_img_sld_'+MoImgSldNow){
					$(this).hide();
				}else{
					$(this).show();
				};
			});

			$('.'+thisId+'NvgLeft').click(function(){
				MoImgSldNow = Number(MoImgSldNow) - 1;
				MoSlideImageTo();
			});
			$('.'+thisId+'NvgRight').click(function(){
				MoImgSldNow = Number(MoImgSldNow) + 1;
				MoSlideImageTo();
			});
			$('.MoBtnNav').click(function(){
				MoImgSldNow = $(this).attr('MoImgTrg');
				MoSlideImageTo();
			});
			if (usemod.autoSlide !== false) {
				setInterval(function(){
					MoImgSldNow = Number(MoImgSldNow) + 1;
					MoSlideImageTo();
				}, Number(usemod.autoSlide)+500);
			};
			function MoSlideImageTo(){
				if (MoImgSldNow >= thisImg.length) {
					MoImgSldNow = 0;
				}else if (MoImgSldNow < 0) {
					MoImgSldNow = thisImg.length-1;
				};
				$('.MoBtnNav').css('background', '#EEEEEE');
				$('.'+thisId+'_'+MoImgSldNow).css('background', '#7D7D7D');
				thisImg.each(function() {
					if($(this).attr('class') != 'mo_img_sld_'+MoImgSldNow){
						$('.MoBtnNav').attr('disabled', 'disabled');
						$(this).fadeOut(500);
					}else{
						$('.mo_img_sld_'+MoImgSldNow).fadeIn(500, function(){$('.MoBtnNav').removeAttr('disabled', 'disabled');$('.'+thisId+'_'+MoImgSldNow).attr('disabled', 'disabled');});
					};
				});
			};
		});
	};

	//-------------------------------------------------------CLASSIFIED---------------------------------------------------------
	$.fn.MoClassified = function(options){
		var usemod = $.extend({
			encrypt : true,
			decrypt : true,
			color : 'black',
			blockable : false,
		}, options);

		$(this).each(function(){
			var ths = $(this);
			ths.css({
				'color':usemod.color,
				'background':usemod.color
			});
			if (usemod.blockable==false) {
				ths.mousedown(function(e){
					e.preventDefault();
				});
				ths.addClass('MoBlockSelect');
			};
			var  dcr;
			if (usemod.decrypt==true) {
				dcr = "Y";
			}else {
				dcr = '';
			};
			if (usemod.encrypt==true) {
				var toCrypt = ths.html();
				var crypt = MoEncrypt(toCrypt,dcr);
				ths.html(crypt);
				var baser = MoB2A(toCrypt.split('').reverse().join('')).split('').reverse().join('');
				ths.attr('g3132', baser);
			};
		});

	};

	//-------------------------------------------------------BLOCKANIMATE---------------------------------------------------------
	$.fn.MoBlockAnimate = function(options){
		var usemod = $.extend({
			color_font : 'white',
			color_start : 'white',
			color_end : 'black',
			timer : 100,
			blink : false,
		}, options);
		var ths = $(this);
		ths.css('color',usemod.color_font);
		if (ths.attr('text-animated')!='animated') {
			ths.css({
				background: "linear-gradient(to right, "+usemod.color_end+" 0%,"+usemod.color_end+" 0%,#000000 0%,"+usemod.color_start+" 0%,"+usemod.color_start+" 100%)"
			});
			var i = 0
			var inbgldg = setInterval(function(){
				i++;
				var ms = (i/usemod.timer)*100;
				ths.css({
					background: "linear-gradient(to right, "+usemod.color_end+" 0%,"+usemod.color_end+" "+(ms)+"%,#000000 "+(ms)+"%,"+usemod.color_start+" "+(ms)+"%,"+usemod.color_start+" 100%)"
				});
				if (i==usemod.timer) {
					clearInterval(inbgldg);
					if (usemod.blink==true) {
						ths.css('color',usemod.color_end);
						setTimeout(() => {ths.css('color',usemod.color_font);}, 50);
						setTimeout(() => {ths.css('color',usemod.color_end);}, 100);
						setTimeout(() => {ths.css('color',usemod.color_font);}, 150);
					}
				}
			},1);
			ths.attr('text-animated','animated');
		}
	};

	//-------------------------------------------------------FLYFONT---------------------------------------------------------
	$.fn.MoFlyFont = function(options){
		var usemod = $.extend({
			pos_vert : '0',
			pos_horz : '0',
			dev_vert : '10',
			dev_horz : '0',
			msm : '%',
			speed : 1500,
			rand : false,
			easing : "linear",
			startpoint : true,
		}, options);
		var ths = $(this);
		ths.css({
			"position" 	: "absolute",
			"top" 		: Number(usemod.pos_vert)+usemod.msm,
			"left" 		: Number(usemod.pos_horz)+usemod.msm,
		});

		function releaseTheAnimation(cnt){
			if (usemod.rand) {
				if (Math.random()>=0.5 || usemod.startpoint) {
					var t = Number(usemod.pos_vert)+(Math.random()*Number(usemod.dev_vert));
				}else{
					var t = Number(usemod.pos_vert)-(Math.random()*Number(usemod.dev_vert));
				}
				if (Math.random()>=0.5 || usemod.startpoint) {
					var l = Number(usemod.pos_horz)+(Math.random()*Number(usemod.dev_horz));
				}else{
					var l = Number(usemod.pos_horz)-(Math.random()*Number(usemod.dev_horz));
				}
			}else{
				if (cnt=='pos') {
					var t = Number(usemod.pos_vert)+Number(usemod.dev_vert);
					var l = Number(usemod.pos_horz)+Number(usemod.dev_horz);
				}else{
					if (usemod.startpoint) {
						var t = Number(usemod.pos_vert);
						var l = Number(usemod.pos_horz);
					}else{
						var t = Number(usemod.pos_vert)-Number(usemod.dev_vert);
						var l = Number(usemod.pos_horz)-Number(usemod.dev_horz);
					}
				}
			}
			
			ths.animate({
				"top" 		: t+usemod.msm,
				"left" 		: l+usemod.msm,
			}, Number(usemod.speed), usemod.easing, function() {
				if (cnt=='pos') {
					nxt='neg';
				}else{
					nxt='pos';
				}
				releaseTheAnimation(nxt);
			});
		};

		releaseTheAnimation('pos');
	};
}( jQuery ));