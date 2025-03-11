<!-- <script>
export default {
  data() {
    return {
      cursorX: 0,
      cursorY: 0
    };
  },
  methods: {
    updateCursor(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
    }
  }
};
</script>

<template>
      <div class="cursor-dot" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"></div>
  </template>


<style>  


.customCursor {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.05s linear;
}


</style> -->