
$(function () {
	var options={
			animation:true,
			trigger:'hover' //invoke event
		}
//	$('.progressbg').popover(options);//popoever box
//	 $("input[name=choice]:eq(0)").attr("checked",'checked'); 
    var searchbox = $(".search input:text").first();
    if ($(searchbox).val() == "") {
        $(searchbox).val("试卷搜索")
    }
    $(searchbox).focus(function () {
        if ($(searchbox).val() == "试卷搜索") {
            $(searchbox).val("")
        }
    }).blur(function () {
        if ($(searchbox).val() == "") {
            $(searchbox).val("试卷搜索")
        }
    
    });
    $(".wrong-ques").click(function (event) {
    	var itemid = $(this).parent().parent().parent().attr("id");
    	var commnet = "";

    	jQuery.get("/commnentInfoGet/"+itemid, {},
            		function(data){
	            		 $(".message-box").find("p").slice(0,1).html(data);
	            		 $(".message-box").show();
        			});

        event.stopPropagation();
    });
    $(".wrong-ques-focus").click(function (event) {
    	var itemid = $(this).attr("id");
    	var item = "#message-box"+itemid;
        $(item).show();
        event.stopPropagation();
    });
    $(".main").click(function () {
        $(".message-box").hide();
    });
    $(".search").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });

    $(".listitem .control").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });

    $(".listitem .btncol").click(function () {
        
        if ($(this).parents(".open").size() > 0) {
            $(this).parents(".listitem").removeClass("open");
        } else {
            $(".listitem").removeClass("open");
            $(this).parents(".listitem").addClass("open");
        }
     
    });
    /*
    var src1 = $("#item1").prop("src");
    $("#item1").hover(function () {
        $(this).prop("src","images/item1_active.png") ;
    }, function () {
        $(this).prop("src",src1);
    });
    var src2 = $("#item2").prop("src");
    $("#item2").hover(function () {
        $(this).prop("src", "images/item2_active.png");
    }, function () {
        $(this).prop("src", src2);
    });
    var src3 = $("#item3").prop("src");
    $("#item3").hover(function () {
        $(this).prop("src", "images/item3_active.png");
    }, function () {
        $(this).prop("src", src3);
    });
   */
    $(".listcontent .listitems .listitem").hover(function () {
        $(this).find(".info").show();
    }, function () {
        $(this).find(".info").hide();
    });
    $("#dropdownbutton").click(function () {
        $("#dropdownmenu").toggle();
        return false;
    });
    $(".questioncontent ul li").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    $(".errorlist ul li .button-open").click(function () {
        if ($(this).parents(".listitem").first().hasClass("open")) {
            $(this).parents(".listitem").first().removeClass("open");
        } else {
            $(this).parents(".listitem").first().addClass("open");
        }
    })
    $("#pickbar").click(function () {
        if ($("#scorecard").hasClass("card-in")) {
            $("#scorecard").removeClass("card-in");
            $("#scorecard").animate({ right: "+=200" }, 200);
        } else {
            $("#scorecard").addClass("card-in");
            $("#scorecard").animate({ right: "-=200" }, 200);
        }
    })
    
    //page autosize
    $(".main").height($(window).height() - 100);
    $(window).resize(function () {
        $(".main").height($(window).height() - 120);
    });
    
    $("#td_editcontent_first").height($(window).height() - 210);
    $(window).resize(function () {
        $("#td_editcontent_first").height($(window).height() - 210);
    });
    $("#focus-card").hover(function () {
        if ($("#cardpick").hasClass("pickon")) {
            return false;
        }
        $("#focus-card").removeClass("focus-card-off")
    }, function () {
        if ($("#cardpick").hasClass("pickon")) {
            return false;
        }
        $("#focus-card").addClass("focus-card-off")
    })
    $("#cardpick").click(function () {
        if ($(this).hasClass("pickon")) {
            $(this).removeClass("pickon")
        } else {
            $(this).addClass("pickon")
        }
    });
    $(".main .questioninfo .question .errorlist .listitem .options ul li").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    
 
})

