import './preview';
Shopware.Service('cmsService').registerCmsElement({
    name: 'webface-big-image-with-text',
    label: 'sw-cms.elements.webface-big-image-with-text.label',
    component: 'sw-cms-el-webface-big-image-with-text',
    configComponent: 'sw-cms-el-config-webface-big-image-with-text',
    previewComponent: 'sw-cms-el-preview-webface-big-image-with-text',
    defaultConfig: {
        dailyUrl: {
            source: 'static',
            value: ''
        }
    }
});