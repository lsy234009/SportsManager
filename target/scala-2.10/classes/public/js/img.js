/** 上传图片文件 */
function imgUrl() {
	// 隐藏弹出的字体颜色工具框
	hideFontColor();
	// 显示上传文件的工具框
	var neirong = '<div class="frame_audio" style="height:330px;">'
			+ '<div class="frame_title"><span style="font-weight:bold">预览</span>'
			+ '<img class="frame_del" src="/assets/img/del.jpg" onclick="cwxbox.box.hide();"/></div>'
			+ '<div id="picpreviewarea">'
			+ '</br></br></br><span class="tipInfo_img">点击"浏览"选择上传图片</span>'
			+ '</div>'
			+ '<div class="file-box">'
			+ '<input type="file" id="fl" name="fl"	class="fileshow" accept="image/*"/>'
			+ '<input type="button" class="filebtn btn" value="浏览..." /> '
			+ '<span id="flhidden"></span>'
			+ '</div>'
			+ '<input type="hidden" id="temphidden"/>'
			+ '<div class="img_button">'
			+ '<span id="imgMessage" class="frame_message"></span>'
			+ '<img id="imgLoading" src="/assets/img/loading.gif"/>'
			+ '<button id="imgBtn" class="btn dis">确定</button>'
			+ '</div>'
			+ '</div>';
	cwxbox.box.show(neirong);
	$("#fl").change(function (){
		uploadImg();
	});
	$("#imgBtn").click(function (){
		$("#imgBtn").addClass("dis").unbind();
	});
}


function C$(id) {
	return document.getElementById(id);
}

// 定义窗体对象
var cwxbox = {};

