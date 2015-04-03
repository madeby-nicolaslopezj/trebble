orion.dictionary.addDefinition('indexImageLogo', 'index', 
    orion.attribute('file', {
        label: 'Site Logo',
        optional: true
    })
);

orion.dictionary.addDefinition('indexImages', 'index', 
    orion.arrayOfAttribute('file', {
        label: 'Index Background Images',
        optional: true
    })
);

orion.dictionary.addDefinition('indexTitles', 'index', {
	type: [String],
	label: 'Titles'
});

orion.dictionary.addDefinition('indexSubtitle', 'index', {
	type: String,
	label: 'Subtitle'
});