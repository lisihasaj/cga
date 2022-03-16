<template>
    <div class="our-commitments-block">
        <div class="our-commitments-block__wrapper container--sm">
            <div class="our-commitments-block__text" v-html="checkField(subsection, 'our_commitments') ? subsection.fields.our_commitments.value : ''" data-aos="fade-right" data-aos-delay="200" data-aos-easing="ease-out"></div>
            <img class="our-commitments-block__image" v-if="checkField(subsection, 'our_commitments_image')" :src="fullScreenUrl(subsection.fields.our_commitments_image.value[0].url)" alt="" data-aos="fade-left" data-aos-delay="350" data-aos-easing="ease-out" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurCommitmentsBlock',
    props: ['subsection']
}
</script>