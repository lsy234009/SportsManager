// JavaScript Document
var dragobj={};
window.onerror=function(){return false};
var domid=1;
function on_ini(){
	String.prototype.inc=function(s){return this.indexOf(s)>-1?true:false};
	var agent=navigator.userAgent;
	window.isOpr=agent.inc("Opera");
	window.isIE=agent.inc("IE") && !isOpr;
	window.isMoz=agent.inc("Mozilla") && !isOpr && !isIE
	if(isMoz){
		Event.prototype.__defineGetter__("x",function(){return this.clientX+2})
		Event.prototype.__defineGetter__("y",function(){return this.clientY+2})
	}
	basic_ini();
};
function basic_ini(){
	window.$1=function(obj){return typeof(obj)=="string"?document.getElementById(obj):obj};
	window.oDel=function(obj){if($1(obj)!=null){$1(obj).parentNode.removeChild($1(obj))}};
}

window.oDel=function(obj){if($1(obj)!=null){$(obj).parentNode.removeChild($1(obj))}};

//on load operate TODO
/*window.onload=function(){
	on_ini();
	var o=document.getElementsByTagName("h1");
	for(var i=0;i<o.length;i++){//BUG：ここ 永遠実行しない
		o[i].onmousedown=addevent;
		//娣诲姞鎶樺彔鍜屽叧闂寜閽�
		var tt = document.createElement("div");
		tt.style.cssText = "float:left";
		var span = document.createElement("span");
		span.innerHTML = ""+o[i].innerHTML;
		span.style.cssText = "cursor:default;";
		//span.onmousedown = minusDiv;
		tt.appendChild(span);
		var close = document.createElement("div");
		close.innerHTML = "";
		close.style.cssText = "cursor:default;float:right";
		close.onmousedown = closeDiv;
		o[i].innerHTML = "";
		o[i].appendChild(tt);
		o[i].appendChild(close);
	}
}*/

/*
//鎶樺彔鎴栬�鏄剧ず灞�
function minusDiv(e)
{
e=e||event
var nr = this.parentNode.parentNode.nextSibling;    //鍙栧緱鍐呭灞�
nr.style.display = nr.style.display==""?"none":"";
}
*/

//delete section
function closeDiv(e)
{
	e=e||event
	var mdiv = this.parentNode.parentNode;    //get this node's parent Node
	oDel(mdiv);
}

//onmousedown will call this method
function addevent(e){

//	tagsF(window.jQuery);
//	alert("addevent is called");//debug
	if(dragobj.o!=null)
		return false;
	e=e||event;
	dragobj.o=this.parentNode;
//	alert(dragobj.o.id);
	dragobj.xy=getxy(dragobj.o);
	dragobj.xx=new Array((e.x-dragobj.xy[1]),(e.y-dragobj.xy[0]));
	//dragobj.o.className = 'dragging';
	dragobj.o.style.width=dragobj.xy[2]+"px";
	dragobj.o.style.height=dragobj.xy[3]+"px";
	dragobj.o.style.left=(e.x-dragobj.xx[0])+"px";
	dragobj.o.style.top=(e.y-dragobj.xx[1])+"px";
	dragobj.o.style.position="absolute";

	var om=document.createElement("div");
	dragobj.otemp=om;
	om.style.top = dragobj.o.style.top;
	om.style.width=dragobj.xy[2]+"px";
	om.style.height=dragobj.xy[3]+"px";
	$1("test_009").value = om.style.top;
	om.style.outline = "2px dotted red";//拖动控件的边框
	dragobj.o.parentNode.insertBefore(om,dragobj.o);

	return false;
}

//document.onselectstart=function(){return false}
window.onfocus=function(){document.onmouseup()};
window.onblur=function(){document.onmouseup()};

document.onmouseup=function(){
		if(dragobj.o!=null){
//			alert("onmouseup is doing!");
			dragobj.o.style.width="auto";
			dragobj.o.style.height="auto";
			dragobj.otemp.parentNode.insertBefore(dragobj.o,dragobj.otemp)
			dragobj.o.style.position="";
			dragobj.o.style.opacity=1;//Googleに対する 透明度を設定する
			dragobj.o.style.filter='alpha(opacity=100)';        //IEに対する　透明度を設定する
			oDel(dragobj.otemp);
			dragobj={};
		}

}

