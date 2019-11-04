function add(first, second, callback) {
    console.log(first + second);
    if (callback) {
        callback();
    }

}

function logDone() {
    console.log('done');
}

add(2, 3, logDone);
add(4, 5);

$(function() {
    var a = 1;
    $('#btn1').click(function() {
        alert(a);
    })

})
var obj = {
    boo: function() {
        console.log(this);
    }
};
var b = 1;

function foo() {
    var b = 2;
    console.log(window.b);
    console.log(b);
}
obj.boo();
foo();

$('li').click(function(){
	var currentTimes = parseInt($(this).find('span').html());
	$(this).find('span').html(currentTimes+1);
})