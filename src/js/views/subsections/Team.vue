<template>
    <div class="subsection">
        <SubsectionHeader :subsection="subsection" />
        <SubsectionNav :section="section" :subsection="subsection" />
        <SubsectionTextBlock :subsection="subsection" />
        <div class="subsection__body">
            <HalfContainerBlock :data="halfContainerData" class="team--container" />
            <TeamGridList :employees="employees" id="team" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Team',
    props: ['section', 'subsection'],
    components: {
        SubsectionHeader: () => import('@/views/shared/components/SubsectionHeader.vue' /*webpackChunkName: "subsection-header"*/),
        SubsectionNav: () => import('@/views/shared/components/SubsectionNav.vue' /*webpackChunkName: "subsection-nav"*/),
        SubsectionTextBlock: () => import('@/views/shared/components/SubsectionTextBlock.vue' /*webpackChunkName: "subsection-text-block"*/),
        HalfContainerBlock: () => import('@/views/shared/components/HalfContainerBlock.vue' /*webpackChunkName: "half-container-block"*/),
        TeamGridList: () => import('@/views/cga/TeamGridList.vue' /*webpackChunkName: "team-grid-list"*/),
    },
    computed: {
        halfContainerData() {
            return [
                {
                    text: this.subsection.fields.insurance_partner.value,
                    image: this.subsection.fields.insurance_partner_background.value[0].url,
                    cta: {
                        label: this.translate('cga.scrollDown'),
                        route: () => {
                            let team = document.getElementById('team');
                            team.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                        }
                    }
                }
            ]
        },
        employees() {
            return this.subsection.collections.find(c => c.type === 'team').pages
        }
    }
}
</script>