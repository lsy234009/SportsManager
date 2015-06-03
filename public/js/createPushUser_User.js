/**
 * 
 */
function showUser(){
	   var str;
       var index=1;
       var num=1;
   	$('#users_div').text(" ");
      
	$.ajax({
	        type:"get",
	        url:"/findUserAll",
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(users){
	        	str='<table style="margin-left:20px;"><tr>';
	        	for(var i=0;i<users.users.length;i++){
	        		if(users.users[i].users==null){
	        			str+='<tr><td style="background-color:whiteSmoke">'+users.users[i].name+'</td></tr>'
	        			
	        		}else{
	        			var count=(users.users[i].users.length);
	        			if(count>=4){
	        				count=count/4;
	        				count=Math.ceil(count);
	        			//	alert(count);
	        				str+='<tr><td rowspan="'+count+'" id="group_1" style="background-color:whiteSmoke">'+users.users[i].name+'</td>'
	        			}
	        			else{
	        				str+='<tr><td id="group_1" style="background-color:whiteSmoke">'+users.users[i].name+'</td>'
	        			}
	        			
	        			for(var k=0;k<users.users[i].users.length;k++){
	        				//alert("index--->"+index+",num---->"+num+",users--->"+users.users[i].users.length);
	        				switch(index){
	        				case 1:
	        					if(num==users.users[i].users.length){
	        						str+='<td>'+users.users[i].users[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+users.users[i].users[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 2:
	        					if(num==users.users[i].users.length){
	        						str+='<td>'+users.users[i].users[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+users.users[i].users[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 3:
	        					if(num==users.users[i].users.length){
	        						str+='<td>'+users.users[i].users[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+users.users[i].users[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 4:
	        					if(num==users.users[i].users.length){
	        						str+='<td>'+users.users[i].users[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+users.users[i].users[k].name+'</td></tr>';
	        						index=1;
	        						num++;
	        					}
	        					break;
	        				}
	        			}
	        		}
	        	}
	        	str+="</tr></table>";
	        	
	        	$('#users_div').append(str);
	        	str="";
	        }
	    });
	$( "td" ).click(function() {
		if(this.id!="group_1"){
			$("#uservalue").text($(this).text());
			$("#username").val($(this).text());
		
			$('#m2').modal('hide');
		}
	});
}
