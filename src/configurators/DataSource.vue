<template>
<div>
  <Wrapper title="数据源">
    <select name="" id="" v-model="config.dataSource">
      <option :key="s.id" :value="s.id" v-for="s in signs">{{ s.n }}</option>
    </select>
  </Wrapper>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Wrapper from './configuratorWrapper.vue'


@Component({
  components: { Wrapper }
})
export default class extends Vue {
  @Prop() private config!: any
  @Prop() private signs!: any[]

}
</script>

<style>

</style>