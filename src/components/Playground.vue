<template>
<div>
<HtmlRenderer ref="renderer" :value="dataSource" :trig="trig" @trig="handleTrig"/>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { HtmlRenderer } from '../renderers'
import { operatorMap } from '../operators'

@Component({
  components: { HtmlRenderer }
})
export default class extends Vue {
  @Prop() private signs!: any[]
  @Prop() private actions!: any[]
  @Prop() private config!: any


  renderer: Vue | null = null

  mounted () {
    this.renderer = this.$refs.renderer as any || null
  }

  get dataSource () {
    const sign = this.signs.find(s => s.id === this.config.dataSource)
    return sign ? sign.v : null
  }

  get trig () {
    return this.config.trig
  }

  async handleTrig () {
    const action = this.actions.find(a => a.id === this.config.trig.bind)
    console.log(action)

    if (!action) return

    try {
      const ori = { signs: this.signs, actions: this.actions }
      const result = await action.ops.reduce(async (prePromise: Promise<any>, current: any) => {

        const last = await prePromise

        
        const { type, config, v } = current

        const operator = operatorMap.get(type)
        return operator ? operator(ori, config, v === undefined ? last : v) : Promise.reject('operator: ' + type + ', 不存在')
      }, Promise.resolve())

      if (this.renderer !== null) {
        this.$nextTick(() => {
          (this.renderer as Vue).$forceUpdate()
        })
      }
    }
    catch (e) {
      console.error(e)
    }
    
    // 处理 action
  }
}
</script>

<style scoped>
</style>
