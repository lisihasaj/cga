<template>
	<transition-group name="fade" mode="out-in" tag="div" appear>
		<About v-if="child.type === 'about'" :section="parent" :subsection="child" key="1" />
		<Team v-if="child.type === 'team'" :section="parent" :subsection="child" key="2" />
		<Values v-if="child.type === 'values'" :section="parent" :subsection="child" key="3" />
		<Accreditations v-if="child.type === 'accreditations'" :section="parent" :subsection="child" key="4" />
		<Network v-if="child.type === 'network'" :section="parent" :subsection="child" key="5" />
		<BusinessInsurance v-if="child.type === 'business_insurance'" :section="parent" :subsection="child" key="6" />
		<RealEstateInsurance v-if="child.type === 'real_estate'" :section="parent" :subsection="child" key="7" />
		<News v-if="child.type === 'news'" :section="parent" :subsection="child" key="8" />
		<WishCards v-if="child.type === 'wish_cards'" :section="parent" :subsection="child" key="9" />
		<MemberSpacePage v-if="child.type === 'forms'" :section="parent" :collection="child" key="10" />
        <MemberSpacePage v-if="child.type === 'general_information'" :section="parent" :collection="child" key="11" />
	</transition-group>
</template>

<script>
    import { metaConfig, formatMeta } from '../formatMeta';
    export default {
        name: 'Subsections',
		components: {
			About: () => import('@/views/subsections/About.vue' /* webpackChunkName: "about" */),
			Team: () => import('@/views/subsections/Team.vue' /* webpackChunkName: "team" */),
			Values: () => import('@/views/subsections/Values.vue' /* webpackChunkName: "values" */),
			Accreditations: () => import('@/views/subsections/Accreditations.vue' /* webpackChunkName: "accreditations" */),
			Network: () => import('@/views/subsections/Network.vue' /* webpackChunkName: "network" */),
			BusinessInsurance: () => import('@/views/subsections/BusinessInsurance.vue' /* webpackChunkName: "business-insurance" */),
			RealEstateInsurance: () => import('@/views/subsections/RealEstateInsurance.vue' /* webpackChunkName: "real-estate-insurance" */),
			News: () => import('@/views/subsections/News.vue' /* webpackChunkName: "news" */),
			WishCards: () => import('@/views/subsections/WishCards.vue' /* webpackChunkName: "wish-cards" */),
			MemberSpacePage: () => import('@/views/collections/MemberSpacePage.vue' /* webpackChunkName: "member-space-page" */),
        },
		mixins: [metaConfig],
        created: function () {		
			this.fetchData()
		},
		watch: {
			$route: function () {
				this.fetchData()
			}
		},
		data() {
			return {
				parent: {},
                child: {}
			}
		},
		methods: {
			fetchData() {
				const section = this.$store.getters.getSectionBySlug(this.$route.params.sectionSlug);
                const subsection = section.children?.find(ss => ss.slug === this.$route.params.subsectionSlug);
				const collection = section.collections.find(c => c.slug === this.$route.params.subsectionSlug);

				const publicSections = ['cga', 'benefits', 'publications', 'footer', 'privacy_policy', 'contact', 'login'];
            	const publicSubsections = ['about', 'team', 'values', 'accreditations', 'network', 'business_insurance', 'real_estate', 'news', 'wish_cards'];
				const privateCollections = ['forms', 'general_information'];
				
				if(publicSections.includes(section.type) && publicSubsections.includes(subsection?.type)) {
					return this.setData(section, subsection);
				} else if(section.type === 'protected' && privateCollections.includes(collection?.type)) {
					return this.setData(section, collection);
				} else {
					return this.$router.push({name: 'not-found'})
				}
			},		
			setData(parentView, childView) {
				this.parent = parentView;
				this.child = childView;

				this.params = formatMeta(childView)
				this.$nextTick( () => {
					this.$emit('updateHead')
				})
			}
		}
    }
</script>