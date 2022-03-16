import VueRouter from 'vue-router';
import Sections from './architecture/Sections.vue';
import Subsections from './architecture/Subsections.vue';
import Pages from './architecture/Pages.vue';
import Home from './views/Home.vue';
import NotFound from './architecture/NotFound.vue';

const locales = JSON.parse(window_locales);
const homeSection = locales.filter((l) => l.key == current_locale);
const homeSlug = homeSection[0].root_slug;

const _routes = [
    {
        path: '/',
        redirect: '/fr'
    },
    {
        path: `/:locale/${homeSlug}`,
        redirect: `/${current_locale}`
    },
    {
        path: '/:locale',
        component: Home,
        name: 'home',
    },    
    {
        path: '/:locale/:sectionSlug',
        component: Sections,
        name: 'section',
    },
    {
        path: '/:locale/:sectionSlug/:subsectionSlug',
        name: 'subsection',
        component: Subsections,
    },
    {
        path: '/:locale/:sectionSlug/:subsectionSlug',
        component: Subsections,
        name: 'collection',
        meta: { requiresAuth: true }
    },
    {
        path: '/:locale/:sectionSlug/:subsectionSlug/:pageSlug',
        name: 'page',
        component: Pages,
    },
    {
        path: '/404',
        alias: '*',
        component: NotFound,
        name: 'not-found',
    }
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: _routes,
    linkActiveClass: 'active'
});

const loginSlugs = [
    {
        locale: 'fr',
        link: '/fr/connexion'
    },
    {
        locale: 'en',
        link: '/en/login'
    },
    {
        locale: 'de',
        link: '/de/anmeldung'
    },
    {
        locale: 'it',
        ink: '/it/accedere'
    }
];
const target = loginSlugs.find(s => s.locale === current_locale);

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!token) {
            next(target.link)
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
