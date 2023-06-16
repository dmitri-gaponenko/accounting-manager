<template>
  <div v-if="isOpen" class="backdrop" @click="ok" @keydown="handleKeydown">
    <div class="popup" @click.stop>
      <h1>{{ title }}</h1>
      <hr />
      <slot></slot>
      <div class="footer">
        <am-button @click="ok">OK</am-button>
        <am-button @click="selectAll">Select All</am-button>
        <am-button @click="copyToClipboard">Copy</am-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AmButton from '@/components/UI/Button.vue';

export default defineComponent({
  name: 'am-popup',
  components: { AmButton },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  emits: {
    close: null,
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e: KeyboardEvent) {
      if (this.isOpen && e.key === 'Escape') {
        this.ok();
      }
    },
    ok() {
      this.$emit('close');
    },
    selectAll() {
      (document.getElementById('res') as HTMLTextAreaElement)?.select();
    },
    async copyToClipboard() {
      const text = (document.getElementById('res') as HTMLTextAreaElement)?.value;
      try {
        await navigator.clipboard.writeText(text);
        console.log('Copied');
      } catch (e) {
        console.log('Cannot copy');
      }
    },
  },
});
</script>

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>
