<template>
    <div class="login">

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

        <div class="login__wrapper container--sm">
            <div class="page-title" v-html="section.content" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out"></div>
            <div class="customer-block">

                <div class="customer-block__box">
                    <div class="box-title" v-html="section.fields.member_space.value" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out"></div>
                    <ValidationObserver class="box-form" ref="observer" @submit.prevent="login">
                        <ValidationProvider rules="required" class="box-form__input" v-slot="{errors}" data-aos="fade-up" data-aos-delay="350" data-aos-easing="ease-out">
                            <p>{{translate('memberSpace.username')}}</p>
                            <input required name="username" v-model="values.username" type="text" :class="{'invalid': errors[0]}" />
                        </ValidationProvider>
                        <ValidationProvider rules="required" class="box-form__input" v-slot="{errors}" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-out">
                            <p>{{translate('memberSpace.password')}}</p>
                            <input required name="password" v-model="values.password" type="password" :class="{'invalid': errors[0]}" />
                        </ValidationProvider>
                    </ValidationObserver>
                    <p class="error box-error" v-if="error">{{submitError}}</p>
                    <button class="box-btn" :disabled="loading" :class="{'no-hover': loading}" @click="validate">
                        <i v-if="loading" class="icon-spin5"></i>
                        <span v-else>{{translate('nav.connection')}}</span>
                    </button>
                </div>

                <div class="customer-block__box">
                    <div class="box-title" v-html="section.fields.client_account.value" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out"></div>
                    <a href="https://cga.brokinweb.ch/fr/login" target="_blank" class="box-btn" data-aos="fade-up" data-aos-delay="350" data-aos-easing="ease-out">
                        {{translate('memberSpace.access')}}
                    </a>
                </div>

            </div>
            <router-link class="home-link" :to="{name: 'home'}">
                {{translate('memberSpace.returnHome')}}
            </router-link>
        </div>
    </div>
</template>

<script>
import formMixin from '@/mixins/form';
import {setLocalStorageKey} from '../../helpers/index';
export default {
    name: 'MemeberLogin',
    props: ['section'],
    data() {
        return {
            values: {
                username: '',
                password: ''
            },
            loading: false,
            error: false,
            submitError: ''
        }
    },
    mixins: [formMixin],
    methods: {
        async login() {
            this.loading = true;

            axios.post(`/${this.$route.params.locale}/api/v3/login`, this.values)
                .then(response => {
                    setLocalStorageKey('token', response.data.access_token, 1);
                    this.$store.dispatch('getProtectedSections')
                        .then(() => {
                            this.error = false;
                            this.loading = false;
                            this.$router.push({name: 'collection', 
                                params: {
                                    sectionSlug: this.memberSpace.slug, 
                                    subsectionSlug: this.memberSpace.collections[0].slug
                                }
                            });
                        })
                })
                .catch(() => {
                    this.loading = false;
                    localStorage.removeItem('token');
                    this.error = true;
                    this.submitError = 'Vous ne pouvez pas vous connecter par ce compte';
                })
        },
        async validate() {
            const isValid = await this.validateForm();

            if (isValid) {
                this.error = false;
                this.login();
            } else {
                this.error = true;
                this.submitError = this.translate('contact.error');
            };
        },
    },
    computed: {
        memberSpace() {
            return this.$store.getters.getSectionByType('protected');
        }
    }
}
</script>