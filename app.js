
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

 const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}



 function iWantPost() {
        document.getElementById("post1").style.display = "block";
    }

function headPortrait() {
  
    var head = new Array("user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg");
    var n = parseInt(Math.random() * 4);
    return head[n];
}

function post() {
    document.getElementById("post1").style.display = "none";
    var ul = document.getElementById("ul-lists");
    var li = document.createElement("li");
    var div = document.createElement("div");
    var img = document.createElement("img");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");
    var span = document.createElement("span");

    ul.appendChild(li);
    li.className = ".bbs section ul li";

    li.appendChild(div);
    div.className = ".bbs section ul li div";

    div.appendChild(img);
    img.className = ".bbs section ul li div img";
    img.src = "img/" + headPortrait();

    li.appendChild(h1);
    h1.className = ".bbs section ul li h1";
    h1.innerHTML = document.getElementById("title").value;

    li.appendChild(p);
    p.className = ".bbs section ul li p";
    p.innerHTML =  document.getElementsByTagName("select")[0].value+"&nbsp;&nbsp;&nbsp;&nbsp;";

 
    p.appendChild(span);
    span.className = ".bbs section ul li p span";

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    span.innerHTML =  year + "-" + month + "-" + day + "&nbsp;" + hour + ":" + minute + ":" + second;

    document.getElementById("title").value = "";
    document.getElementsByTagName("select")[0].value = "";
    ul.insertBefore(li, ul.firstElementChild);
}

var items = document.querySelectorAll(".item");
var points = document.querySelectorAll(".point")
var all = document.querySelector(".wrap")
var index = 0;
var time = 0;


var clearActive = function () {
    for (i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
    for (j = 0; j < points.length; j++) {
        points[j].className = 'point';
    }
}

var goIndex = function () {
    clearActive();
    items[index].className = 'item active';
    points[index].className = 'point active'
}

var goLeft = function () {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}

var goRight = function () {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}



for(i = 0;i < points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index')
        index = pointIndex;
        goIndex();
        time = 0;
    })
}

var timer;
function play(){
clearInterval(timer);
 timer = setInterval(() => {
    time ++;
    if(time == 20 ){
        goRight();
        time = 0;
    }    
},100)
}
play();

all.onmousemove = function(){
    clearInterval(timer)
}
all.onmouseleave = function(){
    play();
}
