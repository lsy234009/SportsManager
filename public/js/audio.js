/** 上传音频文件 */
function audioUrl(idNo) {
	// 隐藏弹出的字体颜色工具框
	hideFontColor();
	/* 显示上传文件框 */
	var uploadHTML = '<div class="frame_audio">'
			+ '<div class="frame_title"><span style="font-weight:bold">上传音频:</span>'
			+ '<img src="/assets/img/del.jpg" class="frame_del" onclick="cwxbox.box.hide();"/></div>'
			+ '<input type="file" id="audioFrame" name="audioFrame" accept="audio/*"/>'
			+ '<input type="hidden" id="temphidden"/>'
			+ '<div class="audio_button" style="margin: -6px 0px 0px 486px;">'
			+ '<button id="audioBtn'+idNo+'" class="btn" style="width:70px;" onclick="ajaxFileUpload_audio('+idNo+')">上传</button></div>'
			+ '<p class="frame_message" style="margin: -6px 26px;"><span id="audioMessage"></span>'
			+ '<img id="audioLoading" src="/assets/img/loading.gif"/></p>'
			+ '</div>';
	// 显示页面
	cwxbox.box.show(uploadHTML);
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
				bg.onclick = cwxbox.box.hide;
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
				}, t * 1000);
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

//var editor = document.getElementById("div_bj");// TODO:没有意义的text1,应该去掉
//var range, bookmark;
//
//var saveFocus = function() {// 保存焦点状态
//	if (document.selection) { // 只有坑爹的IE才执行下面的代码
//		range = document.selection.createRange();
//		bookmark = range.getBookmark();
//	}
//}
////恢复 在鼠标点击编辑区时保存的焦点;在输入内容时也保存焦点
//$(editor).click(saveFocus).keydown(saveFocus);

/** 利用ajaxFileUpload 插件上传音频文件 */
function ajaxFileUpload_audio(idNo) {
	var fileName = $("#audioFrame").val(); // 上传的文件名
	var subName = fileName.substring(fileName.indexOf(".") + 1);
	if (subName == "") {
		$("#audioMessage").css("color", "#DC453A").text("请选择上传文件");
	} else if (subName != "mp3") {
		$("#audioMessage").css("color", "#DC453A").text("请检查上传文件类型");
	} else {
		$("#audioMessage").css("color", "").text("音频上传中");
		$("#audioLoading").show(); // 显示loading图片
		
		// 禁用"上传"按钮 disabled="disabled"
		$("#audioBtn"+idNo).attr("disabled","disabled");
		
		// 页面增加音频播放器显示的代码
		if($("#audio"+idNo).attr("flag")=="y"){
			$("#audio"+idNo).remove(); // 删除已存在的播放器
		}
		addAudioPlayer(idNo); // 增加新播放器
		var id;
		if($("#singleChooseDBId" + idNo).val()!=undefined){
			id=$("#singleChooseDBId" + idNo).val();
		}else if($("#noteDBId" + idNo).val()!=undefined){
			id=$("#noteDBId" + idNo).val();
		}
		// 上传文件
		$.ajaxFileUpload({
			url : '/EntryQuestionsAction_saveAudio/'+$("#examinationPaperId").val(), // saveAudio
			secureuri : false,
			fileElementId : 'audioFrame',
			dataType : 'json',
			type : 'post',
			// timeout:5000,
			data : {
				flag : "audio", // 文件为音频的flag
				id : id,
			},
			success : function(data, status) {
				if (typeof (data.error) != "undefined") {
					if (data.error != "") {
						alert(data.error);
					} else {
						alert(data.msg);
					}
				}

				$("#audioMessage").text("上传完成"); // 显示提示Message
				$("#audioLoading").hide(); // 隐藏loading图片

				var audioName = data.url; // 存入数据库后的音频名称
				
				// 返回音频路径加载音频
				getAudio(audioName, idNo);
				// 加载音频完成后显示播放器
				$("#audio" + idNo).show();
				// 关闭上传页面
				cwxbox.box.hide(); 
			},
			error : function(data, status, e) {
				alert(e);
			}
		});

		// return false;
	}
}

