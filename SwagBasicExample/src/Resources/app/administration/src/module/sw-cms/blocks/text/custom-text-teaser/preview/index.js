import template from './sw-cms-preview-custom-text-teaser.html.twig';
import './sw-cms-preview-custom-text-teaser.scss';

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
};
