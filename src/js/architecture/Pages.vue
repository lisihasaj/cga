<template>
	<transition-group name="fade" mode="out-in" tag="div" appear>
		<NewsArticle v-if="activeSubsection.type == 'news'" :section="activeSection" :subsection="activeSubsection" :page="activePage" key="1" />
	</transition-group>
</template>

<script>
import { metaConfig, formatMeta } from '../formatMeta';

export default {
    name: 'Pages',
    components: {
        NewsArticle: () => import('@/views/pages/NewsArticle.vue' /*webpackChunkName: "news-article"*/),
    },
    mixins: [metaConfig],
    created() {
			this.setData()
		},
    watch: {
        $route: function () {
            this.setData()
        }
    },
    methods: {
        setData() {
            this.params = formatMeta(this.activeSection)
            this.$nextTick( () => {
                this.$emit('updateHead')
            });
        }
    },
    computed: {
        activeSection () {
            return this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
        },
        activeSubsection () {
            return this.activeSection.children.find(ss => ss.slug === this.$route.params.subsectionSlug);
        },
        activePage () {
            return this.$store.getters.getPageBySlug(this.$route.params.pageSlug);
        }
    }
}
</script>