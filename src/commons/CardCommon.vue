<template>
    <div class="h-100">
        <router-link :to="{name: 'filme', params: { id: id }}">
            <img :src="capa" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CardCommon",
    props: {
        capa: {
            required: true,
            type: String
        },
        nome: {
            required: true,
            type: String
        },
        id: {
            required: true,
            type: Number
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    width: 100%;
}

img:hover {
    opacity: 0.4;
}
</style>