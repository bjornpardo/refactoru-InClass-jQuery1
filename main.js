$(document).on('ready', function() {
  
});

// Defining an Event Handler/Listener
var turnGreen=function(){
 $('h1').css('color','green');
};

var turnBlack=function(){
 $('h1').css('color','black');
};

// Attaching an Event Handler
// $('h1').on('mouseover',function(e){
// 	$(e.target).css('color','green');
// });

$('h1').on('mouseover',function(){
	$(this).css('color','green');
});

// e.target = this
// e.preventDefault = return false;
// No need for e in function()
// e.xxx is native and not crossbrowser compatible while this and return false is jquery and crossbrowser compatiable.
//Anonymous function- Above example when you replace function with the function expression which is the best practice

$('h1').on('mouseout',turnBlack);

$('#refactoru-link').on('click',function(e){
	console.log("RefactorU");
	e.preventDefault();
});
