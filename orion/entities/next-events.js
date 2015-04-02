orion.addEntity('nextEvents', {
    name: {
        type: String,
        label: "Name",
        optional: true
    },
    slug: {
        type: String,
        label: "Slug",
        regEx: /^[a-z0-9A-Z_-]*$/
    },
    image: orion.attribute('file', {
        label: "Image",
        optional: true
    }),
    ticketUrl: {
        type: String,
        optional: true
    },
    afiche: orion.attribute('file', {
        label: "Afiche",
        optional: true
    }),
    content: orion.attribute('froala', {
        label: "Text del evento",
        optional: true
    }),
}, {
    sidebarName: 'Next Events',
    pluralName: 'Events',
    singularName: 'Event',
    tableColumns: [
        { data:'name', title: 'Name' },
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'slug', title: 'Slug' },
    ]
});