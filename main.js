// body...class_name
function go(name, age) {
    if (age < 20) {
        return name + '!';
    } else {
        return name;
    }

}
go('will', 34);

function add(first, second) {
    return first + second;
}
alert(add(1, 2));
alert(go('Lee', 27));

function ho() {
    alert('hi');
}
var myList = ['apples', 'oranges', 'bananas'];
myList.forEach(function(value, index) {
    alert('I have ' + value + ' in my shopping bag');
})

var times = 0;
while (times < 10) {
    console.log('tried it', times + 1);
    times++;
}
console.log(' ');
times = 0;
do {
    console.log('tried it', times + 1);
    times++;
} while (times < 10);
times = 0;
console.log(' ');
for (var i = 0; i < myList.length; i++) {
    console.log(myList[i]);

}
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add1); 
numTwo.addEventListener("input", add1);

function add1() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = one + two;
}

var scarlett = document.getElementById("scarlett");
//var scarlettPic = document.getElementById("scarlett-pic");
var alison = document.getElementById("alison");
//var alisonPic = document.getElementById("alison-pic");
var adriana = document.getElementById("adriana");
//var adrianaPic = document.getElementById("adriana-pic");

/*scarlett.addEventListener("click", function(){
	if (scarlettPic.className == "hide") {
		scarlettPic.className = "";
	}else {
		scarlettPic.className = "hide";
	}
});
alison.addEventListener("click", function(){
	if (alisonPic.className == "hide") {
		alisonPic.className = "";
	}else {
		alisonPic.className = "hide";
	}
});
adriana.addEventListener("click", function(){
	if (adrianaPic.className == "hide") {
		adrianaPic.className = "";
	}else {
		adrianaPic.className = "hide";
	}
});*/

scarlett.addEventListener("click", picLink);
alison.addEventListener("click", picLink);
adriana.addEventListener("click", picLink);

function picLink() {
	var allImages = document.querySelectorAll("img");

	for(var i = 0; i < allImages.length; i++) {
		allImages[i].className = "hide";
	}
	var picID = this.attributes["data-img"].value;
	var pic = document.getElementById(picID);
	if (pic.className == "hide") {
		pic.className = "";
	}else {
		pic.className = "hide";
	}
}

var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i = 0; i < items.length; i++) {
	items[i].addEventListener("click",editItem);
	inputs[i].addEventListener("blur",updateItem);
	inputs[i].addEventListener("keypress",itemKeyPress);

}
function editItem() {
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
}

function updateItem() {
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";


}

function itemKeyPress(event) {
	if(event.which == 13) {
		updateItem.call(this);
	}
}