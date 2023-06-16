<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'am-button',
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: #00acc1;
  border: 1px solid #00acc1;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
}

.btn:hover {
  border: 1px solid #006064;
  color: #006064;
  opacity: 0.9;
}
</style>
