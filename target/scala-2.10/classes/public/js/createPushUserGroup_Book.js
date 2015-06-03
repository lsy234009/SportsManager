/**
 * 
 */
function showBook(){
	   var str;
       var index=1;
       var num=1;
   	$('#books_div').text(" ");
      
	$.ajax({
	        type:"get",
	        url:"/findBookAll",
	        contentType:"application/json;charset=utf-8",
	        dataType:"json",
	        async:false,
	        ifModified:false,
	        cache:false,
	        success:function(books){
	        	str='<table style="margin-left:20px;"><tr>';
	        	for(var i=0;i<books.books.length;i++){
	        		if(books.books[i].books==null){
	        			str+='<tr><td style="background-color:whiteSmoke">'+books.books[i].name+'</td></tr>'
	        			
	        		}else{
	        			var count=(books.books[i].books.length);
	        			if(count>=4){
	        				count=count/4;
	        				count=Math.ceil(count);
	        			//	alert(count);
	        				str+='<tr><td rowspan="'+count+'" id="group_1" style="background-color:whiteSmoke">'+books.books[i].name+'</td>'
	        			}
	        			else{
	        				str+='<tr><td id="group_1" style="background-color:whiteSmoke">'+books.books[i].name+'</td>'
	        			}
	        			
	        			for(var k=0;k<books.books[i].books.length;k++){
	        				//alert("index--->"+index+",num---->"+num+",books--->"+books.books[i].books.length);
	        				switch(index){
	        				case 1:
	        					if(num==books.books[i].books.length){
	        						str+='<td>'+books.books[i].books[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+books.books[i].books[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 2:
	        					if(num==books.books[i].books.length){
	        						str+='<td>'+books.books[i].books[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+books.books[i].books[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 3:
	        					if(num==books.books[i].books.length){
	        						str+='<td>'+books.books[i].books[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+books.books[i].books[k].name+'</td>';
	        						index++;
	        						num++;
	        					}
	        					break;
	        				case 4:
	        					if(num==books.books[i].books.length){
	        						str+='<td>'+books.books[i].books[k].name+'</td></tr>';
	        						index=1;
	        						num=1;
	        					}else{
	        						str+='<td>'+books.books[i].books[k].name+'</td></tr>';
	        						index=1;
	        						num++;
	        					}
	        					break;
	        				}
	        			}
	        		}
	        	}
	        	str+="</tr></table>";
	        	
	        	$('#books_div').append(str);
	        	str="";
	        }
	    });
	$( "td" ).click(function() {
		if(this.id!="group_1"){
			$("#bookvalue").text($(this).text());
			$("#bookname").val($(this).text());
		
			$('#m1').modal('hide');
		}
	});
}
