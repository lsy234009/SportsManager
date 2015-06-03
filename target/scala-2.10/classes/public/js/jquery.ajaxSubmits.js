/* 试卷录入机能的所有 Ajax提交动作
 * 前后台交互动作请写到此文件，方便统一管理
 *
 * @author testbook (testbook@cn.fujitsu.com)
 * @version 1.0.1
 * @date 2014-01-05
 * @category jQuery plugin
 * @copyright (c) 2013 FNST
 */
	  function getCurrentTime(){
		  var myDate = new Date();
		  return " "+myDate.toLocaleString();
	  }

	  function ajaxCall(){
		 ajaxCall_before();
		 $.get("/EntryQuestionsAction", function(){
			           	   ajaxCall_after();
			           	  });
	  }
	  function ajaxGetTags(){
		 //ajaxCall_before();
		 $.get("/EntryQuestionsAction", function(){
			 $(".Msgalert").css("color","#A3A3A3");

			$1("test_011").innerHTML=$1("Const_ajax_updateing").value + getCurrentTime();
			ajaxCall_after();
		 });
	  }

	  function ajaxCall_name(name){
//		  var dateNow = myDate.toLocaleDateString();     //获取当前日期
//		  var mytime=myDate.toLocaleTimeString();     //获取当前时间
//		  getCurrentTime();
//		  alert(getCurrentTime());
		ajaxCall_before();

		if(name.value.trim()==""){
			$1("test_011").innerHTML=$1("Const_enterExamName").value + getCurrentTime();
			$("#fullname").val("");
		}else{
			$.ajax({ url: "/EntryQuestionsAction_UPDATE_NAME/"+encodeURIComponent(name.value) +"/"+$("#examinationPaperId").val(),
				success: function(){
					ajaxCall_after();
				},error: function(){
					ajaxCall_fail();
				}});
		}


	  }

	  function ajaxCall_before(){
		  $(".Msgalert").css("color","#A3A3A3");
		 $1("test_011").innerHTML=$1("Const_ajax_updateing").value + getCurrentTime();

	  }

	  function ajaxCall_after(){
		  $(".Msgalert").css("color","#A3A3A3");
		 $1("test_011").innerHTML=$1("Const_ajax_update_success").value + getCurrentTime();


	  }
	 function ajaxCall_fail(){
		 $(".Msgalert").css("color","#A3A3A3");
		 $1("test_011").innerHTML=$1("Const_ajax_update_fail").value + getCurrentTime();


	  }

	/* delete question for singleChosse*/
	function deleteQuestion(idNo,temp){// hidenInput's value()
		showMessage(temp==1?1:3,"删除中","ok");
		// 取得數據庫中題目的Id
		var questionId = $("input#singleChooseDBId"+idNo).val(); // get questionId (delete from DB)
		// 刪除數據庫中對應id的題目
		//alert(questionId); // BUG
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(temp==1?1:3,"已删除","ok");
	    },error: function(){
		    showMessage(temp==1?1:3,"错误","err");
	    }});
	}
	function deleteQuestionRes(questionId,temp){// hidenInput's value()
		showMessage(temp,"删除中","ok");
		// 取得數據庫中題目的Id
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(temp,"已删除","ok");
	    },error: function(){
		    showMessage(temp,"错误","err");
	    }});
	}	
	/* delete note*/
	function deleteNote(idNo,kind){// hidenInput's value()
	showMessage(kind,"删除中","ok");
		// 取得數據庫中題目的Id
	var questionId = $("input#noteDBId"+idNo).val(); // get questionId (delete from DB)
	// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(kind,"已删除","ok");
	      },error: function(){
	    	 showMessage(kind,"错误","err");
	      }});
	}

	/* delete option from singleChoose */
function deleteOption(id,idNo,pointId){// id： 选项的id; idNo： 页面中的domid; pointId: 选项中分数框id
		showMessage(1,"选项删除中","ok");
		var optionId = $("input#"+id).val(); // get optionId (delete from DB)
		var scoreNum = getFration_del(idNo,pointId); // 题目的分数 (已经删除当前选项的分数)

		//alert(scoreNum);
		// 刪除數據庫中對於id的選項
		$.ajax({ url: "/EntryQuestionsAction_deleteOption/"+optionId+"/"+scoreNum, success: function(){
			showMessage(1,"选项已删除","ok");
	      },error: function(){
	    	 showMessage(1,"错误","err");
	      }});
}

/* delete all options */
function deleteAllOptions(DBId){ // 选项所在题目的DB中Id
		$.ajax({ url: "/EntryQuestionsAction_deleteAllOptions/"+DBId });
	}

/* 增加默认选项到数据库 */
function ionsInDB(DBId,idNo){// DBId:选项所在题目的DB中Id; idNo:页面自增长的domid
	$.ajax({ url: "/EntryQuestionsAction_addOptionsInDB/" +DBId,
			success: function(msg){
					$("input#optionDBId_a"+idNo).val(msg.optionId_A); // 绑定数据库增加的选项id到页面选项A
					$("input#optionDBId_b"+idNo).val(msg.optionId_B); // 绑定数据库增加的选项id到页面选项B
					$("input#optionDBId_c"+idNo).val(msg.optionId_C); // 绑定数据库增加的选项id到页面选项C
					$("input#optionDBId_d"+idNo).val(msg.optionId_D); // 绑定数据库增加的选项id到页面选项D
	      	}});
	}

