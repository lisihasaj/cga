<template>
    <transition name="details">
        <div class="documents-dropdown" :class="{'expanded': $parent.pageId === page.id}">
            <div class="documents-dropdown__title" @click="toggleDropdown(page.id)" :id="page.id">{{page.title}}</div>
            <div class="documents-dropdown__content" v-html="page.content" v-show="$parent.pageId === page.id"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'DocumentsDropdown',
    props: ['page'],
    methods: {
        toggleDropdown(id) {
            if (id !== this.$parent.pageId) {
                const activePage = document.getElementById(id);
                this.$parent.pageId = id;
                activePage?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                this.$parent.pageId = null
            };
        }
    }
}
</script>