SiteController = RouteController.extend({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		SEO.set({
			title: orion.dictionary.get('seoTitle'),
			link: {
				icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': orion.dictionary.get('seoDescription')
			},
			og: {
				'title': orion.dictionary.get('seoTitle'),
				'description': orion.dictionary.get('seoDescription'),
				'image': orion.dictionary.get('seoImage.url')
			}
		});
	}
});

Router.route('/', {
	name: 'index',
	layoutTemplate: null,
	controller: 'SiteController'
});

Router.route('/home', {
	name: 'home',
	controller: 'SiteController'
});

Router.route('/next-events', {
	name: 'nextEvents.index',
	controller: 'SiteController'
});

Router.route('/next-events/:slug', {
	name: 'nextEvents.show',
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	waitOn: function() {
		return Meteor.subscribe('entity', 'nextEvents');
	},
	data: function() {
		return {
			event: orion.entities.nextEvents.collection.findOne({ slug: this.params.slug })
		}
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var item = this.data().event;
		if (!item) return;
		SEO.set({
			title: item.name,
			link: {
				icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': item.content
			},
			og: {
				'title': item.name,
				'description': item.content,
				'image': item.image && item.image.url
			}
		});
	}
});

Router.route('/past-events', {
	name: 'pastEvents.index',
	controller: 'SiteController'
});

Router.route('/past-events/:slug', {
	name: 'pastEvents.show',
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	waitOn: function() {
		return Meteor.subscribe('entity', 'pastEvents', { slug: this.params.slug });
	},
	data: function() {
		return {
			event: orion.entities.pastEvents.collection.findOne({ slug: this.params.slug })
		}
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var item = this.data().event;
		if (!item) return;
		SEO.set({
			title: item.name,
			link: {
				icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': item.content
			},
			og: {
				'title': item.name,
				'description': item.name + '. ' + item.date + ', ' + item.place,
				'image': item.image && item.image.url
			}
		});
	}
});

Router.route('/news', {
	name: 'news.index',
	controller: 'SiteController'
});

Router.route('/news/:slug', {
	name: 'news.show',
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'adminLoading',
	waitOn: function() {
		return Meteor.subscribe('entity', 'news', { slug: this.params.slug });
	},
	data: function() {
		return {
			post: orion.entities.news.collection.findOne({ slug: this.params.slug })
		}
	},
	onAfterAction: function() {
		if (!Meteor.isClient) {
			return;
		}
		var item = this.data().post;
		if (!item) return;
		SEO.set({
			title: item.title,
			link: {
				icon: orion.dictionary.get('seoFavIcon.url'),
			},
			meta: {
				'description': item.readMore
			},
			og: {
				'title': item.title,
				'description': item.readMore,
				'image': item.image && item.image.url
			}
		});
	}
});

Router.route('/contact', {
	name: 'contact',
	layoutTemplate: 'contactLayout',
	controller: 'SiteController'
});