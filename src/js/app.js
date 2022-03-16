import Vue from 'vue';
import router from './routes';
import store from './store';
import VueRouter from 'vue-router';
import Plugins from './plugins';
import VueAnalytics from 'vue-analytics';
import VueLazyload from 'vue-lazyload'
import VueHead from 'vue-head';
import Constants from './constants';
import AOS from 'aos';
import {expiryVerifier} from './helpers/index';
import { mapState } from 'vuex';

Vue.use(VueHead)
Vue.use(VueRouter)
Vue.use(Plugins)
Vue.use(Constants)
Vue.use(VueLazyload)
Vue.use(VueAnalytics, {
    id: 'UA-XXXXXXX-XX',
    router
});

window.axios = require('axios')

new Vue({
    el: '#app',
    router,
    store,
    data () {
    	return {
    		sections: []
    	}
    },
    template: `
    <div id="app" v-if="sections.length">
    	<cms-bar />
		<navigation :sections="sections" />
        <div class="backdrop" :class="{'backdrop__show': navOpen}" @click="closeNav"></div>
        <cookies-banner />
        <main>
            <transition v-on:enter="enter" v-on:afterEnter="afterEnter" v-on:before-leave="beforeLeave" v-on:leave="leave" v-on:before-enter="beforeEnter" appear mode="out-in">
                <router-view :key="$route.fullPath"></router-view>
            </transition>
        </main>
		<footer-component />
    </div>`,
    components: {
    	cmsBar: () => import('./partials/CmsBar.vue' /* webpackChunkName: "cms-bar" */),
        navigation: () =>  import('./partials/Navigation.vue' /* webpackChunkName: "navigation" */),
        footerComponent: () => import('./partials/Footer.vue' /* webpackChunkName: "footer" */),
        cookiesBanner: () => import('./views/shared/components/CookiesBanner.vue' /* webpackChunkName: "cookies-banner" */)
    },
    created() {
        document.title = 'CGA';

        expiryVerifier('token').then(() => {
            const token = localStorage.getItem('token');
            if(token) this.$store.dispatch('getProtectedSections');
        });
        
        this.getData();

        AOS.init();
    },
    methods: {
    	getData () {
            axios.all([this.getSections(), this.getPages()])
                .then(axios.spread((sections, pages) => {
                    this.sections = sections.data
                    this.$store.commit('sections', sections.data)
                    this.$store.commit('pages', pages.data)
                }));
    	},
    	getSections() {
    		return axios.get(`/${this.$route.params.locale}/api/v2/sections`)
    	},
    	getPages() {
            return axios.get(`/${this.$route.params.locale}/api/v2/pages`)
    	},
        beforeEnter(el) {
            window.scrollTo(0, 0)
        },
        enter(el, done) {
            done()
        },
        afterEnter(el) {
            
        },
        beforeLeave(el) {
            
        },
        leave(el, done) {
            done()
        },
        closeNav() {
            return this.$store.commit('setNavFalse');
        }
    },
    computed: {
        ...mapState([
            'navOpen'
        ]),
    }
})
