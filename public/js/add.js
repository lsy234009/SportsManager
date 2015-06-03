// JavaScript Document
var rng;
function saveCursor(idNo){
	$("#cursorDivId").val("text"+idNo);
	$("#cursor_questionId").val($("input#singleChooseDBId"+idNo).val());
	$("#cursor_type").val("0");
	 this.element=document.getElementById("text"+idNo);
	 if (this.element.selectionStart || this.element.selectionStart == '0'){  
	        // return this.element.selectionStart; 
			 $("#cursor").val(this.element.selectionStart);
	  }else if (window.getSelection){  
	         rng = window.getSelection().getRangeAt(0).cloneRange();  
	         //rng.setStart(this.element,0);  
	         
	    	 $("#cursor").val(rng.toString().length);
	  }
}
function saveOptionCursor(idNo){
	$("#cursorDivId").val(idNo);
	$("#cursor_questionId").val($("input#singleChooseDBId"+idNo).val());
	$("#cursor_type").val("1");
	 this.element=document.getElementById(idNo);
	 if (this.element.selectionStart || this.element.selectionStart == '0'){  
	        // return this.element.selectionStart; 
			 $("#cursor").val(this.element.selectionStart);
	  }else if (window.getSelection){  
	          rng = window.getSelection().getRangeAt(0).cloneRange(); 
	      //   alert("1-->"+rng);
	       // rng.setStart(this.element,0);  
	       //  alert("2-->"+rng.toString().length);
	    	 $("#cursor").val(rng);
	  }
	
}
function clean_input(id){
	$("#"+id).val("");
}
//
function aler_inpt(id){
	var width=document.getElementById(id).style.width;
//	var div=document.getElementById(id).value;
	//document.all(id).focus();

	//document.getElementById(id).focus();
	if(width=="150px"){
		document.getElementById(id).style.width="550px";
		document.getElementById(id).style.height="100px";
		bindResize(document.getElementById(id));
	}
	else{
//		document.getElementById(id).style.width="150px";
		document.getElementById(id).style.height="18px";
	}
}

function bindResize(el)
{
    var els = el.style,
    x = y = 0;
    $(el).mousedown(function (e)
    {
        x = e.clientX - el.offsetWidth,
   		y = e.clientY - el.offsetHeight;
        el.setCapture ? (
            el.setCapture(),
            el.onmousemove = function (ev)
            {
                mouseMove(ev || event);
            },
            el.onmouseup = mouseUp
        ) : (
            $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
        );
        e.preventDefault();
    });
    function mouseMove(e)
    {
        els.width = e.clientX - x + 'px';
        els.height = e.clientY - y + 'px';
    }
    function mouseUp()
    {
        el.releaseCapture ? (
            el.releaseCapture(),
            el.onmousemove = el.onmouseup = null
        ) : (
            $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
        );
    }
}

/**
 * 增加一個選擇題的選項
 * idNo: 页面domid
 * temp: "1"----add singleChoose
 * 		 "3"----add multipleChoice
 *  */
