<template>
    <div class="mt-4">
        <div class="row py-3 px-4">
            <div class="col-lg-8">
                <h1 class="text-white fw-bold">{{ filme.nome }}</h1>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
                    <button class="btn btn-primary me-md-2 btn-sm" type="button">Diretor - {{ filme.direcao}}</button>
                    <button class="btn btn-danger me-md-2 btn-sm" type="button">Legenda - {{ filme.legenda}}</button>
                    <button class="btn btn-light me-md-2 btn-sm" type="button">Idioma - {{ filme.idioma}}</button>
                    <button class="btn btn-warning btn-sm" type="button">Lançamento - {{ filme.anoLancamento }}</button>
                </div>
                <div class="row mt-3">
                    <p class="text-white">{{ filme.sinopse }}</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row">
                    <img class="mx-auto d-block shadow-lg" :src="filme.fotoCapa" alt="">
                </div>
                
            </div>
        </div>
        <div class="row text-white py-3 px-4 d-flex justify-content-between align-items-center">
            <p class="fs-6 fw-bold">EM CARTAZ NOS CINEMAS</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilmeView',
    data: () => ({
        filme: []
    }),
    methods: {
        getFilmeById() {
            fetch(`http://localhost:3000/filmes/${this.$route.params.id}`)
                .then(response => response.json())
                .then(response => {
                    this.filme = response
                })
        }
    },
    created() {
        this.getFilmeById()
    }
}
</script>

<style scoped>
img {
    border-radius: 15px;
    width: 300px;
}

p {
    text-align: justify;
    font-size: 20px;
}

.btn-sm{
    font-weight: 500;
}
</style>
