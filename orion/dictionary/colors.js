/**
 * Set default colors

var id = orion.dictionary.collection.findOne()._id;
orion.dictionary.collection.update(id, {$set: {
    colorsBackground: '#ffffff',
    colorsTexts: '#292929',
    colorsTextsSecondary: '#bbbbbb',
    colorsNextEventsBackground: '#f5f5f5',
    colorsNextEventsTexts: '#292929',
    colorsHeaderBackground: '#ffffff',
    colorsHeaderText: '#292929',
    colorsSubscribeBackground: '#000000',
    colorsSubscribeText: '#cacaca',
    colorsSubscribeButton: '#262626',
    colorsTitles: '#292929'
}})
 */

orion.dictionary.addDefinition('colorsTitles', 'colors', {
    type: String,
    label: 'Titles Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsTexts', 'colors', {
    type: String,
    label: 'Texts Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsTextsSecondary', 'colors', {
    type: String,
    label: 'Secondary Texts Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsBackground', 'colors', {
    type: String,
    label: 'Background Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsHeaderBackground', 'colors', {
    type: String,
    label: 'Header Background Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsHeaderText', 'colors', {
    type: String,
    label: 'Header Text Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsNextEventsBackground', 'colors', {
    type: String,
    label: 'Next Events Detail Background Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsNextEventsTexts', 'colors', {
    type: String,
    label: 'Next Events Detail Text Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsSubscribeBackground', 'colors', {
    type: String,
    label: 'Subscribe Background Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsSubscribeText', 'colors', {
    type: String,
    label: 'Subscribe Text Color',
    autoform: {
    	type: 'color'
    }
});

orion.dictionary.addDefinition('colorsSubscribeButton', 'colors', {
    type: String,
    label: 'Subscribe Button Color',
    autoform: {
    	type: 'color'
    }
});