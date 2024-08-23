/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-preview-test-product-slider', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-test-product-slider', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'test-product-slider',
    label: 'test product slider',
    category: 'commerce',
    component: 'sw-cms-block-test-product-slider',
    previewComponent: 'sw-cms-preview-test-product-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        productSlider: 'product-slider',
    },
});
