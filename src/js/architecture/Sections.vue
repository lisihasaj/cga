<template>
	<transition-group name="fade" mode="out-in" tag="div" appear>
		<CGA v-if="section.type === 'cga'" :section="section" key="1" />
		<Benefits v-if="section.type === 'benefits'" :section="section" key="2" />
		<Publications v-if="section.type === 'publications'" :section="section" key="3" />
		<PrivacyPolicy v-if="section.type === 'privacy_policy'" :section="section" key="4" />
		<Login v-if="section.type === 'login'" :section="section" key="5" />
		<MemberSpace v-if="section.type === 'protected'" :section="section" key="6" />
	</transition-group>
</template>

<script>
    import { metaConfig, formatMeta } from '../formatMeta';
    export default {
        name: 'Sections',
		components: {
			CGA: () => import('@/views/sections/CGA.vue' /* webpackChunkName: "cga" */),
			Benefits: () => import('@/views/sections/Benefits.vue' /* webpackChunkName: "benefits" */),
			Publications: () => import('@/views/sections/Publications.vue' /* webpackChunkName: "publications" */),
			PrivacyPolicy: () => import('@/views/sections/PrivacyPolicy.vue' /* webpackChunkName: "privacy-policy" */),
			Login: () => import('@/views/sections/Login.vue' /* webpackChunkName: "login" */),
			MemberSpace: () => import('@/views/sections/MemberSpace.vue' /* webpackChunkName: "member-space" */),
        },
		mixins: [metaConfig],
        created: function () {
			this.fetchData();
		},
		watch: {
			$route: function () {
				this.fetchData();
			}
		},
		data() {
			return {
				section: {},
			}
		},
		methods: {
			fetchData() {
				const section = this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
				
				if(this.$route.matched.some(({name}) => name === 'section')) {
					this.setData(section);
				}
			},
			setData(view) {
				this.section = view;
				this.params = formatMeta(view);
				this.$nextTick( () => {
					this.$emit('updateHead')
				});
			}
		}
    }
</script>


