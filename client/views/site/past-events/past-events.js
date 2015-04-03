Template.pastEventsIndex.onRendered(function() {
    this.subscribe('entity', 'pastEvents');
    this.autorun(function() {
        if ($(window).width() > 767) {
            $('.masonry').masonry({
                itemSelector: '.mansonry-item'
            });
        }
    })
})

Template.pastEventsIndex.helpers({
    pastEvents: function () {
        return orion.entities.pastEvents.collection.find({}, {sort: {createdAt:-1}});
    }
});

Template.pastEventsShow.onRendered(function() {
    this.subscribe('entity', 'pastEvents', { slug: Router.current().params.slug });
    this.$("#pastEventsShow").carousel()
});

Template.pastEventsShow.helpers({
    event: function () {
        return orion.entities.pastEvents.collection.findOne({ slug: Router.current().params.slug });
    },
    images: function() {
        var item = orion.entities.pastEvents.collection.findOne({ slug: Router.current().params.slug })
        var images = item && item.images
        return images && images.map(function(document, index) {
            var item = document.item;
            item.index = index;
            return item;
        });
    },
    isCero: function(index) {
        return index == 0;
    },
});