// JavaScript Document

var dragobj={};
var z;
window.onerror=function(){return false};
document.onselectstart=function(){return false}
window.onload=function(){
	
	var tr=document.getElementsByTagName("tr");
	for(var i=0;i<tr.length;i++){//BUG：ここ 永遠実行しない
		if(tr[i].id!=""){
			tr[i].onmousedown=addevent;
		}
	}
}
function addevent(e){
	if(dragobj.o!=null)
		return false;
	e=e||event;
	dragobj.o=this.id;
	e=e||window.event;
   document.getElementById(this.id).style.position="absolute";
   document.getElementById(this.id).style.height="30px";
   var m=e.clientX; //鼠标按下时获取x轴坐标
   var n=e.clientY; //鼠标按下时获取y轴坐标
   l=document.getElementById(this.id).offsetLeft; //获取div的左位移
   t=document.getElementById(this.id).offsetTop;  //获取div的右位移
	dragobj.l=l;
	dragobj.t=t;
   z=true;   //为变量赋值
  
document.onmouseover=function xx(e){
    e=e||window.event;
   var x=e.clientX; //鼠标移动时获取x轴坐标
   var y=e.clientY; //鼠标移动时获取y轴坐标
   if (z==true)  //当鼠标按下并移动时执行
   {
	  
   	document.getElementById(dragobj.o).style.left=l+(x-m)+"px";//将移动后的坐标赋给相应的位移
    document.getElementById(dragobj.o).style.top=t+(y-n)+"px";
   } 
  
}
} 
document.onmouseup=function(){
	var titleid;
	var exam_id
	if(dragobj.o!=null){
		var left=document.getElementById(dragobj.o).style.left;
		var top=  document.getElementById(dragobj.o).style.top;
		//alert(left);
		if(parseInt(left)>300 && parseInt(left)<570){
   		   
			exam_id=dragobj.o.substring(5,dragobj.o.length);
    	    var name=document.getElementById("exam_name_"+exam_id).innerHTML;
    	 	var ulObj = document.getElementsByTagName("li");
    		for(var i=0;i<ulObj.length;i++){
    			if($("#"+ulObj[i].id).css('background-color')=="#c2c9ce"|| $("#"+ulObj[i].id).css('background-color') =="rgb(194, 201, 206)"){
    				titleid=ulObj[i].id;
    			}
    		}
    		z=false
	    		if(titleid==null){
	    			alert("请选择章节信息！");
	    			document.getElementById(dragobj.o).style.left=dragobj.l;
	    			document.getElementById(dragobj.o).style.top=dragobj.t;
	    			document.getElementById(dragobj.o).style.position="";
	    		}else{
	    			var i=getParent(document.getElementById(dragobj.o),'TR').rowIndex,tb=getParent(document.getElementById(dragobj.o),'TABLE');
	    			 tb.deleteRow(i);
	    			var titleid=titleid.substring(5,titleid.length);
	    			 if(checkSubTitle(titleid)>0){
	    				 alert("父标题允许添加题目，请选择子标题！");
	    			 }
	    			 else{
	    				 addExamQuestion(titleid,exam_id);
	    			 }
	    			
	    		}
	    		
	 				dragobj.o=null;

		  } else{
			document.getElementById(dragobj.o).style.left=dragobj.l;
			document.getElementById(dragobj.o).style.top=dragobj.t;
			document.getElementById(dragobj.o).style.position="";
			 z=false
			dragobj.o=null;
		  }
	}
} //鼠标松开时为z赋值终止div的移动

  function getParent(el,tn){while(el&&el.tagName!=tn)el=el.parentNode;return el}
  
/********************/
//判断是否是子级标题
 function checkSubTitle(id){
	 var count=0;
	 $.ajax({
	        type:"get",
	        url:"/checkSubTitle/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{id:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	count=msg.date;	
	        }
	 });
	 return count;
 }
