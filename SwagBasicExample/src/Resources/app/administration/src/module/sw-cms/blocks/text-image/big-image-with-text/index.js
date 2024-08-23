import './component'; // <- Right here!
import './preview';
Shopware.Service('cmsService').registerCmsBlock({
    name: 'webspace-big-image-with-text',
    label: 'sw-cms.elements.webface-big-image-with-text.label',
    category: 'text-image',
    component: 'sw-cms-block-webspace-big-image-with-text',
    previewComponent: 'sw-cms-preview-webspace-big-image-with-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        image: 'image',
        text: 'text',
    },
});
