Template.contact.onRendered(function() {
	Session.set('contactSent', false);
})

Template.contact.helpers({
	contactSent: function () {
		return Session.get('contactSent');
	}
});

AutoForm.addHooks('contactForm', {
	onSuccess: function(formType, result) {
		Session.set('contactSent', true)
	},
});