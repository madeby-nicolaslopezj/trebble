orion.dictionary.addDefinition('twitterId', 'twitter', {
    type: String,
    label: 'Twitter ID'
});

orion.dictionary.addDefinition('twitterBackground', 'twitter', 
	orion.attribute('file', {
        label: 'Twitter Background',
        optional: true
    })
);