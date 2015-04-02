Tweets = new ReactiveVar([]);

Template.twitter.onRendered(function() {
	var template = this;
	this.subscribe('entity', 'logos');
	template.autorun(function() {
		template.$("#twitterCarousel").carousel({
			interval: 3000
		})

		var tf = new TweetFetcher(orion.dictionary.get('twitterId', '521862817826103296'));
	    tf.fetch(function(tweets)
	    {
	        Tweets.set(tweets);
	    }, 3);
	})
})

Template.twitter.helpers({
	logos: function () {
		return orion.entities.logos.collection.find();
	},
	tweets: function () {
		return Tweets.get().map(function(document, index){
			document.index = index;
			return document;
		});
	},
	isCero: function(index) {
    	return index == 0;
    }
});