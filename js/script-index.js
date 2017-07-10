$(document).ready( function(){
	$(".home .js-back").hide();
	$(".recipe .js-menu").hide();

	function printNews(){
		$(".nuevasR").text("NUEVAS RECETAS");
	}printNews();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	

	function listaFavorito(){

		

	}listaFavorito();


	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);  

});

/* 
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	recipesArray.forEach(function(val){
		if(val.hasOwnProperty("highlighted")){
    		renderRecipe(val);
		}

	});

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var arr = jQuery.makeArray(recipe);
	arr.forEach(function(val){	
		/*$('<a>', {class: 'item-recipe', href: '#'}).appendTo(".list-recipes");
		$("<span>",{class: 'attribution'}).appendTo('.item-recipe');
		$("<span>",{class: 'title-recipe'}).appendTo('.attribution');
		$("<span>",{class: 'metadata-recipe'}).appendTo('.attribution');
		$("<span>",{class: 'author-recipe'}).appendTo('.metadata-recipe');
		$("<span>",{class: 'bookmarks-recipe'}).appendTo('.metadata-recipe');
		$("<span>",{class: 'bicon-bookmark'}).appendTo('.bookmarks-recipe');
		$("<img>",{src: "img/recipes/640x480/" + val.name + ".jpg"}).appendTo('.item-recipe');

		$(".title-recipe").text(val.title);
		$(".author-recipe").text(val.source.name);*/
		$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe"> ' +  val.title + ' </span><span class="metadata-recipe"><span class="author-recipe"> ' + val.source.name + ' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span>  </span></span> </span><img src="img/recipes/320x350/' +val.name + '.jpg"/></a>')
		


	});

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	activitiesArray.forEach(function(val){
		renderActivity(val);
	});
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var arr = jQuery.makeArray(recipe);
	if(arr.length > 0){
		$(".wrapper-message").hide();
	}
}


