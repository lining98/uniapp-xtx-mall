import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 *
 * @param distributionSite 首页-广告区域
 * 1为首页 2为分类商品页
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
