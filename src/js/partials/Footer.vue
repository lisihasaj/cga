<template>
    <div class="footer" v-if="!memberSpace()">
        <div class="footer__wrapper container--lg">
            <div class="footer__content">
                <div class="footer__content-logo">
                    <img src="/images/whiteLogo.svg" alt="CGA" @click="goOnTop" />
                </div>
                <div class="footer__content-elements">
                    <div class="address" v-html="footer.content"></div>
                    <div class="link-blocks">
                        <div class="link-block" v-for="parent in allLinks" :key="parent.id">
                            <a class="link-block__parent-link" href="#" @click.prevent="parent.parentLink" :target="parent.target">{{parent.parentName}}</a>
                            <ul>
                                <li v-for="(children, index) in parent.children" :key="index">
                                    <a href="#" @click.prevent="children.link" :target="children.target">{{children.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="link-block">
                            <a class="link-block__parent-link" href="#" @click.prevent="actualities.parentLink" :target="actualities.target">{{actualities.parentName}}</a>
                            <ul>
                                <li v-for="(children, index) in actualities.children" :key="index">
                                    <a href="#" @click.prevent="children.link" :target="children.target">{{children.name}}</a>
                                </li>
                            </ul>
                            <div class="social-links">
                                <!-- <a :href="footer.fields.facebook.value" target="_blank"><i class="icon-facebook"></i></a> -->
                                <a :href="footer.fields.linkedin.value" target="_blank"><i class="icon-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__endnote">
                <p>©2021 cga genève</p>
                <router-link :to="{name: 'section', params: {sectionSlug: privacyPolicy.slug}}">{{translate('footer.privacyPolicy')}}</router-link>
                <p>{{translate('footer.designedBy')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import footerLinks from '@/mixins/footerLinks';

export default {
    name: 'Footer',
    data () {
        return {
        }
    },
    mixins: [footerLinks]
}
</script>