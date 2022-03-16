<template>
    <div class="contact-block" id="contact">
        <div class="contact-block__wrapper container--lg">
            <div class="contact-block__text" v-html="contact.content" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out"></div>
            <ValidationObserver class="contact-block__contact-form" ref="observer" id="contactForm" @submit.prevent="onSubmit" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out">
                
                <form class="inputs" id="form">
                    <ValidationProvider rules="required" class="inputs__text-field col--49" v-slot="{errors}">
                        <input required name="last_name" v-model="values.last_name" :placeholder="translate('contact.lastName')" :class="{'invalid': errors[0]}" />
                    </ValidationProvider>
                    <ValidationProvider rules="required" class="inputs__text-field col--49" v-slot="{errors}">
                        <input required name="name" v-model="values.name" :placeholder="translate('contact.name')" :class="{'invalid': errors[0]}" />
                    </ValidationProvider>
                    <ValidationProvider rules="required" class="inputs__text-field col--49">
                        <input name="company_name" v-model="values.company_name" :placeholder="translate('contact.companyName')" />
                    </ValidationProvider>
                    <!-- <ValidationProvider rules="vat_validation" class="inputs__text-field col--49" v-slot="{errors}">
                        <input name="ide_number" v-model="values.ide_number" placeholder="N° IDE" :class="{'invalid': errors[0]}" v-mask="'CHE-###.###.###'" />
                    </ValidationProvider> -->
                    <ValidationProvider rules="required|email" type="email" class="inputs__text-field col--49" v-slot="{errors}">
                        <input name="email" v-model="values.email" :placeholder="translate('contact.email')" :class="{'invalid': errors[0]}" />
                    </ValidationProvider>
                    <ValidationProvider rules="required" class="inputs__textarea col--100" v-slot="{errors}">
                        <textarea name="message" v-model="values.message" :placeholder="translate('contact.message')" rows="3" :class="{'invalid': errors[0]}"></textarea>
                    </ValidationProvider>
                </form>

                <div class="validations-container col--100">
                    <div>
                        <p class="error" v-if="error">{{translate('contact.error')}}</p>
                        <p class="success" v-else-if="success">Votre demande est envoyée</p>
                    </div>
                    <button class="btn-container" :disabled="loading" :class="{'no-hover': loading}" @click="submitForm">
                        <i v-if="loading" class="icon-spin5"></i>
                        <span v-else>{{translate('contact.send')}}</span>
                    </button>
                </div>

            </ValidationObserver>
        </div>
    </div>
</template>

<script>
import formMixin from '@/mixins/form';
export default {
    name: 'ContactBlock',
    data() {
        return {
            values: {
                last_name: '',
                name: '',
                company_name: '',
                ide_number: '',
                email: '',
                message: ''
            },
            error: false,
            loading: false,
            success: false
        }
    },
    mixins: [formMixin],
    methods: {
        onSubmit() {
            this.loading = true;

            axios.post(`/api/v2/mail/send`, this.values)
                .then(() => {
                    this.loading = false;
                    this.success = true;
                })
                .catch(error => {
                    console.error(error);
                    alert('Error. Check form data and try again');
                    this.loading = false;
                })
        },
        async submitForm() {
            const isValid = await this.validateForm();

            if (isValid) {
                this.error = false;
                this.onSubmit();
            } else {
                return this.error = true;
            };
        },
    },
    computed: {
        contact() {
            return this.$store.getters.getSectionByType('contact');
        }
    }
}
</script>