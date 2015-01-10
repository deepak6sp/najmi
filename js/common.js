//parameter info
// chkName = the name of the chekboxes list without 1,2,3,... numbers
// frmName = html form name 
// chkTotal = no of checkboxes to look for
function checkAll( chkName , frmName , chkTotal )
{
	var frm = document.forms[frmName];
	var i = 0;
	for (i=1 ; i<=chkTotal ; i++)
	{
		var o = frm.elements[chkName + i.toString()];
		if (o) o.checked = true;
	}
	return false;
}

function clearAll( chkName , frmName , chkTotal )
{
	var frm = document.forms[frmName];
	var i = 0;
	for (i=1 ; i<=chkTotal ; i++)
	{
		var o = frm.elements[chkName + i.toString()];
		if (o) o.checked = false;
	}
	return false;
	
}

//additional err_msg + same parameters list as the above functions checkAll and clearAll 
//err_msg will be displayed if not checkbox is not selected
function is_checked(chkName , frmName , chkTotal, err_msg)
{
	var frm = document.forms[frmName];
	var i = 0;
	for (i=1 ; i<=chkTotal ; i++)
	{
		var o = frm.elements[chkName + i.toString()];
		if(o && o.checked)
			return true;
	}
	alert(err_msg); 
	return false;
}

function get_cookie(Name) 
{
	var Name = Name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(Name) == 0) return unescape(c.substring(Name.length,c.length));
	}
	return "";
}

function set_cookie( name, value, expires, path, domain, secure ) 
{
	/*
	if the expires variable is set, make the correct 
	expires time, the current script below will set 
	it for x number of days, to make it for hours, 
	delete * 24, for minutes, delete * 60 * 24
	*/

	var today = new Date();
	today.setTime( today.getTime() );
	
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	
	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : ";path=/" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}
	

