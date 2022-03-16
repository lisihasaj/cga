import router from "./routes";
import { translations } from "./translations";

const AppConstants = {}
AppConstants.install = function (Vue, options) {
    Vue.prototype.appConstants = {
        translations
    }
};

export const sharedSwiperOptions = {
    preventClicks: true,
    loopedSlides: 5,
    preventClicksPropagation: true,
    slideToClickedSlide: true,
    freeMode: false,
    centeredSlides: true,
};

export default AppConstants