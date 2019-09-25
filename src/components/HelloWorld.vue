<template>
  <div class="vu-helloworld">
    <h1 class="vu-helloworld_heading">{{msg}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_helloworld.scss';
</style>