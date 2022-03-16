<template>
    <div class="member-space-page">
        <GrayBlock :section="section" />
        <div class="member-space-page__container">
            <SubsectionNav :section="section" :collection="collection" />
            <div class="member-space-page__collections">
                <DocumentsDropdown v-for="page in collection.pages" :key="page.id" :page="page" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemberSpacePage',
    props: ['section', 'collection'],
    components: {
		GrayBlock: () => import('@/views/memberSpace/GrayBlock.vue' /* webpackChunkName: "gray-block" */),
		SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /* webpackChunkName: "subsection-nav" */),
		DocumentsDropdown: () => import('@/views/memberSpace/DocumentsDropdown.vue' /* webpackChunkName: "documents-dropdown" */),
    },
    data() {
        return {
            pageId: null,
        }
    }
}
</script>