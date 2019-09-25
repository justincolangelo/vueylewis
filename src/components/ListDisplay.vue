<template>
  <div class="vu-list">
    <div class="vu-listItem" v-for="item in items">
      <div class="vu-listItem_title">{{item.title}}</div>
      <div class="vu-listItem_image" v-bind:style="{ backgroundImage: 'url(\'' + item.image + '\')'}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/ListItem.ts';

@Component
export default class ListDisplay extends Vue {
  @Prop() private items!: Array<ListItem>;
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_listItem.scss';
</style>