/* 增加默认判断题True & False选项到数据库 */
function addOptionsInDB_TF(DBId,idNo){// DBId:选项所在题目的DB中Id; idNo:页面自增长的domid
	$.ajax({ url: "/EntryQuestionsAction_addOptionsInDB_TF/" +DBId,
			 success: function(msg){
				$("input#optionDBId_t"+idNo).val(msg.optionId_True); // 绑定数据库增加的选项id到页面题目中True选项
					$("input#optionDBId_f"+idNo).val(msg.optionId_False); // 绑定数据库增加的选项id到页面题目中False选项
	      	  }});
	}

/* 增加默人一个选项到数据库 （只有一个选项的题目共通方法） */
function addOptionInDB_common(DBId,optId){// DBId:选项所在题目的DB中Id; optId:页面中存储选项DBId的隐藏域id
	$.ajax({ url: "/EntryQuestionsAction_addOptionsInDB_common/" +DBId, success: function(msg){
		$("input#"+optId).val(msg.optionId); // 绑定数据库增加的选项id到页面选项A
	      }});
}

/* add singleChoose */
	function addSingleChoose(idNo,temp){
		showMessage(temp==1?1:3,"增加中","ok"); // show message
		$.ajax({ url: "/EntryQuestionsAction_addSingleChoose/" +$("#examinationPaperId").val()+"/"+temp, success: function(msg){
			//alert(msg.questionId+"\n"+msg.optionId_A+"\n"+msg.optionId_B+"\n"+msg.optionId_C+"\n"+msg.optionId_D+"\n");
			$("input#singleChooseDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目

			$("input#optionDBId_a"+idNo).val(msg.optionId_A); // 绑定数据库增加的选项id到页面选项A
			$("input#optionDBId_b"+idNo).val(msg.optionId_B); // 绑定数据库增加的选项id到页面选项B
			$("input#optionDBId_c"+idNo).val(msg.optionId_C); // 绑定数据库增加的选项id到页面选项C
			$("input#optionDBId_d"+idNo).val(msg.optionId_D); // 绑定数据库增加的选项id到页面选项D

			showMessage(temp==1?1:3,"已增加","ok");
	      },error: function(){
				showMessage(temp==1?1:3,"错误","err");
	      }});
	}

/* add true/false */
function addTrueF(idNo){
	showMessage(2,"增加中","ok"); // show message
		$.ajax({ url: "/EntryQuestionsAction_addTrue/" +$("#examinationPaperId").val(), success: function(msg){
			$("input#trueDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目

			$("input#optionDBId_t"+idNo).val(msg.optionId_True); // 绑定数据库增加的选项id到页面选项A
			$("input#optionDBId_f"+idNo).val(msg.optionId_False); // 绑定数据库增加的选项id到页面选项B

			showMessage(2,"已增加","ok");
	      },error: function(){
	    	 showMessage(2,"错误","err");
	      }});
}

	/* delete true */
	function deleteTrue(idNo){// hidenInput's value()

	showMessage(2,"删除中","ok");
		// 取得數據庫中題目的Id
	var questionId = $("input#trueDBId"+idNo).val(); // get questionId (delete from DB)
	// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(2,"已删除");
	      },error: function(){
	    	 showMessage(2,"错误","err");
	      }});
	}