//drag event will invoke this mothod
document.onmousemove=function(e){//e:鼠标事件
	e=e||event
	if(dragobj.o!=null){
		dragobj.o.style.left=(e.x-dragobj.xx[0])+"px";
		dragobj.o.style.top=(e.y-dragobj.xx[1])+"px";
//		dragobj.o.style.left=e.x+"px";
//		dragobj.o.style.top=e.y+"px";
		dragobj.o.style.opacity=0.6;						//Googleに対する　透明度を設定する
		dragobj.o.style.filter='alpha(opacity=60)';        //IEに対する　透明度を設定する

		createtmpl(e, dragobj.o);    //浼犻�褰撳墠鎷栧姩瀵硅薄
	}

	var num=1;
	var dom=1;
	var td= document.getElementsByTagName("td");
	for(var i=0;i<td.length;i++){
			if(td[i].id=="number"){
				td[i].innerHTML=num+'.';
				num++;

			}
	}
}

function getxy(e){
	var a=new Array();
	var t=e.offsetTop;
	var l=e.offsetLeft;
	var w=e.offsetWidth;
	var h=e.offsetHeight;

	while(e=e.offsetParent){
		t+=e.offsetTop;
		l+=e.offsetLeft;
	}
	//$1("test_010").value= t;
	a[0]=t;a[1]=l;a[2]=w;a[3]=h
	return a;
}

function getxy_move(e){
	var a=new Array();
	var t=e.offsetTop;
	var l=e.offsetLeft;
	var w=e.offsetWidth;
	var h=e.offsetHeight;

////		$1("test_010").value=t;
	while(e=e.offsetParent){
		t+=e.offsetTop;
		l+=e.offsetLeft;
	}
	$1("test_008").value= t;
	a[0]=t;a[1]=l;a[2]=w;a[3]=h
	return a;
}
/**
 *
 * @param o 画面の元項目
 * @param e 臨時対象_マウスの移動対象（マウスの位置を記録する）
 * @returns {Number}
 */
function inner(o,e){
	var a=getxy_move(o);
	$1("test_007").value="e.x="+e.x+"_e.y="+e.y;

	if(e.x>a[1] && e.x<(a[1]+a[2]) && e.y>a[0] && e.y<(a[0]+a[3])){//上へ移動の時
		if(e.y<(a[0]+a[3]/2))
			return 1;
		else
			return 2;
	}else
		return 0;
}

//create a template aera of div
function createtmpl(e, elm){
//	alert(domid);
	for(var i=0;i<domid;i++){
		if(document.getElementById("m"+i) == null)    //宸茬粡绉诲嚭鐨勫眰涓嶅啀閬嶅巻
			continue;
		if($1("m"+i)==dragobj.o){//only run once (dic equals) 自己移动自己
//			alert("same node");
			continue;
		}
		var b=inner($1("m"+i),e);
		if(b==0)
			continue;
//		$1("test_009").value=b;
//		alert($("#test_007")[0].value);//$1("test_007").valueと同じ
		dragobj.otemp.style.width=$1("m"+i).offsetWidth;
		elm.style.width = $1("m"+i).offsetWidth;
		//1move up 2move down
		if(b==1){
			//alert(1);
			$1("m"+i).parentNode.insertBefore(dragobj.otemp,$1("m"+i));
		}else{
//			alert(2);
			if($1("m"+i).nextSibling==null){
				$1("m"+i).parentNode.appendChild(dragobj.otemp);
			}else{
				$1("m"+i).parentNode.insertBefore(dragobj.otemp,$1("m"+i).nextSibling);
			}
		}
		return;
	}

/**
for(var j=0;j<3;j++){
if($("dom"+j).innerHTML.inc("div")||$("dom"+j).innerHTML.inc("DIV"))
continue
var op=getxy($("dom"+j))
if(e.x>(op[1]+10) && e.x<(op[1]+op[2]-10)){
$("dom"+j).appendChild(dragobj.otemp)
dragobj.otemp.style.width=(op[2]-10)+"px"
}
}
*/

}
function showDelImg(imgid){
	if(document.getElementById(imgid).style.display=="none"){
		document.getElementById(imgid).style.display="";

	}
	else{
		document.getElementById(imgid).style.display="none";

	}
}
function hide(imgid){
	document.getElementById(imgid).style.display="none";
}



