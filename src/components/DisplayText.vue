<template>
  <div class="vu-text-wrapper">
    <div class="vu-text">{{text}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DisplayText extends Vue {
  @Prop() private text!: string;
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_text.scss';
</style>