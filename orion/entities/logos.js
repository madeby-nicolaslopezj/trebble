orion.addEntity('logos', {
    url: {
        type: String,
        label: "Url",
        optional: true
    },
    image: orion.attribute('file', {
        label: "Image",
        optional: true
    })
}, {
    sidebarName: 'Logos Footer',
    pluralName: 'Logos',
    singularName: 'Logo',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'url', title: 'Url' },
    ]
});