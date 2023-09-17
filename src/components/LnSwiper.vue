<template>
  <view class="carousel">
    <swiper :autoplay="false" :circular="true" :interval="3000" @change="onchange">
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image src="../static/uploads/slider_1.jpg" mode="scaleToFill" />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image src="../static/uploads/slider_2.jpg" mode="scaleToFill" />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image src="../static/uploads/slider_3.jpg" mode="scaleToFill" />
        </navigator>
      </swiper-item>
    </swiper>

    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in 3"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0)

// 当 swiper 下标发生变化时触发
const onchange: UniHelper.SwiperOnChange = (ev) => {
  // console.log(ev.detail?.current)
  activeIndex.value = ev.detail?.current
}
</script>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}
/* 轮播图 */
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
