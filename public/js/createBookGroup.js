/**
 * 
 */
function showGroup(){
	   var str;
       var index=0;
   	$('#bookgroup_div').text(" ");
      
	$.ajax({
	        type:"get",
	        url:"/findBookGroup",
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(group){
	        	str="<table><tr>";
	        	for(var i=0;i<group.group.length;i++){
	        		if(index<4){
	        		str+='<td>'+group.group[i].name+'</td>';
	        		index++;
	        		}
	        		else{
	        			str+='</tr><tr><td>'+group.group[i].name+'</td>';
	        			index=1;
	        		}
	        	}
	        	str+="</tr></table>";
	        	$('#bookgroup_div').append(str);
	        	str="";
	        }
	    });
	$( "td" ).click(function() {
		$("#bgvalue").text($(this).text());
		$("#parentGroup").val($(this).text());
		$('#m1').modal('hide');
	});
}