/** 取得题目的选项分数和 (题目的分数) */
function getFration(idNo){
	var pointIns = $("#table"+idNo+" .pointDivText"); // 取得题目所有选项的分数框元素
	var pointCount = 0;
	for(var i = 0; i < pointIns.length; i++){
		pointCount += Number(pointIns[i].value);
	}
	return pointCount;
}

/** 取得题目的选项分数和 (删除选项时使用) */
function getFration_del(idNo,id){ // idNo：页面的domid; id:选项中分数输入框的id
	// 取得题目的选项分数和
	var scoreNum = getFration(idNo);

	// 取得要删除的选项的分值
	var score = !($("#"+id).val()) ? "0" : $("#"+id).val();

	return scoreNum - Number(score); // 总分需减去删除项分值
}

/** 删除选项 */
function deltr(id,idNo){ // id: 当前选项的id； idNo:　页面中的domid
	$("#"+id).fadeOut(300,function(){
		// 删除画面中的当前选项
		$("#"+id).remove();
		// check页面选择题选项数量,若当前选择题中只剩下一个选项不提供del操作
		checkdelOptImg(idNo);
	});
}

/** check页面选择题选项数量 */
function checkdelOptImg(idNo){
	// 若当前选择题中只剩下一个选项不提供del操作
	var delImgs = $("#table"+idNo+" .delOptImg"); // 取得当前题目中所有选项元素
	if(delImgs.length == 2){
		/* IE8不支持此效果，会显示错误的图片 */
		// $("#table"+idNo+" .delOptImg").removeAttr("src"); // 删除显示del图片
		$("#table"+idNo+" .delOptImg").css("width","0px");
	} else {
		// $("#table"+idNo+" .delOptImg").attr("src","/assets/img/del.jpg");
		$("#table"+idNo+" .delOptImg").css("width","auto");
	}
}

/** 删除题目 */
function del(id){
	$("#"+id).slideUp(300,function(){
		$("#"+id).remove(); // 删除题目元素
		refreshNo(); // 刷新页面题号
		
		if($(".nr").length==0 && document.getElementById("pdf_view").style.display=="none"){
			// 当页面中没有题目时显示提示信息
			$(".empty-page").slideDown(300);
		}
	});
}
/** 更新页面题目题号 */
function refreshNo(){
	var nos = $(".questionNo"); // 取得试卷中剩余题目的题号数组

	var questionIds = $(".questionDBId");// 取得画面所有题目在DB中的id
	var ids = new Array();// 存储所有题目Id的数组
	// 对题目题号进行刷新按题目顺序赋值
	for(var i = 0; i < nos.length; i++){
		nos[i].innerHTML = i+1; // 题号从1开始

		ids[i] = questionIds[i].value;
	}
	var ids_str = ids.join(",");
	//alert(ids_str);
	if(ids.length>0){
		// 更新页面题目题号在数据库中的数据
		$.ajax({ url: "/EntryQuestionsAction_updateAllQuestionNo/"+ids,
				 success: function(){
					 //showMessage(1,"updateAllQuestionNo");
				 },
				 error: function(){
					 //showMessage(1,"update questionNo Error");
				 }});
	}
}
/** 取得增加下一题的题号 */
function getQuestionNo(){
	var lastNo = 0;// 取得当前试卷最后一题的题号
	var nos = $(".questionNo");//IE8不支持 document.getElementsByClassName("questionNo"); 比较坑
//	var nos = document.getElementsByClassName("questionNo");//
	//alert(nos.length);
	if(nos.size()>0){
		lastNo = nos[nos.size()-1].innerHTML;
	}
	return Number(lastNo)+1;// 下一题的题号
}

/** 更新填空题分数区域的统计number */
function refreshFillPointNo(idNo){ // idNo: 页面domid用于区别题目
	// 所在填空题的题目输入框div元素中所有的填空space的input元素
	var spaces = $("#text"+idNo+" .space");

	//alert(spaces.length);
	// 更新显示题目中的总计空格
	$("#spaceCount"+idNo).text(spaces.length);
	// 更新显示题目总分
	var score = $("#pointText_fill"+idNo).val(); // 每空分数
	$("#pointCount"+idNo).text((spaces.length)*score);
}

