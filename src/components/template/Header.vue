<template>
  <header class="header">
    
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
  .header {
    grid-area: header;
    
    background: linear-gradient(
      to right,
      rgba(0, 131, 176, 1),
      rgba(0, 180, 219, 1)
    );    
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    
    position: fixed;
    width: 100%;
    height: 80px;
    
  }
</style>