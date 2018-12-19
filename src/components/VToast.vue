<template>
  <div>
    <h2>Toast</h2>
    <button @click="fnClick">Toas</button>
    <button @click="fnClick">Toas</button>
    <button @click="fnClick">Toas</button>
    <button @click="fnClick">Toas</button>
    <button @click="fnClick">Toas</button>
  </div>
</template>

<script>
  import Toast from 'toast-ly'

  const toast = new Toast({
    autoClose: 1
  })
  export default {
    name: 'VToast',
    data() {
      return {
        text: '你好呀！骚年'
      }
    },
    methods: {
      fnClick() {
        toast.open(this.text)
      }
    }
  }
</script>
