<template>
    <div class="planet" v-html="fullScreenUrl(subsection.fields.planet_image.value)" data-aos="fade-up" data-aos-delay="350" data-aos-easing="ease-out"></div>
</template>

<script>
export default {
    name: 'Planet',
    props: ['subsection']
}
</script>