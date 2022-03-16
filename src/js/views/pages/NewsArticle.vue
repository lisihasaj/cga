<template>
    <div class="news-article">
        <SubsectionNav :section="section" :subsection="subsection" />
        <div class="news-article__wrapper">
            <div class="news-article__header-elements container--xl">
                <router-link class="return" :to="{name: 'subsection', params: {sectionSlug: section.slug, subsectionSlug: subsection.slug}}">
                    return to articles list
                </router-link>
                <h6 class="braced-title">(news)</h6>
            </div>

            <HalfContainerBlock :data="halfContainerData" class="news-article--container" />

            <div class="news-article__swiper">
                <h2 data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">
                    {{translate('publications.otherArticles')}}
                </h2>
                <i class="icon-left-open button-prev"></i>
                <swiper :options="swiperOptions" ref="articleSlider" data-aos="fade" data-aos-easing="ease-out" data-aos-delay="100">
                    <swiper-slide v-for="article in articles" :key="article.id">
                        <router-link class="slider" :to="{name: 'page', params: {sectionSlug: section.slug, pageSlug: article.slug}}">
                            <div class="slider__image" :style="{backgroundImage: `url(${fullScreenUrl(article.fields.image.value[0].url)})`}"></div>
                            <div class="slider__text">
                                <p>{{article.fields.date.value}}</p>
                                <h4>{{article.title}}</h4>
                                <span>{{translate('publications.readMore')}}</span>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
                <i class="icon-right-open button-next"></i>
            </div>

        </div>
    </div>
</template>

<script>
import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import { find } from '@/helpers';

export default {
    name: 'NewsArticle',
    props: ['section', 'subsection', 'page'],
    components: {
        SwiperSlide,
        Swiper,
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/)
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 'auto',
                spaceBetween: 40,
                freeMode: false,
                preventClicks: true,
                mousewheel: true,
                preventClicksPropagation: true,
                slideToClickedSlide: true,
                navigation: {
                    prevEl: '.button-prev',
                    nextEl: '.button-next'
                },
                breakpoints: {
                    1920: {
                        slidesPerView: 4
                    }
                }
            }
        }
    },
    mounted() {
        this.$refs.articleSlider.$swiper.slideTo(this.index);
    },
    computed: {
        halfContainerData() {
            return [
                {
                    text: `<h1>${this.page.title}</h1><h6>${this.page.fields.date.value}</h6>${this.page.content}`,
                    image: this.page.fields.image.value[0].url,
                    cta: {
                        label: null,
                    }
                }
            ]
        },
        articles() {
            return find(this.subsection.collections, 'type', 'news').pages;
        },
        activePage() {
            return find(this.articles, 'slug', this.$route.params.pageSlug)
        },
        index() {
            return this.articles.indexOf(this.activePage);
        },
    }
}
</script>