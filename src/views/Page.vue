<template>
  <div class="page">
    <Market :signs.sync="signs" :actions.sync="actions" />
    <Playground :signs="signs" :config="config" :actions="actions" />
    <Configurator :config.sync="config" :actions="actions" :signs="signs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Market, Playground, Configurator } from '@/components'
import { xml1, xml2, xml1Url, xml2Url } from '@/mock/xml'
@Component({
  components: {
    Market, Playground, Configurator
  },
})
export default class extends Vue {
  private signs: any[] = [
    { type: 'string', id: '1', v: xml1, n: 'xml string' },
    { type: 'string', id: '2', v: xml1Url, n: 'ruanyf RSS' },
    { type: 'string', id: '3', v: xml2Url, n: '人民日报 RSS' },
  ]

  private actions: any[] = [
    { type: '', id: '1', n: '请求资源1', ops: [
      { type: 'get', v: '3' },
      { type: 'http', config: { m: 'get', res: 'text' } },
      { type: 'set', config: { type: 'string', signId: '1' } }
    ]},
    { type: '', id: '2', n: '请求资源2', ops: [
      { type: 'get', v: '2' },
      { type: 'http', config: { m: 'get', res: 'text' } },
      { type: 'set', config: { type: 'string', signId: '1' } }
    ] },
  ]

  private config = {
    dataSource: '1',
    trig: {
      type: 2,
      bind: '1'
    }
  }
}
</script>
<style scoped>
.page {
  display: flex;
}

.page > div {
  width: 33%;
  overflow: hidden;
}
</style>