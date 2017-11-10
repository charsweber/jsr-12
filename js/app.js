$(document).ready(function() {
	var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
	// var url = 'http://digg.com/api/news/popular.json';
	// var url = 'https://www.reddit.com/top.json';

// what is input?
	function normalizer(input, url) {
		var article = {};
		switch(input) {
			// if url is for mashable, assign it to a variable and switch on that variable
			case url = url: 
				article = result.new;
				// am i calling apiCall here and in the same place in the next two functions?
				break;
			// if url is for digg, assign it to a varaible and switch on that variable
			case digg = url:
				article = result.data.feed[i].content;
				break;
			// if url is for reddit, assign it to a variable and switch on that variable
			case reddit = url:
				article = result.data.children[i].data;
				break;
			default:
				console.log("doesn't look like the URL used has any significance here."); 
		};
	}

	function apiCall(url) {
		$.ajax({
		url: url,
		success: function(result){
			// normalizer(input, url);
			var newArticle = result.new;
			// console.log(newArticle);
			// console.log(result.new.title);
			for (var i = 0; i < result.new.length; i++) {
				console.log(result.new[i]);
				$('#main').append(formatArticle(newArticle));
			}
			console.log(result);
		}
		});
	}

	// 	function apiCall(url) {
	// 	$.ajax({
	// 	url: url,
	// 	success: function(result){
	// 		normalizer(input, url);
	// 		var newArticle = result.new;
	// 		console.log(result.new.title);
	// 		for (var i = 0; i < article.length; i++) {
	// 			console.log(article[i]);
	// 			$('#main').append(formatArticle(article));
	// 		}
	// 		console.log(result);
	// 	}
	// 	});
	// }

	console.log("starting ajax");
	apiCall(url);
		 
	function formatArticle(article) {
		// update newArticle with article
		var result = '<article class="article">' + 
	        '<section class="featuredImage">' + 
	        '<img src="' + article.image + '" alt="" />' + 
	        '</section>' +
	        '<section class="articleContent">' +
	            '<a href="#"><h3>' + article.title + '</h3></a>' + 
	            // '<h5>' + newArticle[i].excerpt + '</h5>' +
	            '<h6>' + article.channel + '</h6>' +
	        '</section>' +
	        '<section class="impressions">' + 
	          
	        '</section>' + 
	        '<div class="clearfix"></div>' +
	      '</article>';
	      return result;
	} 
	      
});



/*
When the user selects an article's title show the #popUp overlay. 
The content of the article must be inserted in the .container class inside #popUp. 
Make sure you remove the .loader class when toggling the article information in the pop-up.

do this by using a click event to show the #popUp overlay
get rid of #popUp.loader .container hiding popup by removing .loader?
*/






