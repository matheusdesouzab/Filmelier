<template>
    <div class="row mt-5">
        <div class="col-8 mx-auto">
            <div class="input-group mb-3">
                <span class="input-group-text bg-white border-0" id="basic-addon1"><i class="bi bi-search"></i></span>
                <input type="text" class="form-control border-0 p-2" placeholder="Buscar por filmes"
                    aria-label="Username" aria-describedby="basic-addon1" v-model="formPesquisa.nome"
                    @keyup="pesquisarFilmes()">
            </div>
        </div>
        <div class="d-flex flex-wrap p-3 align-items-center justify-content-center">
            <a href="#" class="btn btn-dark border border-secondary me-3 fw-bold px-3" v-for="genero in generos"
                :key="genero.id">{{ genero.genero }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PesquisarView',
    props: {
        generos: {
            required: true,
            type: Object
        }
    },
    data: () => ({
        formPesquisa: {
            nome: ''
        }
    }),
    methods: {
        pesquisarFilmes() {
            let url = `http://localhost:3000/filmes?nome_like=${this.formPesquisa.nome}`
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    this.$emit('filtrar', response)
                })
        }
    }
}
</script>