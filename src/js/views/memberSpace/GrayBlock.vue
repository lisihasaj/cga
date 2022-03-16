<template>
    <div class="gray-block">
        <div class="gray-block__content" v-html="section.content" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out"></div>
        <div class="gray-block__links">
            <span v-for="(link, index) in links" :key="index" @click="link.route">
                {{link.label}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GrayBlock',
    props: ['section'],
    computed: {
        privacyPolicy() {
            return this.$store.getters.getSectionByType('privacy_policy')
        },
        home() {
            return this.$store.getters.getSectionByType('home')
        },
        links() {
            return [
                {
                    label: this.translate('footer.privacyPolicy'),
                    route: () => this.$router.push({name: 'section', params: {sectionSlug: this.privacyPolicy.slug}})
                },
                {
                    label: this.translate('memberSpace.returnHome'),
                    route: () => this.$router.push({name: 'home'})
                }
            ]
        }
    }
}
</script>