/* add note */
function addNote_DB(idNo){
//	alert(idNo);
		showMessage(6,"增加中","ok"); // show message
		$.ajax({ url: "/EntryQuestionsAction_addNote/" +$("#examinationPaperId").val()+"/011", success: function(msg){
				//alert("examinationPaperId"+$("#examinationPaperId").val()+"\n" +"paperId"+msg.questionId);
				$("input#noteDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目
				showMessage(6,"已增加","ok");
		      },error: function(){
//		      	 alert("examinationPaperId"+$("#examinationPaperId").val()+"\n"+"err");
		    	 showMessage(6,"错误","err");
		      }});
};
/* add pdf*/
function addPdf_DB(idNo){
	showMessage(6,"增加中","ok"); // show message
	$.ajax({ url: "/EntryQuestionsAction_addPdf/" +$("#examinationPaperId").val()+"/011", success: function(msg){
			//alert("examinationPaperId"+$("#examinationPaperId").val()+"\n" +"paperId"+msg.questionId);
			$("input#PdfDBId").val(msg.questionId);
			// 绑定数据库增加的题目id到页面上的题目
			showMessage(101,"已增加","ok");
	      },error: function(){
//	      	 alert("examinationPaperId"+$("#examinationPaperId").val()+"\n"+"err");
	    	 showMessage(101,"错误","err");
	      }});
}
/* add option */
function addOpt(idNo,valNo){// 對於後續增加的單選題選項的數據庫操作
	// idNo: 選項所屬題目的idNo；   valNo：畫面新增選項的idNo
		showMessage(0,"选项增加中","ok");
	var questionId = $("input#singleChooseDBId"+idNo).val(); // get questionId (delete from DB)
	//alert(questionId);
		$.ajax({ url: "/EntryQuestionsAction_addOpt/"+questionId, success: function(msg){
			// alert(valNo+"___"+msg.optionId);
			$("input#optionDBId_"+valNo).val(msg.optionId); // 绑定数据库增加的选项id到页面新增選項
			showMessage(0,"选项已增加","ok");
	      },error: function(){
	    	 showMessage(0,"错误","err");
	      }});
}

	/* update singleChoose */
	function updateSingleChoose(idNo,temp){
		saveCursor(idNo);
		showMessage(temp==1?1:3,"更新中","ok");
		try{
			var questionId1 = $("input#singleChooseDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();				//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = !($("div#comment"+idNo).html()) ? " " : $("div#comment"+idNo).html();	//题目解析
			var description1 = !($("div#description"+idNo).text()) ? " " : $("div#description"+idNo).text();//题目描述
			var difficulty1 = !($("input#difficulty"+idNo).val()) ? "0" : $("input#difficulty"+idNo).val();	//难度级别
			// var fration = "count";		//分数
			var kind1 = temp==1 ? "01" : "03";	// 题目类型
			//var mustanswer1 = $("#required_flg_"+idNo).val();
			var exam_id1 = $("#examinationPaperId").val();
			var tags1 = $("#tag"+idNo).val();
			//alert("题目id:" +questionId1 + "\n题号：" + questionNo1 + "\n题目解析：" + comment1 + "\n题目描述：" + description1 + "\n难度级别：" + difficulty1 + "\n题目内容：" + examination1);
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateQuestion",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,	//难度级别
		 		//mustanswer:mustanswer1,
		 		kind:kind1,
		 		exam_id:exam_id1,
		 		tagArray:tags1
			},
			success: function(){
				showMessage(temp==1?1:3,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(temp==1?1:3,"错误","err");
	      	}
	    });
	}

	/* update true */
	function updateTrue(idNo){
		saveCursor(idNo);
		showMessage(2,"更新中","ok");
		try{
			var questionId1 = $("input#trueDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();				//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = !($("div#comment"+idNo).text()) ? " " : $("div#comment"+idNo).text();	//题目解析
			var description1 = !($("div#description"+idNo).text()) ? " " : $("div#description"+idNo).text();//题目描述
			var difficulty1 = !($("input#difficulty"+idNo).val()) ? "0" : $("input#difficulty"+idNo).val();	//难度级别
			// var fration = "count";		//分数
			var kind1="02";					// 题目类型“判断题”
			//var mustanswer1=$("#required_flg_"+idNo).val();
			var exam_id1= $("#examinationPaperId").val();
			var tags1 = $("#tag"+idNo).val();
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateQuestion",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,	//难度级别
		 		//mustanswer:mustanswer1,
		 		kind:kind1,
		 		exam_id:exam_id1,
		 		tagArray:tags1
			},
			success: function(){
				showMessage(2,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(2,"错误","err");
	      	}
	    });
	}

	/* update Note */
	function updateNote(idNo,kind){
		showMessage(kind,"更新中","ok");
		try{
			var questionId1 = $("input#noteDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();		//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = ""; 				//题目解析
			var description1 ="";			//题目描述
			var difficulty1 = "";			//难度级别
			// var fration = "count";		//分数
			var kind1 = "";
			if(kind == 6){
				kind1 = "06"; // 便签
			} else {
				kind1 = "08"; // 阅读理解
			}

			var exam_id1= $("#examinationPaperId").val();
			//alert("题目id:" +questionId1 + "\n题号：" + questionNo1 + "\n题目解析：" + comment1 + "\n题目描述：" + description1 + "\n难度级别：" + difficulty1 + "\n题目内容：" + examination1);
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateNote",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,		//难度级别
		 		kind:kind1,
		 		exam_id:exam_id1
			},
			success: function(){
				showMessage(kind,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(kind,"错误","err");
	      	}
	    });
	}

/* update option */
	function updateOption(optionDBId,optionTextId,pointId,DBId,flag,idNo){
		/***********保存光标********/
		saveOptionCursor(optionTextId);
	// optionDBId： 頁面隱藏域中存放的DB中對應的optionId；
	// optionTextId： 頁面中選項text內容的id；
	// pointId: 頁面中選項分數輸入框的id；
	// DBId:頁面隱藏域中存儲的選項所屬題目的DB中對應questionId；
	// flag:判斷更新選擇的題目類型； "1":單項選擇； "2":判斷； "3"：多項選擇
	// idNo:页面中的domid
		showMessage(Number(flag),"选项更新中","ok");
		try{
			var questionId1 = $("input#"+DBId).val(); // 選項所屬題目的id
			var optionId1 =  $("input#"+optionDBId).val();		//选项表主键，自增长
			var optiones1 = ""; //选项内容
		if(flag==2){ // 判斷題
			optiones1 = !($("#"+optionTextId).text()) ? " " : $("#"+optionTextId).text();
		}else{ // 選擇題
			optiones1 = !($("#"+optionTextId).html()) ? " " : $("#"+optionTextId).html();
		}
			var score1 = !($("input#"+pointId).val()) ? "0" : $("input#"+pointId).val();//分数
//			var isAnswer1 = score1=="0" ? false : true;//是否正确答案

			var pointCount = getFration(idNo); // 取得题目的选项分数和

		}catch(err){
			alert(err.message); // deBug
		}
		//alert("questionId1: "+questionId1+"\n optionId1: "+optionId1+"\n optiones1: "+optiones1+"\n score1: "+score1);
//	alert(optionId1 );
		// 更新數據庫中的option記錄
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateOption",
			data: {
				id: optionId1,		//选项表主键，自增长
		 		//isAnswer: isAnswer1,//是否正确答案
		 		optiones: optiones1,//选项内容
		 		questionId: questionId1,// 所在題目的DB中對應的Id
		 		score: score1,		//分数

		 		scoreNum: pointCount// 题目分数
			},
			success: function(){
				showMessage(Number(flag),"选项已更新","ok");
	      	},
	      	error: function(){
	    	 	showMessage(Number(flag),"错误","err");
	      	}
	    });

	}

