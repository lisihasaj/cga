<template>
    <div class="history-block" :style="{backgroundImage: `url(${fullScreenUrl(section.fields.history_background.value[0].url)})`}">
        <div class="history-block__wrapper container--lg">
            <div class="history-block__content">
                <div data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-out" class="text" v-html="section.fields.history.value"></div>
                <router-link data-aos="fade-left" data-aos-delay="250" data-aos-easing="ease-out" class="cta" :to="{name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: about.slug}}">
                    {{translate('home.discoverUs')}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryBlock',
    props: ['section', 'cga'],
    computed: {
        about() {
            return this.cga.children.find(ss => ss.type === 'about');
        }
    }
}
</script>