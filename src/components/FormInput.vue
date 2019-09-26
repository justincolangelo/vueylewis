<template>
  <div class="vu-form_input-wrapper">
    <label class="vu-form_label" :for="name">{{labelText}}</label>
    <input class="vu-form_input" :name="name" :placeholder="placeholder" @input="changed" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapActions([
      'change'
    ])
  }
})
export default class FormInput extends Vue {
  @Prop() private name!: string;
  @Prop() private placeholder!: string;
  @Prop() private labelText!: string;

  public changed(event: any) {
    this.$store.dispatch('change', event.target.value);
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/modules/_formInput.scss';
</style>