function addExamQuestion(titleid,exam_id){
	//alert("title:"+titleid +"exam:"+exam_id);
	 $.ajax({
	        type:"get",
	        url:"/saveExam/"+titleid+"/"+exam_id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{titleId:'titleid',examPaperId:'exam_id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	var html="";
	        	for(var i=0;i<msg.date.length;i++){
	        		if(i==0){
	        			html='<li>'+msg.date[i].name+'('+msg.date[i].count+')</li>';
	        		}
	        		else{
	        			html+='<li>'+msg.date[i].name+'('+msg.date[i].count+')</li>';
	        		}
	        	}
	      	 	$('#exam_list').html(html);
	        }
	 });
}
//显示一级下拉菜单
function display_menu(id){
	var showValue = $('#'+id).css('display'); //返回到id = show的div的display的值
//	alert(div[0].className);
	//alert(id)
    if(showValue == "" || showValue == "none"){
      // $('#menu_add').css({display:block});
    	var div = document.getElementsByTagName("div");
    	for(var i=0;i<div.length;i++){
    		if(div[i].className=="menu2_add"){
    			div[i].style.display="none";
    		}
    	}
	 	$("#"+id).slideDown();//窗帘效果展开
    }else if(showValue == "block"){
        //$('#menu_add').css({display:none});
		//$("#menu_add").hide();//hide()函数,实现隐藏,括号里还可以带一个时间参数(毫秒)例如hide(2000)以2000毫秒的速度隐藏,还可以带slow,fast
    	$("#"+id).slideToggle(500);//窗帘效果的切换,点一下收,点一下开,参数可以无,参数说明同上
	}
}
//隐藏所有的树形菜单
function hidden(){

	var div = document.getElementsByTagName("div");
	for(var i=0;i<div.length;i++){
		if(div[i].className=="menu2_add"){
			div[i].style.display="none";
		}
	}
}

//显示二级菜单
function display_note2(id){
	var showValue = $('#'+id).css('display'); //返回到id = show的div的display的值
    if(showValue == "" || showValue == "none"){
      // $('#menu_add').css({display:block});
	 	$("#"+id).slideDown();//窗帘效果展开
    }else if(showValue == "block"){
        //$('#menu_add').css({display:none});
		//$("#menu_add").hide();//hide()函数,实现隐藏,括号里还可以带一个时间参数(毫秒)例如hide(2000)以2000毫秒的速度隐藏,还可以带slow,fast
    	$("#"+id).slideToggle(500);//窗帘效果的切换,点一下收,点一下开,参数可以无,参数说明同上
	}
}
//弹出新增div层
$(function(){
      // $("#static").modal();
       $('#myModal').on('show', function () {
                    //alert("show")
         })
         $('#myModal').on('shown', function () {
                    //alert("shown")
         })
         $('#myModal').on('hide', function () {
                   // alert("hide")
         })
         $('#myModal').on('hidden', function () {
                  //  alert("hidden")
         })
         $("li").mousemove(function(){
        	 var id=this.id;
        	 var imgid="img_"+id.substr(5,id.length);
        	 $("#"+imgid).show();
        	
        })
       $("li").mouseout(function(){
      	 var id=this.id;
      	 var imgid="img_"+id.substr(5,id.length);
      	$("#"+imgid).hide();
      });
 })
 //新增一级分组
  var index=1;
  var indexNo2=1;
