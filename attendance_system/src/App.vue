<script>
// import Navbar from './components/Navbar.vue';

import Navbar from './components/Navbar.vue';


export default {
  name: "App",
  components: { Navbar }
}
</script>

<template>
  <header v-if="$route.name !== 'login'">
    <Navbar v-if="$route.name !== 'notFound'" />
  </header>

  <RouterView />
</template>
