<template>
    <div id="navigation" class="navigation" :class="{'navigation--gray': !navState && scrollLayer}">
        <div class="navigation__wrapper container--xl">
            <router-link :to="{name: 'home'}" class="navigation__brand">
                <img src="/images/logo.svg" alt="CGA" @click="goOnTop" />
            </router-link>
            <div class="navigation__items">
                <ul class="navigation__items-sections" :class="{'shown': navState}">
                    <li v-for="section in navSections" :key="section.id" @click="toggleNav(section.id)">
                        <a href="javascript:;" :class="{'active': activeNavItem(section.id), 'contrast': whiteNavItem(section.id)}">
                            {{section.title}}<Arrow class="nav-arrow" />
                        </a>
                    </li>
                </ul>
                <div class="navigation__items-children" :class="{'shown': navState}" @click="closeNav">
                    <ul class="navigation__items-subsections">
                        <li v-for="subsection in navSection.children" :key="subsection.id">
                            <router-link :to="{name: 'subsection', params: {sectionSlug: navSection.slug, subsectionSlug: subsection.slug}}">
                                {{subsection.title}}<Arrow class="nav-arrow" />
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="navigation__items__member-btn" @click="closeNav">
                    <router-link :class="{'contrast': navState}" :to="{path: memberSpace}">
                        {{translate('nav.connection')}}
                    </router-link>
                </div>
                <button class="navigation__items__hamburger" @click="burgerActions" :class="{'active': navState}">
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Arrow from '../views/shared/elements/Arrow.vue';
import { scrollToggler } from '../helpers/index';

export default {
    props: ['sections'],
    components: {
        Arrow
    },
    data () {
        return {
            scrollLayer: false,
            navItemId: null,
            navSection: {}
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);

        if(!this.navState) {
            this.navItemId = null
        };
    },
    updated() {
        scrollToggler(this.navState);
    },
    methods: {
        goOnTop() {
            window.scrollTo({top: 0, behavior: 'smooth'})
            this.$store.commit('setNavFalse');
            this.navItemId = null;
        },
        handleScroll() {
            window.pageYOffset > 200 ? this.scrollLayer = true : this.scrollLayer = false;
        },
        toggleNav(id) {
            if(this.navItemId !== id) {
                this.targetSection(id);
                this.navItemId = id;
                this.$store.commit('setNavTrue');
            } else {
                this.navItemId = null;
                this.$store.commit('setNavFalse');
            }
        },
        burgerActions() {
            this.$store.commit('toggleNav');
        },
        closeNav() {
            this.$store.commit('setNavFalse');
            this.navItemId = null;
        },
        activeNavItem(id) {
            if(this.navState) {
                if(this.navItemId === id) {
                    return true
                }
            } else {
                if(this.activeSection?.id === id) {
                    return true
                }
            }
        },
        whiteNavItem(id) {
            if(this.navState) {
                if(this.navItemId !== id) {
                    return true
                }
            } else {
                return false
            }
        },
        targetSection(id) {
            return this.navSection = this.sections.find(s => s.id === id);
        }
    },
    computed: {
        ...mapGetters({
            navSections: 'getNavigationItems',
            navState: 'getNavState',
        }),
        activeSection() {
            return this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
        },
        memberSpace() {
            const memberSpace = this.$store.getters.getSectionByType('protected');
            if(memberSpace) {
                return `/${this.$route.params.locale}/${memberSpace.slug}/${memberSpace.collections[0].slug}`
            } else {
                return `/${this.$route.params.locale}/${this.login.slug}`
            }
        },
        login() {
            return this.$store.getters.getSectionByType('login');
        }
    }
}
</script>