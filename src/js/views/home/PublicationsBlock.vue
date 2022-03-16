<template>
    <div class="publications-block">
        <div class="publications-block__wrapper container--xl">
            <div class="text" v-html="section.fields.news.value" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out"></div>
            <router-link class="cta" :to="{name: 'section', params: {sectionSlug: publications.slug}}" data-aos="fade-up" data-aos-delay="150" data-aos-easing="ease-out">
                {{translate('home.seeAllNews')}}
            </router-link>
            <div class="cards">
                <div class="card" v-for="(card, index) in publicationsCards" :key="index">
                    <div class="card__image-wraper"></div>
                    <div class="card__content">
                        <h4>{{card.title}}</h4>
                        <p>{{card.subtitle}}</p>
                        <router-link :to="{}">{{translate('shared.learnMore')}}<Arrow class="publications-arrow" /></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from '../shared/elements/Arrow.vue';

export default {
    name: 'PublicationsBlock',
    props: ['section'],
    components: {
        Arrow
    },
    computed: {
        publications() {
            return this.$store.getters.getSectionByType('publications');
        },
        publicationsCards() {
            return [
                {
                    title: 'NOUVELLE RÉCEPTION',
                    subtitle: 'CGA s’offre une nouvelle réception pour mieux accueillir ses clients.'
                },
                {
                    title: 'NOUVELLE RÉCEPTION',
                    subtitle: 'CGA s’offre une nouvelle réception pour mieux accueillir ses clients.'
                },
                {
                    title: 'NOUVELLE RÉCEPTION',
                    subtitle: 'CGA s’offre une nouvelle réception pour mieux accueillir ses clients.'
                },
                {
                    title: 'NOUVELLE RÉCEPTION',
                    subtitle: 'CGA s’offre une nouvelle réception pour mieux accueillir ses clients.'
                }
            ]
        }
    }
}
</script>