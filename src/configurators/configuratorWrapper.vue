<template>
<div>
<h3>{{ title }}</h3>
<slot></slot>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() private title!: string

}
</script>

<style>

</style>