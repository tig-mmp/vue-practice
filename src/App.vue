<template>
  <header>
    <h1>Vue Practive</h1>
  </header>
  <main>
    <ListCustomers />
  </main>
  <footer class="mt-6">
    <address>
      Tiago Pinto - tig-mmp -
      <a href="https://github.com/tig-mmp" target="_blank">github</a> -
      <a href="https://www.linkedin.com/in/tiagopinto-programador" target="_blank">linkedin</a>
    </address>
  </footer>
</template>

<script setup>
import ListCustomers from './components/ListCustomers.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
