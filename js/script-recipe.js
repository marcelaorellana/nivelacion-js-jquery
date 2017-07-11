$(document).ready( function(){
	$(".recipe .js-menu").hide();
	console.log("Página Cargada");
	$(".js-show-make").click(function(){
		$(".page").addClass("make");
		$(this).addClass("active");
		$(".js-show-recipe").removeClass("active");
	});
	$(".js-show-recipe").click(function(){
		$(".page").removeClass("make");
		$(this).addClass("active");
		$(".js-show-make").removeClass("active");
	});
});