function searchOption(){
	var hidden=document.getElementById("hidden_choice").style.display;
	
	if(hidden=="none"){
		document.getElementById("hidden_choice").style.display="";
	}else{
		document.getElementById("hidden_choice").style.display="none";
	}
}
function hiddenRadio(){
    document.getElementById("hidden_choice").style.display="none";
}
function search(){
	var list= $('input:radio[name="choice"]:checked').val();
	if(list==null){
		alert("请选择您要查询类型!!!!!");
	}else{
		if(list=="1"){
			tabswitchover('item1','practice');
		}else if(list=="2"){
			tabswitchover('item2','shijuan_text');
		}else{
			tabswitchover('item3','ziliao');
		}
	}
	
} 
function tabswitchover(imager,div){
	
	document.getElementById("item1").src="/assets/img/item1.png";
	document.getElementById("item2").src="/assets/img/item2.png";
	document.getElementById("item3").src="/assets/img/item3.png";
	
	if(imager=="item2"){
		page('1');
		document.getElementById("screeningConditions").style.display="";
		document.getElementById(imager).src="/assets/img/item2_active.png";
		 $("input[name=choice]:eq(1)").attr("checked",'checked'); 
	}else if(imager=="item3"){
		document.getElementById("screeningConditions").style.display="none";
		bookpage('1');
		document.getElementById(imager).src="/assets/img/item3_active.png";
		 $("input[name=choice]:eq(2)").attr("checked",'checked'); 
	}else{
		practicePage('1');
		document.getElementById("screeningConditions").style.display="";
		document.getElementById(imager).src="/assets/img/item1_active.png";
		 $("input[name=choice]:eq(0)").attr("checked",'checked'); 
	}
	
	document.getElementById("lianxi").style.display="none";
	document.getElementById("shijuan").style.display="none";
	document.getElementById("shijuan_text").style.display="none";
	document.getElementById("ziliao").style.display="none";
	document.getElementById("material").style.display="none";
	
	document.getElementById("practice").style.display="none";
	document.getElementById(div).style.display="";	

}
function practicePage(newPage){
	var sortBy=$("#sortby").val();
	var order=$("#order").val();
	 var searchbox = $(".search input:text").first();
	 var name=$(searchbox).val();
	//alert(newPage+"----"+sortBy);
	$.ajax({
        type:"get",
        url:"/practicePage/"+newPage+"/"+sortBy+"/"+order+"/"+encodeURI(name),
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{newPage:'newPage',sortBy:'sortBy',order:'order',name:'name'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	var html="";
        	var texthtml="";
        	for(var i=0;i<msg.date.length;i++){
        		$("#newpage").val(msg.date[i].pageIndex);
        		$("#pagecount").val(msg.date[i].totalRowCount);
        		init(msg.date[i].pageIndex);
        		for(var n=0;n<msg.date[i].practice.length;n++){
        			if(n==0){
            			html='<li>'
                  			+'<div class="listitem" >'
                  			+'<a  href="#examDetailModalContainer">'
                  			+'<img src="/assets/img/img_1.png" />'
                  			+'<p class="title">'+msg.date[i].practice[n].name+'</p>'
                  			+'<p class="info">'+msg.date[i].practice[n].description+'</p>'
                  			+'</a></div></li>';
            			texthtml='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'<a data-toggle="modal" href="/answerQuestions/'+msg.date[i].practice[n].id+'">'
            					+'	<div class="btnplay"></div>'
            					+'</a>'
            					+'	<div class="title">'+msg.date[i].practice[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].practice[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}else{
            			 html+='<li>'
                   			+'<div class="listitem" >'
                   			+'<a  href="#examDetailModalContainer">'
                   			+'<img src="/assets/img/img_1.png" />'
                   			+'<p class="title">'+msg.date[i].practice[n].name+'</p>'
                   			+'<p class="info">'+msg.date[i].practice[n].description+'</p>'
                   			+'</a></div></li>';
            			texthtml+='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'<a data-toggle="modal" href="/answerQuestions/'+msg.date[i].practice[n].id+'">'
            					+'	<div class="btnplay"></div>'
            					+'</a>'
            					+'	<div class="title">'+msg.date[i].practice[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].practice[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}
        		}
        	}

				//$("#Practice_list").html(html);
        	
				$("#list_practice").html(texthtml);
				//$("#list_shijuan").html(texthtml);
			    $(".listcontent .listitems .listitem").hover(function () {
			        $(this).find(".info").show();
			    }, function () {
			        $(this).find(".info").hide();
			    });
			    $(".listitem .btncol").click(function () {
			        
			        if ($(this).parents(".open").size() > 0) {
			            $(this).parents(".listitem").removeClass("open");
			        } else {
			            $(".listitem").removeClass("open");
			            $(this).parents(".listitem").addClass("open");
			        }
			    });
	        	}
	   	});
}
function page(newPage){
	var sortBy=$("#sortby").val();
	var order=$("#order").val();
	var searchbox = $(".search input:text").first();
	var name=$(searchbox).val();

	//alert(newPage+"----"+sortBy);
	$.ajax({
        type:"get",
        url:"/listPage/"+newPage+"/"+sortBy+"/"+order+"/"+encodeURI(name),
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{newPage:'newPage',sortBy:'sortBy',order:'order',name:'encodeURI(name)'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	var html;
        	var texthtml;
        	//alert(msg.date.length)
        	for(var i=0;i<msg.date.length;i++){
        		$("#newpage").val(msg.date[i].pageIndex);
        		$("#pagecount").val(msg.date[i].totalRowCount);
        		init(msg.date[i].pageIndex);
        		for(var n=0;n<msg.date[i].testPaper.length;n++){
        			if(n==0){
            			html='<li>'
                  			+'<div class="listitem" >'
                  			+'<a  href="#examDetailModalContainer">'
                  			+'<img src="/assets/img/img_1.png" />'
                  			+'<p class="title">'+msg.date[i].testPaper[n].name+'</p>'
                  			+'<p class="info">'+msg.date[i].testPaper[n].description+'</p>'
                  			+'</a></div></li>';
            			texthtml='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'<a data-toggle="modal" href="/answerQuestions/'+msg.date[i].testPaper[n].id+'">'
            					+'	<div class="btnplay"></div>'
            					+'</a>'
            					+'	<div class="title">'+msg.date[i].testPaper[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].testPaper[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}else{
            			 html+='<li>'
                   			+'<div class="listitem" >'
                   			+'<a  href="#examDetailModalContainer">'
                   			+'<img src="/assets/img/img_1.png" />'
                   			+'<p class="title">'+msg.date[i].testPaper[n].name+'</p>'
                   			+'<p class="info">'+msg.date[i].testPaper[n].description+'</p>'
                   			+'</a></div></li>';
            			texthtml+='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'<a data-toggle="modal" href="/answerQuestions/'+msg.date[i].testPaper[n].id+'">'
            					+'	<div class="btnplay"></div>'
            					+'</a>'
            					+'	<div class="title">'+msg.date[i].testPaper[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].testPaper[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}
        		}
        	}
        	//$("#test_shijuan").html(html);
        	$("#list_shijuan").html(texthtml);
            $(".listcontent .listitems .listitem").hover(function () {
                $(this).find(".info").show();
            }, function () {
                $(this).find(".info").hide();
            });
            $(".listitem .btncol").click(function () {
                
                if ($(this).parents(".open").size() > 0) {
                    $(this).parents(".listitem").removeClass("open");
                } else {
                    $(".listitem").removeClass("open");
                    $(this).parents(".listitem").addClass("open");
                }
            });
            
        	//$("#newpage").val(msg.date);
        	//$("#sortby").val();
        	//$("#order").val()
        }
   });
}
function bookpage(newPage){
	var sortBy=$("#sortby").val();
	var order=$("#order").val();
	var searchbox = $(".search input:text").first();
	var name=$(searchbox).val();
	//alert(newPage+"----"+sortBy);
	$.ajax({
        type:"get",
        url:"/bookpage/"+newPage+"/"+sortBy+"/"+order+"/"+encodeURI(name),
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{newPage:'newPage',sortBy:'sortBy',order:'order',name:'encodeURI(name)'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	var html;;
        	var texthtml;
        	for(var i=0;i<msg.date.length;i++){
        		$("#newpage").val(msg.date[i].pageIndex);
        		$("#pagecount").val(msg.date[i].totalRowCount);
        		init(msg.date[i].pageIndex);
        		for(var n=0;n<msg.date[i].book.length;n++){
        			if(n==0){
            			html='<li>'
                  			+'<div class="listitem" >'
                  			+'<a  href="#examDetailModalContainer">'
                  			+'<img src="/downloadimg/'+msg.date[i].book[n].id+'/0" />'
                  			+'<p class="title">'+msg.date[i].book[n].name+'</p>'
                  			+'<p class="info">'+msg.date[i].book[n].description+'</p>'
                  			+'</a></div></li>';
            			texthtml='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'	<div class="btnplay"></div>'
            					+'	<div class="title">'+msg.date[i].book[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].book[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}else{
            			 html+='<li>'
                   			+'<div class="listitem" >'
                   			+'<a  href="#examDetailModalContainer">'
                   			+'<img src="/downloadimg/'+msg.date[i].book[n].id+'/0" />'
                   			+'<p class="title">'+msg.date[i].book[n].name+'</p>'
                   			+'<p class="info">'+msg.date[i].book[n].description+'</p>'
                   			+'</a></div></li>';
            			texthtml+='<li>'
            					+'<div class="listitem">'
            					+'<div class="control">'
            					+'	<div class="btnplay"></div>'
            					+'	<div class="title">'+msg.date[i].book[n].name+'</div>'
            					+' 	<div class="btncol"></div>'
            					+'	<div class="clear"></div>'
            					+'</div>'
            					+' <div class="text">'
            					+' <div class="spacing"> </div>'
            					+' <div class="textcontent"><p>'+msg.date[i].book[n].description+'</p></div>'
            					+' </div>'
            					+'<div class="clear"> </div>'
            					+' </div> </li>'
            		}
        		}
        	}
       
        	$("#list_ziliao").html(html);
        	$("#list_material").html(texthtml);
            $(".listcontent .listitems .listitem").hover(function () {
                $(this).find(".info").show();
            }, function () {
                $(this).find(".info").hide();
            });
            $(".listitem .btncol").click(function () {
                
                if ($(this).parents(".open").size() > 0) {
                    $(this).parents(".listitem").removeClass("open");
                } else {
                    $(".listitem").removeClass("open");
                    $(this).parents(".listitem").addClass("open");
                }
            });
            
        	//$("#newpage").val(msg.date);
        	//$("#sortby").val();
        	//$("#order").val()
        }
   });
}
function styleconvert(id_img,id_text){
	if(id_img=="lianxi"){
		 practicePage($("#newpage").val());
	}else if(id_img=="ziliao"){
		bookpage($("#newpage").val());
	}
	document.getElementById(id_img).style.display="none";
	document.getElementById(id_text).style.display="";
}
/***************************Page分页************************************************/
//$(document).ready(function() {
//	  init(indexunm);
//});

//默认加载
function init(pagenumber){
	//向服务器发送请求，查询满足条件的记录
	//$.getJSON('',{},function(data){
      //data 为返回json 对象 并包括(pagecount、totalcount)的key-value值;
      	if($("#htmltype").val()=="errlist" || $("#htmltype").val()=="focus"){
			jQuery(".errorlist").find("div.title").each(function(){
				$(this).html($(this).text());
			});
			jQuery(".options").find("li").find("label").each(function(){
				$(this).html($(this).text());
			});
		}
      
		var pagecount=$("#pagecount").val();
		var pagesize=$("#pagenum").val();
		var data=null;
		
		if(pagesize!=null&&pagesize!=0){
			data = {'pagecount':Math.ceil(pagecount/pagesize),'totalcount':150};
		}else{
			data = {'pagecount':Math.ceil(pagecount/pagesize),'totalcount':150};
		}
		if (pagecount != 0){
			$("#pager").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
			$("#listpager").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
			//$("#practice_page").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
			$("#practice_text_pager").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
			$("#material_page").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
			$("#material_text_pager").pager({ pagenumber: pagenumber, pagecount:data.pagecount,totalcount:data.totalcount, buttonClickCallback: PageClick});
		}
		//});
}
//回调函数
PageClick = function(pageclickednumber) {
	init(pageclickednumber);
	$("#newpage").val(pageclickednumber);
	 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
		 practicePage(pageclickednumber);
	 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
		 page(pageclickednumber);
	 }else if($("#htmltype").val()=="errlist"){
		 window.location.href ="/listErr?p="+pageclickednumber;
	 }else if($("#htmltype").val()=="history"){
		 window.location.href ="/examHistory?p="+pageclickednumber+"&ps?="+$("#pagenum").val();
	 }else if($("#htmltype").val()=="focus"){
		 window.location.href ="/listFocus?p="+pageclickednumber+"&ps?="+$("#pagenum").val();
	 }else if($("#htmltype").val()=="answerquestionlist"){
		 questuinpage(pageclickednumber)
	 }else{
		 bookpage(pageclickednumber);
	 }
}
/**************************************************************************/
/********************************排序******************************************/
function Pagesort(sortBy){
	 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
		 $("#practice_buttonup_achieve").removeClass().addClass('buttonup');
		 $("#practic_buttonup_bookindex").removeClass().addClass('buttonup');
		 $("#practic_buttonup_difficulty").removeClass().addClass('buttonup');
	 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
		 //给试卷排序
		 $("#testPaper_buttonup_achieve").removeClass().addClass('buttonup');
		 $("#testPaper_buttonup_bookindex").removeClass().addClass('buttonup');
		 $("#testPaper_buttonup_difficulty").removeClass().addClass('buttonup');
	 }
	
	$("#sortby").val(sortBy);
	 var order=$("#order").val();
	 if(order=="desc"){
		$("#order").val("asc");
		if(sortBy=="1"){
			 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
					$("#practice_buttonup_achieve").removeClass().addClass('button active');
					$("#practic_buttonup_bookindex").removeClass().addClass('buttonup');
			 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
				 //给试卷排序
				 $("#testPaper_buttonup_achieve").removeClass().addClass('button active');
				 $("#testPaper_buttonup_bookindex").removeClass().addClass('buttonup');
			 }			
		}else if(sortBy=="bookindex"){
			 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
				 	$("#practice_buttonup_achieve").removeClass().addClass('buttonup');
					$("#practic_buttonup_bookindex").removeClass().addClass('button active');
			 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
				 //给试卷排序
				 $("#testPaper_buttonup_achieve").removeClass().addClass('buttonup');
				 $("#testPaper_buttonup_bookindex").removeClass().addClass('button active');
			 }
		}
	 }else{
		 if(sortBy=="1"){
			 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
				 $("#practice_buttonup_achieve").removeClass().addClass('button upactive');
			 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
				 //给试卷排序
				 $("#testPaper_buttonup_achieve").removeClass().addClass('button upactive');
			 }
			
		 }else if(sortBy=="bookindex"){
			 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
				 $("#practic_buttonup_bookindex").removeClass().addClass('button upactive');
			 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
				 //给试卷排序
				 $("#testPaper_buttonup_bookindex").removeClass().addClass('button upactive');
			 }
		 }
		
		 $("#order").val("desc");
	 }
	 if($("#item1").attr("src")=="/assets/img/item1_active.png"){
		 practicePage($("#newpage").val());
	 }else if($("#item2").attr("src")=="/assets/img/item2_active.png"){
		 //给试卷排序
		 
		 page($("#newpage").val());
	 }else{
		 alert(3);
	 }
}
/**************************************************************************/
function selectTopic(id){
	$.ajax({
        type:"get",
        url:"/getselectTopic/"+id,
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{id:'id'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	var html='<div class="control-group">'
        			+' <label class="control-label pointer"><input type="checkbox" id="checkAll">试卷名称</label>'
        			+' <div class="controls">'
        			+'  <p id="" class="exam-name exam-title">'+msg.data.testPaperName+'</p>'
        			+' </div>'
        			+'</div>'
        			for(var i=0;i<msg.data.list.length;i++){
        				html+='<div class="control-group" style="margin-left: 40px;">'
        					+'<label class="control-label pointer"><input type="checkbox" name="subBox" value="'+msg.data.list[i].id+'">题库名称</label>'
        					+'<div class="controls">'
        					+'<p id="" class="exam-name">'+msg.data.list[i].name+'</p>'
        					+'</div>'
        					+'</div>';
        			}
        		
        		$("#chooseExam").html(html);
        		  $(function() {
        		        $("#checkAll").click(function() {
        		             $('input[name="subBox"]').attr("checked",this.checked); 
        		         });
        		         var $subBox = $("input[name='subBox']");
        		         $subBox.click(function(){
        						$("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
        		         });
        		     });
        }	 
	});
}
function getCheckBoX(){
	var obj=document.getElementsByName('subBox');
	var testPaperid;
	for(var i=0; i<obj.length; i++){
		    if(obj[i].checked)
		    	if(i==0){
		    		testPaperid=obj[i].value+',';  //如果选中，将value添加到变量s中
		    	}else{
		    		testPaperid+=obj[i].value+',';  //如果选中，将value添加到变量s中
		    	}
		    
     }
	if(testPaperid==null){
		alert("请选择题目！！");
	}else{
		window.location.href="/answerQuestions/"+testPaperid;
	}
}
function usersettings(){
	var language=$("#language").val();
	var colorStyle=$("#colorStyle").val();
	var pageNum=$("#pageNum").val();
	var messageInfo=$("#messageInfo").val();
	
	var radiolanguage=document.getElementsByName('language');
	for(var i=0;i<radiolanguage.length;i++){
		if(radiolanguage[i].value==language){
			radiolanguage[i].checked="true";
		}
	}
	var radiocolorStyle=document.getElementsByName('colorStyle');
	for(var i=0;i<radiocolorStyle.length;i++){
		if(radiocolorStyle[i].value==colorStyle){
			radiocolorStyle[i].checked="true";
		}
	}
	var radiopageNum=document.getElementsByName('pageNum');

	for(var i=0;i<radiopageNum.length;i++){
	
		if(radiopageNum[i].value==pageNum){
			radiopageNum[i].checked="true";
		}
	}
	
	var radiomessageInfo=document.getElementsByName('messageInfo');
	for(var i=0;i<radiomessageInfo.length;i++){
		if(radiomessageInfo[i].value==messageInfo){
			radiomessageInfo[i].checked="true";
		}
	}
}
function questuinpage(newPage){
	var examid=$("#examid").val();
	var pageindex=$("#PageIndex").val();
	//alert(pageindex+"----"+newPage);
	$.ajax({
        type:"get",
        url:"/QuestionPage/"+examid+"/"+newPage,
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{examid:'examid',pageindex:'pageindex'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	html="";
        	for(var i=0;i<msg.date.length;i++){
        	
        		 html+='<div class="questioncontent">';
        			html+='<a name="'+msg.date[i].id+'"></a>'
        			html+='	<div class="toolbar">';
        			html+='		<input type="button" value="跳过此题" class="input-skip" />';
        			html+='		<a href="#">';
        			html+='			<img src="/assets/img/icon_fav.png" />';
        			html+='		</a>';
        			html+='		<a href="#">';
        			html+='			<img src="/assets/img/icon_question.png" />';
        			html+='		</a>';
        			html+='	</div>';
        			html+='	<h1>'+msg.date[i].examination+'</h1>';
        			html+=' <ul>';
        			switch(msg.date[i].kind) {
        				case"01"://单选题
        					for(var n=0;n<msg.date[i].option.length;n++){
        						html+='<li>';
    							html+='	<input type="radio" onclick="addAnswer('+msg.date[i].id+')" name="'+msg.date[i].id+'" id="a1" value="'+msg.date[i].option[n].id+'" />'+msg.date[i].option[n].optiones;
    							html+='</li>'
        					}
        				break;
        				case "02":
        					for(var n=0;n<msg.date[i].option.length;n++){
        						html+='<li>';
        						html+='	<input type="radio" onclick="addAnswer('+msg.date[i].id+')" name="'+msg.date[i].id+'" id="a1" value="'+msg.date[i].option[n].id+'" />'+msg.date[i].option[n].optiones;
        						html+='</li>';
        					}
        				break;
        				case "03":
        					for(var n=0;n<msg.date[i].option.length;n++){
        						html+='<li>';
        						html+='	<input type="checkbox" onclick="addAnswer('+msg.date[i].id+')"  name="'+msg.date[i].id+'" id="a1" value="'+msg.date[i].option[n].id+'" />'+msg.date[i].option[n].optiones;
        						html+='</li>';
        					}
        				break;
        				case "04":
        					html+='<li>';
        					html+='<textarea rows="5" cols="110" id="text_'+msg.date[i].id+'"  onblur="addAnswer('+msg.date[i].id+')"></textarea>';
        					html+='</li>';
        				break;
        				case "05":
        					html+='<li>';
        					html+='<textarea rows="5" cols="110" id="text_'+msg.date[i].id+'" onblur="addAnswer('+msg.date[i].id+')"></textarea>';
        					html+='</li>';
        				break;
        			}
        			html+='</ul>'
        				html+='<div class="footer">';
        				html+='</div>'
        				html+='</div>'
        	
        	}
        	$("#question").html(html);
        	getExamAnswer($("#examScoreid").val());
        }
	});
}
function addAnswer(questionId){
	var radio=document.getElementsByName(questionId);
	var option="";
	for(var i=0;i<radio.length;i++){
		if(radio[i].checked){
			if(i==0){
	    		option+=radio[i].value+',';  //如果选中，将value添加到变量s中
	    	}else{
	    		option+=radio[i].value+',';  //如果选中，将value添加到变量s中
	    	}
		}
	}
	if(option==""){
		option=0;
	}
	var examScoreId=$("#examScoreid").val();
	var answer=$("#text_"+questionId).val();
	
	$.ajax({
        type:"get",
        url:"/saveAnswer/"+examScoreId+"/"+questionId+"/"+option+"/"+answer,
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{examScoreId:'examScoreId',question:'questionId',options:'encodeURI(option)',answer:'encodeURI(answer)'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	
        	$("#performance").val(msg.date);
        }
	});

}
function getExamAnswer(examid){
	$.ajax({
        type:"get",
        url:"/getExamScoreAnswer/"+examid,
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{examid:'examid'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	for(var i=0;i<msg.date.length;i++){
        		var radio=document.getElementsByName(msg.date[i].questionId);
        		for(var n=0;n<radio.length;n++){
        			if(radio[n].value==msg.date[i].option){
        				radio[n].checked="true";
        			}
        		}
        		if(msg.date[i].answer!=""){
        			$("#text_"+msg.date[i].questionId).val(msg.date[i].answer);
        		}
        	}
        }
	});
}
function addErrItem(){
	alert(1);
	window.location.href ="/saveErrItem/"+$("#examScoreid").val();
}

function getquestionByquestionId(question){

	var examid=$("#examid").val();
	var pageindex=$("#PageIndex").val();
	var newPage=1;
	$.ajax({
        type:"get",
        url:"/getQuestionByQuestionId/"+examid+"/"+newPage+"/"+question,
        contentType:"application/json;charset=utf-8",
        dataType:"json",
        data:"{examid:'examid',pageindex:'pageindex',questionId:'question'}",
        async:false,
        ifModified:false,
        cache:false,
        success:function(msg){
        	html="";
	        	for(var i=0;i<msg.date.questionlist.length;i++){
	        		 html+='<div class="questioncontent">';
	        		 	html+='<a name="'+msg.date.questionlist[i].id+'"></a>'
	        			html+='	<div class="toolbar">';
	        			html+='		<input type="button" value="跳过此题" class="input-skip" />';
	        			html+='		<a href="#">';
	        			html+='			<img src="/assets/img/icon_fav.png" />';
	        			html+='		</a>';
	        			html+='		<a href="#">';
	        			html+='			<img src="/assets/img/icon_question.png" />';
	        			html+='		</a>';
	        			html+='	</div>';
	        			html+='	<h1>'+msg.date.questionlist[i].examination+'</h1>';
	        			html+=' <ul>';
	        			switch(msg.date.questionlist[i].kind) {
	        				case"01"://单选题
	        					for(var n=0;n<msg.date.questionlist[i].option.length;n++){
	        						html+='<li>';
	    							html+='	<input type="radio" onclick="addAnswer('+msg.date.questionlist[i].id+')" name="'+msg.date.questionlist[i].id+'" id="a1" value="'+msg.date.questionlist[i].option[n].id+'" />'+msg.date.questionlist[i].option[n].optiones;
	    							html+='</li>'
	        					}
	        				break;
	        				case "02":
	        					for(var n=0;n<msg.date.questionlist[i].option.length;n++){
	        						html+='<li>';
	        						html+='	<input type="radio" onclick="addAnswer('+msg.date.questionlist[i].id+')" name="'+msg.date.questionlist[i].id+'" id="a1" value="'+msg.date.questionlist[i].option[n].id+'" />'+msg.date.questionlist[i].option[n].optiones;
	        						html+='</li>';
	        					}
	        				break;
	        				case "03":
	        					for(var n=0;n<msg.date.questionlist[i].option.length;n++){
	        						html+='<li>';
	        						html+='	<input type="checkbox" onclick="addAnswer('+msg.date.questionlist[i].id+')"  name="'+msg.date.questionlist[i].id+'" id="a1" value="'+msg.date.questionlist[i].option[n].id+'" />'+msg.date.questionlist[i].option[n].optiones;
	        						html+='</li>';
	        					}
	        				break;
	        				case "04":
	        					html+='<li>';
	        					html+='<textarea rows="5" cols="110" id="text_'+msg.date.questionlist[i].id+'"  onblur="addAnswer('+msg.date.questionlist[i].id+')"></textarea>';
	        					html+='</li>';
	        				break;
	        				case "05":
	        					html+='<li>';
	        					html+='<textarea rows="5" cols="110" id="text_'+msg.date.questionlist[i].id+'" onblur="addAnswer('+msg.date.questionlist[i].id+')"></textarea>';
	        					html+='</li>';
	        				break;
	        			}
	        			html+='</ul>'
	        				html+='<div class="footer">';
	        				html+='</div>'
	        				html+='</div>'
	        	
	        	}
	        	
        	$("#question").html(html);
        	
        	getExamAnswer($("#examScoreid").val());
        	 window.location.href ="#"+question;
        	init(msg.date.pageIndex);
        }
	});
}