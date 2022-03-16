<template>
    <div class="consulting-block" :class="{'consulting-block__about-subsection': section.type === 'about'}">
        <div class="consulting-block__wrapper container--xl">
            <div class="consulting-block__content">
                <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out" class="text" v-html="section.fields.consulting.value"></div>
                <router-link v-if="section.type === 'home'" class="cta" :to="{name: 'subsection', params: {sectionSlug: benefits.slug, subsectionSlug: businessInsurance.slug}}">
                    {{translate('shared.learnMore')}}
                </router-link>
                <div class="cards">
                    <div v-for="(item, index) in cardImages" :key="index" class="cards__item" @click="item.link" :data-aos="item.animation" :data-aos-delay="item.aosDelay" :data-aos-easing="item.aosEasing">
                        <div class="image-wrapper">
                            <img :src="item.image" v-lazy="item.image" alt="" />
                        </div>
                        <h4>{{item.title}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConsultingBlock',
    props: ['section'],
    computed: {
        benefits() {
            return this.$store.getters.getSectionByType('benefits');
        },
        businessInsurance() {
            return this.benefits.children.find(ss => ss.type === 'business_insurance');
        },
        realEstate() {
            return this.benefits.children.find(ss => ss.type === 'real_estate');
        },
        cardImages() {
            return [
                {
                    image: '/images/consultingCard1.jpeg',
                    title: this.translate('shared.comercialInsurance'),
                    link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: this.benefits.slug, subsectionSlug: this.businessInsurance.slug}})},
                    animation: 'fade-right',
                    aosDelay: 250,
                    aosEasing: 'ease-out'
                },
                {
                    image: '/images/consultingCard2.jpeg',
                    title: this.translate('shared.propertyInsurance'),
                    link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: this.benefits.slug, subsectionSlug: this.realEstate.slug}})},
                    animation: 'fade-left',
                    aosDelay: 350,
                    aosEasing: 'ease-out'
                }
            ]
        }
    },
}
</script>