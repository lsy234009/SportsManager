//called when ready; this section is only for ie
$.fn.extend({
	inputTip: function () {
		var _color = "#555";
		var _plaColor =  "#a3a3a3";
		var isUserEnter = false; 
		var placeholder = $(this).attr("placeholder");
		var thisEle = $(this);
		thisEle.css("color", _plaColor).val("");
		if (thisEle.val() == "") {
			thisEle.val(placeholder);
		}
		thisEle.focus(function () {
			if (thisEle.val() == placeholder &&!isUserEnter) {
				thisEle.css("color", _color).val("");
			}
		});
		thisEle.blur(function () {
			if (thisEle.val() == "") {
				thisEle.css("color", _plaColor).val(placeholder);
				isUserEnter = false;
			}
		});
		thisEle.keyup(function () {
			if (thisEle.val() != placeholder) {
				isUserEnter = true;
			}
		});
	}
   }
);




