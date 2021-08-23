function vidu2(){
	window.alert("yeu co lan 2");
}
function vidu3(){
	var a=5;
	var b=10.5;
	var c=true;
	var d="apple";
	var e=[1,2,3,4,5];
	var f=[id="1",name="Mai"];
	
	window.document.write("<br>Bien a co kieu: "+typeof(a));
	window.document.write("<br>Bien b co kieu: "+typeof(b));
	window.document.write("<br>Bien c co kieu: "+typeof(c));
	window.document.write("<br>Bien d co kieu: "+typeof(d));
	window.document.write("<br>Bien e co kieu: "+typeof(e));
	window.document.write("<br>Bien f co kieu: "+typeof(f));
	//test toan tu
	// if(a==="5"){
	// 	document.bgColor="red";
	// }
	// else 
	// 	document.bgColor="yellow";
 	// var kq=100/"yeulamco" /*"10"*/;
 	// window.alert("ket qua = "+kq);

 	//convert datatype
 	var kq=window.parseFloat("123.5");
 	window.alert("kq co kieu la:"+kq);
}



//on tap if else
function vidu4(){
	var color= window.prompt("nhap 1 mau"); //nhập một chuỗi
	// check color laà số hay là ký tự
	if(window.isNaN(color)==true) 
		if(color=="black"||color=="yellow"||color=="pink")
			window.document.bgColor=color;
		else
			window.alert("nhap khong dung");
}

function vidu5(){
	var traloi=window.confirm("cac em co hoc vi dam me khong");
	if(traloi==true)
		document.title="cho pass mon";
	if(traloi==false)
		document.title="rot nghe con";
}
function vidu6(){
	var tenhinh=window.prompt("nhap ten hinh:");
	document.write("<img src="+tenhinh+" width='100' height='100'/>");
}