
/** 增加单项选择 */
function add_div_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;

	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1>'
			+'<div class="nr" id="nr'+domid+'" ">'
			+'<table id="table'+domid+'">'
			+'<tr class="textTr" id="Qtitle'+domid+'">'
			+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			+'<td class="title" id="title'+domid+'">'
			+'<div style="position: relative;" >'
			+'<div id="text'+domid+'" class="text title_text check-html" contenteditable="false"  onblur="updateSingleChoose('+domid+',1);" onkeyup="togglePrev(this)" onmouseup="getChoose('+domid+')">'
			+'</div></div></td>'
			+'<td ><input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/><input id="optionDBId_temp'+domid+'" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteQuestion('+domid+',1);del(\'m'+domid+'\');"/>'
			+'</tr>'
			+'<tr id="xuanxiang_a'+domid+'" class="textTr" onMouseOver="show(\'img_a'+domid+'\');" onMouseOut="hide(\'img_a'+domid+'\')">'
			+'<td height="30px;"><input id="radio_a'+domid+'" type="radio" name="dio'+domid+'" /></td>'
			+'<td class="title" id="xuan_a'+domid+'" >'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_a'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_a'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',\'radio_a'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'a'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_a'+domid+'" contenteditable="false" onclick="setAudioAttr('+domid+',1); '
			+' onblur="updateOption(\'optionDBId_a'+domid+'\',\'inputText_a'+domid+'\',\'pointText_a'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" style="display:none;" id="img_a'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+domid+'\','+domid+',\'pointText_a'+domid+'\');deltr(\'xuanxiang_a'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+'<tr id="xuanxiang_b'+domid+'" class="textTr" onMouseOver="show(\'img_b'+domid+'\')" onMouseOut="hide(\'img_b'+domid+'\')">'
			+'<td height="30px;"><input id="radio_b'+domid+'" type="radio" name="dio'+domid+'" onclick="setAnswer(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_b'+domid+'">'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_b'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_b'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',\'radio_b'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'b'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_b'+domid+'"  onclick="setAudioAttr('+domid+',1); '
			+' onblur="updateOption(\'optionDBId_b'+domid+'\',\'inputText_b'+domid+'\',\'pointText_b'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg"style="display:none;" id="img_b'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+domid+'\','+domid+',\'pointText_b'+domid+'\');deltr(\'xuanxiang_b'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+' <tr id="xuanxiang_c'+domid+'" class="textTr" onMouseOver="show(\'img_c'+domid+'\')" onMouseOut="hide(\'img_c'+domid+'\')">'
			+'<td height="30px;"><input type="radio" id="radio_c'+domid+'" name="dio'+domid+'" onclick="setAnswer(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_c'+domid+'">'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_c'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_c'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',\'radio_c'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'c'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_c'+domid+'" contenteditable="true" onclick="setAudioAttr('+domid+',1); '
			+' onblur="updateOption(\'optionDBId_c'+domid+'\',\'inputText_c'+domid+'\',\'pointText_c'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" style="display:none;" id="img_c'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+domid+'\','+domid+',\'pointText_c'+domid+'\');deltr(\'xuanxiang_c'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+'<tr id="xuanxiang_d'+domid+'" class="textTr" onMouseOver="show(\'img_d'+domid+'\')" onMouseOut="hide(\'img_d'+domid+'\')">'
			+'<td height="30px;"><input type="radio" id="radio_d'+domid+'" name="dio'+domid+'" onclick="setAnswer(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_d'+domid+'" >'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_d'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_d'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',\'radio_d'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+domid+'\');"/></div>'
			+'<div  class="placeholderContent textFont" ></div>'
			+'<div class="text textOption check-html optFlag" id="inputText_d'+domid+'" contenteditable="true" onclick="setAudioAttr('+domid+',1);showEditTool(\'d'+ domid+'\');" '
			+' onblur="updateOption(\'optionDBId_d'+domid+'\',\'inputText_d'+domid+'\',\'pointText_d'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_d'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" style="display:none;" id="img_d'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_d'+domid+'\','+domid+',\'pointText_d'+domid+'\');deltr(\'xuanxiang_d'+domid+'\','+domid+')"/></td>'
			+'</tr>'
			+'</table>'

			+'<div class="footer_bottom">'
			+'<div class="div_tag" id="div_tag'+domid+'">'
			+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateSingleChoose('+domid+',1)"/>'
			+'</div>'

			+'<div class="question_footer" id ="answerarea'+domid+'">'
			+'<div>'
			+'<div class="footer1">'
			+'<input type="button" class="btn btn-small btn-short"  value="'+$("#Const_addAnswer")[0].value +'" onclick="addOption(\''+domid+'\',1); keepShowPointValue();"/>'
			+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'singleChooseDBId'+domid+'\',1)" id="sel_'+domid+'">'
			+'<option selected="selected" value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
			+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
			+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
			+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
			+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
			+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
			+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
			+'</select></div>'
			+'<div class="footer2">'
			+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'"/>'
			+'<span>难度</span>'
			+'<span class="diff_img">'
			+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
			+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateSingleChoose('+domid+',1)" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateSingleChoose('+domid+',1)" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateSingleChoose('+domid+',1)" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateSingleChoose('+domid+',1)" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateSingleChoose('+domid+',1)" src="/assets/img/rating_1.png"/>'
			+'</span></div>'
			+'</div>'
			+'<div>'
			+'<div class="footer3">'
			+'<span>注解</span> '
			+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateSingleChoose('+domid+',1)" ></div>'
			+'</div>'
			+'<div class="footer4">'
			+'<span>描述</span>'
			+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateSingleChoose('+domid+',1)"></div>'
			+'</div>'
			+'</div></div></div>'// add new
			+'</div></div>';

		// o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
		// wangwei 2014/01/17 modify start
		if("Y"!=$("#import_flag").val()){
			 if("doing"!=$("#init_flag").val()){
				 // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
				 addSingleChoose(domid,1);// 数据库中增加单项选择题的记录
				 $("#text"+domid).focus();
			 }
		}
		// wangwei 2014/01/17 modify end
		 $("#audioUpload_tbn").show(); // 显示上传音频按钮
		 $("#videoUpload_tbn").show(); // 显示上传音频按钮
		 setAudioAttr(domid,1); // 设定上传音频的参数
		 //IE7styleSet();

		 domid++;
}

