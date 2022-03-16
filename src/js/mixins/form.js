import { ValidationProvider, ValidationObserver, extend, configure, localize } from 'vee-validate';
import { required, email, length, numeric, min, max } from 'vee-validate/dist/rules';
import { VueMaskDirective } from 'v-mask';

import fr from 'vee-validate/dist/locale/fr.json';
import de from 'vee-validate/dist/locale/de.json';
import it from 'vee-validate/dist/locale/it.json';

extend('required', required);
extend('email', email);
extend('length', length);
configure({
	classes: true,
    validity: true,
    classNames: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
})
extend('min', min);
extend('max', max);
extend('numeric', numeric);

const formMixin = {
    components: {
        ValidationProvider,
        ValidationObserver
    },
	created () {
        this.setLocale()
        this.extendValidations()
	},
    directives: {
        mask: VueMaskDirective
    },
    methods: {
        setLocale () {
            var locale = this.$route.params.locale;
            switch (locale) {
                case 'en':
                    localize('en', require('vee-validate/dist/locale/en.json'));
                    break;
                case 'de':
                    localize('de', require('vee-validate/dist/locale/de.json'));
                    break;
                case 'it':
                    localize('it', require('vee-validate/dist/locale/it.json'));
                    break;
                default:
                    localize('fr', require('vee-validate/dist/locale/fr.json'));
                    break;
            }
        },
        extendValidations() {
            extend('vat_validation', {
                validate(value) {
                    const regex = /^CHE-\d{3}\.\d{3}\.\d{3}/
                    return regex.test(value);
                } ,
                message: `${this.translate('IDE')}`
            });
        },
        async validateForm () {
            const valid = await this.$refs.observer.validate()

            return valid;
        }
    }
};

export default formMixin;