/** 更新单选题选项正确答案选项分数 */
function updateOption_score(pointId,optionId,id,radio){
	showMessage(1,"选项更新中","ok");
	// 更新Option中分数和正确答案记录
	$.ajax({
		type: "POST",
		url: "/EntryQuestionsAction_updateOption_score",
		data: {
			// questionId : $("#singleChooseDBId"+id).val(), // 选项所属题目的隐藏域中Id
			optionId :  $("#"+optionId).val(), // 选项表主键，自增长
			score : $("#"+pointId).val(), // 选项分数
			optionId_temp : !($("#optionDBId_temp"+id).val()) ? "0" : $("#optionDBId_temp"+id).val() // 上一次操作选项的Id
		},
		success: function(){
			showMessage(1,"选项已更新","ok");
			$("#optionDBId_temp"+id).val($("#"+optionId).val()); // 存储本次操作选项的Id
			$(radio).val("1"); // 设置val值作为radio是否被点击的flag
      	},
      	error: function(){
    	 	showMessage(1,"错误","err");
      	}
    });
}

/** 更新判断题正确答案选项分数 */
function updateOption_score_TF(optId,point,optId_temp){
	showMessage(2,"选项更新中","ok");
	// 更新Option中分数和正确答案记录
	$.ajax({
		type: "POST",
		url: "/EntryQuestionsAction_updateOption_score",
		data: {
			// questionId : $("#singleChooseDBId"+id).val(), // 选项所属题目的隐藏域中Id
			optionId :  optId, // 选项表主键，自增长
			score : point, // 选项分数
			optionId_temp : optId_temp // 上一次操作选项的Id
		},
		success: function(){
			showMessage(2,"选项已更新","ok");
			$("#optionDBId_temp"+id).val($("#"+optionId).val()); // 存储本次操作选项的Id
      	},
      	error: function(){
    	 	showMessage(2,"错误","err");
      	}
    });
}

/** 更新单选题选项正确答案选项分数 */
function updateOption_score_Multiple(pointId,optionId){
	showMessage(3,"选项更新中","ok");

	var optionId = $("#"+optionId).val();
	var score = ($("#"+pointId).val()=="0" || $("#"+pointId).val()=="") ? "0" : $("#"+pointId).val();
	var isAnswer = score=="0" ? "false" : "true";

	// 更新选中选项是否为题目正确答案
	$.ajax({ url: "/EntryQuestionsAction_setOptionAnswer_Multiple/"+optionId+"/"+score+"/"+isAnswer,
		success: function(){
			showMessage(3,"选项已更新","ok");
      	},
      	error: function(){
      		showMessage(3,"错误","err");
      	}
	});
}

	/* show message */
function showMessage(type,info,msgType){
	if(msgType=="err"){
		$("#test_011").css("color","brown");
	}else{
		$("#test_011").css("color","#A3A3A3");
	}
	switch(type)
	 {
		case 0://单选题
			$1("test_011").innerHTML = info + "...(新选项)";
			break;
		case 1:
			$1("test_011").innerHTML = info + "...(单项选择)";
			break;
		case 2:
			$1("test_011").innerHTML = info + "...(判断)";
			break;
		case 3:
			$1("test_011").innerHTML = info + "...(多项选择)";
			break;
		case 4:
			$1("test_011").innerHTML = info + "...(论述)";
			break;
		case 5:
			$1("test_011").innerHTML = info + "...(简答)";
			break;
		case 6:
			$1("test_011").innerHTML = info + "...(便签)";
			break;
		case 7:
			$1("test_011").innerHTML = info + "...(填空)";
			break;
		case 8:
			$1("test_011").innerHTML = info + "...(阅读理解)";
			break;
		case 100:
			$1("test_011").innerHTML = info + "...(试卷)";
			break;
		case 101:
			$1("test_011").innerHTML = info + "...(pdf)";
			break;
		default:
			break;
	}
	$1("test_011").innerHTML = $1("test_011").innerHTML + getCurrentTime();
//	if(type == 0){
// 		$1("test_011").innerHTML = info + "...(新选项)";
//		}else if(type == 1){
// 		$1("test_011").innerHTML = info + "...(单项选择)";
//		}else if(type == 2){
//			$1("test_011").innerHTML = info + "...(判断)";
//		}else if(type == 3){
//			$1("test_011").innerHTML = info + "...(多项选择)";
//		}else if(type == 4){
//			$1("test_011").innerHTML = info + "...(论述)";
//		}else if(type == 5){
//			$1("test_011").innerHTML = info + "...(简答)";
//		}else if(type == 6){
//			$1("test_011").innerHTML = info + "...(便签)";
//		}else if(type == 7){
//			$1("test_011").innerHTML = info + "...(填空)";
//		}else if(type == 8){
//			$1("test_011").innerHTML = info + "...(阅读理解)";
//		}else if(type == 100){
//			$1("test_011").innerHTML = info + "...(试卷)";
//		}
	};
