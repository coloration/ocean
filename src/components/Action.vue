<template>
<div>
  Action
  <div v-for="a in actions" :key="a.id">
    <div>{{ a.n }}</div>
    <div v-for="(op, i) in a.ops" :key="i">
      {{ op.type }} | {{ op.v }} | {{ op.config }}
    </div>
    <hr>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() actions!: any[]
}
</script>

<style>

</style>