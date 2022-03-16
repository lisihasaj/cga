<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <template v-for="slider in sliders">
                <HalfContainerBlock :key="slider.id" :data="slider.pages" :class="slider.class" />
            </template>
            <ContactBlock />
        </div>
    </div>
</template>

<script>
export default {
    name: 'RealEstateInsurance',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
        ContactBlock: () => import('@/views/shared/components/ContactBlock.vue' /*webpackChunkName: "contact-block"*/),
    },
    computed: {
        sliderOne() {
            return this.subsection.collections.find(c => c.type === 'slider_1');
        },
        sliderTwo() {
            return this.subsection.collections.find(c => c.type === 'slider_2');
        },
        sliders() {
            return [
                {
                    id: this.sliderOne.id,
                    class: 'real-estate--container-1',
                    pages: this.sliderOne.pages.map(page => {
                        return {
                            text: page.content,
                            image: page.fields.image.value[0].url,
                            cta: {
                                label: null,
                            }
                        }
                    })
                },
                {
                    id: this.sliderTwo.id,
                    class: 'real-estate--container-2',
                    pages: this.sliderTwo.pages.map(page => {
                        return {
                            text: page.content,
                            image: page.fields.image.value[0].url,
                            cta: {
                                label: null,
                            }
                        }
                    })
                }
            ]
        }
    }
}
</script>