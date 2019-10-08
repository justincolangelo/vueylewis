<template>
  <div class="vu-home">
    <HelloWorld msg="Application Time"/>
    <ListDisplay :items="items"/>
    <div class="vu-form">
      <FormInput placeholder="string to store" labelText="String to Store" name="storedstring"/>
    </div>
    <DisplayText :text="$store.getters.storedstring"/>
    <ListDisplay :items="$store.getters.toDos" classes="vu-toDos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ListDisplay from '@/components/ListDisplay.vue';
import FormInput from '@/components/FormInput.vue';
import DisplayText from '@/components/DisplayText.vue';
import ListItem from '@/ListItem.ts';
import ToDo from '@/ToDo.ts';

@Component({
  components: {
    HelloWorld,
    ListDisplay,
    FormInput,
    DisplayText
  }
})

export default class Home extends Vue {
  public items: Array<ListItem> = [
    new ListItem("First Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
    new ListItem("Second Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
    new ListItem("Third Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
    new ListItem("Fourth Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
    new ListItem("Fifth Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
    new ListItem("Sixth Title", "http://www.fillmurray.com/600/600", (data: ListItem) => {this.$store.dispatch('addToDo', data)}),
  ];
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_home.scss';
</style>