/** 修改题目难度等级 */
function Difficulty(id,dom){
	var url="/assets/img/rating.png";
	if(id==5){
			for(var i=0;i<id;i++){
				var img=document.getElementById("xing_"+i+"_"+dom);
				img.src=url;
			}
			$("input#difficulty"+dom).val(5);// difficulty level： 5
	}
	else if(id==4){
		for(var i=0;i<id;i++){
			var img=document.getElementById("xing_"+i+"_"+dom);
			img.src=url;
		}
		var img5=document.getElementById("xing_4"+"_"+dom);
		img5.src="/assets/img/rating_1.png";
		$("input#difficulty"+dom).val(4);// difficulty level： 4
	}
	else if(id==3){
		for(var i=0;i<id;i++){
			var img=document.getElementById("xing_"+i+"_"+dom);
			img.src=url;
		}
		var img4=document.getElementById("xing_4"+"_"+dom);
		img4.src="/assets/img/rating_1.png";
		var img3=document.getElementById("xing_3"+"_"+dom);
		img3.src="/assets/img/rating_1.png";
		$("input#difficulty"+dom).val(3);// difficulty level： 3
	}
	else if(id==2){
		for(var i=0;i<id;i++){
			var img=document.getElementById("xing_"+i+"_"+dom);
			img.src=url;
		}
		var img4=document.getElementById("xing_4"+"_"+dom);
		img4.src="/assets/img/rating_1.png";
		var img3=document.getElementById("xing_3"+"_"+dom);
		img3.src="/assets/img/rating_1.png";
		var img2=document.getElementById("xing_2"+"_"+dom);
		img2.src="/assets/img/rating_1.png";
		$("input#difficulty"+dom).val(2);// difficulty level： 2
	}
	else if(id==1){
		for(var i=0;i<id;i++){
			var img=document.getElementById("xing_"+i+"_"+dom);
			img.src=url;
		}
		var img4=document.getElementById("xing_4"+"_"+dom);
		img4.src="/assets/img/rating_1.png";
		var img3=document.getElementById("xing_3"+"_"+dom);
		img3.src="/assets/img/rating_1.png";
		var img2=document.getElementById("xing_2"+"_"+dom);
		img2.src="/assets/img/rating_1.png";
		var img1=document.getElementById("xing_1"+"_"+dom);
		img1.src="/assets/img/rating_1.png";
		$("input#difficulty"+dom).val(1);// difficulty level： 1

	}else{
		// Nothing
	}

}

/** 选答必答的切换 */
function AnswerRequired(id,dom){

	var lab=$1("required_"+dom);
	var flg = $1("required_flg_"+dom);
	if(flg.value == "notRequired"){
		lab.value="必答";
		flg.value = "required";
	}else{
		lab.value="选答";
		flg.value = "notRequired";
}

}

function Div_color(){
//	var div_color=document.getElementById("color").style.display;
//	if(div_color!="none"){
//		document.getElementById("color").style.display="none";
//	}
//	else{
//		document.getElementById("color").style.display="";
//	}
	$("#color").toggle();
	if($("#font").css("display")!="none"){
		$("#font").css("display","none");
	}
}

function Div_font(){
//	var div_font=document.getElementById("font").style.display;
//	if(div_font!="none"){
//		document.getElementById("font").style.display="none";
//	}
//	else{
//		document.getElementById("font").style.display="";
//	}
	$("#font").toggle();
	if($("#color").css("display")!="none"){
		$("#color").css("display","none");
	}
}
/** 隐藏字体和颜色的工具框 */
function hideFontColor(){
	if($("#color").css("display")!="none"){
		$("#color").hide();
	}
	if($("#font").css("display")!="none"){
		$("#font").hide();
	}
}

//on Scroll
var offsetY=0;
function CountScrollOffset(e) {
	//scrollBy(xnum,ynum)//移动多少像素：此函数加到mousemove中来调用
	var nScrollHight = $(e)[0].scrollHeight;
    var nScrollTop = $(e)[0].scrollTop;
	$1("test_009").value = nScrollHight;
	$1("test_010").value = nScrollTop;

/*  $(document).ready(function(){
		// "to Top"的显示
		$("#mo_center").scroll(function(){
		  	if($("#mo_center").scrollTop()>0){
		  		$(".to_top").show();
		  	} else {
		  		$(".to_top").hide();
		  	}
		});
	});*/
	// "to Top"的显示
	if($(e).scrollTop()>150){
  		$(".to_top").show();
  	} else {
  		$(".to_top").hide();
  	}
}

