<template>
    <div class="section"></div>
</template>

<script>
export default {
    //Automatic redirection to its child section
    name: 'Benefits',
    props: ['section'],
    created() {
        this.$router.push({name: 'subsection', params: {sectionSlug: this.section.slug, subsectionSlug: this.businessInsurance.slug}});
    },
    computed: {
        businessInsurance() {
            return this.section.children.find(ss => ss.type === 'business_insurance');
        }
    }
}
</script>