Template.home.onRendered(function() {
	this.subscribe('entity', 'homeSlides');
	this.subscribe('entity', 'homeBanners');

	this.$("#homeSlides").carousel()

})

Template.home.helpers({
	homeSlides: function () {
    	return orion.entities.homeSlides.collection.find({}, {sort: {createdAt:-1}}).map(function(document, index) {
			document.index = index;
			return document;
		});
	},
	isCero: function(index) {
    	return index == 0;
    },
    banners: function() {
    	return orion.entities.homeBanners.collection.find();
    }
});