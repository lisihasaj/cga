<template>
    <div class="wish-cards-modal">
        <div class="wish-cards-modal__wrapper">
            <span @click="closeModal"></span>
            <swiper :options="swiperOptions" ref="modalSwiper">
                <swiper-slide v-for="card in cards" :key="card.id">
                    <img class="image" :src="thumbnailUrl(card.fields.image.value[0].url)" alt="" />
                </swiper-slide>
            </swiper>
            <div class="arrows">
                <i class="icon-left-open" id="prev"></i>
                <i class="icon-right-open" id="next"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import { sharedSwiperOptions } from '../../constants';

export default {
    name: 'WishCardsModal',
    props: ['cards'],
    components: {
        SwiperSlide,
        Swiper
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 0,
                ...sharedSwiperOptions,
                navigation: {
                    prevEl: '#prev',
                    nextEl: '#next'
                }
            }
        }
    },
    mounted() {
        const modalSwiper = this.$refs.modalSwiper.$swiper;
        const swiperCard = this.$parent.$refs.swiperCard.$swiper;
        const swiperThumb = this.$parent.$refs.swiperThumb.$swiper;
        modalSwiper.controller.control = swiperCard && swiperThumb;

        this.$refs.modalSwiper.$swiper.slideTo(this.$parent.cardId);
    },
    methods: {
        closeModal() {
            return this.$parent.modal = false;
        }
    }
}
</script>