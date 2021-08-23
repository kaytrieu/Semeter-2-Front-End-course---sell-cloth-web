window.onscroll = function() {scrollFunction()};


//toTop button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = 'block'
  } else {
    document.getElementById("toTop").style.display = 'none'
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  	var div= document.getElementById("firstRow");
  	div.style.marginTop = '150px';
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
  	var div= document.getElementById("secondRow");
  	div.style.transform = 'scale(1) rotate(5400deg)';
  }
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
  	var div= document.getElementById("thirdRow");
  	div.style.transform = 'translateX(0)';
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Slideshow
var myIndex = 0;
function changing() {
    var i;
    var x = document.getElementsByClassName("slide")
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(changing, 9000);    
}
//countdown 
var countDownDate = new Date("Apr 1, 2020 08:59:59").getTime()


var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % days) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("time").innerHTML = 
  days + "d " + hours + "h "
  + 
  minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "OPENED";
  }
}, 1000);


