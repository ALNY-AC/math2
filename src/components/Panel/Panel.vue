<template>
  <div class="panel">

    <div class="panel-head">
      <b>
      <slot name="head"></slot>
      </b>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>
<script src="./Panel.js"></script>
<style lang="scss" scoped>
@import "Panel.scss";
</style>