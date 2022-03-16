<template>
    <div class="team-grid-list">
        <div class="team-grid-list__wrapper container--md">
            <div class="employee-box" v-for="employee in employees" :key="employee.id">
                <div class="employee__image" :style="{backgroundImage: `url(${fullScreenUrl(employee.fields.profile_image.value[0].url)})`}" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out"></div>
                <div class="employee__data">
                    <div v-html="employee.content" data-aos="fade-up" data-aos-delay="150" data-aos-easing="ease-out"></div>
                    <a :href="`tel:${employee.fields.phone_number.value}`" class="employee__data__phone-number" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">{{employee.fields.phone_number.value}}</a>
                    <a :href="`mailto:${employee.fields.email.value}`" class="employee__data__email" data-aos="fade-up" data-aos-delay="250" data-aos-easing="ease-out">
                        {{employee.fields.email.value}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamGridList',
    props: ['employees']
}
</script>