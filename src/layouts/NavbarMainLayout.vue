<template>
    <nav class="navbar">
        <div class="container-fluid px-5 text-white">
            <div class="row d-flex justify-content-between w-100">
                <div class="col-3 d-flex align-items-center">
                    <a class="navbar-brand fw-bold text-white" href="#"><img
                            src="https://static.filmelier.com/dist/images/logo-filmelier.webp?v=1.29.12"></a>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <ul class="d-flex navbar-collapse justify-content-around m-0 p-3">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Filmes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Listas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">Notícias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold btn btn-outline-light py-2 px-4 rounded-3" href="#"><i
                                    class="bi bi-star me-2"></i> Lançamentos</a>
                        </li>
                    </ul>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-end">
                    <div class="dropdown me-3">
                        <button class="btn btn-transparent text-white dropdown-toggle fw-bold" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-globe"></i> Brasil
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">México</a></li>
                            <li><a class="dropdown-item" href="#">China</a></li>
                            <li><a class="dropdown-item" href="#">EUA</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-warning px-3 py-2 fw-bold text-white">Entrar</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarMainLayout'
}
</script>

<style scoped>
.navbar {
    background-color: #212F3D;
    border-bottom: 10px solid #c1774a;
}

.navbar img {
    width: 150px;
}

.navbar ul li {
    list-style-type: none;
}

.navbar ul li a {
    font-size: 18px;
}
</style>