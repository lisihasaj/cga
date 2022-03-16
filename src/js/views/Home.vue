<template>
    <div class="home">
        <div class="home__wrapper">
            <div class="home__header" :style="{backgroundImage: `url(${fullScreenUrl(section.fields.home_background.value[0].url)})`}">
                <div class="home__header-content container--md" v-html="section.content" data-aos="fade-right" data-aos-delay="400" data-aos-easing="ease-out"></div>
                <ScrollDown class="home__header__scroll" />
            </div>
            <div class="home__body">
                <ConsultingBlock :section="section" />
                <HistoryBlock :section="section" :cga="cga" />
                <HalfContainerBlock :section="section" :data="halfContainerData" class="home--container" />
                <PublicationsBlock :section="section" />
                <ContactBlock />
            </div>
        </div>
    </div>
</template>

<script>
import { metaConfig, formatMeta } from '../formatMeta'
import ScrollDown from './shared/elements/ScrollDown.vue';
import ContactBlock from '@/views/shared/components/ContactBlock.vue';

export default {
    name: 'Home',
    components: {
        ScrollDown,
        ConsultingBlock: () => import('@/views/shared/components/ConsultingBlock.vue' /*webpackChunkName: "consulting-block"*/),
        HistoryBlock: () => import('@/views/home/HistoryBlock.vue' /*webpackChunkName: "history-block"*/),
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
        PublicationsBlock: () => import('@/views/home/PublicationsBlock.vue' /*webpackChunkName: "publications-block"*/),
        ContactBlock
    },
    mixins: [metaConfig],
    created() {
        this.setData()
    },
    mounted() {
        if(this.$route.hash) {
            setTimeout(() => {
                window.location = '#contact';
            }, 200)
        }
    },
    methods: {
        setData () {
            if (!this.section) {
                this.$router.push({name: 'not-found'})
                return;
            };
            
            this.params = formatMeta(this.section)
            this.$nextTick( () => {
                this.$emit('updateHead')
            })
        }
    }, 
    computed: {
        section() {
            return this.$store.getters.getSectionByType('home')
        },
        cga() {
            return this.$store.getters.getSectionByType('cga');
        },
        accreditations() {
            return this.cga.children.find(ss => ss.type === 'accreditations');
        },
        halfContainerData() {
            return [
                {
                    text: this.section.fields.insurance_partner.value,
                    image: this.section.fields.insurance_partner_background.value[0].url,
                    cta: {
                        label: this.translate('shared.learnMore'),
                        route: () => {this.$router.push({name: 'subsection', params: {sectionSlug: this.cga.slug, subsectionSlug: this.accreditations.slug}})}
                    }
                }
            ]
        }
    }

}
</script>