import Axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const _getters = {
    getSections: state => {
        return state.sections
    },
    getPages: state => {
        return state.pages
    },
    getSectionBySlug: (state) => (slug) => {
        return state.sections.find(section => section.slug === slug)
    },
    getSectionByType: (state) => (type) => {
        return state.sections.find(section => section.type === type)
    },
    getPageBySlug: (state) => (slug) => {
        return state.pages.find(page => page.slug === slug)
    },
    getNavigationItems: state => {
        const excludedSections = [
            'home',
            'about',
            'team',
            'values',
            'network',
            'business_insurance',
            'real_estate',
            'accreditations',
            'news',
            'wish_cards',
            'footer',
            'privacy_policy',
            'contact',
            'login',
            'member_space',
            'protected'
        ];
        return state.sections.filter((s) => !excludedSections.includes(s.type))
    },
    getNavState: state => {
        return state.navOpen;
    }
};

const _mutations = {
    sections (state, sections) {
        state.sections = [
            ...state.sections,
            ...sections
        ]
    },
    pages (state, pages) {
        state.pages = [
            ...state.pages,
            ...pages
        ]
    },
    setNavTrue: state => {
        return state.navOpen = true
    },
    setNavFalse: state => {
        return state.navOpen = false
    },
    toggleNav: state => {
        return state.navOpen = !state.navOpen
    },
};

const _actions = {
    getProtectedSections(context) {
        const token = localStorage.getItem('token');
        if(token) {
            return Axios.get(`/${current_locale}/api/v3/sections`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json;charset=utf-8'
                }
            }).then(response => {
                context.commit('sections', response.data)
            }).catch(error => {
                console.error(error)
            })
        }
    }
}

const store = new Vuex.Store({
    state: {
        sections: [],
        pages: [],
        navOpen: false,
    },
    mutations: _mutations,
    getters: _getters,
    actions: _actions
});

export default store
