orion.dictionary.addDefinition('contactTitle', 'contact', {
  type: String,
  label: 'Title',
});

orion.dictionary.addDefinition('contactSubtitle', 'contact', {
  type: String,
  label: 'Subtitle',
});

orion.dictionary.addDefinition('contactSentMessage', 'contact', {
  type: String,
  label: 'Sent Message Text',
});

orion.dictionary.addDefinition('contactImage', 'contact',
  orion.attribute('file', {
    label: 'Background Image',
    optional: true,
  })
);

orion.dictionary.addDefinition('contactDirection', 'contact', {
  type: String,
  label: 'Direction',
});

orion.dictionary.addDefinition('contactEmail', 'contact', {
  type: String,
  label: 'Email',
});
