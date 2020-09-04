<template>
<div>
  <div v-html="value"></div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop() value!: string
  @Prop() trig!: any

  trigType = 1
  val = ''

  created () {
    this.trigType = this.trig.type
  }

  mounted () {
    this.$watch('trig', this.init, { deep: true, immediate: true })
  }

  init () {
    if (this.trigType === 1) {
      this.$emit('trig', this.trigType)
    }
    else {
      setTimeout(() => {
        this.$emit('trig', this.trigType)
      }, 3000)
    }
  }
}
</script>

<style>

</style>