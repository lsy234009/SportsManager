/**
 * 
 */
function showGroup(){
	   var str;
       var index=1;
       var num=1;
   	$('#bookgroup_div').text(" ");
      
	$.ajax({
	        type:"get",
	        url:"/findBookGroupAll",
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(group){
	        	str='<table style="margin-left:20px;"><tr>';
	        	for(var i=0;i<group.group.length;i++){
	        		if(group.group[i].bookgroup==null){
	        			str+='<tr><td style="background-color:whiteSmoke">'+group.group[i].name+'</td></tr><td colspan="5"><div style="height:1px;width:100%; background:#EEEEEE;overflow:hidden;"></div></td>'
	        			
	        		}else{
	        			var count=(group.group[i].bookgroup.length);
	        			if(count>=4){
	        				count=count/4;
	        				count=Math.ceil(count);
	        			//	alert(count);
	        				str+='<tr><td rowspan="'+count+'" id="group_1" style="background-color:whiteSmoke">'+group.group[i].name+'</td>'
	        			}
	        			else{
	        				str+='<tr><td id="group_1" style="background-color:whiteSmoke">'+group.group[i].name+'</td>'
	        			}
	        			
	        			for(var k=0;k<group.group[i].bookgroup.length;k++){
	        				//alert("index--->"+index+",num---->"+num+",group--->"+group.group[i].bookgroup.length);
	        				switch(index){
	        				case 1:
	        					if(num==group.group[i].bookgroup.length){
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td></tr><td colspan="5"><div style="height:1px;width:100%; background:#EEEEEE;overflow:hidden;"></div></td>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 2:
	        					if(num==group.group[i].bookgroup.length){
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td></tr><td colspan="5"><div style="height:1px;width:100%; background:#EEEEEE;overflow:hidden;"></div></td>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 3:
	        					if(num==group.group[i].bookgroup.length){
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td></tr><td colspan="5"><div style="height:1px;width:100%; background:#EEEEEE;overflow:hidden;"></div></td>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 4:
	        					if(num==group.group[i].bookgroup.length){
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td></tr><td colspan="5"><div style="height:1px;width:100%; background:#EEEEEE;overflow:hidden;"></div></td>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+group.group[i].bookgroup[k].name+'</td></tr>';
	        						index=1;
	        						num++;
	        					}
	        					break;
	        				}
	        			}
	        		}
	        	}
	        	str+="</tr></table>";
	        	
	        	$('#bookgroup_div').append(str);
	        	str="";
	        }
	    });
	$( "td" ).click(function() {
		if(this.id!="group_1"){
			$("#bgvalue").text($(this).text());
			$("#groupname").val($(this).text());
		
			$('#m1').modal('hide');
		}
	});
}
