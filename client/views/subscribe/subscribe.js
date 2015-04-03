Template.subscribe.onRendered(function() {
	Session.set('newsletterSent', false);
})

Template.subscribe.helpers({
	newsletterSent: function () {
		return Session.get('newsletterSent');
	}
});

AutoForm.addHooks('subscribeForm', {
	onSuccess: function(formType, result) {
		Session.set('newsletterSent', true)
	},
});