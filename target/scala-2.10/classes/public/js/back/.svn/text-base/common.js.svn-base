$(function () {
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
        $(".message-box").show();
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
    $(".main").height($(window).height() - 130);
    $(window).resize(function () {
        $(".main").height($(window).height() - 130);
    });
    
    $("#td_editcontent_first").height($(window).height() - 203);
    $(window).resize(function () {
        $("#td_editcontent_first").height($(window).height() - 203);
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