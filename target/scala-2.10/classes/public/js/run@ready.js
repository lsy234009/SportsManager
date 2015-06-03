$(function ($) {
	 var option=['A','B','C','D','E','F','G','H','J','K','L'];
	/** SECTION 8 */
	//$("#color").undelegate("input","click");
//$("#color").delegate("input","click",function(){
//	alert(1212);
//});
	/** IE中trim方法的实现  */
	String.prototype.trim=function() {
		// return this.replace(/(^\s*)|(\s*$)/g,'');
		return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
	};

	/** SECTION 6 */
	var screenHeight = $(window).height()*590/640;

	$(".content").height(screenHeight);//设置内容div高度
	$("#mo_center").css("max-height",screenHeight*430/550);//设置center div高度

	/** SECTION 7*/
	$(".main").click(function(event){
	  	  var e = event || window.event;
	        var elem = e.srcElement||e.target;
	        while(elem)
	        {
	            if($("#"+elem.id).hasClass("nr"))
	            {
	            	return ;
	            }else if(elem.id == "mainbody"){
	          	  //$(".question_footer").hide();
	          	  return true;
	            }
	            elem = elem.parentNode;
	        }
	  });

	/**  SECTION_1     */
	//ATUO WIHT:入力框动态调整长度 START
	var textWidth = function(text){
	var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
		$('body').append(sensor);
	var width = sensor.width();
	sensor.remove();
	return width;
	};

	//input size modify
	$("input#fullname").unbind('keydown').bind('keydown', function(){
		$(this).width(textWidth($(this).val()));
	});
	//ATUO WIHT:入力框动态调整长度 END

	/* add tags */
/*	$1('tagsTest').tagsinput({ itemValue: 'name',  itemText: 'age', typeahead: { source: function(query) {
		return $.getJSON('/EntryQuestionsAction_Tag'); } }});*/

	/** 加载"To Top"按钮,点击触发"To Top"事件 */
	$(".to_top").css("margin-right",($(window).width()-1000)/2-50).click(function() {
		$(".to_top").hide();
	});

	/**  SECTION_2     */
	//according to entry set init values 更新画面初始逻辑 START
//	$("#entryFlg").val("preview");
	var entryflag = $("#entryFlg").val();
	 if(entryflag == "preview"){
		$("#init_flag").val("doing");
		//edit questions
		$(".question_tr").each(function(){
			var question_id   = $(this).find(".question_item_1").val();//题目DB id
			var question_exam = $(this).find(".question_item_2").val();//题干
			var comment       = $(this).find(".question_item_3").val();//题目注解
			var description   = $(this).find(".question_item_4").val();//题目描述
			var kind          = $(this).find(".question_item_5").val();//题型
			var difficulty    = $(this).find(".question_item_6").val();//难度级别
			var mustanswer    = $(this).find(".question_item_7").val();//必答选答
			var tags    = $(this).find(".question_item_8").val();//TAG
			var audioName = $(this).find(".question_item_9").val();//音频名称
			var videoName = $(this).find(".question_item_10").val();//视频名称
			
			switch(kind) {
				case"01"://单选题
					add_div_preview();
					var t_id_content = domid - 1;
					$("input#singleChooseDBId"+t_id_content).val(question_id);
					$("#xuanxiang_a"+t_id_content).remove();
					$("#xuanxiang_b"+t_id_content).remove();
					$("#xuanxiang_c"+t_id_content).remove();
					$("#xuanxiang_d"+t_id_content).remove();
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						addOption_preview(t_id_content,1); // 增加选项
						var t_val = val-1;
						$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
						$("div#inputText_"+t_val).html($(this).find(".item_option").val());//选项初始(回写)设定
						$("#pointText_"+t_val).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
						// 设定当前单选题的正确答案 (radio按钮checked)
						if($(this).find(".item_isAnswer").val() == "true"){
							$("#radio"+t_val).attr("checked","checked").val("1");// check点击后的radio不能重复点击触发click的flag
							$("#optionDBId_temp"+t_id_content).val($(this).attr("id"));
						}
					});
					// 视频回写
					if(videoName.trim()!=""){
						addVideoPlayer(t_id_content); // 增加播放器
						getVideo("/returnEntryQuestionVideo/" + $("#examinationPaperId").val() + "/" + videoName,t_id_content);
						$("#video" + t_id_content).show(); // 显示
					}
					// 音频回写
					if(audioName.trim()!=""){
						addAudioPlayer(t_id_content); // 增加播放器
						getAudio("/returnEntryQuestionAudio/" + $("#examinationPaperId").val() + "/" + audioName,t_id_content);
						$("#audio" + t_id_content).show(); // 显示
					}
					break;
				case"02"://判断题
					addTrue_preview();
					var t_id_content = domid - 1;
					$("input#trueDBId"+t_id_content).val(question_id);//题目选项的DBId
					$("#optionDBId_t"+t_id_content).val($(this).find(".question_item_n_option:first").attr("id"));//选项True的DBId
					$("#inputText_t"+t_id_content).text($(this).find(".item_option:first").val());//选项True内容初始(回写)设定
					$("#pointText_t"+t_id_content).val(Number($(this).find(".item_score:first").val()));//选项True分数初始(回写)设定

					$("#optionDBId_f"+t_id_content).val($(this).find(".question_item_n_option:last").attr("id"));//选项False的DBId
					$("#inputText_f"+t_id_content).text($(this).find(".item_option:last").val());//选项False内容初始(回写)设定
					$("#pointText_f"+t_id_content).val(Number($(this).find(".item_score:last").val()));//选项False分数初始(回写)设定
					// 选中当前判断题答案
					if($(this).find(".item_isAnswer:first").val() == "true"){
						$("#radio_t"+t_id_content).attr("checked","checked").val("ok");// check点击后的radio不能重复点击触发click的flag
					} else if($(this).find(".item_isAnswer:last").val() == "true") {
						$("#radio_f"+t_id_content).attr("checked","checked").val("ok");
					}
					// check判断题的选项内容
					if($("#inputText_t"+t_id_content).text()=="请输入..."){
						$("#inputText_t"+t_id_content).addClass("tipInfo");
					}
					if($("#inputText_f"+t_id_content).text()=="请输入..."){
						$("#inputText_f"+t_id_content).addClass("tipInfo");
					}
					break;
				case"03"://多项选择
					duoxuan_preview();
					var t_id_content = domid - 1;
					$("input#singleChooseDBId"+t_id_content).val(question_id);
					$("#xuanxiang_a"+t_id_content).remove();
					$("#xuanxiang_b"+t_id_content).remove();
					$("#xuanxiang_c"+t_id_content).remove();
					$("#xuanxiang_d"+t_id_content).remove();
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						addOption_preview(t_id_content,3);
						var t_val = val-1;
						$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
						$("div#inputText_"+t_val).html($(this).find(".item_option").val());//选项初始(回写)设定
						$("#pointText_"+t_val).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
						// 选中当前多选题答案
						if($(this).find(".item_isAnswer").val() == "true"){
							$("#checkbox"+t_val).attr("checked","checked");
						}
					});
					break;
				case"04"://论述题
					addessay_preview();
					var t_id_content = domid - 1;
					$("input#essayDBId"+t_id_content).val(question_id);
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						$("#optionDBId_essay"+t_id_content).val($(this).attr("id"));//题目选项的DBId
						$("textarea#essayOption"+t_id_content).val($(this).find(".item_option").val());//选项初始(回写)设定
						$("#pointText_essay"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
					});
					break;
				case"05"://简答题
					shortAnswer_preview();
					var t_id_content = domid - 1;
					$("input#shortAnswerDBId"+t_id_content).val(question_id);
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						$("#optionDBId_shortAnswer"+t_id_content).val($(this).attr("id"));//题目选项的DBId
						$("div#shortAnswerOption"+t_id_content).html($(this).find(".item_option").val());//选项初始(回写)设定
						$("#pointText_shortAnswer"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
					});
					break;
				case"06"://便签
					addnote_preview();
					var t_id_content = domid - 1;
					$("input#noteDBId"+t_id_content).val(question_id); // 设置id
					break;
				case"07"://填空
					addFill_preview();
					var t_id_content = domid - 1;
					$("input#fillDBId"+t_id_content).val(question_id);
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						$("#pointText_fill"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
					});
					break;
				case"08"://阅读理解
					addnote_preview();
					var t_id_content = domid - 1;
					$("input#noteDBId"+t_id_content).val(question_id); // 设置id
					clickSwitch_preview(t_id_content); // 转换题型为阅读理解
					break;
				default:
					//alert("no match type"); TODO
				    break;
			 }
			var t_id = domid -1;
			$("div#text"+t_id).html(question_exam);        //题干初始(回写)设定
			$("div#comment"+t_id).html(comment);           //题目注解初始(回写)设定
			$("div#description"+t_id).html(description);   //题目描述初始(回写)设定
			if(!(kind=="06"||kind=="08")){
				Difficulty(difficulty,t_id);                  //难度级别初始(回写)设定
			}
			//选答必答初始(回写)设定 TODO
			/*$("#required_flg_"+t_id).val(mustanswer);
			if(mustanswer=="required"){
				$("#required_"+t_id).val("必答");
				$("#required_"+t_id).removeClass("active");// btn btn-small
			}else if(mustanswer=="notRequired"){
				$("#required_"+t_id).val("选答");
				$("#required_"+t_id).addClass("active");// btn btn-small active
			}*/
			//Tags初始化
			$("#tag"+t_id).val(tags);
			showTags();
			//check输入框内容,无内容时显示提示
			var textInfo = $(".check-html");
			for(var i = 0; i < textInfo.length; i++){
				togglePrev(textInfo[i]);
			}

		});

		$("#init_flag").val("done");
	}else{//回写
		$("#init_flag").val("doing");
		//edit questions
		$(".question_tr").each(function(){
			var question_id   = $(this).find(".question_item_1").val();//题目DB id
			var question_exam = $(this).find(".question_item_2").val();//题干
			var comment       = $(this).find(".question_item_3").val();//题目注解
			var description   = $(this).find(".question_item_4").val();//题目描述
			var kind          = $(this).find(".question_item_5").val();//题型
			var difficulty    = $(this).find(".question_item_6").val();//难度级别
			var mustanswer    = $(this).find(".question_item_7").val();//必答选答
			var tags    = $(this).find(".question_item_8").val();//TAG
			var audioName = $(this).find(".question_item_9").val();//音频名称
			var videoName = $(this).find(".question_item_10").val();//视频名称
            var pdfName= $(this).find(".question_item_11").val();//pdf名称
        
			switch(kind) {
				case"01"://单选题
					if(document.getElementById("pdf_view").style.display=="block"){
						//pdf答题卡回显
						addPdf_radio();
						var t_id_content = domid - 1;
		
						$("input#singleChooseDBId"+t_id_content).val(question_id);
						$("#optionDBId_a"+t_id_content).remove();
						$("#optionDBId_b"+t_id_content).remove();
						$("#optionDBId_c"+t_id_content).remove();
						$("#optionDBId_d"+t_id_content).remove();
						$(".td_"+t_id_content).remove();
						$("#radio_A_"+t_id_content).remove();
						$("#radio_B_"+t_id_content).remove();
						$("#radio_C_"+t_id_content).remove();
						$("#radio_D_"+t_id_content).remove();
						$("#radio_A_label_"+t_id_content).remove();
						$("#radio_B_label_"+t_id_content).remove();
						$("#radio_C_label_"+t_id_content).remove();
						$("#radio_D_label_"+t_id_content).remove();
						//loop to set option's content
						var i=0;
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							addPdf_option('radio',t_id_content,option[i]);
							var t_val=pdfid-1;
							$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
							if($(this).find(".item_isAnswer").val() == "true"){
								$("#radio_"+t_val).attr("checked","checked").val("1");// check点击后的radio不能重复点击触发click的flag
								$("#optionDBId_temp"+t_id_content).val($(this).attr("id"));
							}
							i++;
						});
					}else{
						add_div();
						var t_id_content = domid - 1;
						$("input#singleChooseDBId"+t_id_content).val(question_id);
						$("#xuanxiang_a"+t_id_content).remove();
						$("#xuanxiang_b"+t_id_content).remove();
						$("#xuanxiang_c"+t_id_content).remove();
						$("#xuanxiang_d"+t_id_content).remove();
						//loop to set option's content
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							addOption(t_id_content,1); // 增加选项
							var t_val = val-1;
							$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
							$("div#inputText_"+t_val).html($(this).find(".item_option").val());//选项初始(回写)设定
							$("#pointText_"+t_val).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
							// 设定当前单选题的正确答案 (radio按钮checked)
							if($(this).find(".item_isAnswer").val() == "true"){
								$("#radio"+t_val).attr("checked","checked").val("1");// check点击后的radio不能重复点击触发click的flag
								$("#optionDBId_temp"+t_id_content).val($(this).attr("id"));
							}
						});
						// 视频回写
						if(videoName=="true"){
							addVideoPlayer(t_id_content); // 增加播放器
							getVideo("/returnEntryQuestionVideo/" + $("#examinationPaperId").val() + "/" + videoName,t_id_content);
							$("#video" + t_id_content).show(); // 显示
						}
						// 音频回写
						if(audioName.trim()=="true"){
							addAudioPlayer(t_id_content); // 增加音频播放器
							// 取得音频文件在资源表中路径
							$.ajax({ url: "/EntryQuestionsAction_getFileQuestion/"+question_id+"/audio", 
								success: function(data){
									getAudio(data.url,t_id_content); // 加载音频
									$("#audio" + t_id_content).show(); // 显示
								},error: function(){
									//alert("err");
							}});
						}
					}
					break;
				case"02"://判断题
				
					if(document.getElementById("pdf_view").style.display=="block"){
						addPdf_judge();
						var t_id_content = domid - 1;
						$("input#trueDBId"+t_id_content).val(question_id);//题目选项的DBId
						$("#optionDBId_t"+t_id_content).val($(this).find(".question_item_n_option:first").attr("id"));//选项True的DBId
						$("#pointText_t"+t_id_content).val(Number($(this).find(".item_score:first").val()));//选项True分数初始(回写)设定
						$("#optionDBId_f"+t_id_content).val($(this).find(".question_item_n_option:last").attr("id"));//选项False的DBId
						$("#inputText_f"+t_id_content).text($(this).find(".item_option:last").val());//选项False内容初始(回写)设定
						$("#pointText_f"+t_id_content).val(Number($(this).find(".item_score:last").val()));//选项False分数初始(回写)设定
						
						// 选中当前判断题答案
						if($(this).find(".item_isAnswer:first").val() == "true"){
							$("#radio_t_"+t_id_content).attr("checked","checked").val("ok");// check点击后的radio不能重复点击触发click的flag
							$("#optionDBId_temp"+t_id_content).val($(this).find(".question_item_n_option:first").attr("id"));
						} else if($(this).find(".item_isAnswer:last").val() == "true") {
							$("#radio_f_"+t_id_content).attr("checked","checked").val("ok");
							$("#optionDBId_temp"+t_id_content).val($(this).find(".question_item_n_option:last").attr("id"));
						}
						// check判断题的选项内容
						if($("#inputText_t"+t_id_content).text()=="请输入..."){
							$("#inputText_t"+t_id_content).addClass("tipInfo");
						}
						if($("#inputText_f"+t_id_content).text()=="请输入..."){
							$("#inputText_f"+t_id_content).addClass("tipInfo");
						}
					}else{
						addTrue();
						var t_id_content = domid - 1;
						$("input#trueDBId"+t_id_content).val(question_id);//题目选项的DBId
						$("#optionDBId_t"+t_id_content).val($(this).find(".question_item_n_option:first").attr("id"));//选项True的DBId
						$("#inputText_t"+t_id_content).text($(this).find(".item_option:first").val());//选项True内容初始(回写)设定
						$("#pointText_t"+t_id_content).val(Number($(this).find(".item_score:first").val()));//选项True分数初始(回写)设定

						$("#optionDBId_f"+t_id_content).val($(this).find(".question_item_n_option:last").attr("id"));//选项False的DBId
						$("#inputText_f"+t_id_content).text($(this).find(".item_option:last").val());//选项False内容初始(回写)设定
						$("#pointText_f"+t_id_content).val(Number($(this).find(".item_score:last").val()));//选项False分数初始(回写)设定
						// 选中当前判断题答案
						if($(this).find(".item_isAnswer:first").val() == "true"){
							$("#radio_t"+t_id_content).attr("checked","checked").val("ok");// check点击后的radio不能重复点击触发click的flag
						} else if($(this).find(".item_isAnswer:last").val() == "true") {
							$("#radio_f"+t_id_content).attr("checked","checked").val("ok");
						}
						// check判断题的选项内容
						if($("#inputText_t"+t_id_content).text()=="请输入..."){
							$("#inputText_t"+t_id_content).addClass("tipInfo");
						}
						if($("#inputText_f"+t_id_content).text()=="请输入..."){
							$("#inputText_f"+t_id_content).addClass("tipInfo");
						}
					}
					break;
				case"03"://多项选择
					if(document.getElementById("pdf_view").style.display=="block"){
						addPdf_checkbox();
						var t_id_content = domid - 1;
						$("input#singleChooseDBId"+t_id_content).val(question_id);
						$("#checkbox_A_"+t_id_content).remove();
						$("#checkbox_B_"+t_id_content).remove();
						$("#checkbox_C_"+t_id_content).remove();
						$("#checkbox_D_"+t_id_content).remove();
						$("#option_A_"+t_id_content).remove();
						$("#option_B_"+t_id_content).remove();
						$("#option_C_"+t_id_content).remove();
						$("#option_D_"+t_id_content).remove();
						$("#checkbox_A_label_"+t_id_content).remove();
						$("#checkbox_B_label_"+t_id_content).remove();
						$("#checkbox_C_label_"+t_id_content).remove();
						$("#checkbox_D_label_"+t_id_content).remove();
						$(".td_"+t_id_content).remove();
						//loop to set option's content
						var i=0;
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							
								addPdf_option('checkbox',t_id_content,option[i]);
					
							var t_val = pdfid-1;
							$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
							// 设定当前单选题的正确答案 (radio按钮checked)
							if($(this).find(".item_isAnswer").val() == "true"){
						
								$("#checkbox_"+t_val).attr("checked","checked");
								$("#optionDBId_temp"+t_id_content).val($(this).attr("id"));
								
							}
							i++;
						});
					}else{
						duoxuan();
						var t_id_content = domid - 1;
						$("input#singleChooseDBId"+t_id_content).val(question_id);
						$("#xuanxiang_a"+t_id_content).remove();
						$("#xuanxiang_b"+t_id_content).remove();
						$("#xuanxiang_c"+t_id_content).remove();
						$("#xuanxiang_d"+t_id_content).remove();
						//loop to set option's content
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							addOption(t_id_content,3);
							var t_val = val-1;
							$("#optionDBId_"+t_val).val($(this).attr("id"));//题目选项的DBId
							$("div#inputText_"+t_val).html($(this).find(".item_option").val());//选项初始(回写)设定
							$("#pointText_"+t_val).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
							// 选中当前多选题答案
							if($(this).find(".item_isAnswer").val() == "true"){
								$("#checkbox"+t_val).attr("checked","checked");
							}
						});
					}
					break;
				case"04"://论述题
					addessay();
					var t_id_content = domid - 1;
					$("input#essayDBId"+t_id_content).val(question_id);
					//loop to set option's content
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						$("#optionDBId_essay"+t_id_content).val($(this).attr("id"));//题目选项的DBId
						$("textarea#essayOption"+t_id_content).val($(this).find(".item_option").val());//选项初始(回写)设定
						$("#pointText_essay"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
					});
					break;
				case"05"://简答题
					if(document.getElementById("pdf_view").style.display=="block"){
						pdf_shortAnswer();
						var t_id_content = domid - 1;
						$("input#shortAnswerDBId"+t_id_content).val(question_id);
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							$("#optionDBId_shortAnswer"+t_id_content).val($(this).attr("id"));//题目选项的DBId
							$("div#shortAnswerOption"+t_id_content).html($(this).find(".item_option").val());//选项初始(回写)设定
							$("#pointText_shortAnswer"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
						});
					}else{
						shortAnswer();
						var t_id_content = domid - 1;
						$("input#shortAnswerDBId"+t_id_content).val(question_id);
						//loop to set option's content
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							$("#optionDBId_shortAnswer"+t_id_content).val($(this).attr("id"));//题目选项的DBId
							$("div#shortAnswerOption"+t_id_content).html($(this).find(".item_option").val());//选项初始(回写)设定
							$("#pointText_shortAnswer"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
						});
					}
					break;
				case "088":
				case "06"://便签
					//添加便签
					addnote();
					var t_id_content = domid - 1;
					$("input#noteDBId"+t_id_content).val(question_id); //绑定题目id
					// 音频回写
					if(audioName=="true"){
						addAudioPlayer(t_id_content); // 增加音频播放器
						// 取得音频文件在资源表中路径
						$.ajax({ url: "/EntryQuestionsAction_getFileQuestion/"+question_id+"/audio", 
							success: function(data){
								getAudio(data.url,t_id_content); // 加载音频
								$("#audio" + t_id_content).show(); // 显示
							},error: function(){
								//alert("err");
						}});
					}
					break;
				case "100":
				case "07"://填空
						addFill();
						var t_id_content = domid - 1;
						$("input#fillDBId"+t_id_content).val(question_id);
						//loop to set option's content
						$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
							$("#pointText_fill"+t_id_content).val(Number($(this).find(".item_score").val()));//分数初始(回写)设定
						});
					break;
				case"08"://阅读理解
					addnote();
					var t_id_content = domid - 1;
					$("input#noteDBId"+t_id_content).val(question_id); // 设置id
					clickSwitch(t_id_content); // 转换题型为阅读理解
					break;
				case "011":
					
					document.getElementById("pdf_view").style.display="block";
					DEFAULT_URL = "/returnPdfByQuestionId/"+question_id;
                     $("input#PdfDBId").val(question_id); // 绑定数据库增加的题目id到页面上的
					$(".empty-page").hide(); // 隐藏页面提示
					break;
					
				default:
					//alert("no match type"); TODO
				    break;
			 }
			var t_id = domid -1;
			
			$("div#text"+t_id).html(question_exam);        //题干初始(回写)设定
			$("div#comment"+t_id).html(comment);           //题目注解初始(回写)设定
			$("div#description"+t_id).html(description);   //题目描述初始(回写)设定
			if(!(kind=="06"||kind=="08")){
				Difficulty(difficulty,t_id);                  //难度级别初始(回写)设定
			}
			//选答必答初始(回写)设定 TODO
			/*$("#required_flg_"+t_id).val(mustanswer);
			if(mustanswer=="required"){
				$("#required_"+t_id).val("必答");
				$("#required_"+t_id).removeClass("active");// btn btn-small
			}else if(mustanswer=="notRequired"){
				$("#required_"+t_id).val("选答");
				$("#required_"+t_id).addClass("active");// btn btn-small active
			}*/
			//Tags初始化
			$("#tag"+t_id).val(tags);
			showTags();
			//check输入框内容,无内容时显示提示
			var textInfo = $(".check-html");
			for(var i = 0; i < textInfo.length; i++){
				togglePrev(textInfo[i]);
			}

		});

		$("#init_flag").val("done");

