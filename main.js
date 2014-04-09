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
$('h1').on('mouseover',function(e){
	$(e.target).css('color','green');
});
//Anonymous function- Above example when you replace function with the function expression

$('h1').on('mouseout',turnBlack);

$('#refactoru-link').on('click',function(e){
	console.log("RefactorU");
	e.preventDefault();
});
