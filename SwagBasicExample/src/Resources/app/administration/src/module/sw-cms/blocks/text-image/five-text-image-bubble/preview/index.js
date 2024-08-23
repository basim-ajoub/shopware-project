import template from './sw-cms-preview-five-text-image-bubble.html.twig';
import './sw-cms-preview-five-text-image-bubble.scss';

Shopware.Component.register('sw-cms-preview-five-text-image-bubble', {
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});