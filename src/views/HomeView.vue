<template>
  <div>
    <NavbarMainLayout />
    <router-view></router-view>
  </div>
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


