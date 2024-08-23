import './component'; // <- Right here!
import './preview';
Shopware.Service('cmsService').registerCmsBlock({
    name: 'my-image-text-reversed',
    category: 'text-image',
    label: 'Custom Big Image With Text',
    component: 'sw-cms-block-my-image-text-reversed',
    previewComponent: 'sw-cms-preview-my-image-text-reversed',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: 'text',
        right: 'image'
    }
});