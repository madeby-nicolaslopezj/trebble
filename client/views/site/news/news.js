Template.newsIndex.onRendered(function() {
	this.subscribe('entity', 'news');
	this.autorun(function() {
		if ($(window).width() > 767) {
            $('.masonry').masonry({
                itemSelector: '.mansonry-item'
            });
        }
	})
})

Template.newsIndex.helpers({
	posts: function () {
		return orion.entities.news.collection.find({}, {sort: {createdAt:-1}}).map(function(item, index) {
			item.index = index;
			item.isCero = index % 3;
			item.isLast = index % 0;
			return item;
		});
	}
});

Template.newsShow.onRendered(function() {
	var subscription = this.subscribe('entity', 'news', { slug: Router.current().params.slug });
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	this.autorun(function() {
		twttr.widgets.load();
	})
})

Template.newsShow.helpers({
	post: function () {
		return orion.entities.news.collection.findOne({ slug: Router.current().params.slug });
	}
});