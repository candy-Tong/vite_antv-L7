<template>
  <a-layout>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>在线地图</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '420px' }">
          <a-card title="Card title" :bordered="false" style="width: 300px">
            <div id="map"></div>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { defineComponent, onMounted } from "vue"
import { Scene, PointLayer } from "@antv/l7"
import { GaodeMap } from "@antv/l7-maps"

export default defineComponent({
  setup() {
    onMounted(() => {
      const scene = new Scene({
        id: "map",
        map: new GaodeMap({
          pitch: 35.210526315789465,
          style: "dark",
          center: [104.288144, 31.239692],
          zoom: 4.4,
        }),
      })
    })
  },
})
</script>

<style scoped></style>
