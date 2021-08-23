var a = [{
        id: "TV123",
        name: "TV Sony",
        price: 1000,
        image: "img1.jpg",
        des: "<p>Brand:Nhat<br>Den led<br></p>"
    },
    {
        id: "De123",
        name: "Den Ngu",
        price: 200,
        image: "img2.jpg",
        des: "<p>Xuat xu:Han Quoc<br>Den led 2w<br></p>"
    }
];

//hàm này để lấy từng sp đặt lên trang sanpham.html
function load_product(id) {
    // body... 
    var tag = document.getElementById(id);
    for (var i = 0; i < a.length; i++) {
        //tạo thẻ img trống 
        var anh = document.createElement("img");
        anh.src = a[i].image;
        anh.setAttribute("class", "pro");
        anh.id = a[i].id;
        anh.addEventListener("click", getDetail);

        var p = document.createElement("p");
        p.innerHTML = a[i].name;

        var p2 = document.createElement("p");
        p2.innerHTML = "Price:" + a[i].price + "$";

        var divcon = document.createElement("div");
        divcon.appendChild(anh);
        divcon.appendChild(p);
        divcon.appendChild(p2);
        tag.appendChild(divcon);
    }
}
//hàm này để tìm vị trí khi có mã
function findproduct(ma) {
    for (var i = 0; i < a.length; i++) {
        if (a[i].id == ma)
            return i;
    }
    return -1;
}
//hàm này để mở trang detail html
function getDetail() {
    var ma = event.target.id; //lay ma sp can tim
    var kq = findproduct(ma);
    if (kq != -1) {
        var anh = document.getElementById("image");
        anh.src = a[kq].image;
        var s1 = document.getElementById("id");
        s1.innerHTML = "Id: " + a[kq].id;

        var s2 = document.getElementById("name");
        s2.innerHTML = "name: " + a[kq].name;

        var s3 = document.getElementById("price");
        s3.innerHTML = "price: " + a[kq].price;

        var s4 = document.getElementById("description");
        s4.innerHTML = "Description: " + a[kq].des;

        document.getElementById("detail").style.display = "block";
    }
}

function hide_detail() {
    // body... 
    document.getElementById("detail").style.display = "none";
}

function khoitaogiohang() {
    var c = window.localStorage.getItem("count");
    if (c == null || c == "undefined") {
        window.localStorage.setItem("count", 0)
    }
}

//check xem mã này đã có trong localStorage hay chưa
function check(ma){
    for (var i = 0; i < window.localStorage.length; i++) {
        //đưa vào vị trí trả về key, mà key là mã sp đã add vào tước đó
            var key = window.localStorage.key(i);
            if(key!=null && key!="undefined" && key==ma)
                return i;
    }
    return -1;
}
function addProduct(id) {
    // body... 
    var the = document.getElementById(id);
    var ma = the.innerHTML;
    var tam = ma.split(": ");
    ma=tam[1];
    //check xem mã này đã có trong localStorage hay chưa
    var kq=check(ma);
    //chưa có
    if(kq==-1){
        window.localStorage.setItem(ma,1);
        var c = window.localStorage.getItem("count");
        c++;
        window.localStorage.setItem("count",c);
        window.alert("Added!!");
    }
    //có rồi
    else{
        var v=window.localStorage.getItem(ma);
        v++;
        window.localStorage.setItem(ma,v);
        window.alert("Updated!!");
    }
}









function xemgiohang() {
    var sum=0;
    var s=document.getElementById("giohang");
    var tmp;
    tmp="<table><tr><th>Product</th><th>Your option</th> <th>Price</th></tr>";
    for (var i = 0; i < window.localStorage.length; i++) {
        var masp=window.localStorage.key(i);
        if (masp!=null) {
            var pos=findproduct(masp);
            if(pos!=-1){
                tmp=tmp+"<tr>";
                tmp=tmp+"<td><img src='"+a[pos].image+"'><br/>";
                tmp=tmp+"<p id='a'>"+a[pos].name+"<br/>"+a[pos].id+"<p></td>";
                tmp=tmp+"<td><input type='number' value='"+window.localStorage.getItem(masp)+"' min='1' max='10' onchange='update(this.value,\""+a[pos].id+"\")'></td>"
                tmp=tmp+"<td>"+a[pos].price+"<br><a href='#' onclick='removeProduct(\""+a[pos].id+"\")'>remove</a></td>";
                tmp=tmp+"</tr>";
                sum=sum+window.localStorage.getItem(masp)*a[pos].price;
            }
        }
    }//het for
    tmp=tmp+"</table>";
    tmp=tmp+"<p>Tong tien thanh toan:"+sum+"$</p>";
    //gắn tmp lên thẻ div co id ="gio hang";
    s.innerHTML=tmp;
}

function update (soluong,masp) {    
    //check xem ma sp co torng local hay k
    var t=check(masp);
    if(t!=-1){
        window.localStorage.setItem(masp,soluong);
        window.alert("Update!!!");
        xemgiohang();
    }
}

function removeProduct (masp) {
    // body... 
    var t=check(masp);
    if(t!=-1){
        var traloi=window.confirm("Are u Sure");
        if(traloi==true){
            window.localStorage.removeItem(masp);
            //cap nhat count
            var c=window.localStorage.getItem("count");
            c--;
            window.localStorage.setItem("count", c);
            window.alert("Removed");
            xemgiohang();
        }
    }
}


function checkout () {
    var t1=document.getElementById("t1");
    var t2=document.getElementById("t2");
    if(t1.value==""||t2.value=="")
        window.alert("Vui long nhap ten va dien thoai");
    else{
        window.localStorage.clear();
        window.alert("Thank you for your payment!");
        window.open("index.html");

    }


}