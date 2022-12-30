<template>
    <div>
        <pesquisar-view :generos="generos" @filtrar="filmes = $event"></pesquisar-view>
        <div class="col-lg-12 px-0" data-bs-ride="carousel">
            <div class="row px-5 py-3">
                <h3 class="fw-bold text-white">Filmes em alta</h3>
                <div class="row row-cols-1 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-5 g-4 p-2 mt-0">
                    <div class="col" v-for="(filme, indice) in filmes" :key="indice">
                        <CardCommon :nome="filme.nome" :capa="filme.fotoCapa" :id="filme.id"></CardCommon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CardCommon from '../commons/CardCommon.vue';
import PesquisarView from './PesquisarView.vue';

export default {
    name: 'FilmeView',
    components: {
        CardCommon,
        PesquisarView
    },
    data: () => ({
        filmes: [],
        generos: []
    }),
    methods: {
        getFilmes() {
            fetch('http://localhost:3000/filmes')
                .then(response => response.json())
                .then(response => {
                    this.filmes = response
                })
        },
        getGeneros() {
            fetch('http://localhost:3000/generos')
                .then(response => response.json())
                .then(response => {
                    this.generos = response
                })
        }
    },
    created() {
        this.getFilmes()
        this.getGeneros()
    }
}
</script>