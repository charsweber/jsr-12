$(document).ready(function() {
	// how do i pass these in dynamically?
	var urls = ['https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json', 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json', 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json'];

	function normalizer(input, url) {
		var articles = {};
		(function(input) {
			switch(url) {
			case urls[0]: 
				// i should be populating articles object with json data?
				articles = input.new;
				for (var i = 0; i < articles.length; i++) {
					var image = input.new[i].image;
					var title = input.new[i].title;
					var channel = input.new[i].channel;
					articles[url] = {};
					articles[url].image = image;
					articles[url].title = title;
					articles[url].channel = channel;
					console.log(articles[url], "articles");
				}
				return articles;
				break;
			case urls[1]:
				articles = input.data.feed;
				for (var i = 0; i < articles.length; i++) {
					var image = input.data.feed[i].content.media.images[0].original_url;
					var title = input.data.feed[i].content.title;
					var channel = input.data.feed[i].content_type;
					articles[url] = {};
					articles[url].image = image;
					articles[url].title = title;
					articles[url].channel = channel;
					console.log(articles[url], "articles");
				}
				return articles;
				break;
			case urls[2]:
				articles = input.data.children;
				for (var i = 0; i < articles.length; i++) {
					// why won't source url work
					var image = input.data.children[i].data.thumbnail;
					var title = input.data.children[i].data.title;
					var channel = input.data.children[i].data.subreddit;
					articles[url] = {};
					articles[url].image = image;
					articles[url].title = title;
					articles[url].channel = channel;
					console.log(articles[url], "articles");
				}
				return articles;
				break;
			default:
				console.log("The URL used has no significance here."); 
		}})(input);
		// console.log(articles, "new articles");
		return articles;
	}

	console.log("starting ajax");

	function apiCall(url) {
		$.ajax({
		url: urls[i],
		success: function(result){
			var article = normalizer(result, url);
			for (var i = 0; i < article.length; i++) {
				console.log(article[i]);
				$('#main').append(formatArticle(article[i]));
			}
		}
		});
	}

	
	for (var i = 0; i < urls.length; i++) {
		apiCall(urls[i]);
	}
		 
	function formatArticle(article) {
			var result = '<article class="article">' + 
	        '<section class="featuredImage">' + 
	        '<img src="' + article.image + '" alt="" />' + 
	        '</section>' +
	        '<section class="articleContent">' +
	            '<a href="#"><h3>' + article.title + '</h3></a>' + 
	            '<h6>' + article.channel + '</h6>' +
	        '</section>' +
	        '<section class="impressions">' + 
	          
	        '</section>' + 
	        '<div class="clearfix"></div>' +
	      	'</article>';
		
	      return result;

	 //    $('.articleContent h3').click(function() {
		// 	$(this).attr('id', 'popUp');
		// 	var popUpContent = '<h1>' + article.title + '</h1>' + 
		// 		'<p>' + article.content + '</p>' +
		// 		'<a href="' + article.link + '#" class="popUpAction" target="_blank"> Read more from source </a>';
		// });  
	} 

	
	
	$('#search img').click(function() {
		if ($('#search').hasClass('active')) {
			$('#search').removeClass('active');
		}
		else {
			$('#search').attr('class', 'active');
		}
	});

});







