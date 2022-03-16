<template>
    <div class="subsection-nav" @click="toggleWrapper">
        <div class="subsection-nav__wrapper" :class="{'fixed--width': section.type !== 'protected'}">
            <span :class="{'animate': wrapper}"></span>
            <ul class="items" :class="{'items--opened': wrapper}" v-if="section.type !== 'protected'">
                <li class="tablet--active">{{subsection.title}}</li>
                <li v-for="subsection in section.children" :key="subsection.id">
                    <router-link :to="{name: 'subsection', params: {sectionSlug: section.slug, subsectionSlug: subsection.slug}}">
                        {{subsection.title}}
                    </router-link>
                </li>
            </ul>
            <ul class="items" :class="{'items--opened': wrapper}" v-if="section.type === 'protected'">
                <li class="tablet--active">{{collection.name}}</li>
                <li v-for="collection in section.collections" :key="collection.id">
                    <router-link :to="{name: 'collection', params: {sectionSlug: section.slug, subsectionSlug: collection.slug}}">
                        {{collection.name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SubsectionNav',
    props: ['section', 'subsection', 'collection'],
    data() {
        return {
            wrapper: false
        }
    },
    methods: {
        toggleWrapper() {
            return this.wrapper = !this.wrapper;
        }
    }
}
</script>