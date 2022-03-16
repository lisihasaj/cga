<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <OurAccreditationsBlock :subsection="subsection" />
            <ContactBlock />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accreditations',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        OurAccreditationsBlock: () => import('@/views/cga/OurAccreditationsBlock.vue' /*webpackChunkName: "our-accreditations-block"*/),
        ContactBlock: () => import('@/views/shared/components/ContactBlock.vue' /*webpackChunkName: "contact-block"*/),
    }
}
</script>