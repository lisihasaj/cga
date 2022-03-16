<template>
    <div class="half-container-block">
        <swiper class="half-container-block__swiper" :options="swiperOptions">
            <swiper-slide class="half-container-block__slide" v-for="(page, index) in data" :key="index">
                <div class="image" :style="{backgroundImage: `url(${fullScreenUrl(page.image)})`}" data-aos="fade-up" data-aos-delay="350" data-aos-easing="ease-out"></div>
                <div class="content-wrapper">
                    <div class="content">
                        <div class="content-text" v-html="page.text" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out"></div>
                        <button class="cta" @click="page.cta.route" v-if="page.cta.label">
                            {{page.cta.label}}
                        </button>
                    </div>
                    <div class="slider-navigation" v-if="data.length > 1">
                        <i class="icon-left-open slider-prev-button"></i>
                        <div class="slider-bullets"></div>
                        <i class="icon-right-open slider-next-button"></i>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { SwiperSlide, Swiper } from 'vue-awesome-swiper';
import { sharedSwiperOptions } from '../../../constants';

export default {
    // NOTE: This componenent is used in multiple pages
    // Data object is composed in parent component
    name: 'HalfedContainerBlock',
    props: ['section', 'data'],
    components: {
        SwiperSlide,
        Swiper
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                ...sharedSwiperOptions,
                effect: 'fade',
                pagination: {
                    el: '.slider-bullets',
                    type: 'bullets'
                },
                navigation: {
                    prevEl: '.slider-prev-button',
                    nextEl: '.slider-next-button'
                },
            }
        }
    },
}
</script>