/** 音频加载 */
function getAudio(audioPath,idNo){
	audioPath = "/returnEntryQuestionAudio/" + audioPath.replace(/\//g,"^");
	//audioPath = "/returnEntryQuestionAudio/" + encodeURIComponent(audioPath);
	//alert(audioPath); // 	/returnEntryQuestionAudio/1/20140309120240.mp3
	try{
		$("#jquery_jplayer_"+idNo).jPlayer({        
			ready: function (event) {
				$(this).jPlayer("setMedia", {mp3: audioPath});
			},
			swfPath: "/assets/js/sound",
			solution:"html,flash",
			supplied: "mp3",
			wmode: "window",
			preload: 'metadata',
			muted: false,
			ended: function(event) { // The $.jPlayer.event.ended 事件
				$(this).jPlayer("setMedia", {mp3: audioPath}); //重复播放媒体
			},
			cssSelectorAncestor : "#jp_container_"+idNo
			}
		);
	}catch(err){alert(err.message);}
}

/** 单选题中设置上传音频中的值 */
function setAudioAttr(idNo,kind){
	if(kind==1){ // 排除多选题的情况
		// 设置上传音频方法的参数domid
		$("#audioUpload_tbn").attr("onclick","audioUrl("+idNo+")");
		// 设置上传视频方法的参数domid
		$("#videoUpload_tbn").attr("onclick","videoUrl("+idNo+")");
	}
}

/** 增加音频播放器 */
function addAudioPlayer(idNo){
	$("#Qtitle"+idNo).after(getAudioPlayer(idNo));
	$('.showTips').tooltip({animation:true,trigger:'hover'}); // 删除的提示tip
	$('#player_del'+idNo).click(function(){
		$(".tooltip").hide(); // 隐藏删除提示tip
		$("#audio"+idNo).remove(); // 删除播放器
		var questionId="";	//题目Id
		//alert($("#singleChooseDBId"+idNo).val()+"--------"+$("#noteDBId"+idNo).val());
		if($("#noteDBId"+idNo).val()!=null){
			questionId=$("#noteDBId"+idNo).val();
		}else if($("#singleChooseDBId"+idNo).val()!=null){
			questionId=$("#singleChooseDBId"+idNo).val();
		}
		$.ajax({ // 删除DB中数据
			url: "/EntryQuestionsAction_deleteAudio/"+questionId+"/audio"
		});
	});
}

/** 音频播放器代码 */
function getAudioPlayer(idNo){
	return '<tr id="audio'+idNo+'" style="display:none;" flag="y"><td colspan="2"  style="height: 25px">'
	   +'<div id="jquery_jplayer_'+idNo+'"></div>'
	   +'<div id="jquery_jplayer_'+idNo+'" class="jp-jplayer"></div>'
	   +'<div id="jp_container_'+idNo+'" class="jp-audio">'
	   +'<div class="jp-type-single">'
	   +'		<div class="jp-gui jp-interface">'
	   +'			<div class="playerLogo_audio"></div>'
	   +'			<ul class="jp-controls">'
	   +'			    <li><a href="javascript:;" class="jp-play" tabindex="1" title="播放">play</a></li>'
	   +'               <li><a href="javascript:;" class="jp-pause" tabindex="1" title="暂停">pause</a></li>'
	   +'               <li><a href="javascript:;" class="jp-stop" tabindex="1" title="停止">stop</a></li>'
	   +'               <li><a href="javascript:;" class="jp-mute" tabindex="1" title="静音">mute</a></li>'
	   +'               <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="取消静音">unmute</a></li>'
	   +'               <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="最大音量">max volume</a></li>'
	   +'		    </ul>'
	   +'           <div class="jp-progress">'
	   +'             <div class="jp-seek-bar">'
	   +'				  <div class="jp-play-bar"></div>'
	   +'             </div>'
	   +'           </div>'
	   +'           <div class="jp-volume-bar">'
	   +'         		<div class="jp-volume-bar-value"></div>'
	   +'           </div>'
	   +'           <div class="jp-time-holder">'
	   +'               <div class="jp-current-time"></div>'
	   +'               <div class="jp-duration"></div>'
	   +'		    </div>'
	   +'<div id="player_del'+idNo+'" class="player_del showTips" title="删除音频" data-trigger="hover" data-placement="top"></div>'
	   +'        </div>'
	   +'</div>'
	   +'</div>'
	   +'</td></tr>';
}