//		$("#mo_center")//试题预览
	}
	//更新画面初始逻辑 END

	/**  SECTION_6  题目域点击事件对应处理     */
	//绑定 整个试卷空白空间的点击处理
	$(".main").bind("click", function(){
		itemsControl();
	});

	//绑定 试卷题目的更新处理
	$("input#fullname").change(function(){
		ajaxCall_name(this);
	});

	//add系
	if(entryflag != "preview"){

		//单项选择
		$("div.t").click(function(){
			$(".empty-page").hide(); // 隐藏页面提示
			var questionType = $(this).attr("id");
			var Qkind = 0;//音频，视频标志
			switch(questionType){
			case"t_add_single"://单选题
				if(document.getElementById("pdf_view").style.display=="block"){
					addPdf_radio();
				}else{
					
					add_div();
				}
				Qkind = 1;
				break;
			case"t_add_true"://判断题
				if(document.getElementById("pdf_view").style.display=="block"){
					addPdf_judge();
				}else{
					addTrue();
				}
				break;
			case"t_add_duoxuan"://多选题
				if(document.getElementById("pdf_view").style.display=="block"){
					addPdf_checkbox();
				}else{
					duoxuan();
				}
				
				break;
			case"t_add_essay"://论述
				addessay();
				break;
			case"t_add_shortAnswer"://简答
				if(document.getElementById("pdf_view").style.display=="block"){
					pdf_shortAnswer();
				}else{
					shortAnswer();
				}
				break;
			case"t_add_note"://便签
				addnote();
				break;
			case"t_add_fill"://填空
//				if(document.getElementById("pdf_view").style.display=="block"){
//					pdf_Fill();
//				}else{
					addFill();
			//	}
				
				break;
			case "t_add_pdf":
				//add_pdf();//pdf
				//var url='assets/js/pdfjs-1.0.68-dist/web/viewer.js';
				//jQuery.getScript(url);
				//document.getElementById("viewpdf").src='@routes.Assets.at("/public","js/pdfjs-1.0.68-dist/web/viewer.js")';
				if(document.getElementById("pdf_view").style.display=="none"){
					document.getElementById("pdf_view").style.display="block";
					addPdf_DB(0);
					$(".empty-page").hide(); // 隐藏页面提示
				}else{
					document.getElementById("pdf_view").style.display="none";
					//alert($("input#singleChooseDBId").val());
					//deleteQuestion(question_id,1);
					var question_id=$("input#PdfDBId").val();
					
					deleteQuestionRes(question_id,101);
					$(".empty-page").show(); // 隐藏页面提示
				}
				break;
			default:
				alert("no match type");
			break;
			}
			showTags(); // 调用tags插件
			showEditTool(Qkind); // 单选题显示视频音频上传的入口图标
		});
	}else{//试卷预览
		$("#abanden").hide();
		$("#fullname").attr("readonly","readonly");//试卷预览
		$(".accordion-group").hide();//试卷预览
		$(":radio").attr("disabled","disabled");
		$(":checkbox").attr("disabled","disabled");
		$("#test_011").text("试题预览");//提示框不显示
	}


	//两种方式实现 未来dom子元素的初始化，绑-解绑模式，或者 在add（）之后 做一个init（）（绑定2个处理）
	//	$(".mo").delegate(".nr","click",function(){
	//		alert(999);
	//		$(".nr").unbind("click");
	//	});


	/**  SECTION_3   弹出提示框的初始化  */
	//tooltip plug in init(method)
	var options={
			animation:true,
			trigger:'hover' //invoke event
		}
	$('.menu_pop').popover(options);//popoever box
	$('.menu_pop_tooltip').tooltip(options);
	/**  SECTION_4  tooltip的初始化 暂时不用   */
	//	$('#testpopover').popover(options);//popoever box
	//	$('#testpopover').tooltip('show');//tooltip
	//            var log = function(s){
	//                window.console && console.log(s)
	//            }
	//            $('.t span').popover()


	/**  SECTION_5  站位标签的IE实现     */
	//placehoder for IE
	//	alert(navigator.appName);
	$("#fullname").inputTip();//add for IE
	if(entryflag=="newExaminationPaper"){
		//		alert("new");
	}else{
		$1("fullname").value=$1("examinationPaper_name").value;
	}
	/** check试卷名 */
	if($("#fullname").val()!=$1("Const_enterExamName").value){
		$("#fullname").css("color","#555");
	}
	/** 最后一题取得鼠标焦点 */
	var Qtitle = $(".title_text"); // 取得页面所有存在题目的题干div
	if(Qtitle.length>0){
		$(Qtitle[Qtitle.length-1]).focus(); // 页面最后一题取得焦点
	} else {
		$(".empty-page").show(); // 没有题目时显示提示
	}

	// 编辑框图标选中与未选中
	$('input#tb_2').mouseover(function(){
		$('input#tb_2').removeClass('tb_2_out').addClass('tb_2_hover');
	});
	$('input#tb_2').mouseout(function(){
		if($('input#tb_2').hasClass('tb_2_hover') == true){
			$('input#tb_2').removeClass('tb_2_hover').addClass('tb_2_out');
		}
	});

	$('input#tb_3').mouseover(function(){
		$('input#tb_3').removeClass('tb_3_out').addClass('tb_3_hover');
	});
	$('input#tb_3').mouseout(function(){
		if($('input#tb_3').hasClass('tb_3_hover') == true){
			$('input#tb_3').removeClass('tb_3_hover').addClass('tb_3_out');
		}
	});
		$('input#tb_4').mouseover(function(){
		$('input#tb_4').removeClass('tb_4_out').addClass('tb_4_hover');
	});
	$('input#tb_4').mouseout(function(){
		if($('input#tb_4').hasClass('tb_4_hover') == true){
			$('input#tb_4').removeClass('tb_4_hover').addClass('tb_4_out');
		}
	});

	$('input#tb_5').mouseover(function(){
		$('input#tb_5').removeClass('tb_5_out').addClass('tb_5_hover');
	});
	$('input#tb_5').mouseout(function(){
		if($('input#tb_5').hasClass('tb_5_hover') == true){
			$('input#tb_5').removeClass('tb_5_hover').addClass('tb_5_out');
		}
	});

	$('input#tb_9').mouseover(function(){
		if($('input#tb_9').hasClass('tb_9_out') == true){
			$('input#tb_9').removeClass('tb_9_out').addClass('tb_9_hover');
		} else {
			$('input#tb_9').removeClass('tb_9_hover').addClass('tb_9_copy');
		}
	});
	$('input#tb_9').mouseout(function(){
		if($('input#tb_9').hasClass('tb_9_hover') == true){
			$('input#tb_9').removeClass('tb_9_hover').addClass('tb_9_out');
		}
	});


	/** 试题导入功能 */
	/* 输入框内容粘贴时触发事件 */
	$("#importQuestion").bind('paste', function() {
		var el = $(this);
		setTimeout(function() {
			var txt = $(el).val(); // 取得题目的文本
			/* 导入文本内容  */
			updateImportText(txt);
		}, 100);

	}).change(function() {
		/* 失去焦点时内容change触发事件  */
		var txt = $(this).val(); // 取得题目的文本
		/* 导入文本内容  */
		updateImportText(txt);
	});
	/* 更新显示导入的文本内容 */
	function updateImportText(txt) { // txt: 内容
		var Qnum = 0; // 记录导入题目的数量
		if (txt.trim() != "") { // 内容不为""时执行导入
			// 显示导入时的提示信息
			$("#importing").show();
			$("#test_011").css("color","#A3A3A3").text("题目导入中..." + getCurrentTime());// 正常工作message颜色默认
			//alert(txt);
			$.post("/exampaper/import/"+$("#examinationPaperId").val(),{"text" : txt},
				function(data) {
					//alert("Continue..."+data.result);
					if (data.result == "failure") {
						alert("import error");
					} else {
				
						$(".empty-page").hide(); // 隐藏页面提示
						var questionNum = $(".questionNo"); // 取得当前试卷所有题目的题号
						var QNoMax = $(questionNum[questionNum.length - 1]).text(); // 取得最大题目题号
						var scoreNum = 0;
						for ( var i = 0; i < data.result.length; i++) {
							var question = data.result[i].question; // 遍历从后台取得的题目
							//alert(question.questionNo +">"+ Number(QNoMax)+"..."+(question.questionNo > Number(QNoMax)));
							// 匹配题目信息
							if (question.questionNo > Number(QNoMax)) {// 当题目为导入的新题目时
							//alert("domid:" + domid + "...question.questionNo:" + question.questionNo);
						//	alert("题目类型："+question.kind);
								if (question.kind == "01") { // 单选题
								//	alert("单选");
									$("#import_flag").val("Y"); //是否是倒入试题
									add_div();
									var t_id_content = domid - 1;
									$("#import_flag").val("");
									$("input#singleChooseDBId" + t_id_content).val(question.id); // 题目的DBid
									$("#text" + t_id_content).html(question.examination); // 题目内容
									$("#xuanxiang_a" + t_id_content).remove();
									$("#xuanxiang_b" + t_id_content).remove();
									$("#xuanxiang_c" + t_id_content).remove();
									$("#xuanxiang_d" + t_id_content).remove();
									//alert("options.length:" + options.length);
									var options = data.result[i].optionList; // 题目选项
									for ( var j = 0; j < options.length; j++) {
										$("#import_flag").val("Y"); //是否是倒入试题
										addOption(t_id_content,1);
										$("#import_flag").val("");
										var t_val = val - 1;
										//alert("t_val:" + t_val);
										if (options[j].optiones != " ") {
											//scoreNum++;
											$("#optionDBId_" + t_val).val(options[j].id);//题目选项的DBId
											$("div#inputText_" + t_val).html(options[j].optiones);//选项初始(回写)设定
											//$("#pointText_"+ t_val).val(Number(options[j].score));//分数初始(回写)设定
										}
									}
									//$("#text"+(i+1)).html(question.examination);//题目内容
									//$("div#comment"+(i+1)).html(question.comment);//题目解析
									//$("div#description"+(i+1)).html(question.description);//题目描述
								
								}else if(question.kind == "05"){
									$("#init_flag").val("doing"); //是否是倒入试题
									shortAnswer();
									var t_id_content = domid - 1;
									//alert("shortAnswerDBId"+t_id_content +"---"+question.id);
									$("input#shortAnswerDBId"+t_id_content).val(question.id);
									var options = data.result[i].optionList; // 题目选项
  									for ( var j = 0; j < options.length; j++) {
  										$("#optionDBId_shortAnswer"+t_id_content).val(options[j].id);//题目选项的DBId
  									}
																		
									$("#text" + t_id_content).html(question.examination); // 题目内容
								}
								Qnum++; // 导入的题目数量+1
							}
						}

						showTags();
						//check导入题目的结果
						if (Qnum > 0) { // 导入成功
							//check输入框内容,无内容时显示提示
							var textInfo = $(".check-html");
							for ( var i = 0; i < textInfo.length; i++) {
								togglePrev(textInfo[i]);
							}
							// 题目导入完成提示信息
							$("#test_011").text(Qnum+ "道题目导入完成..."+ getCurrentTime()); // 显示导入失败的提示信息
							// 导入完成后，清空数据
							$("#importQuestion").val("");
							// 导入的最后一题取得鼠标焦点
							var Qtitles = $(".title_text"); // 取得页面所有存在题目的题干div
							if (Qtitles.length > 0) {
								$(Qtitles[Qtitles.length - 1]).focus(); // 页面最后一题取得焦点
								showEditTool();
							}
						} else {
							// 提示失败信息
							$("#test_011").css("color","brown").text("题目导入失败，请检查题目格式..." + getCurrentTime());
							$("#importQuestion").focus(); // 题目导入框取得鼠标焦点
						}
					}

					$("#importing").hide(); // 隐藏导入时的提示信息loading...

				}, "json");

		} else {
			$("#importQuestion").val(""); // 清空导入框
		}
	}

	/**
	 * 设置IE7兼容
	 * IE7不支持CSS中的focus,float等属性
	 * */
	var browser = navigator.appName; // 浏览器名称
	var version = navigator.appVersion; // 版本
	var appCodeName = navigator.appCodeName; // 内核
	var userAgent = navigator.userAgent; // User-Agent

	if(version.indexOf("7.0")>=0 && browser=="Microsoft Internet Explorer" && version.indexOf("Trident/5.0")<0){
		// alert(browser+"\n"+version+"\n"+appCodeName+"\n"+userAgent);

		// "试卷名称"输入框样式
		//$("#fullname").unbind("keydown").css("width","300px");

		// 录入试题菜单栏样式(下拉箭头) drop-down-img
		//$(".drop-down-img").css("margin","-27px 5px 0px 0px");

		// 试卷题目内容输入框focus样式
		$(".text").focus(function(){
			$(this).css("background-color","#FFECBB");
		}).blur(function(){
		    $(this).css("background-color","transparent");
		  });

		// 试卷题目(判断题选项)内容输入框focus样式
		$(".textOption_tf").focus(function(){
			$(this).css("background-color","#FFECBB");
		}).blur(function(){
		    $(this).css("background-color","transparent");
		  });

		// 设置题目中"注解"和"描述"的focus功能样式
		$(".div_input").focus(function(){
			$(this).css({
				"position":"absolute",
				"z-index":"1",
				"background-color":"rgb(255, 236, 187)",
				"min-height":"100px",
				"height":"auto",
				"max-height":"120px",
				"word-wrap":"break-word",
				"overflow":"auto",
				"outline":"0px",
				"border":"1px dotted #C69E6B"
			});
		}).blur(function(){
		    $(this).css({
				"border": "1px solid #CCC",
				"overflow": "hidden",
				"background-color": "",
				"position": "",
				"min-height":"20px",
				"height": "20px",
				"padding-top": "0px",
				"margin-top": "-1px",
				"word-wrap": ""
		    });
		  });

	}





});

/** 设定IE7样式 */
function IE7styleSet(){
	var browser = navigator.appName; // 浏览器名称
	var version = navigator.appVersion; // 版本
	if(version.indexOf("7.0")>=0 && browser=="Microsoft Internet Explorer"){
		// 试卷题目内容输入框focus样式
		$(".text").focus(function(){
			$(this).css("background-color","#FFECBB");
		}).blur(function(){
		    $(this).css("background-color","transparent");
		  });

		// 试卷题目(判断题选项)内容输入框focus样式
		$(".textOption_tf").focus(function(){
			$(this).css("background-color","#FFECBB");
		}).blur(function(){
		    $(this).css("background-color","transparent");
		  });
	}
}