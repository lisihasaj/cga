<template>
    <ul class="locales" @click="open = false">
        <li class="current-locale">
            {{$route.params.locale}}
        </li>
        <li v-for="l in locales" :key="l.key">
            <a :href="`/${l.key}/${l.root_slug}`" @click.prevent="changeLanguage(l.key)">
                {{l.key}}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Locales',
    data() {
        return {
            locales: []
        }
    },
    mounted () {
        if (window_locales) {
            let locales = JSON.parse(window_locales);
            this.locales = locales.filter(l => l.key !== this.$route.params.locale);
        }
    },
    methods: {
        changeLanguage (l) {
            if (l == this.$route.params.locale) return;
            document.querySelector('body').style.opacity = 0;
            let routeName = this.$route.name;

            switch(routeName) {
                case 'home': {
                    window.location.href = `${window.location.origin}/${l}`
                    break;
                }
                case 'section': {
                    window.location.href = `${window.location.origin}/${l}/${this.activeSection.slugs[l]}`
                    break;
                }
                case 'member': {
                    window.location.href = `${window.location.origin}/${l}/${this.memberSpace.slugs[l]}`
                    break;
                }
                case 'subsection': {
                    window.location.href = `${window.location.origin}/${l}/${this.activeSection.slugs[l]}/${this.activeSubsection.slugs[l]}`
                    break;
                }
                case 'collection': {
                    window.location.href = `${window.location.origin}/${l}/${this.memberSpace.slugs[l]}/${this.activeCollection.slugs[l]}`
                    break;
                }
                case 'page': {
                    window.location.href = `${window.location.origin}/${l}/${this.activeSection.slugs[l]}/${this.activeSubsection.slugs[l]}/${this.activePage.slugs[l]}`
                    break;
                }
            }
        },
    },
    computed: {
        activeSection() {
            return this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
        },
        activeSubsection() {
            return this.activeSection.children.find(ss => ss.slug === this.$route.params.subsectionSlug);
        },
        activePage() {
            return this.$store.getters.getPageBySlug(this.$route.params.pageSlug);
        },
        memberSpace() {
            return this.$store.getters.getSectionBySlug(this.$route.params.memberSpaceSlug);
        },
        activeCollection() {
            return this.memberSpace.collections.find(c => c.slug === this.$route.params.collectionSlug);
        }
    }
}
</script>