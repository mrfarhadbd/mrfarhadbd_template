var $ = jQuery;
$('#list').on('click',function(){
	$('ul').toggle();
})

$('#color').on('click', function(){
	var random=parseInt(Math.random() *  255)
	var random1=parseInt(Math.random() * 255)
	var random2=parseInt(Math.random() * 255)
  $('body').css('background', `rgb(${random}, ${random1}, ${random2})`)
})