function add_node(){
	 var name=$('#add_name').val();
	 var noteid=$('#note_id').val();
	 var id=$('#testPaperId').val();
	 var flag=$('#operation').val();
	 var titleid=$('#titleid').val();
	 if(flag=="add"){
		 createTitle(noteid);
	 }
	 else if(flag=="updateTitle"){
		// alert(titleid+" "+name)
		 $.ajax({
		        type:"get",
		        url:"/updateTitle/"+titleid+"/"+encodeURI(name),
		        contentType:"application/json;charset=utf-8",
		        dataType:"json",
		        data:"{id:'titleid',name:'name'}",
		        async:false,
		        ifModified:false,
		        cache:false,
		        success:function(msg){
		        	var StrHtml="";
		        	for(var i=0;i<msg.date.length;i++){
		        		if(i==0){
		        			StrHtml='<div class="" id="title_'+msg.date[i].id+'">'
		        					+'<li class="note_1" id="note_'+msg.date[i].id+'"  onclick="showSubTitle('+msg.date[i].id+')"><span>'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span> </li><img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
		        					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
		        					+'<table><tr>'
		        					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
		        					+'</tr><tr>'
		        					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
		        					+'</tr><tr>'
		        					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
		        					+'</tr></table></div></div>';
		        		}else{
		        			StrHtml+='<div class="" id="title_'+msg.date[i].id+'">'
	    					+'<li class="note_1" id="note_'+msg.date[i].id+'" onclick="showSubTitle(\''+msg.date[i].id+'\')"><span >'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span> </li><img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
	    					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
	    					+'<table><tr>'
	    					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
	    					+'</tr><tr>'
	    					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
	    					+'</tr><tr>'
	    					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
	    					+'</tr></table></div></div>';
		        		}
		        		$('#note_0').html(StrHtml);
		        }
		        }
		 });
	 } else{
		 $.ajax({
		        type:"get",
		        url:"/updateTestPaper/"+id+"/"+encodeURI(name),
		        contentType:"application/json;charset=utf-8",
		        dataType:"json",
		        data:"{id:'id',name:'name'}",
		        async:false,
		        ifModified:false,
		        cache:false,
		        success:function(msg){
		        	var html='<input type="hidden" value="'+msg.date.id+'" id="testPaperId"/>'
		        			+'<input type="hidden" value="'+msg.date.name+'" id="testName"/>'
		        			+msg.date.name+'<img src="/assets/img/menubutton.png" class="menu_0" onclick="display_menu(\'menu_add\')"/>';
		        	//alert(html);
		        	$('#title_name').html(html);	
		        }
		 });
		 $('#add_name').val("");
	 }
	 $('#check').val("")
	 $('#add_name').val("");
	 $('#note_id').val("");
	
}
//情况隐藏域中的参数

function Close(){
	 $('#check').val("")
	 $('#add_name').val("");
	 $('#note_id').val("");
}
//修改标题
function update(id,name){
	alert(1);
	$('#add_name').val(name);
	alert(1);
	$('#operation').val('updateTitle');
	$('#titleid').val(id);
}
//修改试卷
function updateTestPaper(id,name){
	$('#note_id').val(id);
	$('#operation').val('update');
	$('#add_name').val(name);
}
//删除
function deleteTitle(id){
	 $.ajax({
	        type:"get",
	        url:"/deleteTitle/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{id:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	var StrHtml="";
	        	for(var i=0;i<msg.date.length;i++){
	        		if(i==0){
	        			StrHtml='<div class="" id="title_'+msg.date[i].id+'">'
	        					+'<li class="note_1" id="note_'+msg.date[i].id+'"  onclick="showSubTitle('+msg.date[i].id+')"><span>'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span></li> <img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
	        					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
	        					+'<table><tr>'
	        					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
	        					+'</tr><tr>'
	        					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
	        					+'</tr><tr>'
	        					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
	        					+'</tr></table></div></div>';
	        		}else{
	        			StrHtml+='<div class="" id="title_'+msg.date[i].id+'">'
    					+'<li class="note_1" id="note_'+msg.date[i].id+'"  onclick="showSubTitle(\''+msg.date[i].id+'\')"><span>'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span> </li><img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
    					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
    					+'<table><tr>'
    					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
    					+'</tr><tr>'
    					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
    					+'</tr><tr>'
    					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
    					+'</tr></table></div></div>';
	        		}
	        	}
	        
	        	$('#note_0').html(StrHtml);
	        	$('#exam_list').html("");
	        }
	 });
}
//鼠标停浮在Li标签上显示下拉菜单

function input_noteid(id){
	$('#note_id').val(id);
	$('#add_name').val("");
	$('#operation').val('add');
	 var noteid=$('#note_id').val();
	createTitle(noteid);
}
//通过标题获取所有下级标题
function findSubTitle(id){
	//alert(id);
}
$.ajaxSetup({
	contentType: "application/x-www-form-urlencoded; charset=utf-8",
		　　beforeSend: function (xhr) {
		　　　　//可以设置自定义标头
		　　　　xhr.setRequestHeader('Content-Type', 'application/xml;charset=utf-8');
		}
	});

