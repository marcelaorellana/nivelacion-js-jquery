$(document).ready( function(){
	$(".recipe .js-menu").hide();
	console.log("Página Cargada");
	$(".js-show-make").click(function(){
		$(".page").addClass("make");
	});
	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
	});
});