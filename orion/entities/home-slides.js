orion.addEntity('homeSlides', {
    text: {
        type: String,
        label: "Text",
        optional: true
    },
    image: orion.attribute('file', {
        label: "Image"
    }),
    link: {
        type: String,
        label: "Link (al hacer click en la imagen)",
        optional: true
    },
    linkBox: {
        type: String,
        label: "Link (al hacer click en la caja negra)",
        optional: true
    },
}, {
    sidebarName: 'Home Slides',
    pluralName: 'Slides',
    singularName: 'Slide',
    tableColumns: [
        { data:'text', title: 'Text' },
        orion.attributeColumn('file', 'image', 'Image'),
    ]
});