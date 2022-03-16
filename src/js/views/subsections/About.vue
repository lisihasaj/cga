<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <ConsultingBlock :section="subsection" />
            <HalfContainerBlock :data="halfContainerData" class="about--container" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        ConsultingBlock: () => import('@/views/shared/components/ConsultingBlock.vue' /*webpackChunkName: "consulting-block"*/),
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
    },
    computed: {
        halfContainerData() {
            return [
                {
                    text: this.subsection.fields.insurance_partner.value,
                    image: this.subsection.fields.insurance_partner_background.value[0].url,
                    cta: {
                        label: null,
                    }
                }
            ]
        }
    }
}
</script>