/** 上传视频文件 */
function videoUrl(idNo) {
	// 隐藏弹出的字体颜色工具框
	hideFontColor();
	/* 显示上传文件框 */
	var uploadHTML = '<div class="frame_audio">'
			+ '<div class="frame_title"><span style="font-weight:bold">上传视频:</span>'
			+ '<img src="/assets/img/del.jpg" class="frame_del" onclick="cwxbox.box.hide();"/></div>'
			+ '<input type="file" id="videoFrame" name="videoFrame" accept="video/*"/>'
			+ '<input type="hidden" id="temphidden"/>'
			+ '<div class="audio_button" style="margin: -6px 0px 0px 486px;">'
			+ '<button id="videoBtn'+idNo+'" class="btn" style="width:70px;" onclick="ajaxFileUpload_video('+idNo+')">上传</button></div>'
			+ '<p class="frame_message" style="margin: -22px 37px;"><span id="videoMessage"></span>'
			+ '<img id="videoLoading" src="/assets/img/loading.gif"/></p>'
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

var editor = document.getElementById("div_bj");// TODO:没有意义的text1,应该去掉
var range, bookmark;

var saveFocus = function() {// 保存焦点状态
	if (document.selection) { // 只有坑爹的IE才执行下面的代码
		range = document.selection.createRange();
		bookmark = range.getBookmark();
	}
}

//恢复 在鼠标点击编辑区时保存的焦点;在输入内容时也保存焦点
$(editor).click(saveFocus).keydown(saveFocus);


/** 利用ajaxFileUpload 插件 进行upload 只能用提交的部分 */
function ajaxFileUpload_video(idNo) {
	var fileName = $("#videoFrame").val(); // 上传的文件名
	var subName = fileName.substring(fileName.indexOf(".") + 1);
	if (subName == "") {
		$("#videoMessage").css("color", "#DC453A").text("请选择上传文件");

	} else if (subName == "mp4" || subName == "m4v" || subName == "webmv" 
			|| subName == "webm" || subName == "ogv" || subName == "flv" || subName == "x-flv") {
		$("#videoMessage").css("color", "").text("视频上传中");
		$("#videoLoading").show(); // 显示loading图片
		
		// 禁用"上传"按钮 disabled="disabled"
		$("#videoBtn"+idNo).attr("disabled","disabled");
		
		// 页面增加视频播放器显示的代码
		if($("#video"+idNo).attr("flag")=="y"){
			$("#video_button"+idNo).remove();
			$("#video"+idNo).remove(); // 删除已存在的播放器
		}
		addVideoPlayer(idNo); // 增加新播放器

		// 上传文件
		$.ajaxFileUpload({
			url : '/EntryQuestionsAction_saveAudio/'+$("#examinationPaperId").val(), // saveVideo
			secureuri : false,
			fileElementId : 'videoFrame',
			dataType : 'json',
			type : 'post',
			// timeout:5000,
			data : {
				flag : "video", // 文件为视频的flag
				id : $("#singleChooseDBId" + idNo).val(),
			},success : function(data, status) {
				if (typeof (data.error) != "undefined") {
					if (data.error != "") {
						alert(data.error);
					} else {
						alert(data.msg);
					}
				}

				$("#videoMessage").text("上传完成"); // 显示提示Message
				$("#videoLoading").hide(); // 隐藏loading图片

				var videoName = data.url; // 存入数据库后的视频名称
				// 返回视频路径加载视频
				getVideo(videoName, idNo);
				// 加载音频完成后显示播放器
				$("#video" + idNo).show();
				cwxbox.box.hide(); // 关闭上传页面
			},error : function(data, status, e) {
				alert(e);
			}
		});

	} else {
		$("#videoMessage").css("color", "#DC453A").text("请检查上传文件类型");
	}
}

/** 加载视频 */
function getVideo(videoPath,idNo){
	try{
		$("#jquery_jplayer_"+idNo+"_").jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {
					//m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
					//ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
					//webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
					webmv: videoPath,
					m4v: videoPath,
					flv: videoPath,
					//webmv: "/returnEntryQuestionVideo/1826/20140220131411.webm",
					// webmv: "/assets/bookimg/demoVideo_2.mp4",
					// m4v: "/assets/bookimg/demoVideo_2.mp4",
					poster: "/assets/img/videoPlayerPoster.png"
				});
			},
			swfPath: "/assets/js/sound",
			solution:"html,flash",
			supplied: "webmv, ogv, m4v, flv",
			size: {
				width: "480px",
				height: "270px",
				cssClass: "jp-video-270p"
			},
			/*ended:function() {
	            $(this).jPlayer("setMedia", {webmv: videoPath});
	        },*/
			cssSelectorAncestor : "#jp_container_"+idNo+"_",
			wmode: "window"
		}
		
		);		
		$("#jquery_jplayer_"+idNo+"_").jPlayer("onSoundComplete", function() {
		    //alert('播放结束了');
		    this.element.jPlayer("play"); // 循环播放
		});

	}catch(err){ alert(err.message); }
}

