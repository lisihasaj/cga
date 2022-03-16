<template>
    <div class="key-points-block">
        <div class="key-points-block__wrapper container--sm">
            <div class="item-block" v-for="block in keyPoints" :key="block.id" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">
                <div class="item-block__text" v-html="block.content" data-aos="fade-right" data-aos-delay="350" data-aos-easing="ease-out"></div>
                <div class="item-block__image">
                    <img :src="fullScreenUrl(block.fields.image.value[0].url)" data-aos="fade" data-aos-delay="400" data-aos-easing="ease-out" />
                </div>
            </div>
            <h5 v-html="translate('benefits.lastCardText')"></h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KeyPointsBlock',
    props: ['keyPoints'],
}
</script>