//创建子标题刷新页面
function createTitle(id){
	//alert("父标题 id"+ id);
	var name=$("#add_name").val();
	var testPaperId=$("#testPaperId").val();
	var title='<div class="">'
		+'<li class="note_1"><span > <input type="text"/></span></li> <img src="/assets/img/menubutton.png" class="menu_1" />'
		+'<div class="menu2_add">'
		+'<table><tr>'
		+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" data-toggle="modal">新增</a></td>'
		+'</tr><tr>'
		+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
		+'</tr><tr>'
		+'<td role="menuitem" colspan="2" class="update"><a>删除</a></td>'
		+'</tr></table></div></div>';
	
	 $.ajax({
	        type:"get",
	        url:"/savetitle/"+encodeURI(name)+"/"+testPaperId+"/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{name:'name',testPaperId:'testPaperId',fathertitleId:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	var StrHtml="";
	        	for(var i=0;i<msg.date.length;i++){
	        		if(i==0){
	        			StrHtml='<div class="" id="title_'+msg.date[i].id+'">'
	        					+'<li class="note_1" id="note_'+msg.date[i].id+'" onclick="showSubTitle('+msg.date[i].id+')"><span >'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span></li> <img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
	        					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
	        					+'<table><tr>'
	        					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
	        					+'</tr><tr>'
	        					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
	        					+'</tr><tr>'
	        					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
	        					+'</tr></table></div></div>';
	        		}else{
	        			StrHtml+='<div class="" id="title_'+msg.date[i].id+'">'
    					+'<li class="note_1" id="note_'+msg.date[i].id+'" onclick="showSubTitle(\''+msg.date[i].id+'\')"><span >'+msg.date[i].name+'['+msg.date[i].subtitle.length+']</span></li> <img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
    					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
    					+'<table><tr>'
    					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
    					+'</tr><tr>'
    					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update('+msg.date[i].id+','+msg.date[i].name+')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
    					+'</tr><tr>'
    					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
    					+'</tr></table></div></div>';
	        		}
	        	}
	        	
	        	$('#note_0').html(StrHtml);
	        }
	    });
	 if(id==0){
		// $("#menu_add").slideToggle(500);//窗帘效果的切换,点一下收,点一下开,参数可以无,参数说明同上
		 document.getElementById("menu_add").style.display="none";
	 }
	 else{
		// $("#menu_"+id).slideToggle(500);//窗帘效果的切换,点一下收,点一下开,参数可以无,参数说明同上
		 document.getElementById("menu_"+id).style.display="none";
	 }
	
}
//添加中间题目
function showtitle(id){
	 $.ajax({
	        type:"get",
	        url:"/findSubTitle/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{id:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	if(msg.date.length>0){
		        	var StrSubTitle="";
		        	var subTitle='<div class="" id="sub_'+id+'" style="display:none;">'
		        				 +'<ul id="sub_ul_'+id+'">'
		        				 +'</ul></div>';
		        	if($("#sub_"+id).length<=0){
		        		$("#title_"+id).append(subTitle);
		        		for(var i=0;i<msg.date.length;i++){
			        		if(i==0){
			        			StrSubTitle='<div class="left_ul" id="title_'+msg.date[i].id+'">'
			        					+'<li class="note_2"  id="note_'+msg.date[i].id+'" onclick="showSubTitle('+msg.date[i].id+')"><span>'+msg.date[i].name+'</span></li><img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
			        					+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
			        					+'<table><tr>'
			        					+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
			        					+'</tr><tr>'
			        					+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update(\''+msg.date[i].id+'\',\''+msg.date[i].name+'\')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
			        					+'</tr><tr>'
			        					+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
			        					+'</tr></table></div></div>';
			        		}else{
			        			StrSubTitle+='<div class="left_ul" id="title_'+msg.date[i].id+'">'
			        						+'<li class="note_2"  id="note_'+msg.date[i].id+'"  onclick="showSubTitle('+msg.date[i].id+')"><span>'+msg.date[i].name+'</span></li><img src="/assets/img/menubutton.png" class="menu_1" onclick="display_menu(\'menu_'+msg.date[i].id+'\')"/>'
			        						+'<div class="menu2_add" id="menu_'+msg.date[i].id+'">'
			        						+'<table><tr>'
			        						+'<td role="menuitem" colspan="2" class="save"><a href="#myModal" style="border:0px solid #FFF;" onclick="input_noteid(\''+msg.date[i].id+'\')" data-toggle="modal">新增</a></td>'
			        						+'</tr><tr>'
			        						+'<td role="menuitem" colspan="2" class="update"><a href="#myModal" onclick="update(\''+msg.date[i].id+'\',\''+msg.date[i].name+'\')" style="border:0px solid #FFF;"data-toggle="modal">修改</a></td>'
			        						+'</tr><tr>'
			        						+'<td role="menuitem" colspan="2" class="update"><a onclick="deleteTitle('+msg.date[i].id+')">删除</a></td>'
			        						+'</tr></table></div></div>';
			        		}
			        	}
		        	$("#sub_ul_"+id).html(StrSubTitle);
		        
	        	}
	        	
	        	display_menu("sub_"+id);
	        	}
	        }
	 });
}
//显示中间题目列表
function showexamQuestion(id){
	 $.ajax({
	        type:"get",
	        url:"/findExamQuestion/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{id:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	var html="";
	        	for(var i=0;i<msg.date.length;i++){
	        		if(i==0){
	        			//id="'+msg.date[i].examquestionId+'" onmousemove="showdelButton(\'del_'+msg.date[i].examquestionId+'\')" onmouseout="showdelButton(\'del_'+msg.date[i].examquestionId+'\')"
	        			html='<li  class="clear-element page-item sort-handle leftext">'+msg.date[i].name+'('+msg.date[i].count+')<img src="/assets/img/delete.png" class="del" id="del_'+msg.date[i].examquestionId+'" onclick="deleteExamQuestion('+msg.date[i].examquestionId+')"/></li>';
	        		}
	        		else{
	        			html+='<li  class="clear-element page-item sort-handle leftext" id="'+msg.date[i].examquestionId+'">'+msg.date[i].name+'('+msg.date[i].count+')<img src="/assets/img/delete.png" class="del" id="del_'+msg.date[i].examquestionId+'" onclick="deleteExamQuestion('+msg.date[i].examquestionId+')"/></li>';
	        		}
	        	}
	      	 	$('#exam_list').html(html);
	        }
	 });
}
//显示子标题
function showSubTitle(id){
	var ulObj = document.getElementsByTagName("li");
	for(var i=0;i<ulObj.length;i++){
		ulObj[i].style.backgroundColor="";
	}
	var rgb = $("#note_"+id).css('background-color'); 
	var li=document.getElement
	if(rgb!="#c2c9ce"){
		  $("#note_"+id).css({"background-color":"#C2C9CE"}); 
	}else{
		 $("#note_"+id).css({"background-color":""}); 
	}
	showtitle(id);
	showexamQuestion(id);
	
}
function showdelButton(id){
	var display=document.getElementById(id).style.display;
	if(display=="none"){
		document.getElementById(id).style.display="";
	}else{
		document.getElementById(id).style.display="none";
	}
}
//删除标题与题库的对应关系
function deleteExamQuestion(id){
	 $.ajax({
	        type:"get",
	        url:"/deleteExamQuestion/"+id,
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        data:"{id:'id'}",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(msg){
	        	var html="";
	        	for(var i=0;i<msg.date.length;i++){
	        		if(i==0){
	        			//id="'+msg.date[i].examquestionId+'" onmousemove="showdelButton(\'del_'+msg.date[i].examquestionId+'\')" onmouseout="showdelButton(\'del_'+msg.date[i].examquestionId+'\')"
	        			html='<li  class="clear-element page-item sort-handle leftext">'+msg.date[i].name+'('+msg.date[i].count+')<img src="/assets/img/delete.png" class="del" id="del_'+msg.date[i].examquestionId+'" onclick="deleteExamQuestion('+msg.date[i].examquestionId+')"/></li>';
	        		}
	        		else{
	        			html+='<li  class="clear-element page-item sort-handle leftext" id="'+msg.date[i].examquestionId+'">'+msg.date[i].name+'('+msg.date[i].count+')<img src="/assets/img/delete.png" class="del" id="del_'+msg.date[i].examquestionId+'" onclick="deleteExamQuestion('+msg.date[i].examquestionId+')"/></li>';
	        		}
	        	}
	      	 	$('#exam_list').html(html);
	        }
	 });
}
function add_tile(id){

}