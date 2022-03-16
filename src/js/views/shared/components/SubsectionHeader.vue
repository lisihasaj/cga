<template>
    <div class="subsection__header" :style="{backgroundImage: `url(${fullScreenUrl(subsection.fields.header_image.value[0].url)})`}" data-aos="fade" data-aos-delay="250" data-aos-easing="ease-out"></div>
</template>

<script>
export default {
    name: 'SubsectionHeader',
    props: ['subsection']
}
</script>