/******  shortAnswer  ******/
/* add shortAnswer */
	function addShortAnswer_DB(idNo){
		showMessage(5,"增加中","ok"); // show message
		$.ajax({ url: "/EntryQuestionsAction_addShortAnswer/" +$("#examinationPaperId").val()+"/05", success: function(msg){
			$("input#shortAnswerDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目
			$("input#optionDBId_shortAnswer"+idNo).val(msg.optionId); // 绑定数据库增加的选项id到页面选项D
			showMessage(5,"已增加","ok");
	      },error: function(){
	    	 showMessage(5,"错误","err");
	      }});
	}
	/* update ShortAnswer */
	function updateShortAnswer(idNo){
		saveCursor(idNo);
		showMessage(5,"更新中","ok");
		try{
			var questionId1 = $("input#shortAnswerDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();				//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = !($("div#comment"+idNo).text()) ? " " : $("div#comment"+idNo).text();	//题目解析
			var description1 = !($("div#description"+idNo).text()) ? " " : $("div#description"+idNo).text();//题目描述
			var difficulty1 =!($("input#difficulty"+idNo).val()) ? "0" : $("input#difficulty"+idNo).val();	//难度级别
			// var fration = "count";		//分数
			var kind1="05";
			//var mustanswer1=$("#required_flg_"+idNo).val();
			var exam_id1= $("#examinationPaperId").val();
			var tags1 = $("#tag"+idNo).val();
			//alert("题目id:" +questionId1 + "\n题号：" + questionNo1 + "\n题目解析：" + comment1 + "\n题目描述：" + description1 + "\n难度级别：" + difficulty1 + "\n题目内容：" + examination1);
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateQuestion",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,	//难度级别
		 		//mustanswer:mustanswer1,
		 		kind:kind1,
		 		exam_id:exam_id1,
		 		tagArray:tags1
			},
			success: function(){
				showMessage(5,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(5,"错误","err");
	      	}
	    });
	}

	/* te note*/
	function deleteShortAnswer(idNo){
	showMessage(5,"删除中","ok");
		// 取得數據庫中題目的Id
	var questionId = $("input#shortAnswerDBId"+idNo).val();
	// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(5,"已删除","ok");
	      },error: function(){
	    	 showMessage(5,"错误","err");
	      }});
	}
	/* update option for shortanswer */
	function updateOption_forShortAnswer(optionDBId,optionTextId,pointId,shortAnswerDBId,idNo){
		saveOptionCursor(optionTextId);
	// optionDBId： 頁面隱藏域中存放的DB中對應的optionId；
	// optionTextId： 頁面中選項text內容的id；
	// pointId: 頁面中選項分數輸入框的id；
	// idNo： 頁面中自增長的domid；
	// singleChooseDBId:頁面隱藏域中存儲的選項所屬題目的DB中對應questionId；
		showMessage(5,"选项更新中","ok");
		//alert(optionDBId);
		try{
			var questionId1 = $("input#"+shortAnswerDBId).val(); // 選項所屬題目的id
			//alert(questionId1);
		var optionId1 =  $("input#"+optionDBId).val();		//选项表主键，自增长
		//alert(optionId1);
			var optiones1 =  !($("div#"+optionTextId).html()) ? " " : $("div#"+optionTextId).html();//选项内容
			//alert(optiones1);
			var score1 = !($("input#"+pointId).val()) ? "0" : $("input#"+pointId).val();//分数
			var isAnswer1 = score1=="0" ? false : true;//是否正确答案

			var pointCount = getFration(idNo); // 取得题目的选项分数和

			//alert("題目id:" + questionId + "\n選項id:" + optionId + "\n選項內容：" + optiones + "\n選項分數：" + score);
		}catch(err){
			alert(err.message); // deBug
		}
		// 更新數據庫中的option記錄
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateOption",
			data: {
				id: optionId1,		//选项表主键，自增长
		 		isAnswer: isAnswer1,//是否正确答案
		 		optiones: optiones1,//选项内容
		 		questionId: questionId1,// 所在題目的DB中對應的Id
		 		score: score1,		//分数

		 		scoreNum: pointCount// 题目分数
			},
			success: function(){
				showMessage(5,"选项已更新","ok");
	      	},
	      	error: function(){
	    	 	showMessage(5,"错误","err");
	      	}
	    });
	}
	
	function updatePoint_forShortAnswer(optionDBId,optionTextId,pointId,shortAnswerDBId,idNo){
		//saveOptionCursor(optionTextId);
	// optionDBId： 頁面隱藏域中存放的DB中對應的optionId；
	// optionTextId： 頁面中選項text內容的id；
	// pointId: 頁面中選項分數輸入框的id；
	// idNo： 頁面中自增長的domid；
	// singleChooseDBId:頁面隱藏域中存儲的選項所屬題目的DB中對應questionId；
		showMessage(5,"选项更新中","ok");
		//alert(optionDBId);
		try{
			var questionId1 = $("input#"+shortAnswerDBId).val(); // 選項所屬題目的id
			//alert(questionId1);
		var optionId1 =  $("input#"+optionDBId).val();		//选项表主键，自增长
		//alert(optionId1);
			var optiones1 =  !($("div#"+optionTextId).html()) ? " " : $("div#"+optionTextId).html();//选项内容
			//alert(optiones1);
			var score1 = !($("input#"+pointId).val()) ? "0" : $("input#"+pointId).val();//分数
			var isAnswer1 = score1=="0" ? false : true;//是否正确答案

			var pointCount = getFration(idNo); // 取得题目的选项分数和

			//alert("題目id:" + questionId + "\n選項id:" + optionId + "\n選項內容：" + optiones + "\n選項分數：" + score);
		}catch(err){
			alert(err.message); // deBug
		}
		// 更新數據庫中的option記錄
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateOption",
			data: {
				id: optionId1,		//选项表主键，自增长
		 		isAnswer: isAnswer1,//是否正确答案
		 		optiones: optiones1,//选项内容
		 		questionId: questionId1,// 所在題目的DB中對應的Id
		 		score: score1,		//分数

		 		scoreNum: pointCount// 题目分数
			},
			success: function(){
				showMessage(5,"选项已更新","ok");
	      	},
	      	error: function(){
	    	 	showMessage(5,"错误","err");
	      	}
	    });
	}
	/**** essay ****/
	/* add essay */
	function addEssay_DB(idNo){
			showMessage(4,"增加中","ok"); // show message
			//alert($("#examinationPaperId").val());
		$.ajax({ url: "/EntryQuestionsAction_addShortAnswer/" +$("#examinationPaperId").val()+"/04", success: function(msg){
			$("input#essayDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目
			$("input#optionDBId_essay"+idNo).val(msg.optionId); // 绑定数据库增加的选项id到页面选项D
			showMessage(4,"已增加","ok");
	      },error: function(){
	    	 showMessage(4,"错误","err");
	      }});
	}

	/* update essay */
	function updateEssay(idNo){

		showMessage(4,"更新中","ok");
		try{
			var questionId1 = $("input#essayDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();				//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = !($("div#comment"+idNo).text()) ? " " : $("div#comment"+idNo).text();	//题目解析
			var description1 = !($("div#description"+idNo).text()) ? " " : $("div#description"+idNo).text();//题目描述
			var difficulty1 =!($("input#difficulty"+idNo).val()) ? "0" : $("input#difficulty"+idNo).val();	//难度级别
			// var fration = "count";		//分数
			var kind1="04";
			//var mustanswer1=$("#required_flg_"+idNo).val();
			var exam_id1= $("#examinationPaperId").val();
			var tags1 = $("#tag"+idNo).val();
			//alert(tags1);
			//alert("题目id:" +questionId1 + "\n题号：" + questionNo1 + "\n题目解析：" + comment1 + "\n题目描述：" + description1 + "\n难度级别：" + difficulty1 + "\n题目内容：" + examination1);
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateQuestion",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,	//难度级别
		 		//mustanswer:mustanswer1,
		 		kind:kind1,
		 		exam_id:exam_id1,
		 		tagArray:tags1
			},
			success: function(){
				showMessage(4,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(4,"错误","err");
	      	}
	    });
	}

	/* delete essay*/
	function deleteEssay(idNo){
	showMessage(4,"删除中","ok");
		// 取得數據庫中題目的Id
	var questionId = $("input#essayDBId"+idNo).val();
	// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
			showMessage(4,"已删除","ok");
	      },error: function(){
	    	 showMessage(4,"错误","err");
	      }});
	}

	/* update option for essay */
	function updateOption_forEssay(optionDBId,optionTextId,pointId,singleChooseDBId,idNo){
	// optionDBId： 頁面隱藏域中存放的DB中對應的optionId；
	// optionTextId： 頁面中選項text內容的id；
	// pointId: 頁面中選項分數輸入框的id；
	// idNo： 頁面中自增長的domid；
	// singleChooseDBId:頁面隱藏域中存儲的選項所屬題目的DB中對應questionId；
		showMessage(4,"选项更新中","ok");
		//alert(optionDBId);
		try{
			var questionId1 = $("input#"+singleChooseDBId).val(); // 選項所屬題目的id
			var optionId1 =  $("input#"+optionDBId).val();		//选项表主键，自增长
			var optiones1 =  !($("#"+optionTextId).val()) ? " " : $("#"+optionTextId).val();//选项内容
			var score1 = !($("input#"+pointId).val()) ? "0" : $("input#"+pointId).val();//分数
			var isAnswer1 = true;//是否正确答案

			var pointCount = getFration(idNo); // 取得题目的选项分数和

		}catch(err){
			alert(err.message); // deBug
		}
		// 更新數據庫中的option記錄
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateOption",
			data: {
				id: optionId1,		//选项表主键，自增长
		 		isAnswer: isAnswer1,//是否正确答案
		 		optiones: optiones1,//选项内容
		 		questionId: questionId1,// 所在題目的DB中對應的Id
		 		score: score1,		//分数

		 		scoreNum: pointCount// 题目分数
			},
			success: function(){
				showMessage(4,"选项已更新","ok");
	      	},
	      	error: function(){
	    	 	showMessage(4,"错误","err");
	      	}
	    });

	}

	/** 增加填空题（DB） */
	function addFill_DB(idNo){
		showMessage(7,"增加中","ok"); // show message
	$.ajax({ url: "/EntryQuestionsAction_addNote/" +$("#examinationPaperId").val()+"/07", success: function(msg){
		$("input#fillDBId"+idNo).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目
			showMessage(7,"已增加","ok");
      },error: function(){
    	  	showMessage(7,"错误","err");
      }});
	}

	/** 删除填空题（DB） */
	function deleteFill(idNo){
		showMessage(7,"删除中","ok");
	var questionId = $("input#fillDBId"+idNo).val();// 取得數據庫中題目的Id
		// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deleteQuestion/"+questionId, success: function(){
				showMessage(7,"已删除","ok");
	      },error: function(){
	    	  	showMessage(7,"错误","err");
	      }});
	}

	/** 更新填空题（DB） */
	function updateFill(idNo){
		saveCursor(idNo);
		showMessage(7,"更新中","ok");
		try{
			var questionId1 = $("input#fillDBId"+idNo).val();	//题目id
			var questionNo1 = $("#questionNo"+idNo).text();		//题号
			var examination1 = !($("div#text"+idNo).html()) ? " " : $("div#text"+idNo).html();	//题目内容
			// var question = Question;						//上级题目
			var comment1 = !($("div#comment"+idNo).text()) ? " " : $("div#comment"+idNo).text();	//题目解析
			var description1 = !($("div#description"+idNo).text()) ? " " : $("div#description"+idNo).text();//题目描述
			var difficulty1 =!($("input#difficulty"+idNo).val()) ? "0" : $("input#difficulty"+idNo).val();	//难度级别
			var score = !($("#pointText_fill"+idNo).val()) ? "0" : $("#pointText_fill"+idNo).val(); // 每空分数
			// var fration = "count";		//分数
			var kind1="07";					//填空题
			//var mustanswer1=$("#required_flg_"+idNo).val();
			var exam_id1= $("#examinationPaperId").val();
			var tags1 = $("#tag"+idNo).val();
			//alert(tags1);
		//alert("题目id:" +questionId1 + "\n题号：" + questionNo1 + "\n题目解析：" + comment1 + "\n题目描述：" + description1 + "\n难度级别：" + difficulty1 + "\n题目内容：" + examination1);
		} catch(err) {
			alert(err.message);// deBug
		}
		// 更新數據庫中單向選擇的數據
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateQuestion",
			data: {
		 		id: questionId1,			//题目id
		 		questionNo: questionNo1, 	//题号
		 		examination: examination1,	//题目内容
		 		comment: comment1,			//题目解析
		 		description: description1,	//题目描述
		 		difficulty: difficulty1,	//难度级别
		 		//mustanswer:mustanswer1,
		 		kind:kind1,
		 		exam_id:exam_id1,
		 		tagArray:tags1,
		 		score:score 				// 每空分数
			},
			success: function(){
				showMessage(7,"已更新","ok");
	      	},
	      	error: function(){
	     		showMessage(7,"错误","err");
	      	}
	    });
	}

	/** 增加填空题的填空区域（DB） */
	//	function addFillSpace(idNo,valNo){// idNo: 页面中的domid; valNo: 填空sapce的内容的spaceJun数值
