<template>
  <div class="example">
    {{ msg }}
    <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!',
      url: require('./assets/logo.png'),
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>

<style lang="scss">
.example {
  font-size: 50px;
}
</style>