/** 一个匿名函数 返回cwxbox.box对象的方法集 * */
cwxbox.box = function() {
	var bg, wd, cn, ow, oh, o = true, time = null;
	return {
		show : function(c, t, w, h) {
			if (o) {
				bg = document.createElement('div');
				bg.id = 'cwxBg';
				wd = document.createElement('div');
				wd.id = 'cwxWd';
				cn = document.createElement('div');
				cn.id = 'cwxCn';
				document.body.appendChild(bg);
				document.body.appendChild(wd);
				wd.appendChild(cn);
				//bg.onclick = cwxbox.box.hide;
				window.onresize = this.init;
				window.onscroll = this.scrolls;
				o = false;
			}
			var inhtml;
			if (w && h) {
				inhtml = '<iframe src="' + c + '" width="' + w + '" height="'
						+ h + '" frameborder="0"></iframe>';
			} else {
				inhtml = c;
			}
			cn.innerHTML = inhtml;
			oh = this.getCss(wd, 'offsetHeight');
			ow = this.getCss(wd, 'offsetWidth');
			this.init();
			this.alpha(bg, 50, 1);
			this.drag(wd);
			if (t) {
				time = setTimeout(function() {
					cwxbox.box.hide()
				}, t*1000);
			}
		},
		hide : function() {
			cwxbox.box.alpha(wd, 0, -1);
			clearTimeout(time);
		},
		init : function() {
			bg.style.height = cwxbox.page.total(1) + 'px';
			bg.style.width = '';
			bg.style.width = cwxbox.page.total(0) + 'px';
			var h = (cwxbox.page.height() - oh) / 2;
			wd.style.top = (h + cwxbox.page.top()) + 'px';
			wd.style.left = (cwxbox.page.width() - ow) / 2 + 'px';
		},
		scrolls : function() {
			var h = (cwxbox.page.height() - oh) / 2;
			wd.style.top = (h + cwxbox.page.top()) + 'px';
		},
		alpha : function(e, a, d) {
			clearInterval(e.ai);
			if (d == 1) {
				e.style.opacity = 0;
				e.style.filter = 'alpha(opacity=0)';
				e.style.display = 'block';
			}
			e.ai = setInterval(function() {
				cwxbox.box.ta(e, a, d)
			}, 40);
		},
		ta : function(e, a, d) {
			var anum = Math.round(e.style.opacity * 100);
			if (anum == a) {
				clearInterval(e.ai);
				if (d == -1) {
					e.style.display = 'none';
					if (e == wd) {
						this.alpha(bg, 0, -1);
					}
				} else {
					if (e == bg) {
						this.alpha(wd, 100, 1);
					}
				}
			} else {
				var n = Math.ceil((anum + ((a - anum) * .5)));
				n = n == 1 ? 0 : n;
				e.style.opacity = n / 100;
				e.style.filter = 'alpha(opacity=' + n + ')';
			}
		},
		getCss : function(e, n) {
			var e_style = e.currentStyle ? e.currentStyle : window
					.getComputedStyle(e, null);
			if (e_style.display === 'none') {
				var clonDom = e.cloneNode(true);
				clonDom.style.cssText = 'position:absolute; display:block; top:-3000px;';
				document.body.appendChild(clonDom);
				var wh = clonDom[n];
				clonDom.parentNode.removeChild(clonDom);
				return wh;
			}
			return e[n];
		},
		drag : function(e) {
			var startX, startY, mouse;
			mouse = {
				mouseup : function() {
					if (e.releaseCapture) {
						e.onmousemove = null;
						e.onmouseup = null;
						e.releaseCapture();
					} else {
						document.removeEventListener("mousemove",
								mouse.mousemove, true);
						document.removeEventListener("mouseup", mouse.mouseup,
								true);
					}
				},
				mousemove : function(ev) {
					var oEvent = ev || event;
					e.style.left = oEvent.clientX - startX + "px";
					e.style.top = oEvent.clientY - startY + "px";
				}
			}
			e.onmousedown = function(ev) {
				var oEvent = ev || event;
				startX = oEvent.clientX - this.offsetLeft;
				startY = oEvent.clientY - this.offsetTop;
				if (e.setCapture) {
					e.onmousemove = mouse.mousemove;
					e.onmouseup = mouse.mouseup;
					e.setCapture();
				} else {
					document.addEventListener("mousemove", mouse.mousemove,
							true);
					document.addEventListener("mouseup", mouse.mouseup, true);
				}
			}

		}
	}
}();

/** 又是一个匿名函数 返回cwxbox.page对象的方法集 * */
cwxbox.page = function() {
	return {
		top : function() {
			return document.documentElement.scrollTop
					|| document.body.scrollTop
		},
		width : function() {
			return self.innerWidth || document.documentElement.clientWidth
					|| document.body.clientWidth
		},
		height : function() {
			return self.innerHeight || document.documentElement.clientHeight
					|| document.body.clientHeight
		},
		total : function(d) {
			var b = document.body, e = document.documentElement;
			return d ? Math.max(Math.max(b.scrollHeight, e.scrollHeight), Math
					.max(b.clientHeight, e.clientHeight)) : Math.max(Math.max(
					b.scrollWidth, e.scrollWidth), Math.max(b.clientWidth,
					e.clientWidth))
		}
	}
}();

var editor = document.getElementById("div_bj");// TODO:没有意义的text1,应该去掉
var range, bookmark;
var imgName;

var saveFocus = function() {// 保存焦点状态
	if (document.selection) { // 只有坑爹的IE才执行下面的代码
		range = document.selection.createRange();

	}else {
		range = window.getSelection();
	}
	bookmark = range.getBookmark();

}

//恢复 在鼠标点击编辑区时保存的焦点;在输入内容时也保存焦点
$(editor).click(saveFocus).keydown(saveFocus);


/** 
 * 点击"浏览"后的操作
 * 选择图片上传后，预览框显示已上传的图片
 *  */
