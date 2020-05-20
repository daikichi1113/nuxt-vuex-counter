<template>
  <div class="container">
    <counter></counter>
    <hr>
    <counter></counter>
    <hr>
    <counter></counter>
    <hr>
  </div>
</template>

<script>
import Counter from '~/components/counter.vue'
export default {
  components: {
    Counter
  }
}
</script>

