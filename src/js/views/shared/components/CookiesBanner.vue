<template>
    <transition name="fade">
        <div class="cookies-banner" v-if="showBanner">
            <div class="cookies-banner__content" v-html="privacyPolicy.fields.cookies_banner.value"></div>
            <div class="cookies-banner__actions">
                <button class="action ok" @click="acceptCookies">
                    OK
                </button>
                <router-link class="action learn-more" :to="{name: 'section', params: {sectionSlug: privacyPolicy.slug}}">
                    {{translate('learnMore')}}
                </router-link>
                <div class="settings">
                    <button class="settings__btn" @click="showPreferences = !showPreferences">
                        <img src="/images/settings-icon.svg" />
                    </button>
                    <div class="settings__menu" :class="{'opened': showPreferences}">
                        <h5>{{translate('preferences')}}</h5>
                        <hr />
                        <div class="label-container">
                            <input class="checkbox" type="checkbox" id="necessary" v-model="necessary" name="necessary">
                            <label for="necessary">{{translate('necessaryCookies')}}</label>
                        </div>
                        <div class="label-container">
                            <input class="checkbox" type="checkbox" id="analytics" v-model="analytics" name="analytics">
                            <label for="analytics">{{translate('analytics')}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    name: "CookiesBanner",
    data() {
        return {
            showBanner: false,
            showPreferences: false,
            necessary: true,
            analytics: true
        }
    },
    mounted() {
        const activeCookies = Cookies.get('privacyPolicy');
        if(activeCookies) return;
        this.showBanner = true;
    },
    methods: {
        acceptCookies() {
            Cookies.set('privacyPolicy', 'true', { expires: 365 });
            Cookies.set('ncs_cga', `${this.necessary}`, { expires: 365 });
            Cookies.set('anl_cga', `${this.analytics}`, { expires: 365 });
            this.showBanner = false;
            document.location.reload();
        }
    },
    computed: {
        privacyPolicy() {
            return this.$store.getters.getSectionByType('privacy_policy');
        }
    }
}
</script>