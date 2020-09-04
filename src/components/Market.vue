<template>
<div>
Sign
<div v-for="(s, i) in signs" :key="i">
  <input type="text" v-model="s.v">
  <br>
</div>

<br>

<Action :signs="signs" :actions.sync="actions"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Action from './Action.vue'

@Component({
  components: { Action }
})
export default class extends Vue {
  @Prop() private signs!: any[]
  @Prop() private actions!: any[]



  handleChange (v: any, i: number) {
    const value = this.signs.slice()
    console.log('asdasdasd', v)
    value[i] = v
    this.$emit('update:signs', value)
  }
}
</script>

<style scoped>
</style>