/** 填空题  start*/
//$(document).ready(function() {
 /**
  * 获取选中的文字
  */
 function getSelect()
    {
        if(window.getSelection)
        {
            return window.getSelection();
        }
        else
        {
            return document.selection.createRange().text;
        }

 }

  /**
   * 在光标处插入字符串
   * myField 文本框对象
   * myValue 要插入的值
   */
 function insertAtCursor(myField, myValue)
 {
    //IE support
    if (document.selection)
    {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }
    //MOZILLA/NETSCAPE support
    else if (myField.selectionStart || myField.selectionStart == '0')
    {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        // save scrollTop before insert
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos,myField.value.length);
        if (restoreTop > 0)
        {
            // restore previous scrollTop
            myField.scrollTop = restoreTop;
        }
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
 }

var tagrBefore;
var tagrAfter;
var spaceNum =1;
var sle;

/**
 * 计算当前填空ID最大值
 */
function checkData(data){
	var maxNum = 0;
	var list = data.split("<input id=\"");
	for(var i=0;i<list.length;i++){
		var size = list[i].indexOf("space");
		var end = list[i].indexOf("\"");
		if(size == 0){
			var nowNum = parseInt(list[i].substring(size+5,end));
			if(nowNum > maxNum){
				maxNum = nowNum;
			}
		}
	}
	return maxNum;
}

/**
 * 把文本内容替换成有默认值的待填空档
 */
function changToSpace(earaId) {
	//alert(earaId);
	$("#tagrBefore" + earaId).val($("#text"+earaId).html());
//	alert("630"+$("#text"+earaId).html());

	var data = $("#tagrBefore" + earaId).val();
	var num = checkData(data);
	
    if(spaceNum == 1){
    	spaceNum = data.split("<input id=\"space").length-1 == 0 ? 1:num + 1;
    }
 var strTemp;//临时保存 划选的部分
 if (document.selection && document.selection.createRange) {
        //IE:
      var myRange = document.selection.createRange();
      var m = myRange.pasteHTML('<input type="text" id="space"'+spaceNum+' name="del_tiankong" value="'+getSelect()+'"/>');
      //tagrBefore.appendTo('<input type="hidden" id="hidForText"'+spaceNum+' name="del_tiankong" value="'+getSelect()+'"/>');
 }else{

      var selection = window.getSelection();
       strTemp = selection;
      if(strTemp==""){
    	  sle = 0;
      }else{
    	  sle=1;
      }
      $("#hidForText").val(strTemp);//TODO:hidForText 参数化
     // tagrBefore.appendTo('<input type="hidden" id="hidForText"'+spaceNum+' name="del_tiankong" value="'+strTemp+'"/>');
	  var newP = document.createElement('input');
	  //newP.background-color="red";
	  //alert(inputValue);
	  //alert(strTemp);
	  newP.id = "space"+spaceNum;
	  newP.value=""; //helpless event
	  newP.name="del_tiankong";
	  newP.type="text";
      var range = window.getSelection().getRangeAt(0);
      range.deleteContents();
      range.insertNode(newP);
     // $("#space").attr("value",$("#hidForText").val());
      //$('<input type="hidden" id="hidForText"'+spaceNum+' name="del_tiankong" value="'+strTemp+'"/>').appendTo("#space"+spaceNum);
 }

//alert(1212);
// if(""== $("#space"+spaceJun).val()){//chrome 这类浏览器不支持 value属性，怪 一下逻辑 为chrome准备
//		//alert($("#space"+spaceNum).val());
//		$("#space"+spaceJun).val($("#hidForText").val());}

 $("#tagrAfter"+earaId).val($("#text"+earaId).html());
 //alert(tagrBefore);

 $("#text"+earaId).html($("#tagrBefore" + earaId).val());//保留现场；

 //$("#text"+earaId).appendChild(t);
 //alert($("#hidForText").val());
 //$("#space"+spaceNum).attr("hidId",strTemp);//

 //alert( $("#space"+spaceNum).attr("id"));

}

