import { scrollInto } from "../helpers";

const footerLinks = {
    methods: {
        goOnTop() {
            window.scrollTo({top: 0, behavior: 'smooth'})
        },
        memberSpace() {
            const activeSection = this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
            if(activeSection?.type === 'login' || activeSection?.type === 'protected') {
                return true
            } else {
                return false
            }
        },
        goToContact() {
            const contact = document.getElementById('contact');
            if(contact) {
                scrollInto(contact)
            } else {
                this.$router.push({name: 'home', hash: '#contact'});
            }
        }
    },
    computed: {
        footer() {
            return this.$store.getters.getSectionByType('footer');
        },
        privacyPolicy() {
            return this.$store.getters.getSectionByType('privacy_policy');
        },
        allLinks() {
            const cga = this.$store.getters.getSectionByType('cga');
            const benefits = this.$store.getters.getSectionByType('benefits');
            const about = cga.children.find(ch => ch.type === 'about');
            const team = cga.children.find(ch => ch.type === 'team');
            const values = cga.children.find(ch => ch.type === 'values');
            const accreditations = cga.children.find(ch => ch.type === 'accreditations');
            const network = cga.children.find(ch => ch.type === 'network');
            const businessInsurance = benefits.children.find(ch => ch.type === 'business_insurance');
            const realEstate = benefits.children.find(ch => ch.type === 'real_estate');
            
            return [
                {
                    id: 0,
                    parentName: this.translate('footer.aboutCGA'),
                    parentLink: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: about.slug}})},
                    target: '_self',
                    children: [
                        {
                            name: about.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: about.slug}})},
                            target: '_self'
                        },
                        {
                            name: team.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: team.slug}})},
                            target: '_self'
                        },
                        {
                            name: values.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: values.slug}})},
                            target: '_self'
                        },
                        {
                            name: accreditations.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: accreditations.slug}})},
                            target: '_self'
                        },
                        {
                            name: network.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: cga.slug, subsectionSlug: network.slug}})},
                            target: '_self'
                        }
                    ]
                },
                {
                    id: 1,
                    parentName: benefits.title,
                    parentLink: () => {this.$router.push({name: 'subsection', params: {sectionSlug: benefits.slug, subsectionSlug: businessInsurance.slug}})},
                    target: '_self',
                    children: [
                        {
                            name: businessInsurance.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: benefits.slug, subsectionSlug: businessInsurance.slug}})},
                            target: '_self'
                        },
                        {
                            name: realEstate.title,
                            link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: benefits.slug, subsectionSlug: realEstate.slug}})},
                            target: '_self'
                        },
                        {
                            name: this.translate('footer.contact'),
                            link: () => (this.goToContact()),
                            target: '_self'
                        }
                    ]
                }
            ];
        },
        actualities() {
            const publications = this.$store.getters.getSectionByType('publications');
            const news = publications.children.find(ch => ch.type === 'news');
            const wish_cards = publications.children.find(ch => ch.type === 'wish_cards');

            return {
                parentName: publications.title,
                parentLink: () => {this.$router.push({name: 'subsection', params: {sectionSlug: publications.slug, subsectionSlug: news.slug}})},
                target: '_self',
                children: [
                    {
                        name: 'Toute notre actualité',
                        link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: publications.slug, subsectionSlug: news.slug}})},
                        target: '_self'
                    },
                    {
                        name: 'Suivez-nous sur les réseaux sociaux',
                        link: () => {this.$router.push({name: 'subsection', params: {sectionSlug: publications.slug, subsectionSlug: wish_cards.slug}})},
                        target: '_self'
                    },
                ]
            }
        }
    }
};

export default footerLinks;