<template>
  <div class="vu-list">
    <div class="vu-listItem" v-for="item in items" v-on:click="addToDo(item)">
      <div class="vu-listItem_title">{{item.title}}</div>
      <div class="vu-listItem_image" v-bind:style="{ backgroundImage: 'url(\'' + item.image + '\')'}"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/ListItem.ts';
import ToDo from '@/ToDo.ts';
import { mapActions, mapGetters } from 'vuex';

@Component({
  methods: {
    ...mapActions([
      'addToDo'
    ])
  }
})
export default class ListDisplay extends Vue {
  @Prop() private items!: Array<ListItem> | Array<ToDo>;

  public addToDo(item: ListItem) {
    console.log(JSON.stringify(item));
    this.$store.dispatch('addToDo', item);
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_listItem.scss';
</style>