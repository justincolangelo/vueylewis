<template>
  <div class="vu-about">
    <h1>This is an about page</h1>
    <ListDisplay :items="$store.getters.toDos" classes="vu-toDos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListDisplay from '@/components/ListDisplay.vue';

@Component({
  components: {
    ListDisplay
  }
})

export default class About extends Vue {

}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_about.scss';
</style>