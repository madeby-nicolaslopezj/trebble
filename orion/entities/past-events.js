orion.addEntity('pastEvents', {
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
        label: "Image (subir imagen liviana acá)",
        optional: true
    }),
    place: {
        type: String,
        optional: true
    },
    date: {
        type: String,
        optional: true
    },
    images: orion.arrayOfAttribute('file', {
        label: 'Images',
        optional: true
    }),
}, {
    sidebarName: 'Past Events',
    pluralName: 'Events',
    singularName: 'Event',
    tableColumns: [
        { data:'name', title: 'Name' },
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'slug', title: 'Slug' },
    ]
});