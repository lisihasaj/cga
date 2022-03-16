<template>
    <div class="wish-cards">
        <SubsectionNav :section="section" :subsection="subsection" />
        <div class="wish-cards__wrapper">
            <div class="wish-cards__wrapper__title" v-html="subsection.content" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out"></div>
            <div class="card-swiper__container">
                <swiper class="card-swiper__body" :options="swiperCardOptions" ref="swiperCard" data-aos="fade" data-aos-delay="400" data-aos-easing="ease-out">
                    <swiper-slide v-for="card in cards" :key="card.id">
                        <div class="image" :style="{backgroundImage: `url(${fullScreenUrl(card.fields.image.value[0].url)})`}" @click="openModal(card)"></div>
                        <div class="text" v-html="card.content" data-aos="fade-up" data-aos-delay="550" data-aos-easing="ease-out" @click="openModal(card)"></div>
                    </swiper-slide>
                </swiper>
                <i class="icon-left-open" id="prevCard"></i>
                <i class="icon-right-open" id="nextCard"></i>
            </div>
            <div class="thumb-swiper__container">
                <swiper class="thumb-swiper__body" :options="swiperThumbOptions" ref="swiperThumb">
                    <swiper-slide v-for="card in cards" :key="card.id">
                        <span>{{card.fields.year.value}}</span>
                    </swiper-slide>
                </swiper>
                <div class="thumb-swiper__arrows">
                    <i class="icon-left-open" id="prevThumb"></i>
                    <i class="icon-right-open" id="nextThumb"></i>
                </div>
            </div>
        </div>
        <transition name="swiper">
            <WishCardsModal :section="section" :subsection="subsection" :cards="cards" v-if="modal" />
        </transition>
    </div>
</template>

<script>
import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import { sharedSwiperOptions } from '../../constants';
import { scrollToggler } from '../../helpers/index';

export default {
    name: 'WishCards',
    props: ['section', 'subsection'],
    components: {
        SwiperSlide,
        Swiper,
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        WishCardsModal: () => import('@/views/publications/WishCardsModal.vue' /*webpackChunkName: "wish-cards-modal"*/)
    },
    data() {
        return {
            modal: false,
            cardId: null,
            swiperCardOptions: {
                slidesPerView: 1.2,
                spaceBetween: 0,
                ...sharedSwiperOptions,
                navigation: {
                    prevEl: '#prevCard',
                    nextEl: '#nextCard'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 2.3,
                    },
                    850: {
                        slidesPerView: 1.7,
                    },
                    600: {
                        slidesPerView: 1.5,
                    },
                }
            },
            swiperThumbOptions: {
                slidesPerView: 5,
                spaceBetween: 10,
                ...sharedSwiperOptions,
                navigation: {
                    prevEl: '#prevThumb',
                    nextEl: '#nextThumb'
                },
            }
        }
    },
    mounted() {
        const swiperCard = this.$refs.swiperCard.$swiper;
        const swiperThumb = this.$refs.swiperThumb.$swiper;
        swiperCard.controller.control = swiperThumb;
        swiperThumb.controller.control = swiperCard;
    },
    updated() {
        scrollToggler(this.modal);
    },
    methods: {
        openModal(card) {
            window.scrollTo(0,0)
            this.modal = true;
            this.cardId = this.cards.indexOf(card);
        }
    },
    computed: {
        cards() {
            return this.subsection.collections.find(c => c.type === 'wish_cards').pages;
        }
    }
}
</script>