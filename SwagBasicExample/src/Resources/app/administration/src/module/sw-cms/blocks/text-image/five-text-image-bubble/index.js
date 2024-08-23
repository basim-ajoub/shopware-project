import './component'; // <- Right here!
import './preview';
Shopware.Service('cmsService').registerCmsBlock({
    name: 'five-text-image-bubble',
    category: 'text-image',
    label: 'Custom five text image bubble',
    component: 'sw-cms-block-five-text-image-bubble',
    previewComponent: 'sw-cms-preview-five-text-image-bubble',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'block-title': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h2 style="text-align: center;">Lorem Ipsum dolor</h2>
                     `.trim(),
                    },
                },
            },
        },
        'image-1': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' },
                },

            },
        },
        'text-1': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <h5 style="text-align: center;">Lorem Ipsum dolor</h5>
                     `.trim(),
                    },
                },
            },
        },
        'image-2': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' },
                },

            },
        },
        'text-2': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: center;">Lorem Ipsum dolor</p>
                     `.trim(),
                    },
                },
            },
        },
        'image-3': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' },
                },

            },
        },
        'text-3': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: center;">Lorem Ipsum dolor</p>
                     `.trim(),
                    },
                },
            },
        },
        'image-4': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' },
                },

            },
        },
        'text-4': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: center;">Lorem Ipsum dolor</p>
                     `.trim(),
                    },
                },
            },
        },
        'image-5': {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' },
                    minHeight: { source: 'static', value: '300px' },
                },

            },
        },
        'text-5': {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                        <p style="text-align: center;">Lorem Ipsum dolor</p>
                     `.trim(),
                    },
                },
            },
        },
    },
});