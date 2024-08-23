/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-preview-custom-text-teaser', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-custom-text-teaser', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'custom-text-teaser',
    label: 'sw-cms.blocks.custom-text-teaser.label',
    category: 'text',
    component: 'sw-cms-block-custom-text-teaser',
    previewComponent: 'sw-cms-preview-custom-text-teaser',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor sit amet</h2>
                        <p style="text-align: center;"><i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore</i></p>
                        `.trim(),
                    },
                },
            },
        },
        image: {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '100px' },
                },

            },
        },
    },
});