//			showMessage(7,"选项增加中","ok");
//		var questionId = $("input#fillDBId"+idNo).val();// 所属题目的DBId
//		var spaceOpt = !($("input#space"+valNo).val()) ? "MYRHGZDBJ123" : $("input#space"+valNo).val();// 填空题space的内容
//		var score = !($("#pointText_fill"+idNo).val()) ? "0" : $("#pointText_fill"+idNo).val(); // 每空分数
//		var spaces = $("#text"+idNo+" .space"); // 取得填空中选有space元素
//		var spaceNum = spaces.length; // 取填空题中space总数
//		//alert(questionId+"#####"+spaceOpt+"#####");
//		$.ajax({ url: "/EntryQuestionsAction_addFillSpace/"+questionId+"/"+spaceOpt+"/"+score+"/"+spaceNum, success: function(msg){
//			$("input#fillSpaceDBId"+valNo).val(msg.optionId); // 绑定数据库增加的填空题space的id到页面新增的space
//			showMessage(7,"选项已增加","ok");
//		},error: function(){
//		    showMessage(7,"错误","err");
//		}});

//	}

	/** 删除填空题space在DB中数据 */
	//	function deleteFillSpace(idNo){
//		showMessage(7,"选项删除中","ok");
//		var optionId = $("input#fillSpaceDBId"+idNo).val(); // get optionId (delete from DB)
//
//		var score = !($("#pointText_fill"+idNo).val()) ? "0" : $("#pointText_fill"+idNo).val(); // 每空分数
//		var spaces = $("#text"+idNo+" .space"); // 取得填空中选有space元素
//		var spaceNum = spaces.length; // 取填空题中space总数
//
//		var fration = Number(score) * Number(spaceNum); // 题目总分(填空的个数X每空分值)
//
//		$.ajax({ url: "/EntryQuestionsAction_deleteOption/"+optionId+"/"+fration, success: function(){
//			showMessage(7,"选项已删除","ok");
//	      },error: function(){
//	    	 showMessage(7,"错误","err");
//	      }});

