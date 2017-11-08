$(document).ready(function() {
// var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
// var digg = 'http://digg.com/api/news/popular.json';
// var reddit = 'https://www.reddit.com/top.json';

function normalizer(input, url) {
	var article = {};
	switch(input) {
		// if url is for mashable, assign it to a variable and switch on that variable
		case url = url: 
			
			break;
		// if url is for digg, assign it to a varaible and switch on that variable
		case digg:
			
			break;
		// if url is for reddit, assign it to a variable and switch on that variable
		// case api3:
		// 	do this;
		// 	break;
		default:
			console.log("not working"); 
	};
}

function apiCall(url) {
	$.ajax({
	url: url,
	success: function(result){
		var newArticle = result.new;
		console.log(newArticle[0].title);
		for (var i = 0; i < result.new.length; i++) {
			var newArticleTitle = result.new.title;
			console.log(newArticle[i]);
			$('#main').append(formatArticle(result.new));
		}
		console.log(result);
	}
	});
}

console.log("starting ajax");
apiCall(url);
		// if i want to use the hot articles and rising articles, are those separate Ajax requests?
	 
function formatArticle(article) {
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

      // $('.articleContent a').click(function() {
      // 	$('#popUp.loader .container').css("display", "inline");
      // })


      
});



/*
When the user selects an article's title show the #popUp overlay. 
The content of the article must be inserted in the .container class inside #popUp. 
Make sure you remove the .loader class when toggling the article information in the pop-up.

do this by using a click event to show the #popUp overlay
get rid of #popUp.loader .container hiding popup by removing .loader?
*/






