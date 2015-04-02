orion.addEntity('homeBanners', {
    text: {
        type: String,
        label: "Text",
        optional: true
    },
    image: orion.attribute('file', {
        label: "Image",
        optional: true
    }),
    link: {
        type: String,
        label: "Link (al hacer click en la imagen)",
        optional: true
    },
    youtube: {
        type: String,
        label: "Código del video de youtube (ej: dHOPoy7hDfc)",
        optional: true
    },
    vimeo: {
        type: String,
        label: "Id del video de vimeo",
        optional: true
    },
}, {
    sidebarName: 'Home Banners',
    pluralName: 'Banners',
    singularName: 'Banner',
    tableColumns: [
        orion.attributeColumn('file', 'image', 'Image'),
        { data:'youtube', title: 'Youtube' },
        { data:'vimeo', title: 'Vimeo' },
    ]
});