var textWidth_auto = function(text){
	var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
		$('body').append(sensor);
	var width = sensor.width();
	sensor.remove();
	//alert(width);
	width = (width/7)*10;// 适当的尺寸
	width = width<60 ? 60 : width;// 设置最小尺寸为60px
	return width;
};


/**
 * 绑定空(填空)的右键菜单
 * 暂时 只支持 划词模式
 */
function addSpace_real(kbn,earaId,spaceJun){
//	alert(kbn+"---"+earaId+"---"+spaceJun);

	if(sle==0){

	}else{

	$("#text"+earaId).html( $("#tagrAfter"+earaId).val());//恢复现场；
	if(""== $("#space"+spaceJun).val()){//chrome 这类浏览器不支持 value属性，怪 一下逻辑 为chrome准备
//		alert($("#space"+spaceNum).val());
		//$("#space"+spaceJun).val($("#hidForText").val());

		$("#space"+spaceJun).attr("value",$("#hidForText").val());
	}
		$("#space"+spaceJun).width(textWidth_auto($("#space"+spaceJun).val()));//变input的宽度

		//TODO:此处可添加 class属性到“空”里面，以方便操作
		$("#space"+spaceNum).attr("class","space");//
		$("#space"+spaceNum).attr("readonly","true");//
		//$("#space"+spaceNum).attr("hidId",$("#hidForText").val());//
		$("#space"+spaceNum).attr("onfocus","this.select();unbindAdd("+earaId+")");// 点击input选中结果并绑定函数解除“添加填空”的功能
		$("#space"+spaceNum).attr("onblur","bindAdd("+earaId+")");// input失去焦点解除函数，增加“添加填空”的功能
		$("#space"+spaceNum).attr("onchange","updateFillSpace("+spaceNum+","+earaId+")");// 填空space增加onblur时更新的函数

		$(".space").contextMenu({//把所有的空栏都绑定
                    menuId: 'contextMenu_1',
                    onContextMenuItemSelected:function(menuItemId, $triggerElement){//选择菜单某项 事件
                       // alert('trigger1'+menuItemId+' '+$triggerElement.attr('hidId'))
//alert(999);
                        if(menuItemId == "delete"){ // 点击删除填空Sapce
                        	//alert($(this).attr("id"));
                            //$("#trigger1").append("(______)");
                            //$("#space").remove();//删除“空”
                        	//for each all sapceNum
//                        	var hid_id ="hidForText" + $triggerElement.attr('hidId');
//                        	alert(hid_id);
                        	$triggerElement.replaceWith($triggerElement.attr('value')); // 替换input为默认文字

                        	// 删除填空题space在DB中的记录
                        	var spaceId = $triggerElement.attr('id');// 填空space的标签id
                        	var idNo = spaceId.replace(/space/,"");// "space"替换为""
                            //deleteFillSpace(idNo);

                            // 删除存储填空input的DBId的隐藏域
                            $("#fillSpaceDBId"+idNo).remove();

                            refreshFillPointNo(earaId);// 刷新填空题页面中空格统计

                            document.getElementById("text"+earaId).focus(); // 输入框获得焦点
                            //getSelectPos("text"+earaId);
                            //spaceNum = idNo;
                            //myfocus("text"+earaId);

                        }

                    },
                    onContextMenuShow:function($triggerElement){//菜单 显示时 事件
//                        alert("1212");
                        //getSelect();
//                    	alert("onClick space");
                    },
                    showShadow:true
          });

		// 增加存储填空input的DBId的隐藏域
		$("#text"+earaId).before('<input id="fillSpaceDBId'+spaceJun+'" type="hidden" name="del_tiankong" value="" >');

		// 增加填空题space记录到DB
		//addFillSpace(earaId,spaceJun);

		// 刷新填空题页面中空格统计
		refreshFillPointNo(earaId);

		// 题目输入框获得焦点
		document.getElementById("text"+earaId).focus();
	}
}

/**
 * 绑定填空题提干入力区域的右键菜单
 * kbn:模式 1:末尾加填空模式 2:划词为空模式
 * earaId：填空题干区域domid
 */
