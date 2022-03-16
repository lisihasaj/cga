<template>
    <div class="news">
        <SubsectionNav :section="section" :subsection="subsection" />
        <div class="news__wrapper container--xl">
            <div class="news__title" v-html="subsection.content" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-out"></div>
            <div class="news__articles">
                <transition-group name="fade" mode="out-in">
                    <router-link class="article" v-for="article in articles" :key="article.id" :to="{name: 'page', params: {sectionSlug: section.slug, subsectionSlug: subsection.slug, pageSlug: article.slug}}" data-aos="fade" data-aos-delay="500" data-aos-easing="ease-out">
                        <div class="article__image" :style="{backgroundImage: `url(${fullScreenUrl(article.fields.image.value[0].url)})`}"></div>
                        <div class="article__text">
                            <p>{{article.fields.date.value}}</p>
                            <h4>{{article.title}}</h4>
                            <span>{{translate('publications.readMore')}}</span>
                        </div>
                    </router-link>
                </transition-group>
            </div>
            <transition name="fade">
                <button v-show="visibleArticles < allArticles.length" class="news__cta" @click="showMoreArticles">
                    {{translate('publications.seeMoreArticles')}}
                </button>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    props: ['section', 'subsection'],
    components: {
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/)
    },
    data() {
        return {
            visibleArticles: 4,
            allArticles: []
        }
    },
    mounted() {
        this.allArticles = this.fetchedArticles;
    },
    methods: {
        showMoreArticles() {
            if(this.visibleArticles < this.allArticles.length) {
                return this.visibleArticles += 2;
            }
        }
    },
    computed: {
        fetchedArticles() {
            return this.subsection.collections.find(c => c.type === 'news').pages;
        },
        articles() {
            return this.allArticles.slice(0, this.visibleArticles);
        }
    }
}
</script>