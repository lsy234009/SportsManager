

function click_a(divDisplay)
{
    if(document.getElementById(divDisplay).style.display != "block")
    {
        document.getElementById(divDisplay).style.display = "block";
    }
    else
    {
        document.getElementById(divDisplay).style.display = "none";
    }
}

function add(){
		//获取所有以带班级标签
		var stu=document.getElementById("st").getElementsByTagName("li");
		var te=document.getElementById("te").getElementsByTagName("li");
		for(var i=0;i<stu.length;i++){
			if(stu[i].style.backgroundColor=="#08c" || stu[i].style.backgroundColor=="rgb(0, 136, 204)"){
				var text=stu[i].innerHTML;
				var id=stu[i].id
					stu[i].parentNode.removeChild(stu[i]);
				for(var n=0;n<te.length;n++){
					
					if(te[n].innerHTML==text){
						return ;
					}else{
						var li = document.createElement('li');
	           			li.innerHTML =text;
	           			li.id=id;
						li.onclick = function(){
							var c=$(this).css("backgroundColor")
							if(c=="#cff" || c=="rgb(204, 255, 255)"){
								$(this).css({backgroundColor: "#08c",color:"#FFF"})
							}
							if(c=="#08c" ||c=="rgb(0, 136, 204)"){
								$(this).css({backgroundColor: "",color:"" })
							}
	           			 }
					}
					
				}
					
				    document.getElementById("te").insertBefore(li, document.getElementById("te").firstChild);
				i--;
			}
			
		}
		all();
}
function del(){
	var te=document.getElementById("te").getElementsByTagName("li");
	var stu=document.getElementById("st").getElementsByTagName("li");
	var flag=false;
	for(var i=0;i<te.length;i++){
		if(te[i].style.backgroundColor=="#08c" ||te[i].style.backgroundColor=="rgb(0, 136, 204)"){
			var text=te[i].innerHTML;
			var id=te[i].id;
			for(var j=0;j<stu.length;j++){
				if(stu[j].innerHTML==text){
					flag=true;
				}
			}
			if(flag){
				alert("该班级已存在！");
				te[i].style.backgroundColor="";
				te[i].style.color="";
				break;
			}else{
				te[i].parentNode.removeChild(te[i]);
				var li = document.createElement('li');
	       		li.innerHTML =text;
	       		li.id=id;
				li.onclick = function(){
					var c=$(this).css("backgroundColor")
					if(c=="#cff" || c=="rgb(204, 255, 255)"){
						$(this).css({backgroundColor: "#08C",color:"#FFF"})
						
					}
					if(c=="#08c" ||c=="rgb(0, 136, 204)"){
						$(this).css({backgroundColor: "",color:"" })
					}
	       		}
			}
			    document.getElementById("st").insertBefore(li, document.getElementById("st").firstChild)
			i--;
		}
	}
	all();
}