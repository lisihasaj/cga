<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <div class="subsection__body">
            <HalfContainerBlock :data="halfContainerData" class="network--container" />
            <Planet :subsection="subsection" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Network',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
        Planet: () => import('@/views/cga/Planet.vue' /*webpackChunkName: "planet"*/),
    },
    computed: {
        halfContainerData() {
            return [
                {
                    text: this.subsection.content,
                    image: this.subsection.fields.network_image.value[0].url,
                    cta: {
                        label: this.translate('shared.learnMore'),
                        route: () => {window.open('https://www.trustrc.com/en/')}
                    }
                }
            ]
        }
    }
}
</script>