<template>
  <div :class="classes + ' vu-list'">
    <div class="vu-listItem" v-for="item in items" v-on:click="() => { if(typeof item.clickFn === 'function') item.clickFn(item) }">
      <div class="vu-listItem_title">{{item.title}}</div>
      <div class="vu-listItem_image" v-bind:style="{ backgroundImage: 'url(\'' + item.image + '\')'}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/ListItem.ts';
import ToDo from '@/ToDo.ts';

@Component
export default class ListDisplay extends Vue {
  @Prop() private items!: Array<ListItem> | Array<ToDo>;
  @Prop() private classes!: string;
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_listItem.scss';
  @import '@/scss/modules/_toDo.scss';
</style>