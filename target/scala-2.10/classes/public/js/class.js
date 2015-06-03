
	var str="";
		var teacherStr="";
		function add(){
		var stu=document.getElementById("stu").getElementsByTagName("li");
		var teacher=document.getElementById("te").getElementsByTagName("li");
		var tr=document.getElementById("cl").getElementsByTagName("li");
		var right_stu=document.getElementById("tr").getElementsByTagName("li");
		
		var flat=false;


		for(var i=0;i<stu.length;i++){
			var stu_flag=false;
			if(stu[i].style.backgroundColor=="#08c" || stu[i].style.backgroundColor=="rgb(0, 136, 204)" ){
				var text=stu[i].innerHTML;
				var id=stu[i].id;
				for(var j=0;j<right_stu.length;j++){
					if(id==right_stu[j].id){
						alert(text+"已存在不可以重复添加！");
						stu_flag=true;
						break;
					}
				}
				if(stu_flag){
					continue;
				}
				//stu[i].parentNode.removeChild(stu[i]);
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
				    document.getElementById("tr").insertBefore(li, document.getElementById("tr").firstChild)
				    //i--;
				}
       		}
		for(var i=0;i<teacher.length;i++){
				if(teacher[i].style.backgroundColor=="#08c" || teacher[i].style.backgroundColor=="rgb(0, 136, 204)" ){
					var text=teacher[i].innerHTML;
					var id=teacher[i].id;
					for(var k=0;k<tr.length;k++){
						if(tr[k].innerHTML==text){
							flat=true;
						}
					}
					if(flat){
						alert("该教师已存在不可以重复添加！")
						teacher[i].style.backgroundColor="" ;
						teacher[i].style.color="";
						break;
					}
					else{
						teacher[i].parentNode.removeChild(teacher[i]);
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
					    document.getElementById("cl").insertBefore(li, document.getElementById("cl").firstChild)
					}
					i--;

           		}
		}
			all();
	}
	function del(){
			var delstu=document.getElementById("cl").getElementsByTagName("li");
			var deltea=document.getElementById("tr").getElementsByTagName("li");
			var te=document.getElementById("te").getElementsByTagName("li");
			var s=false;
			for(var i=0;i<delstu.length;i++){
				if(delstu[i].style.backgroundColor=="#08c" || delstu[i].style.backgroundColor=="rgb(0, 136, 204)"){
					var text=delstu[i].innerHTML;
					var id=delstu[i].id;
					for(var j=0;j<te.length;j++){
						if(te[j].innerHTML==text){
							s=true;
						}
					}
					if(s){
						delstu[i].parentNode.removeChild(delstu[i]);
					}
					else{
						delstu[i].parentNode.removeChild(delstu[i]);
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
					    document.getElementById("te").insertBefore(li, document.getElementById("te").firstChild)
					}
					
					//str +=text+" ";
					i--;
					//add();
           		}
			}
				for(var i=0;i<deltea.length;i++){
					if(deltea[i].style.backgroundColor=="#08c" ||deltea[i].style.backgroundColor=="rgb(0, 136, 204)"){
						var text=deltea[i].innerHTML;
						var id=deltea[i].id;
						deltea[i].parentNode.removeChild(deltea[i]);
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
						//document.getElementById("st").insertBefore(li, document.getElementById("st").firstChild)
						//str +=text+" ";
						i--;
						//add();
           			}
			}
			all();
	}

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