/** 显示已加载好的视频播放器 */
function showVideo(idNo){
	// 显示视频播放器
	$("#jquery_jplayer_"+idNo+"_").slideDown(400,function(){
		// 显示"收起视频"
		$("#spreadOut"+idNo).hide();
		$("#pickUp"+idNo).show();
	});
}
function hideVideo(idNo){
	// 收起视频播放器
	$("#jquery_jplayer_"+idNo+"_").slideUp(400,function(){
		// 暂停播放器
		$("#jquery_jplayer_"+idNo+"_").jPlayer("pause");
		// 显示"展开视频"
		$("#pickUp"+idNo).hide();
		$("#spreadOut"+idNo).show();
	});
}

/** 增加视频播放器 */
function addVideoPlayer(idNo){
	if($("#audio"+idNo).attr("flag")=="y"){ // 存在音频播放器
		$("#audio"+idNo).after(getVideoPlayer(idNo));
	}else{
		$("#Qtitle"+idNo).after(getVideoPlayer(idNo));
	}
	$('.showTips').tooltip({animation:true,trigger:'hover'}); // 删除的提示tip
	$('#player_del'+idNo).click(function(){
		$(".tooltip").hide(); // 隐藏删除提示tip
		$("#video_button"+idNo).remove(); // 删除播放器 按钮
		$("#video"+idNo).remove(); // 删除播放器 
		$.ajax({ // 删除DB中数据
			url: "/EntryQuestionsAction_deleteAudio/"+$("#singleChooseDBId"+idNo).val()+"/video"
		});
	});
	// 点击播放时展开视频
	$("#jp-play"+idNo).click(function(){
		showVideo(idNo);
	});
}

/** 视频播放器代码 */
function getVideoPlayer(idNo){
	return '<tr id="video'+idNo+'" flag="y" style="display:none"><td colspan="2" style="height: 25px">'
	   +'<div id="jquery_jplayer_'+idNo+'_" style="display:none"></div>'
	   +'<div id="jquery_jplayer_'+idNo+'_" class="jp-jplayer"></div>'
	   +'<div id="jp_container_'+idNo+'_" class="jp-audio">'
	   +'<div class="jp-type-single">'
	   +'		<div class="jp-gui jp-interface">'
	   +'			<div class="playerLogo_video"></div>'
	   +'			<ul class="jp-controls">'
	   +'			    <li><a href="javascript:;" id="jp-play'+idNo+'" class="jp-play" tabindex="1" title="播放">play</a></li>'
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
	   +'<div id="player_del'+idNo+'" class="player_del showTips" title="删除视频" data-trigger="hover" data-placement="top"></div>'
	   +'<div id="spreadOut'+idNo+'" class="spreadOut_video showTips" title="展开视频" data-trigger="hover" data-placement="top" onclick="showVideo('+idNo+')"></div>'
	   +'<div id="pickUp'+idNo+'" class="pickUp_video showTips" title="收起视频" data-trigger="hover" data-placement="top" onclick="hideVideo('+idNo+')"></div>'
	   +'      </div>'
	   +'</div>'
	   +'</div>'
	   +'</td></tr>';
}