function bindfillSpace(kbn,earaId){

//	if (document.selection && document.selection.createRange) {
//        //IE:
//      var myRange = document.selection.createRange();
//      var m = myRange.pasteHTML('<input type="text" id="space"'+spaceNum+' name="del_tiankong" value="'+getSelect()+'"/>');
//      //tagrBefore.appendTo('<input type="hidden" id="hidForText"'+spaceNum+' name="del_tiankong" value="'+getSelect()+'"/>');
//	 }else{
//		  alert(12);
//	      var selection = window.getSelection();
//	      if(selection==""){
//	    	  return;
//	      }
//	 }



	if(kbn==1){
        //绑定控件的右键菜单
        $("#text" +earaId).contextMenu({
            menuId: 'contextMenu',
            onContextMenuItemSelected:function(menuItemId, $triggerElement){//选择菜单某项 事件
                //alert('trigger1'+menuItemId+' '+$triggerElement.attr('id'))

                if(menuItemId == "add"){
                    //$("#trigger1").append("(______)");

                    var html= '<img src="' +'/temp/pic/xx.png'+'"  alt="空格"  />';
                    $("#text" +earaId).focus();//获取焦点。
                    document.selection.createRange().pasteHTML(html);//设
                    //insertAtCursor($("#trigger1"),html);
                }else if(menuItemId == "delete"){
                    //alert("delete");
                }

            //  $("#trigger1").html(1212);

            },
            onContextMenuShow:function($triggerElement){//菜单 显示时 事件
                //alert('trigger1'+$triggerElement.attr('id'))
                //getSelect();
            },
            showShadow:false
        });
         //$("#trigger1").disableContextMenuItems(['edit'])
        //$("#trigger1").enableContextMenuItems(['edit']) //解除某个菜单项的屏蔽
        //$("#trigger1").disableContextMenu(); //屏蔽菜单
        //$("#trigger1").enableContextMenu(); //解除菜单屏蔽
    }else if(kbn==2){

    	$("#text" +earaId).contextMenu({
            menuId: 'contextMenu',
            onContextMenuItemSelected:function(menuItemId, $triggerElement){
//                alert('trigger2'+menuItemId+' '+$triggerElement.attr('id'))
                //changToSpace();
                addSpace_real(2,earaId,spaceNum);//绑定空栏的右键菜单
                spaceNum++;
                //alert(spaceNum);
            },
            onContextMenuShow:function($triggerElement){
                changToSpace(earaId);
            }
        });
         $("#text" +earaId).disableContextMenuItems(['delete'])  //屏蔽某个菜单项
         //$(".space").disableContextMenu()  //屏蔽菜单项
         //$("#trigger2").enableContextMenuItems(['delete']) //解除某个菜单项的屏蔽
    }else{

    }

}
//        }

/** 页面点击“添加填空”button时触发增加选项 */
function clickAddSpace(idNo){
    var selection = window.getSelection();
    strTemp = selection;
//    alert(strTemp);
   if(strTemp==""){
 	    sle = 0;
   }else{
	   sle = 1;
	    $("#hidForText").val(selection);//TODO:hidForText 参数化

		//var data = $("#text"+idNo).html();
		//var num = checkData(data);
		
	    if(spaceNum == 1){   //change by zhudc for fill bug
	    	var temp_space_num=1;
	    	var final_space_num=1;
	    	$(".text_fill").each(function(){
	    		var data=$(this).html();
	    		temp_space_num=checkData(data);
	    		if(temp_space_num>final_space_num){
	    			final_space_num=temp_space_num;
	    		}
	    	});
	    	spaceNum = final_space_num+1;
	    	//spaceNum = data.split("<input id=\"space").length-1 == 0 ? 1:num+1;
	    }
	    var newP = document.createElement('input');
		newP.id = "space"+spaceNum;
		newP.value=""; //helpless event
		newP.name="del_tiankong";
		newP.type="text";

		var range = window.getSelection().getRangeAt(0);
	    range.deleteContents();
	    range.insertNode(newP);

	    $("#tagrAfter"+idNo).val($("#text"+idNo).html());

	    $("#text"+idNo).html($("#tagrBefore"+idNo).val());//保留现场；



	    addSpace_real(2,idNo,spaceNum);// 增加选项input

	    keepShowPointValue();

	    spaceNum++;
   }
}

function hideColor(){
 $(".div_color#color").hide();
}

function hideFont(){
	$(".div_font#font").hide();
}