orion.addEntity('news', {
    title: {
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
        label: "Image"
    }),
    readMore: {
        type: String,
        label: "Texto corto, descripción de la noticia",
        optional: true,
        autoform: {
            type: 'textarea'
        }
    },
    content: orion.attribute('froala', {
        label: "Content",
        optional: true
    }),
}, {
    sidebarName: 'News',
    pluralName: 'Posts',
    singularName: 'Post',
    tableColumns: [
        { data:'title', title: 'Title' },
        { data:'slug', title: 'Slug' },
        orion.attributeColumn('file', 'image', 'Image'),
    ]
});