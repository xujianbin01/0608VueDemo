<template>
  <div>
      <h2>我爱你</h2>
      <button @click="count++">爱了{{count}}次</button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  data(){
      return{
          count:0
      }
  }
}
</script>

<style scoped>
h2{
    background-color: hotpink;
}
</style>
