<template>
    <div class="our-accreditations-block">
        <div class="our-accreditations-block__wrapper container--sm">
            <div class="box" v-html="subsection.fields.our_accreditations.value" data-aos="fade" data-aos-delay="200" data-aos-easing="ease-out"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccreditationsBlock',
    props: ['subsection']
}
</script>