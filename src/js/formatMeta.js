import _isUndefined from 'lodash/isUndefined'
import _isEmpty from 'lodash/isEmpty'

const defaultMeta = {
    title: 'Title',
    description: 'Description',
    keywords: '',
    image: ''
}

const metaConfig = {
    data() {
        return {
            params: {
                title: '',
                keywords: '',
                description: '',
                descriptionTwitter: '',
                titleTwitter: '',
                descriptionFacebook: '',
                titleFacebook: '',
                image: '',
                imageTwitter: '',
                imageFacebook: '',
                linkCanonical: ''
            }
        }
    },
    head: {
        title: function () {
            return {
                inner: this.params.title,
                separator: ' '
            }
        },
        meta: function () {
            return [{ n: 'description', c: this.params.description, id: 'description' },
                { n: 'keywords', c: this.params.keywords, id: 'keywords' },
                { n: 'twitter:title', c: this.params.titleTwitter, id: 't-title' },
                { n: 'twitter:description', c: this.params.descriptionTwitter, id: 't-description' },
                { n: 'twitter:image', c: `${window.location.origin}${this.params.imageTwitter}`, id: 't-image' },
                { p: 'og:title', c: this.params.titleFacebook, id: 'og-title' },
                { p: 'og:description', c: this.params.descriptionFacebook, id: 'og-description' },
                { p: 'og:image', c: `${window.location.origin}${this.params.imageFacebook}`, id: 'og-image' },
                { p: 'og:url', h: `${window.location.href}`, id: 'og-url' }
            ]
        },
        link: function () {
            return [{r: 'canonical', h: this.params.linkCanonical, id: 'canonical' }]
        }
    }
}

const formatMeta = (entity) => {
    let seo = {
        title: '',
        keywords: '',
        description: '',
        descriptionTwitter: '',
        titleTwitter: '',
        descriptionFacebook: '',
        titleFacebook: '',
        image: '',
        imageTwitter: '',
        imageFacebook: '',
        linkCanonical: ''
    }

    if (!_isUndefined(entity.fields)) {
        const {
            fields
        } = entity

        // seo canonical_link
        seo.linkCanonical = validate(fields, 'seo_canonical_link', '', window.location.href);
        seo.description = validate(fields, 'seo_description', '', defaultMeta.description);
        seo.keywords = validate(fields, 'seo_keywords', '', defaultMeta.keywords)
        seo.title = validate(fields, 'seo_title', '', entity.title)
        seo.image = validate(fields, 'seo_image', 'image', defaultMeta.image)

        // seo twitter
        seo.descriptionTwitter = validate(fields, 'seo_twitter_description', '', validate(fields, 'seo_description', '', defaultMeta.description))
        seo.titleTwitter = validate(fields, 'seo_twitter_title', '', validate(fields, 'seo_title', '', entity.title))
        seo.imageTwitter = validate(fields, 'seo_twitter_image', 'image', validate(fields, 'seo_image', 'image', defaultMeta.image))


        // seo facebook
        seo.descriptionFacebook = validate(fields, 'seo_facebook_description', '', validate(fields, 'seo_description', '', defaultMeta.description))
        seo.titleFacebook = validate(fields, 'seo_facebook_title', '', validate(fields, 'seo_title', '', entity.title))
        seo.imageFacebook = validate(fields, 'seo_facebook_image', 'image', validate(fields, 'seo_image', 'image', defaultMeta.image))
    } else {
        seo = {
            ...defaultMeta
        }
    }

    return seo
}


const validate = (fields, fieldName, type = '', fallbackValue = '') => {
    if(type == 'image' && (fields[fieldName] && !_isEmpty(fields[fieldName].value))) {
        return fields[fieldName].value[0].url
    } else if (fields[fieldName] && !_isEmpty(fields[fieldName].value)) {
        return fields[fieldName].value
    } else {
        return fallbackValue
    }
}

export {
    metaConfig,
    formatMeta
}