var val=1;
function addOption(idNo,temp){
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
		$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" onMouseOver="showDelImg(\'img_'+val+'\')" onMouseOut="hide(\'img_'+val+'\')">'
						+'<td height="30px;"><input id="radio'+val+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_'+val+'\',\'optionDBId_'+val+'\','+idNo+',this)"/>'
						+'<td class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:'+ displayFlag +';" align="right">'
						+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
						+' onChange="checkInputVal_Single(\'pointText_'+val+'\',\'optionDBId_'+val+'\',\'radio'+val+'\','+idNo+')" onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
						+'<div onclick="setTextFocus('+ (val+1) +',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
						+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" contenteditable="true" onclick="saveCursor('+idNo+');setAudioAttr('+idNo+','+temp+');showEditTool('+ (val+1) +');" '
						+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\','+temp+','+idNo+')" onkeyup="togglePrev(this)">'
						+'</div></div></td>'
						+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="" type="hidden"/>'
						+'<img src="/assets/img/del.jpg" style="display:none;" id="img_'+val+'" class="delOptImg" onclick="deleteOption(\'optionDBId_'+val+'\','+idNo+',\'pointText_'+val+'\');deltr(\'xuanxiang'+val+'\','+idNo+')"/></td></tr>');

	} else if(temp == 3) {// 增加多項選擇選項
		$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" onMouseOver="showDelImg(\'img_'+val+'\')" onMouseOut="hide(\'img_'+val+'\')">'
						+'<td height="30px;"><input id="checkbox'+val+'" type="checkbox" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_'+val+'\',\'optionDBId_'+val+'\',this)"/>'
						+'<td class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:'+ displayFlag +';" align="right">'
						+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
						+' onChange="checkInputVal_Multiple(\'pointText_'+val+'\',\'optionDBId_'+val+'\',\'checkbox'+val+'\')" onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
						+'<div onclick="setTextFocus('+ (val+1) +',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
						+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" contenteditable="true" onclick="saveCursor('+idNo+');setAudioAttr('+idNo+','+temp+');showEditTool('+ (val+1) +');" '
						+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\','+temp+','+idNo+')" onkeyup="togglePrev(this)">'
						+'</div></div></td>'
						+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="" type="hidden"/>'
						+'<img src="/assets/img/del.jpg" style="display:none;" id="img_'+val+'" class="delOptImg" onclick="deleteOption(\'optionDBId_'+val+'\','+idNo+',\'pointText_'+val+'\');deltr(\'xuanxiang'+val+'\','+idNo+')"/></td></tr>');

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


/**mouse move out from xuanxiang box*/
function moveoutBtn(){
	 var object=event.srcElement;   //获得调用者对象
	 object.className ="btn_answer";  //获得调用者的名称
}

/**mouse move in xuanxiang box*/
function moveinBtn(){
	var object=event.srcElement;   //获得调用者对象
	 object.className ="btn_answer_in";  //获得调用者的名称
}

/** 点击提示信息的div使输入框获得焦点 TODO */
function setTextFocus(kind,e,idNo){
	try{
		var next = $(e).next(); // 取得同级的下一个元素 (即内容输入框div)
		next.focus(); // 设置焦点于输入框

		// 执行点击输入框时触发的函数
		if(idNo != undefined){ // 单项选择
			setAudioAttr(idNo,1); // 设置音频上传按钮
			showEditTool(kind); // 显示工具框
		} else { // 其他题目
			showEditTool(); // 显示工具框
		}
	}catch(err){
		alert(err.message);
	}
}
/** 输入内容隐藏提示信息div (取html) */
function togglePrev(e){
	var remindInfo = $(e).prev(); // 取得同级的上一个元素
	var html = $(e).html().trim(); // 输入框中html内容
	var text = $(e).text().trim(); // 输入框中text内容
	/*if($(e).html().trim() == "" || $(e).html().trim() ==  "<br>"){
		$(remindInfo).show();
	}else{
		$(remindInfo).hide();
	}*/
	if(text==""&&html.toLowerCase().indexOf("<img")<0){
		$(remindInfo).show();
	} else {
		$(remindInfo).hide();
	}
}

/** 檢查分數輸入框的值是否為Number */
function checkInputVal(e){
	var point = $(e).val();// 取得輸入框輸入的分數值

	if(isNaN(point) || point.trim()==''){
		$(e).val('');// 不是數字返回""
	}else{
		// 去掉空字符串
		point = point.replace(/ /g,"");
		// 轉換為number數字
		point = Number(point);
		$(e).val(point); // 设置正确分数值
	}
}
/** 檢查单选题分數輸入框的值是否為Number并且更新其他选项分数 */
function checkInputVal_Single(pointId,optionId,radioId,id){
	
	checkInputVal($("#"+pointId)); // check输入的分数的格式
	var point = $("#"+pointId).val();// 取得輸入框輸入的分數值
	// 单项选择时选项较多，需处理
	if(point!="0"&&point!=""){
		$("#table"+id+" .pointDivText").val("0"); // 设置当前选择题所有分值为0
		$("#"+pointId).val(point); // 设置当前选项输入的分值
		$1(radioId).checked=true; // 选中当前设定分值的选项
		/** 更新单选题选项正确答案选项分数 */
		updateOption_score(pointId,optionId,id,$("#"+radioId));
	}
}
/** 檢查判断题分數輸入框的值是否為Number并且更新其他选项分数 */
function checkInputVal_TF(idNo,flag){
	if(flag==1){ // 操作true选项
		checkInputVal($("#pointText_t"+idNo)); // check输入的分数的格式
		var point = $("#pointText_t"+idNo).val();// 取得輸入框輸入的分數值
		if(point!="0"&&point!=""){
			$("#table"+idNo+" .pointDivText").val("0"); // 设置当前选择题所有分值为0
			$("#pointText_t"+idNo).val(point); // 设置当前选项输入的分值
			$1("radio_t"+idNo).checked=true; // 选中当前设定分值的选项
			// 设置radio是否被点击的flag
			$("#radio_t"+idNo).val("ok");
			$("#radio_f"+idNo).val("");
			/** 更新判断题正确答案选项分数 */
			updateOption_score_TF($("#optionDBId_t"+idNo).val(),$("#pointText_t"+idNo).val(),$("#optionDBId_f"+idNo).val());
		}
	} else { // 操作False选项
		checkInputVal($("#pointText_f"+idNo)); // check输入的分数的格式
		var point = $("#pointText_f"+idNo).val();// 取得輸入框輸入的分數值
		if(point!="0"&&point!=""){
			$("#table"+idNo+" .pointDivText").val("0"); // 设置当前选择题所有分值为0
			$("#pointText_f"+idNo).val(point); // 设置当前选项输入的分值
			$1("radio_f"+idNo).checked=true; // 选中当前设定分值的选项
			// 设置radio是否被点击的flag
			$("#radio_f"+idNo).val("ok");
			$("#radio_t"+idNo).val("");
			/** 更新判断题正确答案选项分数 */
			updateOption_score_TF($("#optionDBId_f"+idNo).val(),$("#pointText_f"+idNo).val(),$("#optionDBId_t"+idNo).val());
		}
	}
}
/** 檢查多选题分數輸入框的值是否為Number并且更新其他选项分数 */
function checkInputVal_Multiple(pointId,optionId,boxId){
	checkInputVal($("#"+pointId)); // check输入的分数的格式
	var point = $("#"+pointId).val();// 取得輸入框輸入的分數值
	// 处理分数
	if(point=="0" || point==""){ // 新输入分值为null或为"0"
		// 取消选中当前设定分值的选项
		document.getElementById(boxId).checked = false;
	} else { // 输入了新的分值
		// 选中当前设定分值的选项
		document.getElementById(boxId).checked = true;
	}
	/** 更新多选题选项正确答案选项分数 */
	updateOption_score_Multiple(pointId,optionId);
}
/** 单选题设置选项答案 */
function setAnswer(pointId,optionId,id,e){
	$("#table"+id+" :radio[checked!='checked']").val("0"); // 设置未checked的radio的val为"0"
	if($(e).val()!="1"){ // check当前选项是否第一次被点击
		var point = $("#"+pointId).val(); // 当前选项分数

		$("#table"+id+" .pointDivText").val("0"); // 题目画面选项分数置0

		if(point == "0" || point == ""){
			$("#"+pointId).val("1"); // 设置没有分值的正确选项的分值为默认的"1"
		} else {
			$("#"+pointId).val(point);
		}

		/** 更新单选题选项正确答案选项分数 */
		updateOption_score(pointId,optionId,id,e);

		// 设置val值作为radio是否被点击的flag
		$(e).val("1");
	}
}
/** 判断题答案设置 */
function setAnswer_TF(idNo,flag){
	if (flag==1) { // 点击判断题第一个选项(True选项)
		if($("#radio_t"+idNo).val()!="ok"){
			var point = $("#pointText_t"+idNo).val(); // 分数
			if(point == "0" || point == ""){
				$("#pointText_t"+idNo).val("1"); // 设置没有分值的正确选项的分值为默认的"1"
			} else {
				$("#pointText_t"+idNo).val(point);
			}
			$("#pointText_f"+idNo).val("0"); // 设置另一个选项的分值为"0"

			// 设置radio是否被点击的flag
			$("#radio_t"+idNo).val("ok");
			$("#radio_f"+idNo).val("");

			/** 更新判断题正确答案选项分数 */
			updateOption_score_TF($("#optionDBId_t"+idNo).val(),$("#pointText_t"+idNo).val(),$("#optionDBId_f"+idNo).val());
		}

	} else { // 点击判断题第二个选项(False选项)
		if($("#radio_f"+idNo).val()!="ok"){
			var point = $("#pointText_f"+idNo).val(); // 分数
			if(point == "0" || point == ""){
				$("#pointText_f"+idNo).val("1"); // 设置没有分值的正确选项的分值为默认的"1"
			} else {
				$("#pointText_f"+idNo).val(point);
			}
			$("#pointText_t"+idNo).val("0"); // 设置另一个选项的分值为"0"

			// 设置radio是否被点击的flag
			$("#radio_f"+idNo).val("ok");
			$("#radio_t"+idNo).val("");

			/** 更新判断题正确答案选项分数 */
			updateOption_score_TF($("#optionDBId_f"+idNo).val(),$("#pointText_f"+idNo).val(),$("#optionDBId_t"+idNo).val());
		}
	}

}
/** 多选题设置选项答案 */
function setAnswer_Multiple(pointId,optionId,e){
	var point = $("#"+pointId).val(); // 选项分数

	if(e.checked==true){ // checkBox被选中
		if(point == "0" || point == ""){
			$("#"+pointId).val("1"); // 设置没有分值的正确选项的分值为默认的"1"
		} else {
			$("#"+pointId).val(point);
		}
		/** 更新多选题选项正确答案选项分数 */
		updateOption_score_Multiple(pointId,optionId);

	}else{
		/** 取消当前选项为正确答案的设定 */
		$("#"+pointId).val("0"); // 选项分数设为"0"
		updateOption_score_Multiple(pointId,optionId);
	}

}

/** 显示题目的"删除"按钮和tagsInput */
function showTableUnit(idNo){
	$("#del"+idNo).show(); // 显示删除按钮
	$("#tagsInput"+idNo).show(); // 显示TagsInput
}
/** 隐藏题目的"删除"按钮和tagsInput */
function hideTableUnit(idNo){
	$("#del"+idNo).hide(); // 隐藏删除按钮
	$("#tagsInput"+idNo).hide(); // 隐藏TagsInput
}

var tagsFlag = "0";
/** 显示题目底部注解元素div */
function showFooter(idNo){
//	alert(tagsFlag+".........题目");
//	alert($("#footer_flag").val()+"....."+idNo);
	if($("#footer_flag").val()!=idNo){
		$(".div_tag").fadeIn(1000); // 显示全部题目TagsInput的div块先
		$(".pointDiv").hide();
		$(".point.btn.btn-small").removeClass("active");
	}
	if($("#footer_flag").attr("key")!="focus"){
		$("#div_tag"+idNo).slideUp(); // 滑动隐藏当前题目的TagsInput的div块
	}
	tagsFlag = "1";
	$("#footer_flag").val(idNo);
	$("#footer_flag").attr("key","no");

	keepShowPointValue(); // 保持分数输入框显示

}
/** 点击tagsInput时保持焦点显示 */
function setInputFocus(idNo){
//	alert(e);
	$("#div_tag"+idNo).show();
	$("#tagsInput"+idNo).show();

	$("#footer_flag").attr("key","focus");
}
/**增加pdf***/
function add_pdf(){
	var o=document.createElement("div");
	o.innerHTML='<div id="outerContainer" class="loadingInProgress">'
				+'	<div id="sidebarContainer">'
				+'		<div id="toolbarSidebar">'
				+'			<div class="splitToolbarButton toggled">'
				+'				<button id="viewThumbnail" class="toolbarButton group toggled" title="Show Thumbnails" tabindex="2" data-l10n-id="thumbs">'
				+'					<span data-l10n-id="thumbs_label">Thumbnails</span>'
				+'				</button>'
				+'				<button id="viewOutline" class="toolbarButton group" title="Show Document Outline" tabindex="3" data-l10n-id="outline">'
				+'					<span data-l10n-id="outline_label">Document Outline</span>'
				+'				</button>'
				+'				<button id="viewAttachments" class="toolbarButton group" title="Show Attachments" tabindex="4" data-l10n-id="attachments">'
				+'					<span data-l10n-id="attachments_label">Attachments</span>'
				+'				</button>'
				+'			</div>'
				+'		</div>'
				+'		<div id="sidebarContent">'
				+'			<div id="thumbnailView">'
				+'			</div>'
				+'			<div id="outlineView" class="hidden">'
				+'			</div>'
				+'			<div id="attachmentsView" class="hidden">'
				+'			</div>'
				+'		</div>'
				+'	</div>'
				+'	<div id="mainContainer">'
				+'		<div class="findbar hidden doorHanger hiddenSmallView" id="findbar">'
				+'			<label for="findInput" class="toolbarLabel" data-l10n-id="find_label">Find:</label>'
				+'			<input id="findInput" class="toolbarField" tabindex="41">'
				+'			<div class="splitToolbarButton">'
				+'				<button class="toolbarButton findPrevious" title="" id="findPrevious" tabindex="42" data-l10n-id="find_previous">'
				+'					<span data-l10n-id="find_previous_label">Previous</span>'
				+'				</button>'
				+'				<div class="splitToolbarButtonSeparator"></div>'
				+'				<button class="toolbarButton findNext" title="" id="findNext" tabindex="43" data-l10n-id="find_next">'
				+'					<span data-l10n-id="find_next_label">Next</span>'
				+'				</button>'
				+'			</div>'
				+'			<input type="checkbox" id="findHighlightAll" class="toolbarField">'
				+'			<label for="findHighlightAll" class="toolbarLabel" tabindex="44" data-l10n-id="find_highlight">Highlight all</label>'
				+'			<input type="checkbox" id="findMatchCase" class="toolbarField">'
				+'			<label for="findMatchCase" class="toolbarLabel" tabindex="45" data-l10n-id="find_match_case_label">Match case</label>'
				+'			<span hidden="true" id="findMsg" class="toolbarLabel"></span>'
				+'		</div> '
				+'		<div id="secondaryToolbar" class="secondaryToolbar hidden doorHangerRight">'
				+'			<div id="secondaryToolbarButtonContainer">'
				+'				<button id="secondaryPresentationMode" class="secondaryToolbarButton presentationMode visibleLargeView" title="Switch to Presentation Mode" tabindex="19" data-l10n-id="presentation_mode">'
				+'					 <span data-l10n-id="presentation_mode_label">Presentation Mode</span>'
				+'				</button>'
				+'				<button id="secondaryOpenFile" class="secondaryToolbarButton openFile visibleLargeView" title="Open File" tabindex="20" data-l10n-id="open_file">'
				+'					<span data-l10n-id="open_file_label">Open</span>'
				+'				</button>'
				+'				<button id="secondaryPrint" class="secondaryToolbarButton print visibleMediumView" title="Print" tabindex="21" data-l10n-id="print">'
				+'					<span data-l10n-id="print_label">Print</span>'
				+'				</button>'
				+'				<button id="secondaryDownload" class="secondaryToolbarButton download visibleMediumView" title="Download" tabindex="22" data-l10n-id="download">'
				+'					<span data-l10n-id="download_label">Download</span>'
				+'				</button>'
				+'				<a hidden="true" href="#" id="secondaryViewBookmark" class="secondaryToolbarButton bookmark visibleSmallView" title="Current view (copy or open in new window)" tabindex="23" data-l10n-id="bookmark">'
				+'					<span data-l10n-id="bookmark_label">Current View</span>'
				+'				</a>'
				+'				<div class="horizontalToolbarSeparator visibleLargeView"></div>'
				+'				<button id="firstPage" class="secondaryToolbarButton firstPage" title="Go to First Page" tabindex="24" data-l10n-id="first_page">'
				+'					<span data-l10n-id="first_page_label">Go to First Page</span>'
				+'				</button>'
				+'				<button id="lastPage" class="secondaryToolbarButton lastPage" title="Go to Last Page" tabindex="25" data-l10n-id="last_page">'
				+'					<span data-l10n-id="last_page_label">Go to Last Page</span>'
				+'				</button>'
				+'				<div class="horizontalToolbarSeparator"></div>'
				+'				<button id="pageRotateCw" class="secondaryToolbarButton rotateCw" title="Rotate Clockwise" tabindex="26" data-l10n-id="page_rotate_cw">'
				+'					<span data-l10n-id="page_rotate_cw_label">Rotate Clockwise</span>'
				+'				</button>'
				+'				<button id="pageRotateCcw" class="secondaryToolbarButton rotateCcw" title="Rotate Counterclockwise" tabindex="27" data-l10n-id="page_rotate_ccw">'
				+'					<span data-l10n-id="page_rotate_ccw_label">Rotate Counterclockwise</span>'
				+'				</button>'
				+'				<div class="horizontalToolbarSeparator"></div>'
				+'				<button id="toggleHandTool" class="secondaryToolbarButton handTool" title="Enable hand tool" tabindex="28" data-l10n-id="hand_tool_enable">'
				+'					<span data-l10n-id="hand_tool_enable_label">Enable hand tool</span>'
				+'				</button>'
				+'				<div class="horizontalToolbarSeparator"></div>'
				+'				<button id="documentProperties" class="secondaryToolbarButton documentProperties" title="Document Properties…" tabindex="29" data-l10n-id="document_properties">'
				+'					 <span data-l10n-id="document_properties_label">Document Properties…</span>'
				+'				</button>'
				+'			</div>'
				+'		</div> '
				+'		<div class="toolbar">'
				+'			<div id="toolbarContainer" style="width:690;">'
				+'				<div id="toolbarViewer">'
				+'					<div id="toolbarViewerLeft">'
				+'						<button hidden="true" id="sidebarToggle" class="toolbarButton" title="Toggle Sidebar" tabindex="5" data-l10n-id="toggle_sidebar">'
				+'							<span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>'
				+'						</button>'
				+'						<div class="toolbarButtonSpacer"></div>'
				+'						<button hidden="true" id="viewFind" class="toolbarButton group hiddenSmallView" title="Find in Document" tabindex="6" data-l10n-id="findbar">'
				+'							<span data-l10n-id="findbar_label">Find</span>'
				+'						</button>'
				+'						<div class="splitToolbarButton">'
				+'							<button class="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="7" data-l10n-id="previous">'
				+'								<span data-l10n-id="previous_label">Previous</span>'
				+'							</button>'
				+'							<div class="splitToolbarButtonSeparator"></div>'
				+'							<button class="toolbarButton pageDown" title="Next Page" id="next" tabindex="8" data-l10n-id="next">'
				+'								<span data-l10n-id="next_label">Next</span>'
				+'							</button>'
				+'						</div>'
				+'						<label hidden="true" id="pageNumberLabel" class="toolbarLabel" for="pageNumber" data-l10n-id="page_label">Page: </label>'
				+'						<input  hidden="true" type="number" id="pageNumber" class="toolbarField pageNumber" value="1" size="4" min="1" tabindex="9">'
				+'						<span hidden="true" id="numPages" class="toolbarLabel"></span>'
				+'					</div>'
				+'					<div id="toolbarViewerRight">'
				+'						<button hidden="true" id="presentationMode" class="toolbarButton presentationMode hiddenLargeView" title="Switch to Presentation Mode" tabindex="13" data-l10n-id="presentation_mode">'
				+'							<span data-l10n-id="presentation_mode_label">Presentation Mode</span>'
				+'						</button>'
				+'						<button  id="presentationMode"  onclick="show()"  class="toolbarButton presentationMode hiddenLargeView" title="Switch to Presentation Mode" tabindex="13" data-l10n-id="presentation_mode">'
				+'							<span data-l10n-id="presentation_mode_label">Presentation Mode</span>'
				+'						</button>'
				+'						<button id="openFile" class="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="14" data-l10n-id="open_file">'
				+'							<span data-l10n-id="open_file_label">Open</span>'
				+'						</button>'
				+'						<button hidden="true" id="print" class="toolbarButton print hiddenMediumView" title="Print" tabindex="15" data-l10n-id="print">'
				+'							<span data-l10n-id="print_label">Print</span>'
				+'						</button>'
				+'						<button hidden="true" id="download" class="toolbarButton download hiddenMediumView" title="Download" tabindex="16" data-l10n-id="download">'
				+'							<span data-l10n-id="download_label">Download</span>'
				+'						</button>'
				+'						<a  hidden="true" href="#" id="viewBookmark" class="toolbarButton bookmark hiddenSmallView" title="Current view (copy or open in new window)" tabindex="17" data-l10n-id="bookmark">'
				+'							<span data-l10n-id="bookmark_label">Current View</span>'
				+'						</a>'
				+'						<div hidden="true" class="verticalToolbarSeparator hiddenSmallView"></div>'
				+'						<button hidden="true" id="secondaryToolbarToggle" class="toolbarButton" title="Tools" tabindex="18" data-l10n-id="tools">'
				+'							<span data-l10n-id="tools_label">Tools</span>'
				+'						</button> '
				+'					</div>'
				+'					<div class="outerCenter">'
				+'						<div class="innerCenter" id="toolbarViewerMiddle">'
				+'							 <div class="splitToolbarButton">'
				+'								<button id="zoomOut" class="toolbarButton zoomOut" title="Zoom Out" tabindex="10" data-l10n-id="zoom_out">'
				+'									<span data-l10n-id="zoom_out_label">Zoom Out</span>'
				+'								</button>'
				+'								<div class="splitToolbarButtonSeparator"></div>'
				+'								<button id="zoomIn" class="toolbarButton zoomIn" title="Zoom In" tabindex="11" data-l10n-id="zoom_in">'
				+'									<span data-l10n-id="zoom_in_label">Zoom In</span>'
				+'								</button>'
				+'							</div>'
				+'							<span hidden="true" id="scaleSelectContainer" class="dropdownToolbarButton">'
				+'								<select id="scaleSelect" title="Zoom" tabindex="12" data-l10n-id="zoom">'
				+'									<option id="customScaleOption" title="" value="custom"></option>'
				+'									<option id="pageWidthOption" title="" value="page-width" data-l10n-id="page_scale_width">Full Width</option>'
				+'									<option title="" value="0.5" selected="selected">50%</option>'
				+'									<option title="" value="0.75">75%</option>'
				+'									<option title="" value="1">100%</option>'
				+'									<option title="" value="1.25">125%</option>'
				+'									<option title="" value="1.5">150%</option>'
				+'									<option title="" value="2">200%</option>'
				+'								</select>'
				+'							</span>'
				+'						</div>'
				+'					</div>'
				+'				</div>'
				+'				<div id="loadingBar">'
				+'					<div class="progress">'
				+'						<div class="glimmer"></div>'
				+'					</div>'
				+'				</div>'
				+'			</div>'
				+'		</div>'
				+'		<menu type="context" id="viewerContextMenu">'
				+'			<menuitem id="contextFirstPage" label="First Page" data-l10n-id="first_page"></menuitem>"'
				+'			<menuitem id="contextLastPage" label="Last Page" data-l10n-id="last_page"></menuitem>'
				+'			<menuitem id="contextPageRotateCw" label="Rotate Clockwise" data-l10n-id="page_rotate_cw"></menuitem>'
				+'			<menuitem id="contextPageRotateCcw" label="Rotate Counter-Clockwise"  data-l10n-id="page_rotate_ccw"></menuitem>'
				+'		</menu>'
				+'		<div id="viewerContainer" style="width:690px; height:400px; overflow-x: hidden;" tabindex="0">'
				+'			<div id="viewer"></div>'
				+'		</div>'
				+'		<div id="overlayContainer" class="hidden">'
				+'			<div id="promptContainer" class="hidden">'
				+'				<div id="passwordContainer" class="prompt doorHanger">'
				+'					<div class="row">'
				+'						<p id="passwordText" data-l10n-id="password_label">Enter the password to open this PDF file:</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<input type="password" id="password" class="toolbarField" />'
				+'					</div>'
				+'					<div class="buttonRow">'
				+'						<button id="passwordCancel" class="overlayButton"><span data-l10n-id="password_cancel">Cancel</span></button>'
				+'						<button id="passwordSubmit" class="overlayButton"><span data-l10n-id="password_ok">OK</span></button>'
				+'					</div>'
				+'				</div>'
				+'			</div>'
				+'			<div id="documentPropertiesContainer" class="hidden">'
				+'				<div class="doorHanger">'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_file_name">File name:</span> <p id="fileNameField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_file_size">File size:</span> <p id="fileSizeField">-</p>'
				+'					</div>'
				+'					<div class="separator"></div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_title">Title:</span> <p id="titleField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_author">Author:</span> <p id="authorField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_subject">Subject:</span> <p id="subjectField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_keywords">Keywords:</span> <p id="keywordsField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_creation_date">Creation Date:</span> <p id="creationDateField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_modification_date">Modification Date:</span> <p id="modificationDateField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						 <span data-l10n-id="document_properties_creator">Creator:</span> <p id="creatorField">-</p>'
				+'					</div>'
				+'					<div class="separator"></div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_producer">PDF Producer:</span> <p id="producerField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_version">PDF Version:</span> <p id="versionField">-</p>'
				+'					</div>'
				+'					<div class="row">'
				+'						<span data-l10n-id="document_properties_page_count">Page Count:</span> <p id="pageCountField">-</p>'
				+'					</div>'
				+'					<div class="buttonRow">'
				+'						<button id="documentPropertiesClose" class="overlayButton"><span data-l10n-id="document_properties_close">Close</span></button>'
				+'					</div>'
				+'				</div>'
				+'			</div>'
				+'		 </div> '
				+'	 </div>'
				+'	 <div id="printContainer"></div>'
				+'	 <div id="mozPrintCallback-shim" hidden>'
				+'	 <div class="mozPrintCallback-dialog-box">' 
				+'		 Preparing document for printing...'
				+'	 <div class="progress-row">'
				+'		<progress value="0" max="100"></progress>'
				+'		<span class="relative-progress">0%</span>'
				+'	</div>'
				+'	<div class="progress-actions">'
				+'		<input type="button" value="Cancel" class="mozPrintCallback-cancel">'
				+'	</div>'
				+' </div>'
				+'</div>'
				+''
				+''
				+''
				;
	o.style.height="450px";
	o.style.width="714px";
	$1('dom1').appendChild(o);
}
/** 增加单项选择 */
function add_div(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;

	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1>'
			+'<div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
			+'<table id="table'+domid+'">'
			+'<tr class="textTr" id="Qtitle'+domid+'">'
			+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			+'<td class="title" id="title'+domid+'">'
			+'<div style="position: relative;" >'
			+'<div onclick="setTextFocus(\'single_'+'text' + domid + '\',this,'+domid+')" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
			+'<div id="text'+domid+'" class="text title_text check-html" contenteditable="true" onclick="saveCursor('+domid+');setAudioAttr('+domid+',1);showEditTool(\'single_'+'text' + domid + '\');" onblur="updateSingleChoose('+domid+',1);" onkeyup="togglePrev(this)" onmouseup="getChoose('+domid+')">'
			+'</div></div></td>'
			+'<td ><input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/><input id="optionDBId_temp'+domid+'" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteQuestion('+domid+',1);del(\'m'+domid+'\');"/>'
			+'</tr>'
			// 视频播放器
/*			+'<tr id="video'+domid+'" style="display:none;"><td colspan="2">'
			   +'<div id="jquery_jplayer_'+domid+'_"></div>'
			   +'<div id="jquery_jplayer_'+domid+'_" class="jp-jplayer"></div>'
			   +'<div id="jp_container_'+domid+'_" class="jp-audio">'
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
			   +'<div class="player_del"></div>'
			   +'        </div>'
			   +'</div>'
			   +'</div>'
			+'</td></tr>'*/

			// 音频播放器
/*			+'<tr id="audio'+domid+'" style="display:none;"><td colspan="2">'
			   +'<div id="jquery_jplayer_'+domid+'"></div>'
			   +'<div id="jquery_jplayer_'+domid+'" class="jp-jplayer"></div>'
			   +'<div id="jp_container_'+domid+'" class="jp-audio">'
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
			   +'<div class="player_del"></div>'
			   +'        </div>'
			   +'</div>'
			   +'</div>'
			 +'</td></tr>'*/

			+'<tr id="xuanxiang_a'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_a'+domid+'\');" onMouseOut="hide(\'img_a'+domid+'\')">'
			+'<td height="30px;"><input id="radio_a'+domid+'" type="radio" name="dio'+domid+'" onclick="setAnswer(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_a'+domid+'" >'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_a'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_a'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',\'radio_a'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'a'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_a'+domid+'" contenteditable="true" onclick="saveCursor('+domid+');setAudioAttr('+domid+',1);showEditTool(\'a'+ domid+'\')" '
			+' onblur="updateOption(\'optionDBId_a'+domid+'\',\'inputText_a'+domid+'\',\'pointText_a'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" style="display:none;" id="img_a'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+domid+'\','+domid+',\'pointText_a'+domid+'\');deltr(\'xuanxiang_a'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+'<tr id="xuanxiang_b'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_b'+domid+'\')" onMouseOut="hide(\'img_b'+domid+'\')">'
			+'<td height="30px;"><input id="radio_b'+domid+'" type="radio" name="dio'+domid+'" onclick="setAnswer(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_b'+domid+'">'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_b'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_b'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',\'radio_b'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'b'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_b'+domid+'" contenteditable="true" onclick="saveCursor('+domid+');setAudioAttr('+domid+',1);showEditTool(\'b'+ domid+'\')" '
			+' onblur="updateOption(\'optionDBId_b'+domid+'\',\'inputText_b'+domid+'\',\'pointText_b'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg"style="display:none;" id="img_b'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+domid+'\','+domid+',\'pointText_b'+domid+'\');deltr(\'xuanxiang_b'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+' <tr id="xuanxiang_c'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_c'+domid+'\')" onMouseOut="hide(\'img_c'+domid+'\')">'
			+'<td height="30px;"><input type="radio" id="radio_c'+domid+'" name="dio'+domid+'" onclick="setAnswer(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_c'+domid+'">'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_c'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_c'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',\'radio_c'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'c'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_c'+domid+'" contenteditable="true" onclick="saveCursor('+domid+');setAudioAttr('+domid+',1);showEditTool(\'c'+ domid+'\');" '
			+' onblur="updateOption(\'optionDBId_c'+domid+'\',\'inputText_c'+domid+'\',\'pointText_c'+domid+'\',\'singleChooseDBId'+domid+'\',1,'+domid+')" onkeyup="togglePrev(this)">'
			+'</div></div></td>'
			+'<td colspan="2" align="right"><input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
			+'<img src="/assets/img/del.jpg" style="display:none;" id="img_c'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+domid+'\','+domid+',\'pointText_c'+domid+'\');deltr(\'xuanxiang_c'+domid+'\','+domid+')"/></td>'
			+'</tr>'

			+'<tr id="xuanxiang_d'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_d'+domid+'\')" onMouseOut="hide(\'img_d'+domid+'\')">'
			+'<td height="30px;"><input type="radio" id="radio_d'+domid+'" name="dio'+domid+'" onclick="setAnswer(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\','+domid+',this)"/></td>'
			+'<td class="title" id="xuan_d'+domid+'" >'
			+'<div style="position:relative;">'
			+'<div id="pointDiv_d'+domid+'" class="pointDiv flag" align="right">'
			+'<input id="pointText_d'+domid+'" type="text" value="0" class="pointDivText point-single'+domid+'" placeholder="Input point value" '
			+' onChange="checkInputVal_Single(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',\'radio_d'+domid+'\','+domid+')" onfocus="this.select()"/>'
			+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+domid+'\');"/></div>'
			+'<div onclick="setTextFocus(\'d'+ domid+'\',this,'+domid+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
			+'<div class="text textOption check-html optFlag" id="inputText_d'+domid+'" contenteditable="true" onclick="saveCursor('+domid+');setAudioAttr('+domid+',1);showEditTool(\'d'+ domid+'\');" '
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
		//	+'<input type="button" style="display:none;" class="btn btn-small btn-short"  value="'+$("#Const_addAnswer")[0].value +'" onclick="addOption(\''+domid+'\',1); keepShowPointValue();"/>'
			+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'singleChooseDBId'+domid+'\',1)" id="sel_'+domid+'">'
			+'<option selected="selected" value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
			+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
			+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
			+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
			+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
			+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
			+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//			+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
			+'</select>'
			+'</div>'
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
//			+'<div >'
//			+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateSingleChoose('+domid+',1)" data-toggle="button" class="btn btn-small btn-short btn-short" value="必答"/>'
//			//+'<img id="required_'+domid+'"  onclick="AnswerRequired(\'1\','+domid+')"src="/assets/img/rating_1.png"/>'
//			+'<input type="hidden" id="required_flg_'+domid+'"  value="Required"/>'
//			+'</div>'
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







function showFooter2(idNo){
	tagsFlag = "1";

//		$(".question_footer").hide(); // 先隐藏其他题目底部
//		$(".div_tag").show(); // 显示其他题目底部TagsInput的div块

		$("#div_tag"+idNo).slideToggle(500); // 隐藏TagsInput的div块
//		$("#answerarea"+idNo).show(); // 显示当前底部注解

	keepShowPointValue();
}

/** 增加判断题 */
function addTrue(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;

	$1('dom1').appendChild(o);
	document.getElementById(o.id).style.height="auto";
//	document.getElementById(o.id).style.height="230"+"px";
	o.innerHTML='<h1></h1>'
			+'<div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
			+'<table id="table'+domid+'">'
			+'<tr class="textTr" style="border:0px #09F solid;" >'
			+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			+'<td class="title" id="title'+domid+'" >'
			+'<div style="position: relative;" >'
			+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent middleFont" onselectstart="return false;">请输入题目内容...</div>'
			+'<div id="text'+domid+'" class="text title_text text_tf check-html"  contenteditable="true" onclick="showEditTool(\'text' + domid + '\');" onblur="updateTrue('+domid+')" onkeyup="togglePrev(this)">'
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
			+'<div class="textOption_tf" id="inputText_t'+domid+'" contenteditable="true" onfocus="checkAnswer_tf(\'inputText_t'+domid+'\');this.select"'
			+' onblur="checkAnswer_tf(\'inputText_t'+domid+'\'); updateOption(\'optionDBId_t'+domid+'\',\'inputText_t'+domid+'\',\'pointText_t'+domid+'\',\'trueDBId'+domid+'\',2,'+domid+')">True</div></div>'

			+'<div id="pointDiv_f'+domid+'" name="pointDiv" class="pointDiv pointDiv_tf" align="right">'
			+'<input id="pointText_f'+domid+'" type="text" value="0" class="pointDivText_tf pointDivText" placeholder="Point" onfocus="this.select()" '
			+' onChange="checkInputVal_TF('+domid+',2)"/>'
			+'<input type="button" class="pointBtn_tf btn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_f'+domid+'\');"/></div>'
			+'<div class="answerDiv_tf"><input id="radio_f'+domid+'" type="radio" name="dio'+domid+'" value="false" onclick="setAnswer_TF('+domid+',2)"/>'
			+'<div class="textOption_tf" id="inputText_f'+domid+'" contenteditable="true" onfocus="checkAnswer_tf(\'inputText_f'+domid+'\');" '
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
//			+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
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
//			+'<div >'
//			+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateTrue('+domid+')" data-toggle="button" class="btn btn-small btn-short btn-short" value="必答"/>'
//			//+'<img id="required_'+domid+'"  onclick="AnswerRequired(\'1\','+domid+')"src="/assets/img/rating_1.png"/>'
//			+'<input type="hidden" id="required_flg_'+domid+'"  value="Required"/>'
//			+'</div>'
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
function duoxuan(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
				+'<table id="table'+domid+'">'
				+'<tr class="textTr" style="border:0px #09F solid;">'
				+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				+'<td class="title" id="title'+domid+'" >'
				+'<div style="position: relative;" >'
				+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
				+'<div class="text title_text check-html" id="text'+domid+'" class="text" contenteditable="true" onclick="showEditTool(\'text' + domid + '\')" onblur="updateSingleChoose('+domid+',2)" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td><input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteQuestion('+domid+',2);del(\'m'+domid+'\')"/></td>'
			    +'</tr>'

			    +'<tr id="xuanxiang_a'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_a'+domid+'\')" onMouseOut="hide(\'img_a'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_a'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_a'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_a'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_a'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_a'+domid+'\',\'optionDBId_a'+domid+'\',\'checkbox_a'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'a'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
				+'<div class="text textOption check-html optFlag" id="inputText_a'+domid+'" contenteditable="true" onclick="showEditTool(\'a'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_a'+domid+'\',\'inputText_a'+domid+'\',\'pointText_a'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_a'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+domid+'\','+domid+',\'pointText_a'+domid+'\');deltr(\'xuanxiang_a'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_b'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_b'+domid+'\')" onMouseOut="hide(\'img_b'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_b'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_b'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_b'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_b'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_b'+domid+'\',\'optionDBId_b'+domid+'\',\'checkbox_b'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'b'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
				+'<div class="text textOption check-html optFlag" id="inputText_b'+domid+'" contenteditable="true" onclick="showEditTool(\'b'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_b'+domid+'\',\'inputText_b'+domid+'\',\'pointText_b'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_b'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+domid+'\','+domid+',\'pointText_b'+domid+'\');deltr(\'xuanxiang_b'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_c'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_c'+domid+'\')" onMouseOut="hide(\'img_c'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_c'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_c'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_c'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_c'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_c'+domid+'\',\'optionDBId_c'+domid+'\',\'checkbox_c'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'c'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
				+'<div class="text textOption check-html optFlag" id="inputText_c'+domid+'" contenteditable="true" onclick="showEditTool(\'c'+ domid+'\')" '
				+' onblur="updateOption(\'optionDBId_c'+domid+'\',\'inputText_c'+domid+'\',\'pointText_c'+domid+'\',\'singleChooseDBId'+domid+'\',3,'+domid+')" onkeyup="togglePrev(this)">'
				+'</div></div></td>'
				+'<td colspan="2" align="right"><input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" style="display:none;"id="img_c'+domid+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+domid+'\','+domid+',\'pointText_c'+domid+'\');deltr(\'xuanxiang_c'+domid+'\','+domid+')"/></td>'
				+'</tr>'

				+'<tr id="xuanxiang_d'+domid+'" class="textTr" onMouseOver="showDelImg(\'img_d'+domid+'\')" onMouseOut="hide(\'img_d'+domid+'\')">'
				+'<td><input type="checkbox" id="checkbox_d'+domid+'" name="box'+domid+'" onclick="setAnswer_Multiple(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',this)"/></td>'
				+'<td class="title" id="xuan_d'+domid+'">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_d'+domid+'" class="pointDiv flag" align="right">'
				+'<input id="pointText_d'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal_Multiple(\'pointText_d'+domid+'\',\'optionDBId_d'+domid+'\',\'checkbox_d'+domid+'\')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+domid+'\');"/></div>'
				+'<div onclick="setTextFocus(\'d'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
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
			//	+'<input type="button" class="btn btn-small btn-short"  value="'+$("#Const_addAnswer")[0].value +'"  onclick="addOption(\''+domid+'\',3); keepShowPointValue();"/>'
				+'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'singleChooseDBId'+domid+'\',3)" id="sel_'+domid+'">'
				+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
				+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
				+'<option selected="selected" value="Multiple Choice"> '+ $("#Const_mutiChoose")[0].value+'</option>'
				+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
				+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
				+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
				+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//				+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
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
//				+'<div >'
//				+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateSingleChoose('+domid+',2)" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//				+'<input type="hidden" id="required_flg_'+domid+'" value="Required"/>'
//				+'</div>'
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
				//o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
				if("doing"!=$("#init_flag").val()){
					// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					addSingleChoose(domid,2);// 数据库中增加多项选择题的记录
					document.getElementById("text"+domid).focus();//set focus
				}

				domid++;
}

/** 增加论述题 */
function addessay(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div")
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
			   o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'"  onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
			   +'<table id="table'+domid+'" style="width: 704px;">'
			   +'<tr class="textTr" style="border:0px #09F solid;">'
			   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'<td class="title" id="title'+domid+'">'
				+'<div style="position: relative;display:none" >'
				+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
			   +'<div class="text title_text check-html" id="text'+domid+'" contenteditable="true" onclick="showEditTool(\'text' + domid + '\');" onblur="updateEssay('+domid+')" onkeyup="togglePrev(this)">'
			   +'</div></div></td>'
			   +'<td><input id="essayDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;float:right;" id="del'+domid+'" onclick="deleteEssay('+domid+');del(\'m'+domid+'\');"/>'
			   +'</tr>'
			   +'<tr>'
			   +'<td></td>'
				+'<td colspan="2" id="zhengque'+domid+'"class="title">'
				+'<div style="position:relative;">'
				+'<div id="pointDiv_essay'+domid+'"  name="pointDiv_essay" class="pointDiv" align="right" style="margin-right: 48px;">'
				+'<input id="pointText_essay'+domid+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
				+' onChange="checkInputVal(this); updateOption_forEssay(\'optionDBId_essay'+domid+'\',\'essayOption'+domid+'\',\'pointText_essay'+domid+'\',\'essayDBId'+domid+'\','+domid+')" onfocus="this.select()"/>'
				+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_essay'+domid+'\');"/></div>'

				+'<textarea id="essayOption'+domid+'" onblur="updateOption_forEssay(\'optionDBId_essay'+domid+'\',\'essayOption'+domid+'\',\'pointText_essay'+domid+'\',\'essayDBId'+domid+'\','+domid+')" '
				+' class="essayOption" placeholder="请输入答案内容..."></textarea>'
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
//				+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
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
//				+'<div >'
//				+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+domid+'" onclick="AnswerRequired(\'1\','+domid+');updateEssay('+domid+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//				//+'<img id="required_'+domid+'"  onclick="AnswerRequired(\'1\','+domid+')"src="/assets/img/rating_1.png"/>'
//				+'<input type="hidden" id="required_flg_'+domid+'"  value="Required"/>'
//				+'</div>'
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
			    //o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
				 if("doing"!=$("#init_flag").val()){
					 // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					 addEssay_DB(domid);// 数据库中增加论述题的记录
					 document.getElementById("text"+domid).focus();//set focus
				  };

			   domid++;
}

/** 增加简答题 */
function shortAnswer(){
		var Qno = getQuestionNo();// 增加题目的题号
		var o=document.createElement("div");
		o.className="mo";
		o.id="m"+domid;
		$1('dom1').appendChild(o);

		o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
				   +'<table id="table'+domid+'">'
				   +'<tr class="textTr" style="border:0px #09F solid;">'
				   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				   +'<td class="title" id="title'+domid+'">'
				   +'<div style="position: relative;" >'
				   +'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
				   +'<div class="text title_text check-html" id="text'+domid+'" contenteditable="true" onclick="showEditTool(\'text' + domid + '\');" onblur="updateShortAnswer('+domid+');" onkeyup="togglePrev(this)">'
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
					+'<div onclick="setTextFocus(\'shortAnswerOption'+ domid+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入答案内容...</div>'
					+'<div class="text textOption check-html" id ="shortAnswerOption'+domid+'" contenteditable="true" onclick="showEditTool(\'shortAnswerOption'+ domid+'\');" '
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
function addnote(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')">'
			   +'<table id="table'+domid+'">'
			   +'<tr class="textTr" id="Qtitle'+domid+'" style="border:0px #09F solid;">'
			   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'<td class="title" id="title'+domid+'">'
			   +'<div style="position: relative;" >'
			   +'<div onclick="setTextFocus(\'single_text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
			   +'<div id="text'+domid+'" class="text title_text check-html" contenteditable="true" onclick="setAudioAttr('+domid+',1);;showEditTool(\'single_text' + domid + '\');" onblur="updateNote('+domid+',6);" onkeyup="togglePrev(this)">'
			   +'</div></div></td>'
			   +'<td><input id="noteDBId'+domid+'" class="questionDBId" value="" type="hidden"/> '
			   +'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteNote('+domid+',6);del(\'m'+domid+'\');"/>'
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
			   +'<select class="form-control select-medium" onchange="update(\'sel_'+domid+'\','+domid+',\'noteDBId'+domid+'\',6)" id="sel_'+domid+'">'
			   +'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
			   +'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
			   +'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
			   +'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
			   +'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
			   +'<option selected="selected" value="Note">'+ $("#Const_note")[0].value+'</option>'
			   +'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//			   +'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
			   +'</select></div>'
			   //"阅读理解"和"便签"之间的题目转换 ----Demo2
			   +'<div class="footer2">'
			   +'<span id="switch'+domid+'" class="tzCheckBox checked" onclick="clickSwitch('+domid+')">'
			   +'<span id="switchName'+domid+'" class="tzCBContent">'+$("#Const_note")[0].value+'</span>'
			   +'<span class="tzCBPart"></span>'
			   +'</span></div>'
			   +'</div></div>';
			   //o.getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
			   if("doing"!=$("#init_flag").val()){
				   // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
				   addNote_DB(domid);// 数据库中增加便签的记录
				   document.getElementById("text"+domid).focus();//set focus
			   };
			   getAudio("/assets/bookimg/demoAudio.mp3",0); // Test音频
			   //setVideotAttr(domid); // 视频加载的入口方法

			   domid++;
}

/** 增加填空题 */
function addFill(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
				+'<table id="table'+domid+'">'
				+'<tr class="textTr" style="border:0px #09F solid;">'
				+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
				+'<td class="title" id="title'+domid+'" >'
				+'<input type="hidden" id="tagrBefore'+ domid +'" value="" />'
				+'<input type="hidden" id="tagrAfter'+ domid +'"  value="" />'

				+'<div style="position: relative;">'
				+'<input id="fillDBId'+domid+'" class="questionDBId" type="hidden" value="" >'
				+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
				+'<div class="text title_text text_fill check-html" id="text'+domid+'" '
				+'contenteditable="true" onblur="updateFill('+domid+');refreshFillPointNo('+domid+')" onkeyup="togglePrev(this)" onclick="showEditTool(\'text' + domid + '\');"></div>'

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
				+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteFill('+domid+');del(\'m'+domid+'\')"/></td>'
			    +'</tr>'
			    +'</table>'

			    +'<div class="footer_bottom">'
				+'<div class="div_tag" id="div_tag'+domid+'">'
				+'<input type="text" id="tag'+domid+'" key="'+domid+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateFill('+domid+')"/>'
				+'</div>'

				+'<div class="question_footer" id ="answerarea'+domid+'">'
				+'<div>'
				+'<div class="footer1">'
				+'<input id="add'+domid+'" type="button" value="'+$("#Const_addFillOpt")[0].value +'" disabled="disabled" class="addFillSpace btn btn-small btn-short" onclick="clickAddSpace('+domid+')"/>'
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
				+'<input type="button" id="pointButton'+domid+'" class="point btn btn-small btn-short" onclick="hidePointField('+domid+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
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

/** file=upload file name*/
function preview(file, img){
//	    alert("preview this picture!"+file.value + "=img=="+img.src);
        var nImg = document.createElement('img');
//		img.display="none";
        nImg.id = img.id;
        document.getElementById("img").src = ImagePreview.ImgTransparent();
//        nImg.display="block";
        nImg.src = 'file:\/\/\/' + file.value.replace(/\\/g, '\/');
        var ret = img.parentNode.replaceChild(nImg,img);//(newNode,oldNode)

//        alert(ret);

    }

function $1(id){

    return document.getElementById(id);//$("#id");

}

/** 頁面上題目更新
 * @param selid:题目selected选择框的id;
 * @param idNo:题目中的domId;
 * @param DBId:存储题目在DB中的id的隐藏域id;
 * @param kind：题目类型
 *  */
function update(selid,idNo,DBId,kind){
		var sel = $("#"+selid).val(); // 取页面选择题目变更类型的value

		var questionDBId = $("#"+DBId).val();// 题目在DB中的id
		var examination = ""; // 取出题目的题干内容
		if(kind == 7){ // 填空题时
			examination = $("#text"+idNo).text();// 填空题题干部分会存在填空的input，不需要保留
		} else {
			examination = $("#text"+idNo).html();// 取出带有样式的html
		}
	 	var comment = "";		//题目解析
	 	var description = "";	//描述
	 	var difficulty = "";	//难度
	 	//var Qno = 0;// 初始化更新题目后的题号

		if(kind != 6){// 便签没有其他描述内容
		 	comment = $("#comment"+idNo).html();		//题目解析
		 	description = $("#description"+idNo).html();//描述
		 	difficulty = $("#difficulty"+idNo).val();	//难度

		 	if(!((sel=="Single Choice"&&kind==3)||(sel=="Multiple Choice"&&kind==1))){
		 		// 删除老题目option内容在DB里的记录
				deleteAllOptions(questionDBId);
		 	}
		}

		if(sel=="Single Choice"){// 變更題目類型為“單項選擇”題

			// 取得之前页面选项内容 (单选题时)
			var opts = $("#table"+idNo+" .optFlag");
			// 取原题所有的选项DBid (单选题时)
			var DBids = $("#table"+idNo+" .optDBId");

			/* IE不支持页面选项元素更新后继续取Html值，取得的元素中Html值会为Null */
			if(kind==3){
				var optStrs = new Array(); // 保存选项内容
				for(var i = 0; i < opts.length; i++){
					optStrs[i] = $(opts[i]).html();
				}
			}

		 	// 增加单项选择页面
			$("#m"+idNo).html(
					'<h1></h1>'
					+'<div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					+'<table id="table'+idNo+'">'
					+'<tr class="textTr" style="border:0px #09F solid;" >'
					+'<td id="number'+idNo+' class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					+'<td class="title" id="title'+idNo+'">'
					+'<div style="position: relative;" >'
					+'<div onclick="setTextFocus(\'text' + idNo + '\',this,'+idNo+')" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
					+'<div id="text'+idNo+'" class="text title_text check-html" contenteditable="true" onclick="setAudioAttr('+idNo+',1);showEditTool(\'text' + idNo + '\');" onblur="updateSingleChoose('+idNo+',1);" onkeyup="togglePrev(this)">'
					+''+examination+'</div></div></td>'
					+'<td ><input id="singleChooseDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/><input id="optionDBId_temp'+idNo+'" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteQuestion('+idNo+',1);del(\'m'+idNo+'\');"/>'
					+'</tr>'
					// 视频播放器
					+'<tr id="video'+idNo+'" style="display:none;"><td colspan="2">'
					   +'<div id="jquery_jplayer_'+idNo+'_"></div>'
					   +'<div id="jquery_jplayer_'+idNo+'_" class="jp-jplayer"></div>'
					   +'<div id="jp_container_'+idNo+'_" class="jp-audio">'
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
					+'</td></tr>'
					// 音频播放器
					+'<tr id="audio'+idNo+'" style="display:none;"><td colspan="2">'
					   +'<div id="jquery_jplayer_'+idNo+'"></div>'
					   +'<div id="jquery_jplayer_'+idNo+'" class="jp-jplayer"></div>'
					   +'<div id="jp_container_'+idNo+'" class="jp-audio">'
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
					 +'</td></tr>'
					+'<tr id="xuanxiang_a'+idNo+'" class="textTr" onMouseOver="show(\'img_a'+idNo+'\');" onMouseOut="hide(\'img_a'+idNo+'\')">'
					+'<td><input id="radio_a'+idNo+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_a'+idNo+'\',\'optionDBId_a'+idNo+'\','+idNo+',this)"/></td>'
					+'<td class="title" id="xuan_a'+idNo+'" >'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_a'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_a'+idNo+'" type="text" value="0" class="pointDivText point-single'+idNo+'" placeholder="Input point value" '
					+' onChange="checkInputVal_Single(\'pointText_a'+idNo+'\',\'optionDBId_a'+idNo+'\',\'radio_a'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'a'+ idNo+'\',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_a'+idNo+'" contenteditable="true" onclick="setAudioAttr('+idNo+',1);showEditTool(\'a'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_a'+idNo+'\',\'inputText_a'+idNo+'\',\'pointText_a'+idNo+'\',\'singleChooseDBId'+idNo+'\',1,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_a'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;" id="img_a'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+idNo+'\','+idNo+',\'pointText_a'+idNo+'\');deltr(\'xuanxiang_a'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+'<tr id="xuanxiang_b'+idNo+'" class="textTr" onMouseOver="show(\'img_b'+idNo+'\')" onMouseOut="hide(\'img_b'+idNo+'\')">'
					+'<td><input id="radio_b'+idNo+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_b'+idNo+'\',\'optionDBId_b'+idNo+'\','+idNo+',this)"/></td>'
					+'<td class="title" id="xuan_b'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_b'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_b'+idNo+'" type="text" value="0" class="pointDivText point-single'+idNo+'" placeholder="Input point value" '
					+' onChange="checkInputVal_Single(\'pointText_b'+idNo+'\',\'optionDBId_b'+idNo+'\',\'radio_b'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'b'+ idNo+'\',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_b'+idNo+'" contenteditable="true" onclick="setAudioAttr('+idNo+',1);showEditTool(\'b'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_b'+idNo+'\',\'inputText_b'+idNo+'\',\'pointText_b'+idNo+'\',\'singleChooseDBId'+idNo+'\',1,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_b'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg"style="display:none;" id="img_b'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+idNo+'\','+idNo+',\'pointText_b'+idNo+'\');deltr(\'xuanxiang_b'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+' <tr id="xuanxiang_c'+idNo+'" class="textTr" onMouseOver="show(\'img_c'+idNo+'\')" onMouseOut="hide(\'img_c'+idNo+'\')">'
					+'<td><input id="radio_c'+idNo+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_c'+idNo+'\',\'optionDBId_c'+idNo+'\','+idNo+',this)"/></td>'
					+'<td class="title" id="xuan_c'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_c'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_c'+idNo+'" type="text" value="0" class="pointDivText point-single'+idNo+'" placeholder="Input point value" '
					+' onChange="checkInputVal_Single(\'pointText_c'+idNo+'\',\'optionDBId_c'+idNo+'\',\'radio_c'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'c'+ idNo+'\',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_c'+idNo+'" contenteditable="true" onclick="setAudioAttr('+idNo+',1);showEditTool(\'c'+ idNo+'\');" '
					+' onblur="updateOption(\'optionDBId_c'+idNo+'\',\'inputText_c'+idNo+'\',\'pointText_c'+idNo+'\',\'singleChooseDBId'+idNo+'\',1,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_c'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;" id="img_c'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+idNo+'\','+idNo+',\'pointText_c'+idNo+'\');deltr(\'xuanxiang_c'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+'<tr id="xuanxiang_d'+idNo+'" class="textTr" onMouseOver="show(\'img_d'+idNo+'\')" onMouseOut="hide(\'img_d'+idNo+'\')">'
					+'<td><input id="radio_d'+idNo+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_d'+idNo+'\',\'optionDBId_d'+idNo+'\','+idNo+',this)"/></td>'
					+'<td class="title" id="xuan_d'+idNo+'" >'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_d'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_d'+idNo+'" type="text" value="0" class="pointDivText point-single'+idNo+'" placeholder="Input point value" '
					+' onChange="checkInputVal_Single(\'pointText_d'+idNo+'\',\'optionDBId_d'+idNo+'\',\'radio_d'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'d'+ idNo+'\',this,'+idNo+')" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_d'+idNo+'" contenteditable="true" onclick="setAudioAttr('+idNo+',1);showEditTool(\'d'+ idNo+'\');" '
					+' onblur="updateOption(\'optionDBId_d'+idNo+'\',\'inputText_d'+idNo+'\',\'pointText_d'+idNo+'\',\'singleChooseDBId'+idNo+'\',1,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_d'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;" id="img_d'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_d'+idNo+'\','+idNo+',\'pointText_d'+idNo+'\');deltr(\'xuanxiang_d'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'
					+'</table>'

					+'<div class="footer_bottom">'
					+'<div class="div_tag" id="div_tag'+idNo+'">'
					+'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateSingleChoose('+idNo+',1)"/>'
					+'</div>'

					+'<div class="question_footer" id ="answerarea'+idNo+'">'
					+'<div>'
					+'<div class="footer1">'
					+'<input type="button" class="btn btn-small btn-short" value="'+$("#Const_addAnswer")[0].value +'"  onclick="addOption(\''+idNo+'\',1); keepShowPointValue();"/>'
					+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'singleChooseDBId'+idNo+'\',1)" id="sel_'+idNo+'">'
					+'<option selected="selected" value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
					+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
					+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
					+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
					+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//					+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					+'</select></div>'
					+'<div class="footer2">'
					+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
					+'<span>难度</span>'
					+'<span class="diff_img">'
					+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
					+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateSingleChoose('+idNo+',1)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateSingleChoose('+idNo+',1)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateSingleChoose('+idNo+',1)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateSingleChoose('+idNo+',1)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateSingleChoose('+idNo+',1)" src="/assets/img/rating_1.png"/>'
					+'</span></div>'
//					+'<div >'
//					+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateSingleChoose('+idNo+',1)" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//					//+'<img id="required_'+idNo+'"  onclick="AnswerRequired(\'1\','+idNo+')"src="/assets/img/rating_1.png"/>'
//					+'<input type="hidden" id="required_flg_'+idNo+'"  value="Required"/>'
//					+'</div>'
					+'</div>'
					+'<div>'
					+'<div class="footer3">'
					+'<span>注解</span> '
					+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateSingleChoose('+idNo+',1)">'+comment+'</div>'
					+'</div>'
					+'<div class="footer4">'
					+'<span>描述</span>'
					+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateSingleChoose('+idNo+',1)">'+description+'</div>'
					+'</div>'
					+'</div></div></div>'
					+'</div>'
					+'</div>'
			);

			// 原题目为多项选择题时,保留选项内容
			if(kind==3){
				var temp = 999; // 决定循环次数的临时变量
				// 原题目为4个选项时
				if(opts.length >= 4){
					// 回写隐藏域中DBid和选项内容
					$("#optionDBId_a"+idNo).val($(DBids[0]).val());//选项A隐藏域中DBid回写
					/* IE无法取得opts[0]的HTML值 */
					//$("#inputText_a"+idNo).html($(opts[0]).html());//选项A内容回写
					$("#inputText_a"+idNo).html(optStrs[0]);

					$("#optionDBId_b"+idNo).val($(DBids[1]).val());//选项B
					//$("#inputText_b"+idNo).html($(opts[1]).html());//选项B
					$("#inputText_b"+idNo).html(optStrs[1]);

					$("#optionDBId_c"+idNo).val($(DBids[2]).val());//选项C
					//$("#inputText_c"+idNo).html($(opts[2]).html());//选项C
					$("#inputText_c"+idNo).html(optStrs[2]);

					$("#optionDBId_d"+idNo).val($(DBids[3]).val());//选项D
					//$("#inputText_d"+idNo).html($(opts[3]).html());//选项D
					$("#inputText_d"+idNo).html(optStrs[3]);

					if(opts.length > 4){ // 选项超过4个时
						temp = 4;
					}

				} else { // 选项少于4个
					// 删除默认增加的四条选项
					$("#xuanxiang_a"+idNo).remove();
					$("#xuanxiang_b"+idNo).remove();
					$("#xuanxiang_c"+idNo).remove();
					$("#xuanxiang_d"+idNo).remove();
					temp = 0;
				}
				// 增加选择题新选项
				for(var j = temp; j < opts.length; j++){
					$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" onMouseOver="show(\'img_'+val+'\')" onMouseOut="hide(\'img_'+val+'\')">'
							+'<td><input id="radio'+val+'" type="radio" name="dio'+idNo+'" onclick="setAnswer(\'pointText_'+val+'\',\'optionDBId_'+val+'\','+idNo+',this)"/>'
							+'<td class="title">'
							+'<div style="position:relative;">'
							+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:none;" align="right">'
							+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
							+' onChange="checkInputVal_Single(\'pointText_'+val+'\',\'optionDBId_'+val+'\',\'radio'+val+'\','+idNo+')" onfocus="this.select()"/>'
							+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
							+'<div onclick="setTextFocus('+ (val+1) +',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
							+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" contenteditable="true" onclick="setAudioAttr('+idNo+',3);showEditTool('+ (val+1) +');" '
							+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
							+''+optStrs[j]+'</div></div></td>'
							+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="'+$(DBids[j]).val()+'" type="hidden"/>'
							+'<img src="/assets/img/del.jpg" style="display:none;" id="img_'+val+'" class="delOptImg" onclick="deleteOption(\'optionDBId_'+val+'\','+idNo+',\'pointText_'+val+'\');deltr(\'xuanxiang'+val+'\','+idNo+')"/></td></tr>');
					val++;
				}
				// 更新选项DB中isAnswer字段 (更换题型后答案尚未设定)
				$.ajax({
					url: "/EntryQuestionsAction_cancelAnswer/"+questionDBId
				});

			} else { // 原题目不是选择题时
			 	// 增加数据库新的默认四个单选选项
			 	addOptionsInDB(questionDBId,idNo);
			}

			$("#audioUpload_tbn").show(); // 显示上传音频按钮
			$("#videoUpload_tbn").show(); // 显示上传视频按钮
			setAudioAttr(idNo,1); // 设定上传音频的参数

		}else if(sel=="True Or False"){// 更题目类型为“判断”题
		 	// 增加判断题页面
			$("#m"+idNo).html(
					'<h1></h1>'
					+'<div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					+'<table id="table'+idNo+'">'
					+'<tr class="textTr" style="border:0px #09F solid;" >'
					+'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					+'<td class="title" id="title'+idNo+'" >'
					+'<div style="position: relative;" >'
					+'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent middleFont" onselectstart="return false;">请输入题目内容...</div>'
					+'<div id="text'+idNo+'" class="text title_text text_tf check-html"  contenteditable="true" onclick="showEditTool(\'text' + idNo + '\');" onblur="updateTrue('+idNo+')" onkeyup="togglePrev(this)">'
					+''+examination+'</div></div></td><input id="trueDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/><input id="optionDBId_temp'+idNo+'" value="" type="hidden"/>'

					+'<td id="trueOptionTd'+idNo+'" style="float:left;">'
					+'<input id="optionDBId_t'+idNo+'" value="" type="hidden"/>'
					+'<input id="optionDBId_f'+idNo+'" value="" type="hidden"/>'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_t'+idNo+'" name="pointDiv" style="left:0" class="pointDiv pointDiv_tf" align="right">'
					+'<input id="pointText_t'+idNo+'" type="text" value="0" class="pointDivText_tf pointDivText"  placeholder="Point" onfocus="this.select()"'
					+' onChange="checkInputVal_TF('+idNo+',1)"/>'
					+'<input type="button" class="pointBtn_tf btn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_t'+idNo+'\');"/></div>'
					+'<div class="answerDiv_tf"><input id="radio_t'+idNo+'" type="radio" name="dio'+idNo+'" value="true" onclick="setAnswer_TF('+idNo+',1)"/>'
					+'<div class="textOption_tf" id="inputText_t'+idNo+'" contenteditable="true" onfocus="checkAnswer_tf(\'inputText_t'+idNo+'\');this.select"'
					+' onblur="checkAnswer_tf(\'inputText_t'+idNo+'\'); updateOption(\'optionDBId_t'+idNo+'\',\'inputText_t'+idNo+'\',\'pointText_t'+idNo+'\',\'trueDBId'+idNo+'\',2,'+idNo+')">True</div></div>'

					+'<div id="pointDiv_f'+idNo+'" name="pointDiv" class="pointDiv pointDiv_tf" align="right">'
					+'<input id="pointText_f'+idNo+'" type="text" value="0" class="pointDivText_tf pointDivText" placeholder="Point" onfocus="this.select()" '
					+' onChange="checkInputVal_TF('+idNo+',2)"/>'
					+'<input type="button" class="pointBtn_tf btn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_f'+idNo+'\');"/></div>'
					+'<div class="answerDiv_tf"><input id="radio_f'+idNo+'" type="radio" name="dio'+idNo+'" value="false" onclick="setAnswer_TF('+idNo+',2)"/>'
					+'<div class="textOption_tf" id="inputText_f'+idNo+'" contenteditable="true" onfocus="checkAnswer_tf(\'inputText_f'+idNo+'\');" '
					+' onblur="checkAnswer_tf(\'inputText_f'+idNo+'\'); updateOption(\'optionDBId_f'+idNo+'\',\'inputText_f'+idNo+'\',\'pointText_f'+idNo+'\',\'trueDBId'+idNo+'\',2,'+idNo+')">False</div></div>'
					+'</div></td>'
					+'<td><img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteTrue('+idNo+');del(\'m'+idNo+'\')"/></td>'
					+'</tr>'
					+'</table>'

					+'<div class="footer_bottom">'
					+'<div class="div_tag" id="div_tag'+idNo+'">'
					+'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateTrue('+idNo+')"/>'
					+'</div>'

					+'<div class="question_footer" id ="answerarea'+idNo+'">'
					+'<div>'
					+'<div class="footer1">'
					+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'trueDBId'+idNo+'\',2)" id="sel_'+idNo+'">'
					+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
					+'<option selected="selected" value="True Or False"> '+ $("#Const_trueFalse")[0].value+'</option>'
					+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
					+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
					+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//					+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					+'</select></div>'
					+'<div class="footer2">'
					+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
					+'<span>难度</span>'
					+'<span class="diff_img">'
					+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
					+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateTrue('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateTrue('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateTrue('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateTrue('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateTrue('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'</span></div>'
//					+'<div >'
//					+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateTrue('+idNo+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//					+'<input type="hidden" id="required_flg_'+idNo+'"  value="Required"/>'
//					+'</div>'
					+'</div>'
					+'<div>'
					+'<div class="footer3">'
					+'<span>注解</span> '
					+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateTrue('+idNo+')">'+comment+'</div>'
					+'</div>'
					+'<div class="footer4">'
					+'<span>描述</span>'
					+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateTrue('+idNo+')">'+description+'</div>'
					+'</div>'
					+'</div></div></div>'
					+'</div></div>'
			);
		 	// 增加数据库新的默认两个True & False选项
		 	addOptionsInDB_TF(questionDBId,idNo);

		}else if(sel=="Multiple Choice"){// 更题目类型为“多项选择”题

			// 取得之前页面选项内容 (单选题时)
			var opts = $("#table"+idNo+" .optFlag");
			// 取原题所有的选项DBid (单选题时)
			var DBids = $("#table"+idNo+" .optDBId");

			/* IE不支持页面选项元素更新后继续取值，取得的元素中Html值会为Null */
			if(kind==1){
				var optStrs = new Array(); // 保存选项内容
				for(var i = 0; i < opts.length; i++){
					optStrs[i] = $(opts[i]).html();
				}
			}

		 	// 增加多项选择题页面
			$("#m"+idNo).html(
					'<h1></h1><div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					+'<table id="table'+idNo+'">'
					+'<tr class="textTr" style="border:0px #09F solid;">'
					+'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					+'<td class="title" id="title'+idNo+'" >'
					+'<div style="position: relative;" >'
					+'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
					+'<div class="text title_text check-html" id="text'+idNo+'" class="text" contenteditable="true" onclick="showEditTool(\'text' + idNo + '\')" onblur="updateSingleChoose('+idNo+',2)" onkeyup="togglePrev(this)">'
					+''+examination+'</div></div></td>'
					+'<td><input id="singleChooseDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteQuestion('+idNo+',2);del(\'m'+idNo+'\')"/></td>'
				    +'</tr>'

				    +'<tr id="xuanxiang_a'+idNo+'" class="textTr" onMouseOver="show(\'img_a'+idNo+'\')" onMouseOut="hide(\'img_a'+idNo+'\')">'
					+'<td><input type="checkbox" id="checkbox_a'+idNo+'" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_a'+idNo+'\',\'optionDBId_a'+idNo+'\',this)"/></td>'
					+'<td class="title" id="xuan_a'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_a'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_a'+idNo+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
					+' onChange="checkInputVal_Multiple(\'pointText_a'+idNo+'\',\'optionDBId_a'+idNo+'\',\'checkbox_a'+idNo+'\')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_a'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'a'+ idNo+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_a'+idNo+'" contenteditable="true" onclick="showEditTool(\'a'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_a'+idNo+'\',\'inputText_a'+idNo+'\',\'pointText_a'+idNo+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_a'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;"id="img_a'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_a'+idNo+'\','+idNo+',\'pointText_a'+idNo+'\');deltr(\'xuanxiang_a'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+'<tr id="xuanxiang_b'+idNo+'" class="textTr" onMouseOver="show(\'img_b'+idNo+'\')" onMouseOut="hide(\'img_b'+idNo+'\')">'
					+'<td><input type="checkbox" id="checkbox_b'+idNo+'" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_b'+idNo+'\',\'optionDBId_b'+idNo+'\',this)"/></td>'
					+'<td class="title" id="xuan_b'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_b'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_b'+idNo+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
					+' onChange="checkInputVal_Multiple(\'pointText_b'+idNo+'\',\'optionDBId_b'+idNo+'\',\'checkbox_b'+idNo+'\')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_b'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'b'+ idNo+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_b'+idNo+'" contenteditable="true" onclick="showEditTool(\'b'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_b'+idNo+'\',\'inputText_b'+idNo+'\',\'pointText_b'+idNo+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_b'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;"id="img_b'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_b'+idNo+'\','+idNo+',\'pointText_b'+idNo+'\');deltr(\'xuanxiang_b'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+'<tr id="xuanxiang_c'+idNo+'" class="textTr" onMouseOver="show(\'img_c'+idNo+'\')" onMouseOut="hide(\'img_c'+idNo+'\')">'
					+'<td><input type="checkbox" id="checkbox_c'+idNo+'" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_c'+idNo+'\',\'optionDBId_c'+idNo+'\',this)"/></td>'
					+'<td class="title" id="xuan_c'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_c'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_c'+idNo+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
					+' onChange="checkInputVal_Multiple(\'pointText_c'+idNo+'\',\'optionDBId_c'+idNo+'\',\'checkbox_c'+idNo+'\')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_c'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'c'+ idNo+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_c'+idNo+'" contenteditable="true" onclick="showEditTool(\'c'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_c'+idNo+'\',\'inputText_c'+idNo+'\',\'pointText_c'+idNo+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_c'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;"id="img_c'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_c'+idNo+'\','+idNo+',\'pointText_c'+idNo+'\');deltr(\'xuanxiang_c'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'

					+'<tr id="xuanxiang_d'+idNo+'" class="textTr" onMouseOver="show(\'img_d'+idNo+'\')" onMouseOut="hide(\'img_d'+idNo+'\')">'
					+'<td><input type="checkbox" id="checkbox_d'+idNo+'" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_d'+idNo+'\',\'optionDBId_d'+idNo+'\',this)"/></td>'
					+'<td class="title" id="xuan_d'+idNo+'">'
					+'<div style="position:relative;">'
					+'<div id="pointDiv_d'+idNo+'" class="pointDiv flag" align="right">'
					+'<input id="pointText_d'+idNo+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
					+' onChange="checkInputVal_Multiple(\'pointText_d'+idNo+'\',\'optionDBId_d'+idNo+'\',\'checkbox_d'+idNo+'\')" onfocus="this.select()"/>'
					+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_d'+idNo+'\');"/></div>'
					+'<div onclick="setTextFocus(\'d'+ idNo+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
					+'<div class="text textOption check-html optFlag" id="inputText_d'+idNo+'" contenteditable="true" onclick="showEditTool(\'d'+ idNo+'\')" '
					+' onblur="updateOption(\'optionDBId_d'+idNo+'\',\'inputText_d'+idNo+'\',\'pointText_d'+idNo+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
					+'</div></div></td>'
					+'<td colspan="2" align="right"><input id="optionDBId_d'+idNo+'" class="optDBId" value="" type="hidden"/>'
					+'<img src="/assets/img/del.jpg" style="display:none;"id="img_d'+idNo+'" class="delOptImg" onclick="deleteOption(\'optionDBId_d'+idNo+'\','+idNo+',\'pointText_d'+idNo+'\');deltr(\'xuanxiang_d'+idNo+'\','+idNo+')"/></td>'
					+'</tr>'
					+'</table>'

					+'<div class="footer_bottom">'
					+'<div class="div_tag" id="div_tag'+idNo+'">'
					+'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateSingleChoose('+idNo+',2)"/>'
					+'</div>'

					+'<div class="question_footer" id ="answerarea'+idNo+'">'
					+'<div>'
					+'<div class="footer1">'
					+'<input type="button" class="btn btn-small btn-short" value="'+$("#Const_addAnswer")[0].value +'"  onclick="addOption(\''+idNo+'\',3); keepShowPointValue();"/>'
					+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'singleChooseDBId'+idNo+'\',3)" id="sel_'+idNo+'">'
					+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
					+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
					+'<option selected="selected" value="Multiple Choice"> '+ $("#Const_mutiChoose")[0].value+'</option>'
					+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
					+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//					+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					+'</select></div>'
					+'<div class="footer2">'
					+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
					+'<span>难度</span>'
					+'<span class="diff_img">'
					+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
					+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateSingleChoose('+idNo+',2)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateSingleChoose('+idNo+',2)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateSingleChoose('+idNo+',2)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateSingleChoose('+idNo+',2)" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateSingleChoose('+idNo+',2)" src="/assets/img/rating_1.png"/>'
					+'</span></div>'
//					+'<div >'
//					+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateSingleChoose('+idNo+',2)" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//					+'<input type="hidden" id="required_flg_'+idNo+'" value="Required"/>'
//					+'</div>'
					+'</div>'
					+'<div>'
					+'<div class="footer3">'
					+'<span>注解</span> '
					+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateSingleChoose('+idNo+',2)">'+comment+'</div>'
					+'</div>'
					+'<div class="footer4">'
					+'<span>描述</span>'
					+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateSingleChoose('+idNo+',2)">'+description+'</div>'
					+'</div>'
					+'</div></div></div>'
					+'</div></div>'
			);

			// 原题目为单项选择题时,保留选项内容
			if(kind==1){
				var temp = 999; // 决定循环次数的临时变量
				// 原题目为4个选项时
				if(opts.length >= 4){
					// 回写隐藏域中DBid和选项内容
					$("#optionDBId_a"+idNo).val($(DBids[0]).val());//选项A隐藏域中DBid回写
					 /* IE无法取得opts[0]的HTML值 */
					// $("#inputText_a"+idNo).html($(opts[0]).html());//选项A内容回写
					$("#inputText_a"+idNo).html(optStrs[0]);

					$("#optionDBId_b"+idNo).val($(DBids[1]).val());//选项B
					//$("#inputText_b"+idNo).html($(opts[1]).html());//选项B
					$("#inputText_b"+idNo).html(optStrs[1]);

					$("#optionDBId_c"+idNo).val($(DBids[2]).val());//选项C
					//$("#inputText_c"+idNo).html($(opts[2]).html());//选项C
					$("#inputText_c"+idNo).html(optStrs[2]);

					$("#optionDBId_d"+idNo).val($(DBids[3]).val());//选项D
					//$("#inputText_d"+idNo).html($(opts[3]).html());//选项D
					$("#inputText_d"+idNo).html(optStrs[3]);

					if(opts.length > 4){ // 选项超过4个时
						temp = 4;
					}
				} else { // 选项少于4个
					// 删除默认增加的四条选项
					$("#xuanxiang_a"+idNo).remove();
					$("#xuanxiang_b"+idNo).remove();
					$("#xuanxiang_c"+idNo).remove();
					$("#xuanxiang_d"+idNo).remove();

					temp = 0;
				}
				// 增加选择题新选项
				for(var j = temp; j < opts.length; j++){
					$('#table'+idNo).append('<tr id="xuanxiang'+val+'" class="textTr" onMouseOver="show(\'img_'+val+'\')" onMouseOut="hide(\'img_'+val+'\')">'
							+'<td><input id="checkbox'+val+'" type="checkbox" name="box'+idNo+'" onclick="setAnswer_Multiple(\'pointText_'+val+'\',\'optionDBId_'+val+'\',this)"/>'
							+'<td class="title">'
							+'<div style="position:relative;">'
							+'<div id="pointDiv'+val+'" class="pointDiv flag" style="display:none;" align="right">'
							+'<input id="pointText_'+val+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
							+' onChange="checkInputVal_Multiple(\'pointText_'+val+'\',\'optionDBId_'+val+'\',\'checkbox'+val+'\')" onfocus="this.select()"/>'
							+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_'+val+'\');"/></div>'
							+'<div onclick="setTextFocus('+ (val+1) +',this)" class="placeholderContent textFont" onselectstart="return false;">请输入选项内容...</div>'
							+'<div id="inputText_'+val+'" class="text textOption check-html optFlag" contenteditable="true" onclick="setAudioAttr('+idNo+',3);showEditTool('+ (val+1) +');" '
							+' onblur="updateOption(\'optionDBId_'+val+'\',\'inputText_'+val+'\',\'pointText_'+val+'\',\'singleChooseDBId'+idNo+'\',3,'+idNo+')" onkeyup="togglePrev(this)">'
							+''+optStrs[j]+'</div></div></td>'
							+'<td colspan="2" align="right"><input id="optionDBId_'+val+'" class="optDBId" value="'+$(DBids[j]).val()+'" type="hidden"/>'
							+'<img src="/assets/img/del.jpg" style="display:none;" id="img_'+val+'" class="delOptImg" onclick="deleteOption(\'optionDBId_'+val+'\','+idNo+',\'pointText_'+val+'\');deltr(\'xuanxiang'+val+'\','+idNo+')"/></td></tr>');
					val++;
				}
				// 更新选项DB中isAnswer字段 (更换题型后答案尚未设定)
				$.ajax({
					url: "/EntryQuestionsAction_cancelAnswer/"+questionDBId
				});
			} else { // 原题目不是选择题时
			 	// 增加数据库新的默认四个单选选项
			 	addOptionsInDB(questionDBId,idNo);
			}


		}else if(sel=="Essay"){// 更题目类型为“论述”题
		 	// 增加论述题页面
			$("#m"+idNo).html(
					'<h1></h1><div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					   +'<table id="table'+idNo+'" style="width: 704px;">'
					   +'<tr class="textTr" style="border:0px #09F solid;">'
					   +'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
//					   +'<td class="title" id="title'+idNo+'">'
//						+'<div style="position: relative;" >'
//						+'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
//					   +'<div class="text title_text check-html" id="text'+idNo+'" contenteditable="true" onclick="showEditTool(\'text' + idNo + '\');" onblur="updateEssay('+idNo+')" onkeyup="togglePrev(this)">'
//					   +''+examination+'</div></div></td>'
					   +'<td><input id="essayDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/>'
						+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;float:right;" id="del'+idNo+'" onclick="deleteEssay('+idNo+');del(\'m'+idNo+'\');"/>'
					   +'</tr>'
					   +'<tr>'
					   +'<td></td>'
						+'<td colspan="2" id="zhengque'+idNo+'"class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv_essay'+idNo+'"  name="pointDiv_essay" class="pointDiv" align="right" style="margin-right: 48px;">'
						+'<input id="pointText_essay'+idNo+'" type="text" value="0" class="pointDivText" placeholder="Input point value" '
						+' onChange="checkInputVal(this); updateOption_forEssay(\'optionDBId_essay'+idNo+'\',\'essayOption'+idNo+'\',\'pointText_essay'+idNo+'\',\'essayDBId'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_essay'+idNo+'\');"/></div>'

						+'<textarea id="essayOption'+idNo+'" onblur="updateOption_forEssay(\'optionDBId_essay'+idNo+'\',\'essayOption'+idNo+'\',\'pointText_essay'+idNo+'\',\'essayDBId'+idNo+'\','+idNo+')" '
						+' class="essayOption" placeholder="请输入答案内容..."></textarea>'
						+'<input id="optionDBId_essay'+idNo+'" value="" type="hidden"/>'
						+'</div></td>'
						+'</tr>'
					   	+'</table>'

					   	+'<div class="footer_bottom">'
					   	+'<div class="div_tag" id="div_tag'+idNo+'">'
					   	+'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateEssay('+idNo+')" />'
						+'</div>'

						+'<div class="question_footer" id ="answerarea'+idNo+'">'
						+'<div>'
						+'<div class="footer1">'
						+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'essayDBId'+idNo+'\',4)" id="sel_'+idNo+'">'
						+'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
						+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
						+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
						+'<option selected="selected" value="Essay">'+ $("#Const_essay")[0].value+'</option>'
						+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
						+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
						+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//						+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
						+'</select></div>'
						+'<div class="footer2">'
						+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
						+'<span>难度</span>'
						+'<span class="diff_img">'
						+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
						+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateEssay('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateEssay('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateEssay('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateEssay('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateEssay('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'</span></div>'
//						+'<div >'
//						+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateEssay('+idNo+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//						+'<input type="hidden" id="required_flg_'+idNo+'"  value="Required"/>'
//						+'</div>'
						+'</div>'
						+'<div>'
						+'<div class="footer3">'
						+'<span>注解</span> '
						+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateEssay('+idNo+')">'+comment+'</div>'
						+'</div>'
						+'<div class="footer4">'
						+'<span>描述</span>'
						+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateEssay('+idNo+')">'+description+'</div>'
						+'</div>'
						+'</div></div></div>'
						+'</div></div>'
			);
		 	// 增加数据库新的默认一个选项
		 	addOptionInDB_common(questionDBId,"optionDBId_essay"+idNo);


		}else if(sel=="Short Answer"){// 更题目类型为“简答”题
		 	// 增加简答题页面
			$("#m"+idNo).html(
					'<h1></h1><div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					   +'<table id="table'+idNo+'">'
					   +'<tr class="textTr" style="border:0px #09F solid;">'
					   +'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					   +'<td class="title" id="title'+idNo+'">'
					   +'<div style="position: relative;" >'
					   +'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
					   +'<div class="text title_text check-html" id="text'+idNo+'" contenteditable="true" onclick="showEditTool(\'text' + idNo + '\');" onblur="updateShortAnswer('+idNo+');" onkeyup="togglePrev(this)">'
					   +''+examination+'</div></div></td>'
					   +'<td><input id="shortAnswerDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/>'
						+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteShortAnswer('+idNo+');del(\'m'+idNo+'\');"/>'
					   +'</tr>'
					   +'<tr class="textTr">'
					   +'<td></td>'
						+'<td colspan="2" id="zhengque'+idNo+'"class="title">'
						+'<div style="position:relative;">'
						+'<div id="pointDiv_shortAnswer'+idNo+'" name="pointDiv_shortAnswer" class="pointDiv" style="margin-right: 55px;" align="right">'
						+'<input id="pointText_shortAnswer'+idNo+'" type="text" value="10" class="pointDivText" placeholder="Input point value" ;" '
						+' onChange="checkInputVal(this); updateOption_forShortAnswer(\'optionDBId_shortAnswer'+idNo+'\',\'shortAnswerOption'+idNo+'\',\'pointText_shortAnswer'+idNo+'\',\'shortAnswerDBId'+idNo+'\','+idNo+')" onfocus="this.select()"/>'
						+'<input type="button" class="btn pointBtn" value="N/A" data-toggle="button" onClick="hidePoint(\'pointText_shortAnswer'+idNo+'\');"/></div>'
						+'<div onclick="setTextFocus(\'shortAnswerOption'+ idNo+'\',this)" class="placeholderContent textFont" onselectstart="return false;">请输入答案内容...</div>'
						+'<div class="text textOption check-html" id ="shortAnswerOption'+idNo+'" contenteditable="true" onclick="showEditTool(\'shortAnswerOption'+ idNo+'\');" '
						+' onblur="updateOption_forShortAnswer(\'optionDBId_shortAnswer'+idNo+'\',\'shortAnswerOption'+idNo+'\',\'pointText_shortAnswer'+idNo+'\',\'shortAnswerDBId'+idNo+'\','+idNo+')" onkeyup="togglePrev(this)">'
						+'</div>'
						+'</div></td>'
						+'<input id="optionDBId_shortAnswer'+idNo+'" value="" type="hidden"/>'
					    +'</tr>'
					    +'</table>'

					    +'<div class="footer_bottom">'
					    +'<div class="div_tag" id="div_tag'+idNo+'">'
					    +'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 " onchange="updateShortAnswer('+idNo+')"/>'
						+'</div>'

						+'<div class="question_footer" id ="answerarea'+idNo+'">'
						+'<div>'
						+'<div class="footer1">'
						+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'shortAnswerDBId'+idNo+'\',5)" id="sel_'+idNo+'">'
						+'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
						+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
						+'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
						+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
						+'<option selected="selected" value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
						+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
						+'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//						+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
						+'</select></div>'
						+'<div class="footer2">'
						+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
						+'<span>难度</span>'
						+'<span class="diff_img">'
						+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
						+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateShortAnswer('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateShortAnswer('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateShortAnswer('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateShortAnswer('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateShortAnswer('+idNo+')" src="/assets/img/rating_1.png"/>'
						+'</span></div>'
//						+'<div >'
//						+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateShortAnswer('+idNo+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//						+'<input type="hidden" id="required_flg_'+idNo+'"  value="Required"/>'
//						+'</div>'
						+'</div>'
						+'<div>'
						+'<div class="footer3">'
						+'<span>注解</span> '
						+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateShortAnswer('+idNo+')">'+comment+'</div>'
						+'</div>'
						+'<div class="footer4">'
						+'<span>描述</span>'
						+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateShortAnswer('+idNo+')">'+description+'</div>'
						+'</div>'
						+'</div></div></div>'
						+'</div></div>'
			);
		 	// 增加数据库新的默认一个选项
			addOptionInDB_common(questionDBId,"optionDBId_shortAnswer"+idNo);

		}else if(sel=="Note"){// 更题目类型为“便签”题

		 	// 删除老题目option内容在DB里的记录
		 	deleteAllOptions(questionDBId);

		 	// 增加便签题页面
			$("#m"+idNo).html(
					'<h1></h1><div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')">'
					   +'<table id="table'+idNo+'">'
					   +'<tr class="textTr" style="border:0px #09F solid;">'
					   +'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					   +'<td class="title" id="title'+idNo+'">'
					   +'<div style="position: relative;" >'
					   +'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
					   +'<div id="text'+idNo+'" class="text title_text check-html" contenteditable="true" onclick="showEditTool(\'text' + idNo + '\');" onblur="updateNote('+idNo+',6);" onkeyup="togglePrev(this)">'
					   +''+examination+'</div></div></td>'
					   +'<td><input id="noteDBId'+idNo+'" class="questionDBId" value="'+questionDBId+'" type="hidden"/>'
					   +'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteNote('+idNo+',6);del(\'m'+idNo+'\');"/>'
					   +'</td></tr>'
					   +'</table>'
					   //试题类型转换
					   +'<div class="question_footer" id ="answerarea'+idNo+'">'
					   +'<div>'
					   +'<div class="footer1">'
					   +'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'noteDBId'+idNo+'\',6)" id="sel_'+idNo+'">'
					   +'<option value="Single Choice"> '+ $("#Const_singleChoose")[0].value+'</option>'
					   +'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
					   +'<option value="Multiple Choice">'+ $("#Const_mutiChoose")[0].value+'</option>'
					   +'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					   +'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					   +'<option selected="selected" value="Note">'+ $("#Const_note")[0].value+'</option>'
					   +'<option value="Fill">'+ $("#Const_fill")[0].value+'</option>'
//					   +'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					   +'</select></div>'
					   //"阅读理解"和"便签"之间的题目转换
					   +'<div class="footer2">'
					   +'<span id="switch'+idNo+'" class="tzCheckBox checked" onclick="clickSwitch('+idNo+')">'
					   +'<span id="switchName'+idNo+'" class="tzCBContent">'+$("#Const_note")[0].value+'</span>'
					   +'<span class="tzCBPart"></span>'
					   +'</span></div>'
					   +'</div></div>'
			);


		}else if(sel=="Fill"){// 更题目类型为“填空”题

		 	// 增加填空题页面
			$("#m"+idNo).html(
					'<h1></h1><div class="nr" id="nr'+idNo+'" onMouseOver="showTableUnit('+idNo+')" onMouseOut="hideTableUnit('+idNo+')" onclick="showFooter('+idNo+')">'
					+'<table id="table'+idNo+'">'
					+'<tr class="textTr" style="border:0px #09F solid;">'
					+'<td id="number'+idNo+'" class="Qno_td"><span class="questionNo" id="questionNo'+idNo+'" ></span>.</td>'
					+'<td class="title" id="title'+idNo+'" >'
					+'<div style="position: relative;">'
					+'<input id="fillDBId'+idNo+'" class="questionDBId" type="hidden" value="'+questionDBId+'" >'
					+'<div onclick="setTextFocus(\'text' + idNo + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
					+'<div id="text'+idNo+'" class="text title_text text_fill check-html" '
					+'contenteditable="true" onblur="updateFill('+idNo+');refreshFillPointNo('+idNo+')" onclick="showEditTool(\'text' + idNo + '\');" onkeyup="togglePrev(this)">'+examination+'</div>'
					+'<div id="pointDiv'+idNo+'" class="pointDiv pointDiv_fill" align="right" contenteditable="false">'
					+'<div class="pointDivTitle" contenteditable="false">每空分数：</div>'
					+'<div style="float:left">'
					+'<input id="pointText_fill'+idNo+'" type="text" value="4" class="pointDivText" style="width:81px" placeholder="point/space" '
					+' onChange="checkInputVal(this);updateSpacePoint('+idNo+')" onfocus="this.select()"/></div>'
					+'<div class="pointCount">总计'
					+'<span id="spaceCount'+idNo+'" class="pointSpan"></span>空，共'
					+'<span id="pointCount'+idNo+'" class="pointSpan"></span>分</div></div>'

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
					+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+idNo+'" onclick="deleteFill('+idNo+');del(\'m'+idNo+'\')"/></td>'
				    +'</tr>'
				    +'</table>'

				    +'<div class="footer_bottom">'
					+'<div class="div_tag" id="div_tag'+idNo+'">'
					+'<input type="text" id="tag'+idNo+'" key="'+idNo+'" value="" data-role="tagsinput" placeholder=" 输入标签 "  onchange="updateFill('+idNo+')" />'
					+'</div>'

					+'<div class="question_footer" id ="answerarea'+idNo+'">'
					+'<div>'
					+'<div class="footer1">'
					+'<input id="add'+idNo+'" type="button" value="'+$("#Const_addFillOpt")[0].value +'" disabled="disabled" class="addFillSpace btn btn-small btn-short" onclick="clickAddSpace('+idNo+')"/>'
					+'<select class="form-control select-medium" onchange="update(\'sel_'+idNo+'\','+idNo+',\'fillDBId'+idNo+'\',7)" id="sel_'+idNo+'">'
					+'<option value="Single Choice">'+ $("#Const_singleChoose")[0].value+'</option>'
					+'<option value="True Or False">'+ $("#Const_trueFalse")[0].value+'</option>'
					+'<option value="Multiple Choice"> '+ $("#Const_mutiChoose")[0].value+'</option>'
					+'<option value="Essay">'+ $("#Const_essay")[0].value+'</option>'
					+'<option value="Short Answer">'+ $("#Const_shortAnswer")[0].value+'</option>'
					+'<option value="Note">'+ $("#Const_note")[0].value+'</option>'
					+'<option value="Fill" selected="selected">'+ $("#Const_fill")[0].value+'</option>'
//					+'<option value="Interactive Image">'+ $("#Const_interactiveImage")[0].value+'</option>'
					+'</select></div>'
					+'<div class="footer2">'
					+'<input type="button" id="pointButton'+idNo+'" class="point btn btn-small btn-short" onclick="hidePointField('+idNo+'); keepShowPointValue();" value="'+ $("#Const_point")[0].value +'" />'
					+'<span>难度</span>'
					+'<span class="diff_img">'
					+'<input id="difficulty'+idNo+'" type="hidden" value="0"/>'
					+'<img id="xing_0_'+idNo+'" onclick="Difficulty(\'1\','+idNo+'); updateFill('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_1_'+idNo+'" onclick="Difficulty(\'2\','+idNo+'); updateFill('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_2_'+idNo+'" onclick="Difficulty(\'3\','+idNo+'); updateFill('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_3_'+idNo+'" onclick="Difficulty(\'4\','+idNo+'); updateFill('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'<img id="xing_4_'+idNo+'" onclick="Difficulty(\'5\','+idNo+'); updateFill('+idNo+')" src="/assets/img/rating_1.png"/>'
					+'</span></div>'
//					+'<div >'
//					+'<input type="button" style="margin-top:1mm; margin-left:3mm" id="required_'+idNo+'" onclick="AnswerRequired(\'1\','+idNo+');updateFill('+idNo+')" data-toggle="button" class="btn btn-small btn-short" value="必答"/>'
//					+'<input type="hidden" id="required_flg_'+idNo+'" value="Required"/>'
//					+'</div>'
					+'</div>'
					+'<div>'
					+'<div class="footer3">'
					+'<span>注解</span> '
					+'<div contenteditable="true" class="div_input" id="comment'+idNo+'" onblur="updateFill('+idNo+')">'+comment+'</div>'
					+'</div>'
					+'<div class="footer4">'
					+'<span>描述</span>'
					+'<div contenteditable="true" class="div_input" id="description'+idNo+'" onblur="updateFill('+idNo+')">'+description+'</div>'
					+'</div>'
					+'</div></div></div>'
					+'</div></div>'
			);

			showContextMenu();
			bindfillSpace(2,idNo);// 绑定填空题提干入力区域的右键菜单
			bindAdd(idNo);// 绑定填空题目输入框的onfocus函数
		}

		// 增加变更后题目的可拖动属性
		//document.getElementById("m"+idNo).getElementsByTagName("h1")[0].onmousedown=addevent; // 题目拖动尚未实现TODO
		// 显示文本编辑工具条
		showEditTool();
		// 显示标签
		showTags();
		// 更新难度等级的显示
		if(kind!=6){
			Difficulty(difficulty,idNo);
		}
		/** check输入框内容,无内容时显示提示 */
		var text = $(".check-html");
		for(var i = 0; i < text.length; i++){
			togglePrev(text[i]);
		}
		/** 刷新题号 */
		refreshNo();
		// 默认设置对题目内容输入框的焦点focus
		$("#text"+idNo).focus();
}
function init(id){
    var dest = $1(id);
    dest.addEventListener("dragover", function(ev)
    {
        ev.stopPropagation();
        ev.preventDefault();
    }, false);

    dest.addEventListener("dragend", function(ev)
    {
        ev.stopPropagation();
        ev.preventDefault();
    }, false);

    dest.addEventListener("drop", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        var file = ev.dataTransfer.files[0];
        var reader = new FileReader();

        if (file.type.substr(0, 5) == "image") {
            reader.onload = function (event) {
                dest.style.background = 'url(' + event.target.result + ') no-repeat center';
                dest.innerHTML = "";
            };
            reader.readAsDataURL(file);
        }
        else if (file.type.substr(0, 4) == "text") {

            reader.readAsText(file);
            reader.onload = function (f) {
                dest.innerHTML = "<pre>" + this.result + "</pre>";
                dest.style.background = "white";
            }
        }
        else {
            dest.innerHTML = "暂不支持此类文件的预览";
            //dest.style.background = "white";
        }
    }, false);
}
//xukn add start
var showEditToolFlag = "none";
var addStyle = "none";
function showEditTool(kind){
	
	/*********************/
	
	
	/*******************/
	var work;
	
	if(typeof kind != "undefined"){
		work = kind.toString();
	} else {
		work = "0";
	}
//	alert("work:" + work);
//
//	alert("kind:" + kind);
	var editTool_Id = document.getElementById("div_bj");
	editTool_Id.style.display="block";
	showEditToolFlag = "block";

	// 不是单选题时隐藏页面editBoor上的上传音频功能
	if( work.indexOf("single_") >=0 || work == 1){
		$("#audioUpload_tbn").show(); // 显示“上传音频”
		$("#videoUpload_tbn").show(); // 显示“上传视频”
		// 设置editBoor中其他功能在单选题下保持功能
		$("#div_bj").attr("onclick","showEditTool("+ "'" +work+ "'" + ")");
		$("#div_color").attr("onclick","showEditTool("+ "'" +work+ "'" + ")");
		$("#div_font").attr("onclick","showEditTool("+ "'" +work+ "'" + ")");
		$("#color").attr("onclick","showEditTool("+ "'" +work+ "'" + ")");
		$("#font").attr("onclick","showEditTool("+ "'" +work+ "'" + ")");
		work = work.substring(work.indexOf("single_"),work.length);
	
	}else{
		//alert(1);
		$("#div_bj").attr("onclick","showEditTool()");
		$("#div_color").attr("onclick","showEditTool()");
		$("#div_font").attr("onclick","showEditTool()");
		$("#color").attr("onclick","showEditTool()");
		$("#font").attr("onclick","showEditTool()");
		$("#audioUpload_tbn").hide(); // 隐藏
	
	}
	$("#videoUpload_tbn").hide(); // 隐藏
	var t_id_content = domid -1;

	var t_id_content = domid -1;
	var title = $("div#text" + t_id_content).html();
	if($('input#tb_2').hasClass('tb_2') == true){
		$('input#tb_2').removeClass('tb_2').addClass('tb_2_out');
	} else {
		$('input#tb_2').removeClass('tb_2_copy').addClass('tb_2_out');
	}

	if($('input#tb_3').hasClass('tb_3') == true){
		$('input#tb_3').removeClass('tb_3').addClass('tb_3_out');
	} else {
		$('input#tb_3').removeClass('tb_3_copy').addClass('tb_3_out');
	}

	if($('input#tb_4').hasClass('tb_4') == true){
		$('input#tb_4').removeClass('tb_4').addClass('tb_4_out');
	} else {
		$('input#tb_4').removeClass('tb_4_copy').addClass('tb_4_out');
	}

	if($('input#tb_5').hasClass('tb_5') == true){
		$('input#tb_5').removeClass('tb_5').addClass('tb_5_out');
	} else {
		$('input#tb_5').removeClass('tb_5_copy').addClass('tb_5_out');
	}
	
	if(work == 1 || work == 0){  // 新建试题时题目部分
		title = $("div#text" + t_id_content).html();
	} else if(work > 1){ // 单选，多选时新加选项部分
		title = $("div#inputText_" + (work -1)).html();
	} else if(work.indexOf("a") == 0 || work.indexOf("b") == 0 || work.indexOf("c") == 0 || work.indexOf("d") == 0){ // 单选，多选固定四项部分
		title = $("div#inputText_" + work).html();
	} else if(work.indexOf("shortAnswerOption" == 0)){
		title = $("div#" + work).html();
	} else { // 题目部分
		title = $("div#text" + work.substring(4,5)).html();
	}

	// 判断是否是ul情况
	if(title != null && (title.indexOf("</ul>") >=0 || title.indexOf("</UL>") >=0)){
		if($('input#tb_4').hasClass('tb_4_out') == true){
			$('input#tb_4').removeClass('tb_4_out').addClass('tb_4_copy');
		} else if ($('input#tb_4').hasClass('tb_4_copy') == true){
			$('input#tb_4').removeClass('tb_4_copy').addClass('tb_4_out');
		} else {
			$('input#tb_4').removeClass('tb_4_hover').addClass('tb_4_copy');
		}
	} else {
		if($('input#tb_4').hasClass('tb_4_copy') == true){
			$('input#tb_4').removeClass('tb_4_copy').addClass('tb_4_out');
		}
	}

	// 判断是否是ol情况
	if(title != null && (title.indexOf("</ol>") >=0 || title.indexOf("</OL>") >=0)){
		if($('input#tb_5').hasClass('tb_5_out') == true){
			$('input#tb_5').removeClass('tb_5_out').addClass('tb_5_copy');
		} else if ($('input#tb_5').hasClass('tb_5_copy') == true){
			$('input#tb_5').removeClass('tb_5_copy').addClass('tb_5_out');
		} else {
			$('input#tb_5').removeClass('tb_5_hover').addClass('tb_5_copy');
		}
	} else {
		if($('input#tb_5').hasClass('tb_5_copy') == true){
			$('input#tb_5').removeClass('tb_5_copy').addClass('tb_5_out');
		}
	}

	// 初始化字体大小选项背景色
	for (j = 2;j<=5;j++){
		$('input#fontSize_'+ j).css("background-color","rgb(193,222,236)");
	}

	//getChoose(work);
}

// 选中文字操作
function getChoose(data){
	var html, sel,range;
	var arrayObj = new Array();
    var num;
    var type;
    if(window.getSelection){
    	type = true;
    	sel = window.getSelection(); // 选中文字部分
        range = sel.getRangeAt(0).cloneRange();
    } else if(document.selection){
    	type = false;
    	//sel = document.selection(); // 选中文字部分
        range = document.selection.createRange();
    }
    if (typeof window.getSelection != "undefined" || typeof document.selection != "undefined") {
//        sel = window.getSelection(); // 选中文字部分
//        range = sel.getRangeAt(0).cloneRange();

        var parentElement;
        var contain = document.createElement("div");
        var node = "";
        var flag = "true";
        if(type == true){
        	var container = range.commonAncestorContainer;
        	parentElement = container;
        	range.selectNode(parentElement);
        	contain.appendChild(range.cloneContents());
        	node = contain.innerHTML; // 选中文字的html形式
        } else {
        	parentElement = range.parentElement();
        	node = parentElement.outerHTML;
        }

        // 第一次获取node或者node包含加粗，斜线，字体大小改变等，再查询父节点是否包含，以此类推，得到包含这边属性的父节点
        while (typeof node != "undefined" && (flag == "true" || (type == true &&(node.indexOf('<b') == 0 || node.indexOf('<i') == 0 || node.indexOf('<font') == 0||node.indexOf('<ul') == 0||node.indexOf('<ol') == 0))
        		|| (type == false && (node.indexOf('<EM') == 0 || node.indexOf('<STRONG') == 0 || node.indexOf('<FONT') == 0||node.indexOf('<OL') == 0||node.indexOf('<UL') == 0)))){

        	if(type == true && (node.indexOf('<b') == 0 || node.indexOf('<i') == 0 || node.indexOf('<font') == 0||node.indexOf('<ul') == 0||node.indexOf('<ol') == 0)){
        		num = arrayObj.push(parentElement.nodeName); // 将包含的属性：I，FONT，B等标记加入数组
        	}

        	if(type == false && (node.indexOf('<EM') == 0 || node.indexOf('<STRONG') == 0 ||node.indexOf('<OL') == 0||node.indexOf('<UL') == 0)){
        		num = arrayObj.push(parentElement.nodeName); // 将包含的属性：I，FONT，B等标记加入数组
        	}

        	if(type == false && node.indexOf('<FONT') == 0 && flag == "true"){
        		num = arrayObj.push(parentElement.nodeName);
        	}

        	flag = "false";
        	html = node;
        	var con = document.createElement("div");
        	if(type == true){
        		parentElement = parentElement.parentNode;
            	range.selectNode(parentElement);
            	con.appendChild(range.cloneContents());
            	node = con.innerHTML;
        	} else {
        		if(typeof range.parentElement() == "undefined" || range.parentElement() == null || typeof parentElement.parentNode == "undefined"){
        			break;
        		} else {
        			parentElement = parentElement.parentNode;
        			node = parentElement.outerHTML;
        		}
        	}
        }

    }

    // loop 属性，按属性设置图标选中状态
    for(i=0;i<num;i++){
            if(arrayObj[i] == "B" || arrayObj[i] == "STRONG"){
            	$('input#tb_2').removeClass('tb_2_out').addClass('tb_2_copy');
            }
        	if(arrayObj[i] == "I" || arrayObj[i] == "EM"){
        		$('input#tb_3').removeClass('tb_3_out').addClass('tb_3_copy');
        		if($('input#tb_3').hasClass('tb_3_out') == true){
        			$('input#tb_3').removeClass('tb_3_out').addClass('tb_3_copy');
        		} else if ($('input#tb_3').hasClass('tb_3_hover') == true){
        			$('input#tb_3').removeClass('tb_3_hover').addClass('tb_3_copy');
        		}
        	}


        	if(arrayObj[i] == "FONT"){
        		var size;
        		var str;
        		if(type == true){
        			size = html.indexOf('size="');
        			str = html.substring(size+6,size+7);
        		} else {
        			size = html.indexOf('size=');
        			str = html.substring(size+5,size+6);
        		}
        		for (k = 2;k<=5;k++){
        			if(str == k){
        				$('input#fontSize_'+ k).css("background-color","rgb(193,255,236)");
        			} else {
        				$('input#fontSize_'+ k).css("background-color","rgb(193,222,236)");
        			}
        		}
        	}
    }

    // 不包含属性，按情况设置图标选中情况
    if (typeof num == "undefined"){
    	if($('input#tb_2').hasClass('tb_2') == true){
    		$('input#tb_2').removeClass('tb_2').addClass('tb_2_out');
    	} else {
    		$('input#tb_2').removeClass('tb_2_copy').addClass('tb_2_out');
    	}

    	if($('input#tb_3').hasClass('tb_3') == true){
    		$('input#tb_3').removeClass('tb_3').addClass('tb_3_out');
    	} else {
    		$('input#tb_3').removeClass('tb_3_copy').addClass('tb_3_out');
    	}

    	for (j = 2;j<=5;j++){
    		$('input#fontSize_'+ j).css("background-color","rgb(193,222,236)");
    	}

    	if($('input#tb_9').hasClass('tb_9') == true){
    		$('input#tb_9').removeClass('tb_9').addClass('tb_9_out');
    	} else if($('input#tb_9').hasClass('tb_9_hover') == true){
    		$('input#tb_9').removeClass('tb_9_hover').addClass('tb_9_copy');
    	} else if($('input#tb_9').hasClass('tb_9_copy') == true){
    		$('input#tb_9').removeClass('tb_9_copy').addClass('tb_9_out');
    	}
    }
}

/**改善用*/
function showEditTool_test(obj){
	 var object=event.srcElement;   //获得调用者对象
	 alert(object.id.value);//获得调用者title
	 alert(object.className);  //获得调用者的名称

	 alert(obj.id);
	 alert(obj.name);

	var editTool_Id = document.getElementById("div_bj");
	editTool_Id.style.display="block";
	showEditToolFlag = "block";
}

/** 隱藏显示的編輯工具和輸入框 */
function itemsControl(){
	// 設置頁面編輯工具默認隱藏
	if(showEditToolFlag!="block"){
		var editTool_Id = document.getElementById("div_bj");
		editTool_Id.style.display="none";

		// 隐藏工具条中弹出的工具
		$("#color").css("display","none");
		$("#font").css("display","none");
	}
	showEditToolFlag = "none";

	// 設置頁面選項中分數框默認隱藏
	if(pointValueFlag != "inline"){
		$("div.pointDiv").fadeOut();
		// 设置分数按钮为正常状态
		$(".point.btn.btn-small").removeClass("active");
	}
	pointValueFlag = "none";

	// 禁用填空题的“增加填空”按钮
	if(addStyle != "show"){
		$(".addFillSpace").attr("disabled","disabled");
	}
	addStyle = "none";

	// 显示TagsInput的div块
//	alert(tagsFlag+"............页面");
	if(tagsFlag == "0"){
//		$(".question_footer").hide();
//		$(".div_tag").slideDown(500,function(){
//			tagsFlag = "0";
//		});
		$(".div_tag").slideDown().css("background-color", "#F8F2E4"); // TagsInput的div块显示

	}
	tagsFlag = "0";

}

/** 保持显示填空题的“增加填空”按钮 */
function showAdd(idNo){
//	$(".addFillSpace").removeAttr("disabled");
	$("#add"+idNo).removeAttr("disabled");
	addStyle = "show";
}

/** 解绑填空题输入区域div的函数(禁用“增加填空”按钮) */
function unbindAdd(idNo){
	$("#text"+idNo).unbind("click");
}
/** 绑定填空题输入区域div的函数(启用“增加填空”按钮) */
function bindAdd(idNo){
	$("#text"+idNo).bind("click",idNo,function(e){
		showAdd(e.data);
	});
}

/** 保持显示给分区域 */
var pointValueFlag = "none";
function keepShowPointValue(){
	if($("div.printDiv").css("display") != "none"){
		$("div.printDiv").css("display","inline");
	}
	pointValueFlag = "inline";
}

/** 显示和隐藏给分框 */
function hidePoint(id){
	//$("input#"+id).toggle(); // 隐藏
	//alert(id);
	$("input#"+id).fadeToggle(function(){// 淡入淡出
		// $("input#"+id).val("0");// 分數輸入框的值置空 TODO
	});
}
function hidePointField(idNo){
	//$("#"+id+" div.pointDiv").toggle(); // 隐藏
	$("#table"+idNo+" div.pointDiv").fadeToggle(); // 淡入淡出

	// 设置分数的样式，点击时为凹陷状态
	$("#pointButton"+idNo).toggleClass("active");
}

/** check判斷題答案輸入框的內容 */
function checkAnswer_tf(id){
	var answer = $("#"+id).text();
	// 沒有輸入內容時：
	if(answer.trim()==""){
		$("#"+id).text("请输入...").addClass("tipInfo");
	} else if (answer.trim()=="请输入..."){
		$("#"+id).text("").removeClass("tipInfo");
	}
}

/** 增加题目导入题目的下拉框的img随其状态改变 */
function checkDropDownImg(idNo){
	switch(idNo){
		case 1: //alert(idNo);
			$("#drop-down-1").toggle();//css("display","none");//fadeOut();
//			$("#drop-down-2").show();//fadeOut();
			$("#drop-down-3").show();//fadeOut();
			break;

		case 2: //alert(idNo);
			$("#drop-down-1").show();
			$("#drop-down-2").toggle();
			$("#drop-down-3").show();
			break;

		case 3: //alert(idNo);
			$("#drop-down-1").show();
//			$("#drop-down-2").show();
			$("#drop-down-3").toggle();
			break;

		//default: alert("error");
	}
}

/** 切换"便签"和"阅读理解"题型 */
function clickSwitch(idNo){
	//alert($("#switchName").text());
	if($("#switchName"+idNo).text() == $("#Const_note")[0].value){
		$("#switch"+idNo).removeClass("checked");
		$("#switchName"+idNo).text($("#Const_reading")[0].value);
		// 更新DB的question题目类型为"阅读理解"
		$("#text"+idNo).attr("onblur","updateNote("+idNo+",8)"); // 更新题目的function
		$("#del"+idNo).attr("onclick","deleteNote("+idNo+",8);del('m"+idNo+"')"); // 删除题目的function

		updateKind("noteDBId"+idNo,"08"); // 更新为阅读理解

	} else {
		$("#switch"+idNo).addClass("checked");
		$("#switchName"+idNo).text($("#Const_note")[0].value);
		// 更新DB的question题目类型为"便签"
		$("#text"+idNo).attr("onblur","updateNote("+idNo+",6)"); // 更新题目的function
		$("#del"+idNo).attr("onclick","deleteNote("+idNo+",6);del('m"+idNo+"')"); // 删除题目的function

		updateKind("noteDBId"+idNo,"06"); // 更新为便签
	}
}

//设置页面属性，不执行默认处理（拒绝被拖放）
document.ondragover = function(e){e.preventDefault();};
document.ondrop = function(e){e.preventDefault();}



/************************************ld-yueqh 2014.5.27 ********************************************/


//动态添加pdf答题卡 ——单项选择题型
function addPdf_radio(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<div  class="pdf_radio" style="height:40px;border-top:2px solid #F8F2E4;background-color:#FFFAF0;">'
			   +'	<table style="margin-top:3px;float:left;">'
			   +'		<tr  id="tab'+domid+'">'
			   +'			<td><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'			<td  class="td_'+domid+'">'
			   +'				<input type="radio" name="radio_'+domid+'" id="radio_A_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_a'+domid+'\',\'radio_A_'+domid+'\',\'optionDBId_a'+domid+'\','+domid+')" />'
			   +'				<label id="radio_A_label_'+domid+'">A</label>'
			   +'				<input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_a'+domid+'" class="point" type="hidden" value="0" />'
			   +			'</td>'
			   +'			<td  class="td_'+domid+'">'
			   +'				<input type="radio" name="radio_'+domid+'" id="radio_B_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_b'+domid+'\',\'radio_B_'+domid+'\',\'optionDBId_b'+domid+'\','+domid+')"/>'
			   +'				<label  id="radio_B_label_'+domid+'">B</label>'
			   +'				<input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_b'+domid+'"  class="point" type="hidden" value="0" />'
			   +'			</td>'
			   +'			<td  class="td_'+domid+'">'
			   +'				<input type="radio" name="radio_'+domid+'" id="radio_C_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_c'+domid+'\',\'radio_C_'+domid+'\',\'optionDBId_c'+domid+'\','+domid+')"/>'
			   +'				<label  id="radio_C_label_'+domid+'">C</label>'
			   +'				<input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_c'+domid+'"class="point" type="hidden" value="0" />'
			   +'			</td>'
			   +'			<td  class="td_'+domid+'">'
			   +'				<input type="radio" name="radio_'+domid+'" id="radio_D_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_d'+domid+'\',\'radio_D_'+domid+'\',\'optionDBId_d'+domid+'\','+domid+')"/>'
			   +'				<label  id="radio_D_label_'+domid+'">D</label>'
			   +'				<input id="optionDBId_d'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_d'+domid+'" class="point" type="hidden" value="0" />'
			   +'			</td>'
			   +'		</tr>'
			   +'	</table>'
			   +'<div style="float:left;margin-top:10px;">'
			  // +'	<img src="/assets/img/toolbarButton-zoomOut.png" onclick="pdf_del_option('+domid+')"/>'
			//   +'	<a class="button button-pill" style="width:20px;margin-left:4px;" onclick="pdf_del_option('+domid+')">-</a>'
			   +'</div>'
			   +'<div style="margin-left:4px;float:left;margin-top:10px;">'
			   //+'	<img src="/assets/img/toolbarButton-zoomIn.png" onclick="pdf_add_option(\'radio\','+domid+')"/>'
		//	   +'	<a class="button button-pill" style="width:20px;" onclick="pdf_add_option(\'radio\','+domid+')">+</a>'
			   +'</div>'
			   +'<div style="float:right;width:40px;margin-top:8px;margin-right:15px;">'
			   +'	<img src="/assets/img/del.jpg" class="del_img" id="del'+domid+'" onclick="deleteQuestion('+domid+',2),del(\'m'+domid+'\')">'
			   +'</div>'			   
			   +'<input id="radio_'+domid+'" type="hidden"/>'
			   +'<input id="optionDBId_temp'+domid+'" value="0"  type="hidden"/>'
			   +'<input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
			   +'</div>';
		if("Y"!=$("#import_flag").val()){
			 if("doing"!=$("#init_flag").val()){
				 // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
				 addSingleChoose(domid,1);// 数据库中增加单项选择题的记录
			 }
		}
	domid++;
}
//动态添加pdf答题卡-判断题
function addPdf_judge(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<div class="pdf_radio" id="tab'+domid+'" style="height:40px;border-top:2px solid #F8F2E4;background-color:#FFFAF0;">'
			   +'	<table style="margin-top:3px;">'
			   +'		<tr>'
			   +'			<td><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'			<td><input type="radio" name="radio_judge_'+domid+'" id="radio_t_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_t'+domid+'\',\'radio_t_'+domid+'\',\'optionDBId_t'+domid+'\','+domid+')" /><label>对</label></td>'
			   +'			<td><input type="radio" name="radio_judge_'+domid+'" id="radio_f_'+domid+'"  onclick="pdf_radioAnswerSheet(\'pointText_f'+domid+'\',\'radio_f_'+domid+'\',\'optionDBId_f'+domid+'\','+domid+')"/><label>错</label></td>'
			   +'		</tr>'
			   +'	</table>'
			   +'<div style="float:right;margin-top:-25px;margin-right:20px;">'
			   +'	<img src="/assets/img/del.jpg" class="del_img" style="" id="del1" onclick="deleteTrue('+domid+'),del(\'m'+domid+'\')">'
			   +'</div>'
			   +'<input id="trueDBId'+domid+'" value="" type="hidden"/>'
			   +'<input id="optionDBId_t'+domid+'" value="" type="hidden"/>'
			   +'<input id="optionDBId_f'+domid+'" value="" type="hidden"/>'
			   +'<input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
			   +'<input id="optionDBId_temp'+domid+'" value="0"  type="hidden"/>'
			   +'<input id="pointText_t'+domid+'" type="hidden" value="0" />'
			   +'<input id="pointText_f'+domid+'" type="hidden" value="0" />'
			   +'</div>';
	if("doing"!=$("#init_flag").val()){
		addTrueF(domid);// 数据库中增加判断题的记录
	 }
	domid++;
}
var pdfid=1;
function addPdf_option(kind,idNo,text){
	if(kind=="radio"){
		//回显单选答题卡
		var td=document.createElement("td");
		td.className="td_"+idNo;
		td.innerHTML='<input id="optionDBId_'+pdfid+'" class="optDBId" value="" type="hidden"/>'
					+'<input type="radio" name="radio_'+idNo+'" id="radio_'+pdfid+'"  onclick="pdf_radioAnswerSheet(\'pointText_'+pdfid+'\',\'radio_'+idNo+'\',\'optionDBId_'+pdfid+'\','+idNo+')"/><label  id="radio_label_'+idNo+'">'+text+'</label>'
				    +'<input id="pointText_'+pdfid+'" class="point" type="hidden" value="0" />';
		$1("tab"+idNo).appendChild(td);	
		pdfid++;
	}else if(kind=="judge"){
		
		//回显判断题答题卡
	}else if(kind=="checkbox"){
		//回显多选题答题卡
		var td=document.createElement("td");
		td.className="td_"+idNo;
		td.innerHTML='<input id="optionDBId_'+pdfid+'" class="optDBId" value="" type="hidden"/>'
					+'<input type="checkbox" name="checkbox_'+idNo+'" id="checkbox_'+pdfid+'"  onclick="pdf_checkboxAnswerSheet(\'pointText_'+pdfid+'\',\'checkbox_'+pdfid+'\',\'optionDBId_'+pdfid+'\','+idNo+')"/><label  id="checkbox_label_'+idNo+'">'+text+'</label>'
				    +'<input id="pointText_'+pdfid+'" type="hidden" class="point"   value="0" />';
		$1("tab"+idNo).appendChild(td);	
		pdfid++;
	}else if(kind=="shortAnswer"){
		//回显简答题答题卡
	}else if(kind=="fill"){
		$('#text'+idNo).append('<input id="space'+pdfid+'" name="del_tiankong" value="'+text+'"  type="text" onblur="update_fillQuestion('+idNo+'),update_space(\'optionId'+pdfid+'\',\''+pdfid+'\')" class="space"  style="width:60px">'
				+'<input type="hidden" id="optionId'+pdfid+'"/>');
		 pdfid++;
	}
}
//动态添加pdf答题卡-多项选择
function addPdf_checkbox(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<div class="pdf_radio" style="height:40px;border-top:2px solid #F8F2E4;background-color:#FFFAF0;">'
			   +'	<table style="margin-top:3px;float:left;">'
			   +'		<tr id="tab'+domid+'">'
			   +'			<td><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'			<td class="td_'+domid+'">'
			   +'				<input type="checkbox" name="checkbox'+domid+'" id="checkbox_A_'+domid+'"  onclick="pdf_checkboxAnswerSheet(\'pointText_a'+domid+'\',\'checkbox_A_'+domid+'\',\'optionDBId_a'+domid+'\','+domid+')" />'
			   +'				<label id="checkbox_A_label_'+domid+'" >A</label>'
			   +'				<input id="optionDBId_a'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_a'+domid+'" class="point"  type="hidden" value="0" />'
			   +'			</td>'
			   +'			<td class="td_'+domid+'">'
			   +'				<input type="checkbox" name="checkbox'+domid+'" id="checkbox_B_'+domid+'"  onclick="pdf_checkboxAnswerSheet(\'pointText_b'+domid+'\',\'checkbox_B_'+domid+'\',\'optionDBId_b'+domid+'\','+domid+')"/>'
			   +'				<label  id="checkbox_B_label_'+domid+'">B</label>'
			   +'				<input id="optionDBId_b'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_b'+domid+'" class="point"  type="hidden" value="0" />'
			   +'			</td>'
			   +'			<td class="td_'+domid+'">'
			   +'				<input type="checkbox" name="checkbox'+domid+'" id="checkbox_C_'+domid+'"  onclick="pdf_checkboxAnswerSheet(\'pointText_c'+domid+'\',\'checkbox_C_'+domid+'\',\'optionDBId_c'+domid+'\','+domid+')"/>'
			   +'				<label  id="checkbox_C_label_'+domid+'">C</label>'
			   +'				<input id="optionDBId_c'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_c'+domid+'" class="point"  type="hidden" value="0" />'
			   +'			</td>'
			   +'			<td class="td_'+domid+'">'
			   +'				<input type="checkbox" name="checkbox'+domid+'" id="checkbox_D_'+domid+'"  onclick="pdf_checkboxAnswerSheet(\'pointText_d'+domid+'\',\'checkbox_D_'+domid+'\',\'optionDBId_d'+domid+'\','+domid+')"/>'
			   +'				<label  id="checkbox_D_label_'+domid+'">D</label>'
			   +'				<input id="optionDBId_d'+domid+'" class="optDBId" value="" type="hidden"/>'
			   +'				<input id="pointText_d'+domid+'" class="point"  type="hidden" value="0" />'
			   +'			</td>'
			   +'		</tr>'
			   +'	</table>'
			   +'<div style="float:left;margin-top:10px;">'
			//   +'	<img src="/assets/img/toolbarButton-zoomOut.png" onclick="pdf_del_option('+domid+')"/>'
			 //  +'	<a class="button button-pill" style="width:20px;margin-left:4px;" onclick="pdf_del_option('+domid+')">-</a>'
			   +'</div>'
			   +'<div style="margin-left:4px;float:left;margin-top:10px;">'
			//   +'	<img src="/assets/img/toolbarButton-zoomIn.png" onclick="pdf_add_option(\'checkbox\','+domid+')"/>'
			//   +'	<a class="button button-pill" style="width:20px;" onclick="pdf_add_option(\'checkbox\','+domid+')">+</a>'
			   +'</div>'
			   +'<div style="float:right;margin-top:8px;margin-right:20px;">'
			   +'	<img src="/assets/img/del.jpg" class="del_img" style="" id="del1" onclick="deleteQuestion('+domid+',2),del(\'m'+domid+'\')">'
			   +'</div>'
			   +'<input id="radio_'+domid+'" type="hidden"/>'
			  // +'<input id="optionDBId_temp'+domid+'" value="0"  type="hidden"/>'
			   +'<input id="singleChooseDBId'+domid+'" class="questionDBId" value="" type="hidden"/>'
			   +'</div>';
		if("Y"!=$("#import_flag").val()){
			 if("doing"!=$("#init_flag").val()){
				 // $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
					addSingleChoose(domid,2);// 数据库中增加多项选择题的记录
			 }
		}
	domid++;
}
//动态添加pdf——简单题 答题卡
function pdf_shortAnswer(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<table id="table'+domid+'">'
			   +'<tr class="textTr" id="Qtitle'+domid+'" style="border:0px #09F solid;">'
			   +'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
			   +'<td class="title" id="title'+domid+'">'
			   +'<div style="position: relative;" >'
			   +'<div onclick="setTextFocus(\'single_text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;">请输入题目内容...</div>'
			   +'<div id ="shortAnswerOption'+domid+'" class="text title_text check-html"  contenteditable="true" onclick="showEditTool(\'shortAnswerOption'+ domid+'\');" '
				+' onblur="updateOption_forShortAnswer(\'optionDBId_shortAnswer'+domid+'\',\'shortAnswerOption'+domid+'\',\'pointText_shortAnswer'+domid+'\',\'shortAnswerDBId'+domid+'\','+domid+')" onkeyup="togglePrev(this)">'
			   +'</div></div></td>'
			   +'<td><input id="noteDBId'+domid+'" class="questionDBId" value="" type="hidden"/> '
			 
			   +'</td>'
			   +'</tr>'
			   +'<input type="hidden" id="optionDBId_shortAnswer'+domid+'"/>'
			   +'<input type="hidden" id="shortAnswerOption'+domid+'"/>'
			   +'<input type="hidden" id="pointText_shortAnswer'+domid+'"/>'
			   +'<input type="hidden" id="shortAnswerDBId'+domid+'"/>'
			   +'</table>'
			   +'<div style="float:right;margin-top:-25px;margin-right:20px;">'
			   +'<img src="/assets/img/del.jpg" class="del_img" onclick="deleteShortAnswer('+domid+');del(\'m'+domid+'\');"/>'
			   +'</div>';
	if("doing"!=$("#init_flag").val()){
		// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
		addShortAnswer_DB(domid);// 数据库中增加简答的记录
		//document.getElementById("text"+domid).focus();//set focus
	};

	domid++;
}
//动态添加pdf——填空题答题卡
function pdf_Fill(){
	var Qno = getQuestionNo();// 增加题目的题号
	var o=document.createElement("div");
	o.className="mo";
	o.id="m"+domid;
	$1('dom1').appendChild(o);
	o.innerHTML='<h1></h1><div class="nr" id="nr'+domid+'" onMouseOver="showTableUnit('+domid+')" onMouseOut="hideTableUnit('+domid+')" onclick="showFooter('+domid+')">'
	+'<table id="table'+domid+'">'
	+'<tr class="textTr" style="border:0px #09F solid;">'
	+'<td id="number'+domid+'" class="Qno_td"><span class="questionNo" id="questionNo'+domid+'" >'+Qno+'</span>.</td>'
	+'<td class="title" id="title'+domid+'" >'
	+'<input type="hidden" id="tagrBefore'+ domid +'" value="" />'
	+'<input type="hidden" id="tagrAfter'+ domid +'"  value="" />'

	+'<div style="position: relative;">'
	+'<input id="fillDBId'+domid+'" class="questionDBId" type="hidden" value="" >'
	+'<div onclick="setTextFocus(\'text' + domid + '\',this)" class="placeholderContent titleFont" onselectstart="return false;"></div>'
	+'<div class="text title_text text_fill check-html"  onblur="update_fillQuestion('+domid+')" contentEditable="true" id="text'+domid+'" '
	+'onkeyup="togglePrev(this)" onclick="showEditTool(\'text' + domid + '\');">'
	+'</div>'
	+'</div></td>'
	+'<td>'
    +'<ul id="contextMenu_1" class="contextMenu">'
    +'<li id="delete" class="delete">'
    +'<a>删除空</a>'
    +'</li>'
	+'</ul>'
	+'<img src="/assets/img/del.jpg" class="del_img" style="display:none;" id="del'+domid+'" onclick="deleteFill('+domid+');del(\'m'+domid+'\')"/></td>'
    +'</tr>'
    +'</table>'
	+'<input type="hidden" value="添加填空" onclick="pdf_addFill_input(\'fillDBId'+domid+'\','+domid+')">'
	+'<input type="hidden" id="fillSpaceDBId'+domid+'"/>'
	+'<input type="hidden" id="fillDBId'+domid+'"/>';
//	bindfillSpace(2,domid);// 绑定填空题提干入力区域的右键菜单
	if("doing"!=$("#init_flag").val()){
		// $("#m"+domid).hide().slideDown(400); // 增加题目时的滑动效果
		addFill_DB(domid);// 数据库中增加填空题的记录
	}
	domid++;
}
var spaceid=1;
function pdf_addFill_input(parentQuestionId,domid){
	var text='<input id="space'+spaceid+'" name="del_tiankong" value=""  type="text" onblur="update_fillQuestion('+domid+'),update_space(\'optionId'+spaceid+'\',\''+spaceid+'\')" class="space"  style="width:60px">'
			+'<input type="hidden" id="optionId'+spaceid+'"/>';
	$("#text"+domid).append(text);
	
	addFillSpace(parentQuestionId,domid,spaceid);
	update_fillQuestion(domid);
	spaceid++;
}
//更新pdf答题卡 正确答案选项
//id为选项的id
//type表示是否为多项选择
function pdf_radioAnswerSheet(pointTextId,id,optionId,domid){
		//单项选择
		updateOption_score(pointTextId,optionId,domid,'');

}
function pdf_checkboxAnswerSheet(pointTextId,id,optionId,domid){
	//多项选择
	var bischecked=$("#"+id).is(':checked');
	if(bischecked==false){
		CancelOptionAnswer(optionId);
	   
	}else{
	//	alert("pointTextId:"+pointTextId+",optionId:"+optionId);
		updateOption_score(pointTextId,optionId,domid,'');
		 
	}
}
function pdf_add_option(type,id){
	var i=0;
	 var option=['A','B','C','D','E','F','G','H','J','K','L'];
	$(".td_"+id).each(function(){
		i++;
	});
	if(i<9){
		if(type=="radio"){
			addPdf_option('radio',id,option[i]);
		}else if(type="checkbox"){
			addPdf_option('checkbox',id,option[i]);
		}
		addOpt(id,pdfid-1);// idNo:所属题目的idNo；    val：新增选项的idNo
		val++;
	}else{
		alert("选项已经达到上线！");
	}
}
function pdf_del_option(domid){
	var optionId=$("#tab"+domid).find("td").slice($(".td_"+domid).length,$(".td_"+domid).length+1).find(".optDBId").attr("id");
	var pointId=$("#tab"+domid).find("td").slice($(".td_"+domid).length,$(".td_"+domid).length+1).find(".point").attr("id");
	deleteOption(optionId,domid,pointId);
	$("#tab"+domid).find("td").slice($(".td_"+domid).length,$(".td_"+domid).length+1).remove();

}
//

/***************************************************************************************************/
