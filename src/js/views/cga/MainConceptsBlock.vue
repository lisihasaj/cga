<template>
    <div class="main-concepts-block">
        <div class="main-concepts-block__wrapper container--md">
            <div class="image" data-aos="fade" data-aos-delay="200" data-aos-easing="ease-out" v-if="checkField(subsection, 'main_concepts_image')">
                <img :src="fullScreenUrl(subsection.fields.main_concepts_image.value[0].url)" alt="" />
            </div>
            <div class="boxes" v-html="checkField(subsection, 'main_concepts') ? subsection.fields.main_concepts.value : ''" data-aos="fade-up" data-aos-delay="350" data-aos-easing="ease-out"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainConceptsBlock',
    props: ['subsection']
}
</script>