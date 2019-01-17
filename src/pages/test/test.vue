<template>
  <div id="test">
    <panel>
      <div slot="head">头</div>
      <div>
        身体
        <hr>
        <div v-for="i in 32" :style="{fontSize:`${i}px`}">Hello Word Font-Size:{{i}}</div>
      </div>
      <div slot="footer">脚</div>
    </panel>
  </div>
</template>
<script src="./test.js"></script>
<style lang="scss" scoped>
@import "test.scss";
</style>