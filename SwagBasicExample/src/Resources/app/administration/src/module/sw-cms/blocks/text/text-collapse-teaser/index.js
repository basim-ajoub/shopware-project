/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-preview-text-collapse-teaser', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-text-collapse-teaser', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-collapse-teaser',
    label: 'sw-cms.blocks.text-collapse-teaser.label',
    category: 'text',
    component: 'sw-cms-block-text-collapse-teaser',
    previewComponent: 'sw-cms-preview-text-collapse-teaser',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        title: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: left;">Lorem Ipsum dolor</p>
                     `.trim(),
                    },
                },
            },
        },
        content: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: left;"><i>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore</i></p>
                        `.trim(),
                    },
                },
            },
        },

    },
});
