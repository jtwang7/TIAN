export declare type GoodType = {
  id: number, // 商品编号
  name: string, // 商品名称
  imgsUrl: string[], // 商品图片地址
  price: number, // 价格
  nums: number, // 库存
  desc?: string, // 商品描述
  comment?: string[], // 评论
  score?: number, // 评分
  likes?: number, // 喜好数目
}