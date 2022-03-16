<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <OurCommitmentsBlock :subsection="subsection" />
            <!-- <MainConceptsBlock :subsection="subsection" /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Values',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        MainConceptsBlock: () => import('@/views/cga/MainConceptsBlock.vue' /*webpackChunkName: "main-concepts-block"*/),
        OurCommitmentsBlock: () => import('@/views/cga/OurCommitmentsBlock.vue' /*webpackChunkName: "our-commitments-block"*/),
    }
}
</script>