//增加选项
function addOption_preview(idNo,temp){
	var displayFlag = "none";// 默認設置錄入分數框為可見

	// 根據Name取得頁面所有“分數”輸入框的屬性
	try{
		var pointDivs = $("#table"+idNo+" .flag"); // 取对应题目中剩余选项的元素
		if(pointDivs.length > 0){
			// 取第一條選項的“分數”輸入框的display屬性
			var style = pointDivs[0].style.display;
			if(style == "block" || style == "inline"){
				// 頁面選項中的“分數”輸入框dispaly不可見時，設置新增的選線中“分數”輸入框display為none
				displayFlag = "block";
			}
		}
//		alert(displayFlag);
	}catch(err){alert(err.message);}

	if(temp == 1){// 增加單項選擇選項
		$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" >'
						+'<td height="30px;"><input id="radio'+val+'" type="radio" name="dio'+idNo+'" />'
						+'<td class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:'+ displayFlag +';" align="right">'
						+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
						+' onChange="checkInputVal_Single(\'pointText_'+val+'\',\'optionDBId_'+val+'\',\'radio'+val+'\','+idNo+')" onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
						+'<div onclick="setTextFocus('+ (val+1) +',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;"></div>'
						+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" contenteditable="false" onclick="setAudioAttr('+idNo+','+temp+');" '
						+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\','+temp+','+idNo+')" onkeyup="togglePrev(this)">'
						+'</div></div></td>'
						+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="" type="hidden"/>'
						+'</td></tr>');

	} else if(temp == 3) {// 增加多項選擇選項
		$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" >'
						+'<td height="30px;"><input id="checkbox'+val+'" type="checkbox" name="box'+idNo+'" />'
						+'<td class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:'+ displayFlag +';" align="right">'
						+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
						+'  onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
						+'<div onclick="setTextFocus('+ (val+1) +',this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
						+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" onclick="setAudioAttr('+idNo+','+temp+'); '
						+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\','+temp+','+idNo+')" onkeyup="togglePrev(this)">'
						+'</div></div></td>'
						+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="" type="hidden"/>'
						+'</td></tr>');

	}

	// DB的Optionses選項表中增加一條選項的記錄
	if("Y"!=$("#import_flag").val()){
		if("doing"!=$("#init_flag").val()){
			addOpt(idNo,val);// idNo:所属题目的idNo；    val：新增选项的idNo
		}
	}

	// check页面选择题选项数量,若当前选择题中只剩下两个选项不提供del操作
	checkdelOptImg(idNo);

	val++;
}

