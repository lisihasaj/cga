<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'MemberSpace',
    props: ['section'],
    created() {
        this.$router.push({name: 'collection', params: {memberSpaceSlug: this.section.slug, collectionSlug: this.section.collections[0].slug}});
    },
}
</script>