<template>
  <div
    :style="{height: `${$props.size}px`, width: `${$props.size}px`, top: `${$props.top}%`, left: `${$props.left}%`}"
    class="circle black"
  >{{ $props.dotId }}</div>
</template>

<script>
export default {
  props: {
    dotId: Number,
    size: Number,
    top: Number,
    left: Number
  }
}
</script>

<style>
.circle {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  background-color: #d6158a;
}
</style>