/** 增加判断题 */
function addTrue_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;

	$1('dom1').appendChild(o);
	document.getElementById(o.id).style.height="auto";
	o.innerHTML='<h1></h1>'
			+'<div class="nr" id="nr'+domid+'" ">'
			+'<table id="table'+domid+'">'
			+'<tr class="textTr" style="border:0px #09F solid;" >'
			+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			+'<td class="title" id="title'+domid+'" >'
			+'<div style="position: relative;" >'
			+'<div id="text'+domid+'" class="text title_text text_tf check-html"   onblur="updateTrue('+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td><input id="trueDBId'+domid+'" class="questionDBId" value="" type="hidden"/><input id="optionDBId_temp'+domid+'" value="" type="hidden"/>'

			+'<td id="trueOptionTd'+domid+'" style="float:left;">'
			+'<input id="optionDBId_t'+domid+'" value="" type="hidden"/>'
			+'<input id="optionDBId_f'+domid+'" value="" type="hidden"/>'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_t'+domid+'" name="pointDiv" style="left:0" class="pointDiv pointDiv_tf" align="right">'
			+'<input id="pointText_t'+domid+'" type="text" value="0" class="pointDivText_tf pointDivText" placeholder="Point" onfocus="this.select()"'
			+' onChange="checkInputVal_TF('+domid+',1)"/>'
			+'<input type="button" class="pointBtn_tf btn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_t'+domid+'\');"/></div>'
			+'<div class="answerDiv_tf"><input id="radio_t'+domid+'" type="radio" name="dio'+domid+'" value="true" onclick="setAnswer_TF('+domid+',1)"/>'
			+'<div class="textOption_tf" id="inputText_t'+domid+'"onfocus="checkAnswer_tf(\'inputText_t'+domid+'\');this.select"'
			+' onblur="checkAnswer_tf(\'inputText_t'+domid+'\'); updateOption(\'optionDBId_t'+domid+'\',\'inputText_t'+domid+'\',\'pointText_t'+domid+'\',\'trueDBId'+domid+'\',2,'+domid+')">True</div></div>'

			+'<div id="pointDiv_f'+domid+'" name="pointDiv" class="pointDiv pointDiv_tf" align="right">'
			+'<input id="pointText_f'+domid+'" type="text" value="0" class="pointDivText_tf pointDivText" placeholder="Point" onfocus="this.select()" '
			+' onChange="checkInputVal_TF('+domid+',2)"/>'
			+'<input type="button" class="pointBtn_tf btn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_f'+domid+'\');"/></div>'
			+'<div class="answerDiv_tf"><input id="radio_f'+domid+'" type="radio" name="dio'+domid+'" value="false" onclick="setAnswer_TF('+domid+',2)"/>'
			+'<div class="textOption_tf" id="inputText_f'+domid+'"onfocus="checkAnswer_tf(\'inputText_f'+domid+'\');" '
			+' onblur="checkAnswer_tf(\'inputText_f'+domid+'\'); updateOption(\'optionDBId_f'+domid+'\',\'inputText_f'+domid+'\',\'pointText_f'+domid+'\',\'trueDBId'+domid+'\',2,'+domid+')">False</div></div>'
			+'</div></td>'
			+'<td><img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteTrue('+domid+');del(\'m'+domid+'\')"/></td>'
			+'</tr>'
			+'</table>'

			+'<div class="footer_bottom">'
			+'<div class="div_tag" id="div_tag'+domid+'">'
			+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateTrue('+domid+')"/>'
			+'</div>'

			+'<div class="question_footer" style="display:block" id ="answerarea'+domid+'">'
			+'<div>'
			+'<div class="footer1">'
			+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'trueDBId'+domid+'\',2)" id="sel_'+domid+'">'
			+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
			+'<option selected="selected" value="True Or False"> '+ $("#Const_trueFalse")[0].value+'</option>'
			+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
			+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
			+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
			+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
			+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
			+'</select></div>'
			+'<div class="footer2">'
			+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'"/>'
			+'<span>难度</span>'
			+'<span class="diff_img">'
			+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
			+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateTrue('+domid+')" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateTrue('+domid+')" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateTrue('+domid+')" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateTrue('+domid+')" src="/assets/img/rating_1.png"/>'
			+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateTrue('+domid+')" src="/assets/img/rating_1.png"/>'
			+'</span></div>'
			+'</div>'
			+'<div>'
			+'<div class="footer3">'
			+'<span>注解</span> '
			+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateTrue('+domid+')"></div>'
			+'</div>'
			+'<div class="footer4">'
			+'<span>描述</span>'
			+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateTrue('+domid+')"></div>'
			+'</div>'
			+'</div></div></div>'
			+'</div></div>';

	//o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
	if("doing"!=$("#init_flag").val()){
		// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
		addTrueF(domid);// 数据库中增加判断题的记录
		document.getElementById("text"+domid).focus();//set focus
	 }

	domid++;
}

