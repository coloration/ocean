<template>
<div>
配置器
{{ config }}
<DataSource :config.sync="config" :signs="signs" />
<Trig :config.sync="config" :actions="actions" />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { DataSource, Trig } from '../configurators'


@Component({
  components: { DataSource, Trig }
})
export default class extends Vue {
  @Prop() private signs!: any[]
  @Prop() private actions!: any[]
  @Prop() private config!: any

}
</script>

<style>

</style>