Template.nextEventsIndex.onRendered(function() {
	this.subscribe('entity', 'nextEvents');
	this.autorun(function() {
		$('html, body').animate({ scrollTop: 0 });
	})
})

Template.nextEventsIndex.helpers({
	nextEvents: function () {
		return orion.entities.nextEvents.collection.find();
	}
});

Template.nextEventsShow.onRendered(function() {
	this.subscribe('entity', 'nextEvents');
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	this.autorun(function() {
		var router = Router.current();
		$('.masonry').masonry({ itemSelector: '.mansonry-item' });
		$('html, body').animate({ scrollTop: 0 });
		try	{
			twttr.widgets.load();
		} catch (e) { }
	})
})

Template.nextEventsShow.helpers({
	nextEvents: function () {
		return orion.entities.nextEvents.collection.find();
	},
	event: function () {
		return orion.entities.nextEvents.collection.findOne({
			slug: Router.current().params.slug
		});
	},
});