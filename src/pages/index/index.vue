<template>
  <CustomNavbar />
  <LnSwiper :list="bannerList" />
  <view class="index">index123</view>
</template>

<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

// const bannerList = ref<BannerItem[]>([])
const bannerList = ref([
  {
    id: '20',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg',
    hrefUrl: '/category/1005000',
    type: '1',
  },
  {
    id: '16',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg',
    hrefUrl: '/category/1005000',
    type: '1',
  },
  {
    id: '19',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg',
    hrefUrl: '/category/1013001',
    type: '1',
  },
  {
    id: '18',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg',
    hrefUrl: '/category/1013001',
    type: '1',
  },
  {
    id: '17',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg',
    hrefUrl: '/category/1019000',
    type: '1',
  },
])

const getHomeBannerData = async () => {
  // const res = await getHomeBannerAPI()
  // console.log(res)
  // bannerList.value = res.result
  // bannerList.value = result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss">
//
</style>