function open_window(url, width, height)
{
	var sw = window.open(url,"subWnd","Toolbar=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+",top=100,left=200");
	if (!sw)
	{
		alert("Popup Blocker Detected!\n\nPlease disable your popup blocker software or allow popups on this page.");
	}
	else
	{
		sw.focus();
	}
	return false;
}

function open_window_full(url, width, height)
{
	var sw = window.open(url,"subWnd","Toolbar=0,menubar=0,scrollbars=0,resizable=1,width="+width+",height="+height+",top=0,left=0");
	if (!sw)
	{
		alert("Popup Blocker Detected!\n\nPlease disable your popup blocker software or allow popups on this page.");
	}
	else
	{
		sw.focus();
	}
	return false;
}

//Dont change window name 'subWnd', its being used on some other pages
function open_window_scroll(url, width, height)
{
	var sw = window.open(url,"subWnd","Toolbar=1,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height+",top=75,left=150");
	if (!sw)
	{
		alert("Popup Blocker Detected!\n\nPlease disable your popup blocker software or allow popups on this page.");
	}
	else
	{
		sw.focus();
	}
	return false;
}

function TextArea_Keypress( txtName , spnName )
{
	if (document.getElementById(txtName).value.length >= parseInt(document.getElementById(txtName).attributes['MaxChars'].value))
		return false;
}

function TextArea_Keyup( txtName , spnName )
{
	if (document.getElementById(txtName).value.length >= parseInt(document.getElementById(txtName).attributes['MaxChars'].value))
	{
		document.getElementById(txtName).value = document.getElementById(txtName).value.substr(0, parseInt(document.getElementById(txtName).attributes['MaxChars'].value)-1);
	}
	//document.getElementById(spnName).innerHTML = (parseInt(document.getElementById(txtName).attributes['MaxChars'].value)-parseInt(document.getElementById(txtName).value.length));
	document.getElementById(spnName).innerHTML = (parseInt(document.getElementById(txtName).value.length));
}

function trim(str)
{
	str = str.replace(/^\s*|\s*$/g,"");
	return str;
}

function loadwin(url)
{
	var left, top;
	var width = screen.width;
	// Resize the screen depending on the users display
	if(screen.width >= 1280 && screen.height >= 1024)
	{
		wdh = 850;
		hgt = 750;
	}
	else if(screen.width > 1024 && screen.height > 768)
	{
		wdh = 850;
		hgt = 700;
	}
	else if(screen.width >= 800 && screen.height >= 600)
	{
		wdh = 850;
		hgt = 640;
	}
	// Open the window in the middle of the screen
	left = (screen.availWidth - wdh) / 2
	top = (screen.availHeight - hgt) / 2 - 10;
	success = open(url, '', 'width=' + wdh + ',height=' + hgt + ',left=' + left + ',top=' + top + ',scrollbars=yes,resizable=yes,status=no');
}

function set_login_required_cookie(value)
{
	var exp = new Date( );
	var expiry = 60 * 60 * 1000;
//	exp.setTime(expiry);
//	document.cookie = "c_login_required="+ value +"; expires=" + exp.toGMTString() + ";path=/";
	set_cookie("c_login_required",value,expiry,"index.html");
}



function get_validate_keyword(str1, str2, str3, charlimit)
{
var newword1="", newword2="", newword3="";

	if(str1!="")
	{
		cstr = str1.split(",");			
		for(i=0; i<cstr.length; i++)
		{ 	
			newword1 = cstr[i];			
			if(newword1.length > charlimit)
			{				
				newword1 =  newword1 + "~" + "1";				
				return newword1;
			}						
		}
	}
		
	if(str2!="")
	{		
		cstr = str2.split(",");		
		for(i=0; i<cstr.length; i++)
		{	
			newword2 = cstr[i];		
			if(newword2.length > charlimit)
			{
				newword2 =  newword2 + "~" + "2";	
				return newword2;
			} 		
		}
	}			
	
	if(str3!="")
	{		
		cstr2 = str3.split(",");		
		for(i=0; i<cstr2.length; i++)
		{	
			newword3 = cstr2[i];						
			if(newword3.length > charlimit)
			{						
				newword3 =  newword3 + "~" + "3";	
				return newword3;
			} 		
		}
	}
	
	newword2 = "true~0";
	return newword2;		
}

function highlight_table(element, color)
{
	//document.getElementById(element).bgColor = color;
	document.getElementById(element).style.backgroundColor = color;
}
// show checkboxes on buyoffer list pages
function showchecks(total)
{
	total = parseInt(total);
	type = parseInt(get_cookie("c_memtype"));
	display = "none";
	if(type == 1 || type == 2) 
	{
		display = "block";
	}

	frm = document.frmOffers;
	for(i=1;i<=total;i++)
	{
		if(checkbox = document.getElementById("select_offer_"+i))
		{
			checkbox.style.display = display;			
		}
		else
		{
			break;
		}
	}
	for(i=1;i<=2;i++)
	{
		if(div = document.getElementById("div_buttons_"+i))
		{
			div.style.display = display;
		}
	}
	
}

function collect_stat()
{
	var d=document;
	var _tks_url=d.URL;
	var _tks_title=d.title;
	var _tks_userid = get_cookie("c_userid");
	var _tks_memtype = get_cookie("c_memtype");

	var p=_tks_stat_server + "lang/en/images/stats.gif?rand="+Math.round(99999999*Math.random());
	
	p+="&_tks_url="+escape(_tks_url);
	p+="&_tks_title="+escape(_tks_title);
	p+="&_tks_userid="+escape(_tks_userid);
	p+="&_tks_memtype="+escape(_tks_memtype);
    p+="&_tks_rf="+escape(parent==self?document.referrer:top.document.referrer);	

	if (typeof(_tks_offers) != 'undefined' && _tks_offers!='')
		p+="&_tks_offers="+escape(_tks_offers);

	if (typeof(_tks_offersids) != 'undefined' && _tks_offersids!='')
		p+="&_tks_offersids="+escape(_tks_offersids);

	d.write('<img id="img_tk_stat" border="0" width="1" height="1" src="'+p+'" >');
//	d.write('<iframe id="img_tk_null" border="0" src="'+p+'" ></iframe>');
}

// remvove symbols and spaces form string to make it small
function replace_special(str)
{
	re = /\$|\s|,|@|#|~|`|\%|\*|\^|\&|\(|\)|\+|\=|\[|\-|\_|\]|\[|\}|\{|\;|\:|\'|\"|\<|\>|\?|\||\\|0|1|2|3|4|5|6|7|8|9|\!|\$|\./g;
	// remove special characters like "$" and "," etc...
	return str.replace(re, "");
}

// Decimal to Hex 
function d2h(d) 
{
	return d.toString(16);
}

// hex to decimal
function h2d(h) 
{
	return parseInt(h,16);
}

function validate(str, lang, allowen)
{	
	cjk = new Array();
	cjk[0] = new Array('3400','4DB5');
	cjk[1] = new Array('4E00','9FA5');
	cjk[2] = new Array('9FA6','9FBB');
	cjk[3] = new Array('F900','FA2D');
	cjk[4] = new Array('FA30','FA6A');
	cjk[5] = new Array('FA70','FAD9');
	cjk[6] = new Array('20000','2A6D6');
	cjk[7] = new Array('2F800','2FA1D');
	cjk[8] = new Array('2E80','2E99');
	cjk[9] = new Array('2E9B','2EF3');
	cjk[10] = new Array('2F00','2FD5');
	cjk[11] = new Array('3000','303F');
	cjk[12] = new Array('3200','3243');
	cjk[13] = new Array('3250','32FE');
	cjk[14] = new Array('3300','33FF');
	cjk[15] = new Array('FF01','FF65');
	if(allowen == 1)
	{
		cjk[16] = new Array('0020','007F');
		/*cjk[16] = new Array('0061','007A');
		cjk[17] = new Array('0020','0040');*/
	}
	
	arabic = new Array(new Array('0600','06FF'),new Array('0750','077F'),new Array('FF01','FF65'));
	if(allowen == 1)
	{
		arabic[3] = new Array('0020','007F');
	}

	spanish = new Array(new Array('FF01','FF65'),new Array('0020','007F'),new Array("00A1","00FC"),new Array('20AC','20AC'));
	
	switch(lang)
	{
		case 'cn':
		case 'jp':
			lang_arr = cjk;
		break;
		case 'ar':
			lang_arr = arabic;
		break;
		case 'es':
			lang_arr = spanish;
		break;
	}
	
	var length = str.length;
	
	var found = 0;
	var noval = "";
	for(j=0; j<str.length; j++)
	{
		val = str.charCodeAt(j);
		for(i=0; i<lang_arr.length; i++)
		{
			range = h2d(lang_arr[i][0]);
			range_end = h2d(lang_arr[i][1]);
			
			if(val>=range && val<=range_end)
			{
				language_found = true;
				found++;
				break;
			}
			else
			{
				language_found = false;
			}
		}
	}
	var notfoud = parseInt(length - found);
	//alert(noval);
	if(notfoud > 0)
		return false;
	else
		return true;
		
}

// Wizard interface JS starts here
function update_error_msg(f,result,msg)
{
	var err_div = document.getElementById(f.name+'_error');
	if (result)
	{
		if (err_div)
			err_div.style.display = 'none';
	}
	else
	{
		var tbody = get_first_parent(f,'className','panel-body');
		var td = document.getElementById('helper_'+tbody.id);
		if (!err_div)
		{
			var err_div = document.createElement('div');
			err_div.id = f.name+"_error";
			err_div.className = "notice_red";
			
			var err_content_div = document.createElement('div');
			err_content_div.className = "error_content";
			err_content_div.innerHTML = msg;
			err_div.appendChild(err_content_div);
			
			//for absolute
			position_error_div(f,err_div);
			
			//relative
			//err_div.style.top = -2;
			//err_div.style.left = 0;
			err_div.style.display = "block";
			
			//f.parentNode.insertBefore(err_div,f.nextSibling);
			td.appendChild(err_div);
		}
		else
		{
			err_div.className = "notice_red";
			
			err_content_div = err_div.firstChild;
			
			err_content_div.className = "error_content";
			err_content_div.innerHTML = msg;
			
			if (f.getAttribute('tt_pos') != "bottom")
			{
				position_error_div(f,err_div);
			}
			else
			{
				err_div.style.position = 'static';
			}
			err_div.style.display = 'block';			
		}
	}
	
	return result;
}

/*
	Written by Jonathan Snook, http://www.snook.ca/jonathan
	Add-ons by Robert Nyman, http://www.robertnyman.com
	get_elements_by_classname
*/
function get_elements_by_classname(oElm, strTagName, strClassName){
	var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
	var arrReturnElements = new Array();
	strClassName = strClassName.replace(/\-/g, "\\-");
	var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
	var oElement;
	for(var i=0; i<arrElements.length; i++){
		oElement = arrElements[i];
		if(oRegExp.test(oElement.className)){
			arrReturnElements.push(oElement);
		}
	}
	return (arrReturnElements)
}

function get_first_parent(obj,attrib,value)
{
	while( (obj[attrib]==null || obj[attrib].toLowerCase()!=value.toLowerCase()) && obj.tagName.toLowerCase()!="body")
	{
		obj = obj.parentNode;
	}
	return obj;
}

function toggle_panel(o)
{
	var tr = document.getElementById(o.id);
	var imgs = tr.getElementsByTagName('img');
	if (imgs[0].src.indexOf('minus') != -1)
		imgs[0].src = imgs[0].src.replace('minus','plus');
	else
		imgs[0].src = imgs[0].src.replace('plus','minus');
	
	var tbody = document.getElementById(o.id+"_body");
	if (tbody.style.display && tbody.style.display == 'none')
	 	tbody.style.display = '';
	else
		tbody.style.display = 'none';

	reposition_error_divs();
}

function reposition_error_divs()
{
	// reposition all error divs absolute positions
	var els = document.forms[0].elements;
	for (var i=0;i<els.length;i++)
		position_error_div(els[i],document.getElementById(els[i].name+"_error"));
}

function position_error_div(f,err_obj)
{
	if (!err_obj)
		return;
		
	var tbody = get_first_parent(f,'className','panel-body');
	var td = document.getElementById('helper_'+tbody.id);
	
	err_obj.style.top = findPos(f)[1] - 2;
	err_obj.style.left = findPos(td)[0] + 2;
}

function unhide_parent(obj)
{
//	alert(obj + "|" + obj.style.display);
	if (obj.tagName.toLowerCase() != 'body' && obj.style.display!='undefined' && obj.style.display != 'none')
		unhide_parent(obj.parentNode);
	else
	{
		obj.style.display = ''
		var img = document.getElementById(obj.id+"_img");
		if (img)
			img.src = img.src.replace("plus","minus");
	}
}

function add_form_validation(frm)
{
	var els = frm.elements;
	for (var i=0;i<els.length;i++)
	{
     	var help_box = document.getElementById('help_box');
		addEvent(els[i],'blur',function(){
								var f = (!this.tagName) ? event.srcElement : this;

								//if (f.value != '' && f.className.toLowerCase().indexOf('required') != -1)
								if (f.className.toLowerCase().indexOf('required') != -1)
									validate_field(f);

								help_box.style.display = "none";
								return true;
								},true);
								
		addEvent(els[i],'focus',function(){
								var f = (!this.tagName) ? event.srcElement : this;
								var error_div = document.getElementById(f.name + '_error');	
								
								// error
								if (f.className.toLowerCase().indexOf('required') != -1)
								{
									if (!validate_form_flag)
									{
										if (error_div) error_div.style.display = 'none';
									}
									validate_form_flag = 0;
								}
								
								// help
								if (f.title != '' && (!error_div || error_div && error_div.style.display != 'block'))
								{
									help_box.firstChild.innerHTML = f.title;
									position_error_div(f,help_box);
									help_box.style.display = "block";
								}

								// open next body if field is marked last one
								if (f.getAttribute('position') && f.getAttribute('position') == 'last')
								{
									var tbody = get_first_parent(f,'className','panel-body');
									var tbody_all = get_elements_by_classname(document,"tbody","panel-body");
									for (var i=0;i<tbody_all.length;i++)
									{
										if (tbody == tbody_all[i] && tbody_all[i+1])
										{
											unhide_parent(tbody_all[i+1]);
										}
									}
								}
								
								return true;
								},true);
	}
	
	frm.onsubmit = function(){ return validate_form(frm); };
}

var validate_form_flag=0;
function validate_form(frm)
{
	validate_form_flag = 1;
	var els = frm.elements;
	var flag = true;
	for (var i=0;i<els.length;i++)
	{
		if (!validate_field(els[i]))
		{	
			unhide_parent(els[i]);
			
			// focus first error
			if (flag)
			{
				els[i].focus();
				flag = false;
			}
		} 
		position_error_div(els[i],document.getElementById(els[i].name+"_error"));
	}
	return flag;		
}

function addEvent(obj, evType, fn, useCapture)
{
  if (obj.addEventListener){
    obj.addEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.attachEvent){
    var r = obj.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("Handler could not be attached");
  }
}

function findPos(obj) {
	if (!obj) return [0,0];
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) 
		{
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}
// Wizard interface JS ends here

// div popup code starts here
function get_pagesize_with_scroll()
{
	if (window.innerHeight && window.scrollMaxY) {// Firefox
		yWithScroll = window.innerHeight + window.scrollMaxY;
		xWithScroll = window.innerWidth + window.scrollMaxX;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		yWithScroll = document.body.scrollHeight;
		xWithScroll = document.body.scrollWidth;
	} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
		yWithScroll = document.body.offsetHeight;
		xWithScroll = document.body.offsetWidth;
  	}
	arrayPageSizeWithScroll = new Array(xWithScroll,yWithScroll);
	//alert( 'The height is ' + yWithScroll + ' and the width is ' + xWithScroll );
	return arrayPageSizeWithScroll;
}

function hide_overlay()
{
	var ref = (document.getElementById("divpopup"))?document:((parent.document.getElementById("divpopup"))?parent.document:null);
	if (!ref)
		return;
		
	var el = ref.getElementById("divpopup");
	var el2 = ref.getElementById("divpopup_content");
	if (!el)
		return;

	el.style.visibility =  "hidden";
	el2.style.visibility =  "hidden";
	
	var selects = ref.getElementsByTagName("select");
	for (var i=0;i<selects.length;i++)
		selects[i].style.display = 'inline';
		
	var frame = document.getElementById('frame_divpopup') || parent.document.getElementById('frame_divpopup');
	frame.src = 'about:blank';
}

function show_overlay() 
{
	var ref = (document.getElementById("divpopup"))?document:((parent.document.getElementById("divpopup"))?parent.document:null);
	var el = ref.getElementById("divpopup");
	var el2 = ref.getElementById("divpopup_content");
	if (!el)
		return;
	
	var selects = ref.getElementsByTagName("select");
	for (var i=0;i<selects.length;i++)
		selects[i].style.display = 'none';
	
	var size = get_pagesize_with_scroll();
	el.style.height = size[1] + "px";
	el.style.visibility = "visible";
	el2.style.visibility = "visible";
}

function open_window_div(url, width, height, title)
{
	var h = (typeof(height) == 'undefined') ? 400 : height;
	var w = (typeof(width) == 'undefined') ? 400 : width;
	var title = title || '';
		
	var obj = document.getElementById('divpopup');
	var div_content;
	
	if (!obj)
	{
		//var d = "<div id='divpopup'><div id='divpopup_content' style='width:"+(w+10)+"px;margin: 200px auto;background-color: #eeeeee;border:1px solid #cccccc;padding:5px;text-align:center;'><div id='divpopup_content_head' style='width:"+(w+8)+"px;padding:0px 0 3px 0;float:top;'><div style='float:left'>"+title+"</div><div style='text-align:right'><img onclick='hide_overlay()' src='http://dev.tradekey.com.pk/lang/images/close.gif' /></div></div><div style='padding:2px;background-color:#fff; border:1px solid #cccccc'><iframe scroll='auto' frameborder='0' height='"+h+"' width='"+w+"' id='frame_divpopup' src='"+url+"'></iframe></div></div></div>";
		var d = "<div id='divpopup'></div><div id='divpopup_content' style='z-index:1000;position:absolute;width:"+(w+10)+"px;background-color: #eeeeee;border:1px solid #cccccc;padding:5px;text-align:center;'><div id='divpopup_content_head' style='width:"+(w+8)+"px;padding:0px 0 3px 0;float:top;'><div style='float:left'>"+title+"</div><div style='text-align:right'><img onclick='hide_overlay()' src='http://dev.tradekey.com.pk/lang/images/close.gif' /></div></div><div style='padding:2px;background-color:#fff; border:1px solid #cccccc'><iframe scroll='auto' frameborder='0' height='"+h+"' width='"+w+"' id='frame_divpopup' src='"+url+"'></iframe></div></div>";

		var span = document.createElement('span');
		span.innerHTML = d;
		document.body.appendChild(span);

		obj = document.getElementById('divpopup');
		div_content = document.getElementById('divpopup_content');
	}
	else
	{
		div_content = document.getElementById('divpopup_content');
		div_content.style.width = w+10 + "px";
		
		var div_content_head = document.getElementById('divpopup_content_head');
		div_content_head.style.width = w+8 + "px";
		
		var frame = document.getElementById('frame_divpopup');
		frame.src = url;
		frame.width = w;
		frame.height = h;
	}

	var frameWidth,frameHeight;
	if (self.innerWidth)
	{
		frameWidth = self.innerWidth;
		frameHeight = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientWidth)
	{
		frameWidth = document.documentElement.clientWidth;
		frameHeight = document.documentElement.clientHeight;
	}
	else if (document.body)
	{
		frameWidth = document.body.clientWidth;
		frameHeight = document.body.clientHeight;
	}

	var x = (frameWidth - w)/2;
	//var y = (frameHeight)/4 - h;
	
	div_content.style.left = x + "px";
	div_content.style.top =  document.body.scrollTop + 100 + "px";
	show_overlay();
	return false;
}
// ends here

function update_ads_clicks(id)
{
	postData = "param[id]="+id; 
	sUrl = _tkads_server+"ajax.php?action=tkads.update_ads_clicks&"+postData;
	s=document.createElement("script");
	s.setAttribute("type", "text/javascript");
	s.src=sUrl;
	document.body.appendChild(s);	
}

function fetch_ads(type,uids)
{
	var kw = "";
	var metatags = document.getElementsByTagName("meta");
	for (var cnt = 0; cnt < metatags.length; cnt++)
	{
	    var n = metatags[cnt].getAttribute("name");
		if (n == "keywords")
		{
			kw = metatags[cnt].getAttribute("content").split(",")[0];
			break;
		}
	}	

	if (kw == "")
		return;
		
	var postData = "param[search]="+kw+"&param[type]="+type; 

	if (typeof(uids) != "undefined")
		postData += "&param[uids]="+uids;
		
	sUrl = _tkads_server+"ajax.php?action=tkads.fetch_ads";
	
	var div_tk_place = '';
	if (document.getElementById('div_tk_ads1'))
		div_tk_place = 'div_tk_ads1';
	else if (document.getElementById('div_tk_ads2'))
		div_tk_place = 'div_tk_ads2';	
		
	if (div_tk_place != '')
	{
		ts =sUrl+"&"+postData+"&return=js-xdomain&target="+div_tk_place;
		s=document.createElement("script");
		s.setAttribute("type", "text/javascript");
		s.src=ts;
		document.body.appendChild(s);
	}
}

function xdomain_callback(o)
{
	document.getElementById(o.div).innerHTML=o.data;
}

/**
 * Usage: <textarea onkeyup="check_textarea_length(this)" maxlength="255" name="txt1"></textarea>
 */
function check_textarea_length(obj)
{
	var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
	if (obj.getAttribute && obj.value.length>mlength)
	obj.value=obj.value.substring(0,mlength)
}

function isdefined(variable)
{
 	return (typeof(window[variable]) == "undefined")?  false: true;
}
	
/* Function to Show the "Updated" quote on top of the 'Members Area' tab */		
function show_updated_tab(tabname)
{
	
	if(tabname!=null)
	{
		u			= $('tip_updated');
		width		= tabname.offsetWidth;
		direction	= $D.getStyle(tabname,'direction');
		$D.setStyle(u,'display','block');
	
	
	xy		= $D.getXY(tabname);
	if(direction=='ltr')
	{
		xy[0]	= parseInt(xy[0]) + parseInt(width) - parseInt($D.getStyle(u,'width'));
	}

	xy[1]	= parseInt(xy[1]) - 19;
	$D.setXY(u,xy);
	}
}

function toggle_browse_cat(show)
	{
		var o = $('div_browse_category');
		if (show)
		{
			var img = $('img_browse_category');
			var xy = $D.getXY(img);
			xy[0] += 3;
			xy[1] += 27;
			o.style.display = 'block';  
			$D.setXY(o,xy);
		}
		else
		{
			o.style.display = 'none';
		}
	}
// Show Hide Div
function showhide(id){
	var text = document.getElementById("c"+id);
	if (document.getElementById){
		obj = document.getElementById(id);
			if (obj.style.display == "none"){
				obj.style.display = "";
				text.innerHTML = "&laquo;"
			} else {
				obj.style.display = "none";
				text.innerHTML = "&raquo;";
			  }
	}
}