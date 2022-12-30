<template>
    <div class="col-lg-12 px-0" data-bs-ride="carousel">
        <div class="row row-cols-1 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 g-4 p-2">
            <div class="col" v-for="(dado, indice) in dados" :key="indice">
                <CardCommon :nome="dado.nome" :capa="dado.fotoCapa" :id="dado.id"></CardCommon>
            </div>
        </div>
    </div>
</template>

<script>

import CardCommon from './CardCommon.vue';

export default {
    name: 'CaroselCommon',
    components: {
        CardCommon
    },
    props: {
        id: {
            required: true,
            type: Number
        },
        dados: {
            required: true,
            type: [Array]
        }
    }
}
</script>