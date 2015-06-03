$(function () {
	init($("#PageIndex").val());
	var html="";
	$(".question_tr").each(function(){
		var question_id   = $(this).find(".question_item_1").val();//题目DB id
		var question_exam = $(this).find(".question_item_2").val();//题干
		var comment       = $(this).find(".question_item_3").val();//题目注解
		var description   = $(this).find(".question_item_4").val();//题目描述
		var kind          = $(this).find(".question_item_5").val();//题型
		var difficulty    = $(this).find(".question_item_6").val();//难度级别
		var mustanswer    = $(this).find(".question_item_7").val();//必答选答
	    html+='<div class="questioncontent"';
	    html+='<a  name="question_id"></a>'
		html+='	<div class="toolbar">';
		html+='		<input type="button" value="跳过此题" class="input-skip" />';
		html+='		<a href="#">';
		html+='			<img src="/assets/img/icon_fav.png" />';
		html+='		</a>';
		html+='		<a href="#">';
		html+='			<img src="/assets/img/icon_question.png" />';
		html+='		</a>';
		html+='	</div>';
		html+='	<h1>'+question_exam+'</h1>';
		html+=' <ul>';
		switch(kind) {
			case"01"://单选题
					$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
						html+='<li>';
						html+='	<input type="radio" onclick="addAnswer('+question_id+')" name="'+question_id+'" id="a1"  value="'+$(this).attr("id")+'" />'+$(this).find(".item_option").val();
						html+='</li>'
					})
				
			break;
			case "02":
				$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
					html+='<li>';
					html+='	<input type="radio" onclick="addAnswer('+question_id+')" name="'+question_id+'" id="a1"  value="'+$(this).attr("id")+'"/>'+$(this).find(".item_option").val();
					html+='</li>';
				})
			break;
			case "03":
				$(this).find(".question_item_n").find(".question_item_n_option").each(function(){
					html+='<li>';
					html+='	<input type="checkbox" onclick="addAnswer('+question_id+')" name="'+question_id+'" id="a1"  value="'+$(this).attr("id")+'"/>'+$(this).find(".item_option").val();
					html+='</li>';
				})
			break;
			case "04":
				html+='<li>';
				html+='<textarea rows="5" cols="110" id="text_'+question_id +'" onblur="addAnswer('+question_id+')"></textarea>';
				html+='</li>';
			break;
			case "05":
				html+='<li>';
				html+='<textarea rows="5" cols="110" id="text_'+question_id +'" onblur="addAnswer('+question_id+')"></textarea>';
				html+='</li>';
			break;
		}
		html+='</ul>'
			html+='<div class="footer">'+$(this).find(".item_score").val();
			html+='</div>'
			html+='</div>'
	})
	$("#question").html(html);
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

    $(".listitem .control").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    /**
    $(".listitem .btncol").click(function () {

        if ($(this).parents(".open").size() > 0) {
            $(this).parents(".listitem").removeClass("open");
        } else {
            $(".listitem").removeClass("open");
            $(this).parents(".listitem").addClass("open");
        }
    });

    var src1 = $("#item1").prop("src");
    $("#item1").hover(function () {
        $(this).prop("src","/assets/img/item1_active.png") ;
    }, function () {
        $(this).prop("src",src1);
    });
    var src2 = $("#item2").prop("src");
    $("#item2").hover(function () {
        $(this).prop("src", "/assets/img/item2_active.png");
    }, function () {
        $(this).prop("src", src2);
    });
    var src3 = $("#item3").prop("src");
    $("#item3").hover(function () {
        $(this).prop("src", "/assets/img/item3_active.png");
    }, function () {
        $(this).prop("src", src3);
    });

    $(".listcontent .listitems .listitem").hover(function () {
        $(this).find(".info").show();
    }, function () {
        $(this).find(".info").hide();
    });
    $("#dropdownbutton").click(function () {
        $("#dropdownmenu").toggle();
        return false;
    });
    */
    $("#student_main_body").click(function(event){
  	  var e = event || window.event;
        var elem = e.srcElement||e.target;
        while(elem)
        {
            if(elem.id == "dropdownmenu")
            {
                    return;
            }else if(elem.id == "student_main_body"){
          	  $("#dropdownmenu").hide();
//          	  alert(99);
          	  return true;
            }
            elem = elem.parentNode;
        }
  });
  ////
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
//    $("#pickbar").click(function () {
//        if ($("#scorecard").hasClass("card-in")) {
//            $("#scorecard").removeClass("card-in");
//            $("#scorecard").animate({ right: "+=200" }, 400);
//        } else {
//            $("#scorecard").addClass("card-in");
//            $("#scorecard").animate({ right: "-=200" }, 400);
//        }
//    })
    //page autosize
    $(".main").height($(window).height() - 100);
    $(window).resize(function () {
        $(".main").height($(window).height() - 100);
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
})

/** "用户设定"弹窗 */
function personalSettings() {
	if ($("#personalSettings").css("display") == "none") {
		$("#personalSettings").show();
		$("#examiSettings").hide();

		$("#personal_tab").toggleClass("active");
		$("#exami_tab").toggleClass("active");
	}
	
}
function examiSettings() {
	if ($("#examiSettings").css("display") == "none") {
		$("#examiSettings").show();
		$("#personalSettings").hide();

		$("#personal_tab").toggleClass("active");
		$("#exami_tab").toggleClass("active");
	}
	
}

/** 答题页面倒计时 */
var countTime = Number($("#countTime").text()); // 取得总计答题时间 (分钟)
var countSec = 120 * 60; // 总计秒数
function startCountDown() {
	$("#endtime").text(time_format(countSec));
	t = setTimeout('startCountDown()', 1000); // 1秒后执行时间刷新
	var questionNum=$("#pagecount").val();
	var performance=$("#performance").val();
	$("#bar1").css("width",605/questionNum*performance);

	$("#per").attr("data-content",'<b>已答题:</b>'+performance+'</br><b>未作答:</b>'+(questionNum-performance));
	countSec--;

}
function time_format(s) {
	var t;
	if (s > -1) {
		hour = Math.floor(s / 3600);
		min = Math.floor(s / 60) % 60;
		sec = s % 60;
		day = parseInt(hour / 24);
		if (day > 0) {
			hour = hour - 24 * day;
			t = day + "天," + hour + ":";
		} else
			t = hour + ":";

		if (min < 10) {
			t += "0";
		}
		t += min + ":";
		if (sec < 10) {
			t += "0";
		}
		t += sec;
	} else {
		t = "0:00:0x";
	}
	return t;
}
