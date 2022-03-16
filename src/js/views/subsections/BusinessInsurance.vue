<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <KeyPointsBlock :keyPoints="keyPoints" />
            <ContactBlock />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BussinessInsurance',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        KeyPointsBlock: () => import('@/views/benefits/KeyPointsBlock.vue' /*webpackChunkName: "key-points-block"*/),
        ContactBlock: () => import('@/views/shared/components/ContactBlock.vue' /*webpackChunkName: "contact-block"*/),
    },
    computed: {
        keyPoints() {
            return this.subsection.collections.find(c => c.type === 'business_insurance').pages
        }
    }
}
</script>