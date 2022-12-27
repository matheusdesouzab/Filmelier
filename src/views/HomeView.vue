<template>
  <NavbarMainLayout></NavbarMainLayout>
    <router-view name="navbar"></router-view>
</template>

<script>

import NavbarMainLayout from '@/layouts/NavbarMainLayout.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarMainLayout
  }
}
</script>
