<template>
<div>
  <Wrapper title="触发器">
    <input name="trigger-type" type="radio" :value="1" v-model="config.trig.type"> 随页面载入
    <input name="trigger-type" type="radio" :value="2" v-model="config.trig.type"> 懒加载

    <br>

    动作：
    <select name="" id="" v-model="config.trig.bind">
      <option :value="a.id" v-for="a in actions" :key="a.id">{{ a.n }}</option>
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
  @Prop() private signs!: any[]
  @Prop() private actions!: any[]
  @Prop() private config!: any

}
</script>

<style>

</style>