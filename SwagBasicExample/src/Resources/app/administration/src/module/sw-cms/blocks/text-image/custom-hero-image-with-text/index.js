import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'custom-hero-image-with-text',
    label: 'Custom Hero Image with Text',
    category: 'text-image',
    component: 'sw-cms-block-custom-hero-image-with-text',
    previewComponent: 'sw-cms-preview-custom-hero-image-with-text',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    slots: {
        image: 'image',
        text: 'text',
    }
});
