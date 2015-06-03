/** 
* 防范SQL注入漏洞，检测输入的字符 
* 需要检测的特殊字符及字符串有：",","/","//","'","%",""" 
* @param  strInput 待检测的字符 
*/ 
function checkInputChar(strInput){ 
var forbidChar = new Array(",","/","//","'","%","\"","?","*"); 
for (var i = 0;i < forbidChar.length ; i++){ 
  if(strInput.indexOf(forbidChar[i]) >= 0){ 
            alert("您输入的信息: "+strInput+" 中含有非法字符: "+forbidChar[i]+" 请更正！"); 
      return false; 
  } 
} 
return true; 
} 

function isNotNull(str,val){
	if(val == "" || val == " "){
		alert(str + "不能为空！");
		return false;
	}
	return true;
}

function invokeClick(element) {   
	if(element.click)element.click(); //判断是否支持click() 事件   
	else if(element.fireEvent)element.fireEvent('onclick'); //触发click() 事件   
	else if(document.createEvent){   
	var evt = document.createEvent("MouseEvents"); //创建click() 事件   
	evt.initEvent("click", true, true); //初始化click() 事件   
	element.dispatchEvent(evt); //分发click() 事件   
}   
}

function validateInputString(element){
//    var re=/^[\u4E00-\u9FA5A-Za-z0-9_()]+$/;
	var re=/[\\/:*?"<>|&]/;
    var r = element.match(re);
    if(r!=null)
    	return false;
    else
    	return true;
//    if(r!=null && r[0] == element)
//        return true;
//    else
//        return false;
}


function openwindow_exam(){
	alert(555);
		window.open ("/EntryQuestionsAction", '@Messages.get(lang,"ExaminationPaper")', "width= "+ (screen.availWidth - 10) +",, height="+ (screen.availHeight-20) +", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"); }

function openwindow_editExam(id){
	window.open ("/EntryQuestionsAction_edit/"+id, '@Messages.get(lang,"ExaminationPaper")', "width= "+ (screen.availWidth - 10) +",, height="+ (screen.availHeight-20) +", toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"); 
}

function openwindow_editepub(id){
		window.open ("/listSection/"+id); 
}
function openwindow_addepub(){
	window.open ("/createEpub"); 
}
function openwindow_resource(){
	window.open ("/assets/test/1.htm"); 
}

function openwindow_userinfo(){
	window.open ("/assets/test/repeatUserInfo.html"); 
}
