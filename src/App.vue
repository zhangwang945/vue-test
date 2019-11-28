<template>
  <div :class="$style.xx">
      rrr
    <router-view></router-view>
    <img src="./assets/jinnang.png" alt="">
  </div>
</template>
<script>
console.log(4533345);

import('./assets/jinnang.png').then(v=>console.log(v+''))
export default {
  name: 'Hellow',
  mounted(){
      console.log(888);
      
  }
}
</script>
<style module lang="scss">
.xx {
  color: red;
  box-sizing: border-box;
  background: url('./assets/jinnang.png');
}
</style>