function uploadImg() {
	if(!$("#imgBtn").hasClass("dis")){
		// 一次流程的第二次上传时禁用"确定"按钮
		$("#imgBtn").addClass("dis").unbind();
	}
	var fileName = $("#fl").val(); // 取得文件名称
//	alert(fileName);
	if(fileName.length==0){
		$("#imgMessage").css("color", "#DC453A").text(""); // 错误的提示message
	}else if (checkImg(fileName)) { // 判断上传文件类型
		$("#imgMessage").css("color","").text("图片上传中");
		$("#imgLoading").show(); // 显示loading图片
		//$("#flhidden").css("color","").text($("#fl").val()); // 显示文件名
		/** 上传图片 */
		ajaxFileUpload_img();
	} else {
		$("#flhidden").css("color", "#DC453A").text($("#fl").val()); // 显示红色的文件名
		$("#imgMessage").css("color", "#DC453A").text("请检查文件类型"); // 错误的提示message
		$('#picpreviewarea').html("</br></br></br><span class='tipInfo_img'>点击'浏览'重新选择上传图片</span>"); // 清空原先的图片
	}
}


/** 
 * AJAX方式上传图片至服务器保存
 * 利用ajaxFileUpload插件上传图片，完成后在预览框显示图片 */
function ajaxFileUpload_img() {

	$.ajaxFileUpload({
		url : '/EntryQuestionsAction_savePic/'+$("#examinationPaperId").val(),
		secureuri : false,
		fileElementId : 'fl',
		dataType : 'json',
		timeout : 500,
		success : function(data) {
			$("#imgMessage").text("上传完成"); // 显示提示Message
			$("#imgLoading").hide(); // 隐藏loading图片
			/** 插入上传的图片到预览框 */
			insertImg(data.url); 
		}
	})
	//return false;
}


/**
 * 在预览框中显示已上传图片
 * 设定图片高度为预览框高度，宽度自适应，最大为预览框宽度
 * @param imgSrc 图片路径
 * */
function insertImg(imgSrc) {
	// 预览框中插入图片
	$('#picpreviewarea').html("<img id='aPic' src='"+imgSrc+"'>"); 
	// 启用"确定"按钮，点击完成题目显示图片
	$("#imgBtn").removeClass("dis").click(function(){
		if(imgSrc!=""){
			showImg(imgSrc)
		}else{
			cwxbox.box.hide(); // 隐藏上传框
		}
	
	});
	/*if (range) { // 同样，坑爹IE专用代码
			range.moveToBookmark(bookmark);
			range.select();
	}*/
}


/**
 * 显示图片
 * 将上传的图片显示在题目中指定的位置，尺寸为图片自身尺寸
 * @param imgSrc 图片路径
 * */
function showImg(imgSrc) {

	/* 图片插入到对应的输入框中 */
	document.execCommand("InsertImage", false, imgSrc); // 插入图片
	cwxbox.box.hide(); // 隐藏上传框
	//check输入框内容,隐藏图片所在输入框提示信息
	var textInfo = $(".check-html");
	for(var i = 0; i < textInfo.length; i++){
		togglePrev(textInfo[i]);
	}
}


/**
 * 检查上传文件类型是否为图片
 * @param fileName 图片名称
 * */
function checkImg(fileName) {
	// 取得文件后缀名
	var subFileName = fileName.indexOf(".")<0 ? "null" : fileName.substring(fileName.indexOf(".") + 1).toLowerCase(); 
	// 检查类型匹配
	if(subFileName=="jpg"||subFileName=="jpe"||subFileName=="jpeg"||subFileName=="gif"||subFileName=="png"
		||subFileName=="bmp"||subFileName=="ico"||subFileName=="svg"||subFileName=="svgz"||subFileName=="tif"
			||subFileName=="tiff"||subFileName=="ai"||subFileName=="drw"||subFileName=="pct"||subFileName=="psp"
				||subFileName=="raw"||subFileName=="xcf"||subFileName=="psd"){
		return true;
	} else {
		return false;
	}
}