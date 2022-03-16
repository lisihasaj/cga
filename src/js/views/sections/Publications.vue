<template>
    <div class="section"></div>
</template>

<script>
export default {
    //Automatic redirection to its child section
    name: 'CGA',
    props: ['section'],
    created() {
        this.$router.push({name: 'subsection', params: {sectionSlug: this.section.slug, subsectionSlug: this.about.slug}});
    },
    computed: {
        about() {
            return this.section.children.find(ss => ss.type === 'news');
        }
    }
}
</script>