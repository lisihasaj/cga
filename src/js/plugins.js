var Plugins = {};
import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';

Plugins.install = function (Vue, options) {
    Vue.prototype.fullScreenUrl = function (src) {
        return croppa.url(src, 2200, null, ['resize'])
    }

    Vue.prototype.thumbnailUrl = function (src) {
        return croppa.url(src, 500, null, ['resize'])
    }
    Vue.prototype.checkField = function (a, fieldName) {
        if (a.fields[fieldName]) {
            let object = a.fields[fieldName]
            let objectValue = object.value
            if (object && objectValue) {
                return true
            } else {
                return false
            }
        }
    }
    // Translations with multiple keys
    Vue.prototype.translate = function (param) {

        let params = param.split(".")

        let obj = this.appConstants.translations[this.$route.params.locale]

        params.forEach(element => {
            obj = obj[element]
        });

        return obj
    };
}

export default Plugins
