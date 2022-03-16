<template>
    <div class="subsection-text-block">
        <div class="subsection-text-block__wrapper container--lg">
            <div class="subsection-text-block__content" v-html="subsection.content" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-out"></div>
            <ScrollDown v-if="showScroll()" class="subsection-text-block__scroll" />
        </div>
    </div>
</template>

<script>
import ScrollDown from '../elements/ScrollDown.vue';

export default {
    name: 'SubsectionTextBlock',
    props: ['subsection'],
    components: {
        ScrollDown
    },
    methods: {
        showScroll() {
            const targetSubsection = ['about', 'team'];
            return targetSubsection.includes(this.subsection.type) ? true : false;
        }
    }
}
</script>