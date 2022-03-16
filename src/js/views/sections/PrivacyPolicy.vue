<template>
    <div class="privacy-policy">
        <div class="subsection-nav">
            <div class="subsection-nav__wrapper container--lg">
                <ul class="items">
                    <li>
                        <router-link :to="{name: 'section', params: {sectionSlug: section.slug}}">
                            {{section.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="privacy-policy__wrapper container--sm" v-html="section.content"></div>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy',
    props: ['section'],
    components: {
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
    }
}
</script>