//	}

	/** 更新填空题space在DB中数据 */
	function updateFillSpace(valNo,idNo){// valNo: 填空space页面中的自增长spaceNum; idNo: 页面的domid
		showMessage(7,"选项更新中","ok");
			var questionId1 = $("#fillDBId"+idNo).val();	// 选项所属题目的DBId
			var optionId1 =  $("#fillSpaceDBId"+valNo).val();	//选项表主键，自增长
			var optiones1 = $("#space"+valNo).val();	//选项内容
			var score1 = !($("#pointText_fill"+idNo).val()) ? "0" : $("#pointText_fill"+idNo).val();	//分数 (默认2分)
			var isAnswer1 = score1=="0" ? false : true;//是否正确答案

		alert("questionId1: "+questionId1+"\n optionId1: "+optionId1+"\n optiones1: "+optiones1+"\n score1: "+score1+"\n isAnswer1: "+isAnswer1);
		// 更新數據庫中的option記錄
		$.ajax({
			type: "POST",
			url: "/EntryQuestionsAction_updateSpace",
			data: {
				id: optionId1,		//选项表主键，自增长
		 		isAnswer: isAnswer1,//是否正确答案
		 		optiones: optiones1,//选项内容
		 		questionId: questionId1,// 所在題目的DB中對應的Id
		 		score: score1		//分数
			},
			success: function(){
				showMessage(7,"选项已更新","ok");
	      	},
	      	error: function(){
	    	 	showMessage(7,"错误","err");
	      	}
	    });

	}

	/** 更新填空题中每空分数 */
	function updateSpacePoint(idNo){ // idNo: 页面中domid
		showMessage(7,"选项更新中","ok");
		var score = !($("#pointText_fill"+idNo).val()) ? "0" : $("#pointText_fill"+idNo).val();	//每空分数 (默认2分)
		var questionId = $("#fillDBId"+idNo).val();	// 选项所属题目的DBId
		var spaces = $("#text"+idNo+" .space"); // 取得填空中选有space元素
		var spaceNum = spaces.length;
		// alert(spaceNum);
		// 更新DB中填空分数
		//alert(score+"#####"+questionId);
		$.ajax({ url: "/EntryQuestionsAction_updateSpacePoint/"+questionId+"/"+score+"/"+spaceNum, success: function(){
				refreshFillPointNo(idNo);// 刷新填空题中空格统计数量
				showMessage(7,"选项已更新","ok");
	      },error: function(){
	    	  	showMessage(7,"错误","err");
	      }});

	}

	/** 更新题目类型 (switch转换便签和阅读理解题型) */
	function updateKind (id,kind){ // id:DBid的隐藏域id;	kind:题目类型
		$.ajax({ url: "/EntryQuestionsAction_updateKind/"+$("#"+id).val()+"/"+kind });
		// 页面抬头message
		var k = "";
		if(kind == "06"){
			k = "便签"
		}else{
			k = "阅读理解";
		}
		$1("test_011").innerHTML = "已更新题目类型为..."+k  + getCurrentTime();;
	}

	/** 更新examinationpaper表中update_date字段为系统时间 */
	// TODO 暂缓
	function updateLastDate(){
	    var paperId = $("#examinationPaperId").val(); // 所在试卷的DBid
	    $.ajax({ url: "/EntryQuestionsAction_updateDate/"+paperId,
	    		success: function(){
	    			alert("成功");
	    	    },error: function(e){
	    	    	alert("失败");
	    	    }
	    });
	    //alert(temp);
	}

	/** 删除整个试卷 */
	function deletePaper(papertype){
		var paperId = $("#examinationPaperId").val();// 取得所在页面试卷的DBid
		showMessage(100,"删除中","ok");
		// 刪除數據庫中對應id的題目
		$.ajax({ url: "/EntryQuestionsAction_deletePaper/"+paperId, success: function(){
			//showMessage(100,"已删除");
			//window.opener.location.reload();window.close();
			if(papertype=="4"){
				window.location.href = "/preClassWorklist";
			}else if(papertype=="2"){
				window.location.href = "/afterClassWorklist";
			}else{
				window.location.href = "/classWorklist";
			}
			
	      },error: function(){
	    	 //showMessage(100,"错误");
	      }});
	}
	
	/**取消答案**/
	function CancelOptionAnswer(optionId){
		
		$.ajax({ url: "/EntryQuestionsAction_cancelOptionAnswer/"+$("#"+optionId).val(), success: function(){
			showMessage(3,"选项已更新","ok");
	      },error: function(){
	    	 showMessage(100,"错误");
	      }});
	}
	function addFillSpace(parentQuestionId,domid,spaceId){
		//alert("题目Id:"+$("#"+parentQuestionId).val()+",domid:"+domid);
		$.ajax({ url: "/EntryQuestionsAction_addFill/"+$("#"+parentQuestionId).val(), success: function(msg){
			$("input#fillDBId"+domid).val(msg.questionId); // 绑定数据库增加的题目id到页面上的题目w
			$("input#optionId"+spaceId).val(msg.optionId);
			showMessage(7,"选项已更新","ok");
	      },error: function(){
	    	 showMessage(100,"错误");
	      }});
	}
	function update_space(optionId,domid){
		if($("#space"+domid).val().length>0){
			$.ajax({ url: "/EntryQuestionsAction_updateFillOption/"+$("#"+optionId).val()+"/"+$("#space"+domid).val(), success: function(){
				showMessage(7,"选项已更新","ok");
		      },error: function(){
		    	 showMessage(100,"错误");
		      }});
		}
		
	}
	function update_fillQuestion(domid){
		var examination=$("div#text"+domid).html();
		if(examination.length>0){
			var id=$("#fillDBId"+domid).val();
			$.ajax({
				type: "POST",
				url: "/EntryQuestionsAction_updateFillQuestion",
				data: {
			 		id:id,			//题目id
			 		examination:examination, 	//题目内容
				},
				success: function(){
					showMessage(7,"已更新","ok");
		      	},
		      	error: function(){
		     		showMessage(7,"错误","err");
		      	}
		    });
		}
	
	}
