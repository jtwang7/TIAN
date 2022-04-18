import type { GoodType } from './types';

declare namespace Shop {
  interface GoodType {
    goodId: number, // 商品编号
    name: string, // 商品名称
    imgsUrl: string[], // 商品图片地址
    price: number, // 价格
    nums: number, // 库存
    desc?: string, // 商品描述
    comment?: string[], // 评论
    score?: number, // 评分
    likes?: number, // 喜好数目
  }

  interface CartOrder extends GoodType {
    orderNums: number, // 订单数
    remark?: string, // 商品额外购物备注 
  }

  interface CustomerInfo {
    email: string, // 邮箱
    lastName: string, // 名
    socialAccount: string, // 社交账号(wx, qq)
    phone: string, // 电话
    address: string, // 邮寄地址
    city?: string, // 城市
    firstName?: string, // 姓
    apartment?: string, // 团体
  }

  type CustomerInfoPayload = { key: keyof CustomerInfo, value: string }
}

export default Shop;