/** 增加多项选择 */
function duoxuan_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" ">'
				+'<table id="table'+domid+'">'
				+'<tr class="textTr" style="border:0px #09F solid;">'
				+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				+'<td class="title" id="title'+domid+'" >'
				+'<div style="position: relative;" >'
				+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;"></div>'
				+'<div class="text title_text check-html" id="text'+domid+'" class="text"  onblur="updateSingleChoose('+domid+',2)" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td><input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteQuestion('+domid+',2);del(\'m'+domid+'\')"/></td>'
			    +'</tr>'

			    +'<tr id="xuanxiang_a'+domid+'" class="textTr" onMouseOver="show(\'img_a'+domid+'\')" onMouseOut="hide(\'img_a'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_a'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_a'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_a'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_a'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',\'checkbox_a'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'a'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
				+'<div class="text textOption check-html optFlag" id="inputText_a'+domid+'" contenteditable="true" onclick="showEditTool(\'a'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_a'+domid+'\',\'inputText_a'+domid+'\',\'pointText_a'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_a'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+domid+'\','+domid+',\'pointText_a'+domid+'\');deltr(\'xuanxiang_a'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_b'+domid+'" class="textTr" onMouseOver="show(\'img_b'+domid+'\')" onMouseOut="hide(\'img_b'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_b'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_b'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_b'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_b'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',\'checkbox_b'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'b'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
				+'<div class="text textOption check-html optFlag" id="inputText_b'+domid+'" contenteditable="true" onclick="showEditTool(\'b'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_b'+domid+'\',\'inputText_b'+domid+'\',\'pointText_b'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_b'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+domid+'\','+domid+',\'pointText_b'+domid+'\');deltr(\'xuanxiang_b'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_c'+domid+'" class="textTr" onMouseOver="show(\'img_c'+domid+'\')" onMouseOut="hide(\'img_c'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_c'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_c'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_c'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_c'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',\'checkbox_c'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'c'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
				+'<div class="text textOption check-html optFlag" id="inputText_c'+domid+'" contenteditable="true" onclick="showEditTool(\'c'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_c'+domid+'\',\'inputText_c'+domid+'\',\'pointText_c'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_c'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+domid+'\','+domid+',\'pointText_c'+domid+'\');deltr(\'xuanxiang_c'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_d'+domid+'" class="textTr" onMouseOver="show(\'img_d'+domid+'\')" onMouseOut="hide(\'img_d'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_d'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_d'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_d'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_d'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',\'checkbox_d'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'d'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
				+'<div class="text textOption check-html optFlag" id="inputText_d'+domid+'" contenteditable="true" onclick="showEditTool(\'d'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_d'+domid+'\',\'inputText_d'+domid+'\',\'pointText_d'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_d'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_d'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_d'+domid+'\','+domid+',\'pointText_d'+domid+'\');deltr(\'xuanxiang_d'+domid+'\','+domid+')"/></td>'
				+'</tr>'
				+'</table>'

				+'<div class="footer_bottom">'
				+'<div class="div_tag" id="div_tag'+domid+'">'
				+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateSingleChoose('+domid+',2)"/>'
				+'</div>'

				+'<div class="question_footer" id ="answerarea'+domid+'">'
				+'<div>'
				+'<div class="footer1">'
				+'<input type="button" class="btn btn-small btn-short"  value="'+$("#Const_addAnswer")[0].value +'"  onclick="addOption(\''+domid+'\',3); keepShowPointValue();"/>'
				+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'singleChooseDBId'+domid+'\',3)" id="sel_'+domid+'">'
				+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
				+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
				+'<option selected="selected" value="Multiple Choice"> '+ $("#Const_mutiChoose")[0].value+'</option>'
				+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
				+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
				+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
				+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
				+'</select></div>'
				+'<div class="footer2">'
				+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
				+'<span>难度</span>'
				+'<span class="diff_img">'
				+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
				+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateSingleChoose('+domid+',2)" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateSingleChoose('+domid+',2)" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateSingleChoose('+domid+',2)" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateSingleChoose('+domid+',2)" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateSingleChoose('+domid+',2)" src="/assets/img/rating_1.png"/>'
				+'</span></div>'
				+'</div>'
				+'<div>'
				+'<div class="footer3">'
				+'<span>注解</span> '
				+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateSingleChoose('+domid+',2)"></div>'
				+'</div>'
				+'<div class="footer4">'
				+'<span>描述</span>'
				+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateSingleChoose('+domid+',2)"></div>'
				+'</div>'
				+'</div></div></div>'
				+'</div></div>';
				if("doing"!=$("#init_flag").val()){
					// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					addSingleChoose(domid,2);// 数据库中增加多项选择题的记录
					document.getElementById("text"+domid).focus();//set focus
				}

				domid++;
}

/** 增加论述题 */
function addessay_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div")
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
			   o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" >'
			   +'<table id="table'+domid+'" style="width: 704px;">'
			   +'<tr class="textTr" style="border:0px #09F solid;">'
			   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'<td class="title" id="title'+domid+'">'
				+'<div style="position: relative;" >'
				+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;"></div>'
			   +'<div class="text title_text check-html" id="text'+domid+'"   onblur="updateEssay('+domid+')" onkeyup="togglePrev(this)">'
			   +'</div></div></td>'
			   +'<td><input id="essayDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteEssay('+domid+');del(\'m'+domid+'\');"/>'
			   +'</tr>'
			   +'<tr>'
			   +'<td></td>'
				+'<td colspan="2" id="zhengque'+domid+'"class="title">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_essay'+domid+'"  name="pointDiv_essay" class="pointDiv" align="right" style="margin-right: 48px;">'
				+'<input id="pointText_essay'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal(this); updateOption_forEssay(\'optionDBId_essay'+domid+'\',\'essayOption'+domid+'\',\'pointText_essay'+domid+'\',\'essayDBId'+domid+'\','+domid+')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_essay'+domid+'\');"/></div>'

				+'<textarea id="essayOption'+domid+'" readonly="true" onblur="updateOption_forEssay(\'optionDBId_essay'+domid+'\',\'essayOption'+domid+'\',\'pointText_essay'+domid+'\',\'essayDBId'+domid+'\','+domid+')" '
				+' class="essayOption" placeholder=""></textarea>'
				+'<input id="optionDBId_essay'+domid+'" value="" type="hidden"/>'
				+'</div></td>'
				+'</tr>'
			   	+'</table>'

			   	+'<div class="footer_bottom">'
			   	+'<div class="div_tag" id="div_tag'+domid+'">'
			   	+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateEssay('+domid+')" />'
				+'</div>'

				+'<div class="question_footer" id ="answerarea'+domid+'">'
				+'<div>'
				+'<div class="footer1">'
				+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'essayDBId'+domid+'\',4)" id="sel_'+domid+'">'
				+'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
				+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
				+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
				+'<option selected="selected" value="Essay">'+ $("#Const_essay")[0].value+'</option>'
				+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
				+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
				+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
				+'</select></div>'
				+'<div class="footer2">'
				+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
				+'<span>难度</span>'
				+'<span class="diff_img">'
				+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
				+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateEssay('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateEssay('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateEssay('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateEssay('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateEssay('+domid+')" src="/assets/img/rating_1.png"/>'
				+'</span></div>'
				+'</div>'
				+'<div>'
				+'<div class="footer3">'
				+'<span>注解</span> '
				+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateEssay('+domid+')"></div>'
				+'</div>'
				+'<div class="footer4">'
				+'<span>描述</span>'
				+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateEssay('+domid+')"></div>'
				+'</div>'
				+'</div></div></div>'
				+'</div></div>';
				 if("doing"!=$("#init_flag").val()){
					 // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					 addEssay_DB(domid);// 数据库中增加论述题的记录
					 document.getElementById("text"+domid).focus();//set focus
				  };

			   domid++;
}

/** 增加简答题 */
function shortAnswer_preview(){
		var Qno = getQuestionNo();// 增加题目的题号
		var o=document.createElement("div");
		o.className="mo";
		o.id="m"+domid;
		$1('dom1').appendChild(o);

		o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" ">'
				   +'<table id="table'+domid+'">'
				   +'<tr class="textTr" style="border:0px #09F solid;">'
				   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				   +'<td class="title" id="title'+domid+'">'
				   +'<div style="position: relative;" >'
				   +'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;"></div>'
				   +'<div class="text title_text check-html" id="text'+domid+'"  onblur="updateShortAnswer('+domid+');" onkeyup="togglePrev(this)">'
				   +'</div></div></td>'
				   +'<td><input id="shortAnswerDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteShortAnswer('+domid+');del(\'m'+domid+'\');"/>'
				   +'</tr>'
				   +'<tr class="textTr">'
				   +'<td></td>'
					+'<td colspan="2" id="zhengque'+domid+'"class="title">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_shortAnswer'+domid+'" name="pointDiv_shortAnswer" class="pointDiv" style="margin-right: 55px;" align="right">'
					+'<input id="pointText_shortAnswer'+domid+'" type="text" value="10" class="pointDivText" placeholder="Input point value" ;" '
					+' onChange="checkInputVal(this); updatePoint_forShortAnswer(\'optionDBId_shortAnswer'+domid+'\',\'shortAnswerOption'+domid+'\',\'pointText_shortAnswer'+domid+'\',\'shortAnswerDBId'+domid+'\','+domid+')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_shortAnswer'+domid+'\');"/></div>'
					+'<div onclick="setTextFocus(this)" class="placeholderContent textFont" onselectstart="return false;"></div>'
					+'<div class="text textOption check-html" id ="shortAnswerOption'+domid+'"  " '
					+' onblur="updateOption_forShortAnswer(\'optionDBId_shortAnswer'+domid+'\',\'shortAnswerOption'+domid+'\',\'pointText_shortAnswer'+domid+'\',\'shortAnswerDBId'+domid+'\','+domid+')" onkeyup="togglePrev(this)">'
					+'</div>'
					+'</div></td>'
					+'<input id="optionDBId_shortAnswer'+domid+'" value="" type="hidden"/>'
				    +'</tr>'
				    +'</table>'

				    +'<div class="footer_bottom">'
				    +'<div class="div_tag" id="div_tag'+domid+'">'
				    +'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateShortAnswer('+domid+')"/>'
					+'</div>'

					+'<div class="question_footer" id ="answerarea'+domid+'">'
					+'<div>'
					+'<div class="footer1">'
					+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'shortAnswerDBId'+domid+'\',5)" id="sel_'+domid+'">'
					+'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
					+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
					+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
					+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					+'<option selected="selected" value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
					+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//					+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					+'</select></div>'
					+'<div class="footer2">'
					+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
					+'<span>难度</span>'
					+'<span class="diff_img">'
					+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
					+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateShortAnswer('+domid+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateShortAnswer('+domid+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateShortAnswer('+domid+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateShortAnswer('+domid+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateShortAnswer('+domid+')" src="/assets/img/rating_1.png"/>'
					+'</span></div>'
//					+'<div >'
//					+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateShortAnswer('+domid+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//					//+'<img id="required_'+domid+'"  onclick="AnswerRequired(\'1\','+domid+')"src="/assets/img/rating_1.png"/>'
//					+'<input type="hidden" id="required_flg_'+domid+'"  value="Required"/>'
//					+'</div>'
					+'</div>'
					+'<div>'
					+'<div class="footer3">'
					+'<span>注解</span> '
					+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateShortAnswer('+domid+')"></div>'
					+'</div>'
					+'<div class="footer4">'
					+'<span>描述</span>'
					+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateShortAnswer('+domid+')"></div>'
					+'</div>'
					+'</div></div></div>'
					+'</div></div>';
				    //o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
					if("doing"!=$("#init_flag").val()){
						// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
						addShortAnswer_DB(domid);// 数据库中增加简答的记录
						document.getElementById("text"+domid).focus();//set focus
					};

					domid++;
};

/** 增加便签题 */
function addnote_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" >'
			   +'<table id="table'+domid+'">'
			   +'<tr class="textTr" style="border:0px #09F solid;">'
			   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'<td class="title" id="title'+domid+'">'
			   +'<div style="position: relative;" >'
			   +'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;"></div>'
			   +'<div id="text'+domid+'" class="text title_text check-html"  onkeyup="togglePrev(this)">'
			   +'</div></div></td>'
			   +'<td><input id="noteDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
			   +'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" />'
			   +'</td>'
			   +'</tr>'
			   +'</table>'
			   +'<div id="video'+domid+'" style="display:none">'
			   +'<div id="jquery_jplayer_0"></div>'
			   +'<div id="jquery_jplayer_0" class="jp-jplayer"></div>'
			   +'<div id="jp_container_0" class="jp-audio">'
			   +'<div class="jp-type-single">'
			   +'		<div class="jp-gui jp-interface">'
			   +'			<ul class="jp-controls">'
			   +'			    <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>'
			   +'               <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>'
			   +'               <li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>'//onclick="stopAudio();"
			   +'               <li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>'
			   +'               <li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>'
			   +'               <li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>'
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
			   +'        </div>'
			   +'</div>'
			   +'</div>'
			   +'</div>'
			   //试题类型转换
			   +'<div class="question_footer" id ="answerarea'+domid+'">'
			   +'<div>'
			   +'<div class="footer1">'
			   +'</div>'
			   //"阅读理解"和"便签"之间的题目转换 ----Demo2
			   +'<div class="footer2">'
			   +'<span id="switch'+domid+'" class="tzCheckBox checked" ">'
			   +'<span id="switchName'+domid+'" class="tzCBContent">'+$("#Const_note")[0].value+'</span>'
			   +'<span class="tzCBPart"></span>'
			   +'</span></div>'
			   +'</div></div>';
			   if("doing"!=$("#init_flag").val()){
				   // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
				   addNote_DB(domid);// 数据库中增加便签的记录
				   document.getElementById("text"+domid).focus();//set focus
			   };
			   //getAudio("/assets/bookimg/demoAudio.mp3",0); // Test音频
			   //setVideotAttr(domid); // 视频加载的入口方法

			   domid++;
}

/** 增加填空题 */
function addFill_preview(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" ">'
				+'<table id="table'+domid+'">'
				+'<tr class="textTr" style="border:0px #09F solid;">'
				+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				+'<td class="title" id="title'+domid+'" >'
				+'<input type="hidden" id="tagrBefore'+ domid +'" value="" />'
				+'<input type="hidden" id="tagrAfter'+ domid +'"  value="" />'

				+'<div style="position: relative;">'
				+'<input id="fillDBId'+domid+'" class="questionDBId" type="hidden" value="" >'
				+'<div class="placeholderContent titleFont" onselectstart="return false;"></div>'
				+'<div class="text title_text text_fill check-html" id="text'+domid+'" '
				+' ></div>'

				+'<div id="pointDiv'+domid+'" class="pointDiv pointDiv_fill" align="right" contenteditable="false">'
				+'<div class="pointDivTitle" contenteditable="false">每空分数：</div>'
				+'<div style="float:left">'
				+'<input id="pointText_fill'+domid+'" type="text" value="4" class="pointDivText" style="width:81px" placeholder="point/space" '
				+' onChange="checkInputVal(this);updateSpacePoint('+domid+')" onfocus="this.select()"/></div>'
				+'<div class="pointCount">总计'
				+'<span id="spaceCount'+domid+'" class="pointSpan"></span>空，共'
				+'<span id="pointCount'+domid+'" class="pointSpan"></span>分</div></div>'

				+'</div></td>'
				+'<td>'
				+'<ul id="contextMenu" class="contextMenu">'
				+'<li id="add" class="edit">'
				+'<a>增加空</a>'
                +'</li>'
                +'</ul>'
                +'<ul id="contextMenu_1" class="contextMenu">'
                +'<li id="delete" class="delete">'
                +'<a>删除空</a>'
                +'</li>'
				+'</ul>'
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" /></td>'
			    +'</tr>'
			    +'</table>'

			    +'<div class="footer_bottom">'
				+'<div class="div_tag" id="div_tag'+domid+'">'
				+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateFill('+domid+')"/>'
				+'</div>'

				+'<div class="question_footer" id ="answerarea'+domid+'">'
				+'<div>'
				+'<div class="footer1">'
				+'<input id="add'+domid+'" type="button" value="'+$("#Const_addFillOpt")[0].value +'" disabled="disabled" class="addFillSpace btn btn-small btn-short" />'
				+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'fillDBId'+domid+'\',7)" id="sel_'+domid+'">'
				+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
				+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
				+'<option value="Multiple Choice"> '+ $("#Const_mutiChoose")[0].value+'</option>'
				+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
				+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
				+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
				+'<option value="Fill" selected="selected">'+ $("#Const_fill")[0].value+'</option>'
//				+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
				+'</select></div>'
				+'<div class="footer2">'
				+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" value="'+ $("#Const_point")[0].value +'" />'
				+'<span>难度</span>'
				+'<span class="diff_img">'
				+'<input id="difficulty'+domid+'" type="hidden" value="0"/>'
				+'<img id="xing_0_'+domid+'" onclick="Difficulty(\'1\','+domid+'); updateFill('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_1_'+domid+'" onclick="Difficulty(\'2\','+domid+'); updateFill('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_2_'+domid+'" onclick="Difficulty(\'3\','+domid+'); updateFill('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_3_'+domid+'" onclick="Difficulty(\'4\','+domid+'); updateFill('+domid+')" src="/assets/img/rating_1.png"/>'
				+'<img id="xing_4_'+domid+'" onclick="Difficulty(\'5\','+domid+'); updateFill('+domid+')" src="/assets/img/rating_1.png"/>'
				+'</span></div>'
//				+'<div >'
//				+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateFill('+domid+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//				+'<input type="hidden" id="required_flg_'+domid+'" value="Required"/>'
//				+'</div>'
				+'</div>'
				+'<div>'

//				+'<input type="hidden" id="tagrBefore'+ domid +'"/>'
				+'<div class="footer3">'
				+'<span>注解</span> '
				+'<div contenteditable="true" class="div_input" id="comment'+domid+'" onblur="updateFill('+domid+')"></div>'
				+'</div>'
				+'<div class="footer4">'
				+'<span>描述</span>'
				+'<div contenteditable="true" class="div_input" id="description'+domid+'" onblur="updateFill('+domid+')"></div>'
				+'</div>'
				+'</div></div></div>'
				+'</div></div>';
				//o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
				showContextMenu();
				bindfillSpace(2,domid);// 绑定填空题提干入力区域的右键菜单
				if("doing"!=$("#init_flag").val()){
					// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					addFill_DB(domid);// 数据库中增加填空题的记录
					document.getElementById("text"+domid).focus();//set focus
				}

				bindAdd(domid);// 绑定填空题目输入框的onfocus函数

				domid++;
}

/** 切换"便签"和"阅读理解"题型 */
function clickSwitch_preview(idNo){
	//alert($("#switchName").text());
	if($("#switchName"+idNo).text() == $("#Const_note")[0].value){
		$("#switch"+idNo).removeClass("checked");
		$("#switchName"+idNo).text($("#Const_reading")[0].value);
		// 更新DB的question题目类型为"阅读理解"
		$("#text"+idNo).attr("onblur","updateNote("+idNo+",8)"); // 更新题目的function
		$("#del"+idNo).attr("onclick","deleteNote("+idNo+",8);del('m"+idNo+"')"); // 删除题目的function

	} else {
		$("#switch"+idNo).addClass("checked");
		$("#switchName"+idNo).text($("#Const_note")[0].value);
		// 更新DB的question题目类型为"便签"
		$("#text"+idNo).attr("onblur","updateNote("+idNo+",6)"); // 更新题目的function
		$("#del"+idNo).attr("onclick","deleteNote("+idNo+",6);del('m"+idNo+"')"); // 删除题目的function

	}
}