/***************2014-8-1 : ld-yueqh***********************/
/* 增加默认选项到数据库 */
function addOptionsInDB(DBId,idNo){// DBId:选项所在题目的DB中Id; idNo:页面自增长的domid
	$.ajax({ url: "/EntryQuestionsAction_addOptionsInDB/" +DBId,
			success: function(msg){
					$("input#optionDBId_a"+idNo).val(msg.optionId_A); // 绑定数据库增加的选项id到页面选项A
					$("input#optionDBId_b"+idNo).val(msg.optionId_B); // 绑定数据库增加的选项id到页面选项B
					$("input#optionDBId_c"+idNo).val(msg.optionId_C); // 绑定数据库增加的选项id到页面选项C
					$("input#optionDBId_d"+idNo).val(msg.optionId_D); // 绑定数据库增加的选项id到页面选项D
			}
	});
}
/****上传公式*******/

function uploadFormula(examId,str,cursorDivId,range,questionId,type){
	
  var obj = window.parent;
  this.element=obj.document.getElementById(cursorDivId);
  var start=range;
  var url;
    $.ajax({
		type: "POST",
		url: "/EntryQuestionsAction_uploadFormula",
		cache:false,
		async:false,
		ifModified:false,
		data: {
			examId: examId,			//试卷id
	 		img: str, 				//图片编码
	 		questionId:questionId,
	 		location:range,
	 		type:type,
		},
		success: function(data){
			if(data.error == 0){
				url=data.url;
				window.parent.document.getElementById(cursorDivId).focus();
			}
			
      	},
      	error: function(data){
      		alert("公式插入失败！");
      		window.parent.document.getElementById(cursorDivId).focus();
      	}
	 });
    return url;
}

