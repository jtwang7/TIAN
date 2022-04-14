import { createSlice } from '@reduxjs/toolkit';
import type { GoodType } from '../../components/card/good/types';

const goods: GoodType[] = [{
  id: 0, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: 'Our Chef’s Scoop is so much more than just a coffee scoop. Use this hand carved spoon to measure out brown sugar for your secret-recipe sauce, keep it in your rolled oats canister, or use it to scoop orzo into a pot of boiling water. This artisan kitchen utensil will look strikingly beautiful on your countertop, and will be right at home with your hand-thrown pottery, copper saucepans and gourmet cookbooks.', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 1, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=11',
    'https://picsum.photos/200/300?random=12',
    'https://picsum.photos/200/300?random=13',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 10, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 2, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=4',
    'https://picsum.photos/200/300?random=5',
    'https://picsum.photos/200/300?random=6',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 3, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=7',
    'https://picsum.photos/200/300?random=8',
    'https://picsum.photos/200/300?random=9',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 4, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 5, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=11',
    'https://picsum.photos/200/300?random=12',
    'https://picsum.photos/200/300?random=13',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 6, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=4',
    'https://picsum.photos/200/300?random=5',
    'https://picsum.photos/200/300?random=6',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  id: 7, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=7',
    'https://picsum.photos/200/300?random=8',
    'https://picsum.photos/200/300?random=9',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 0, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
},]

export type CartOrder = { 
  id: number, // 商品唯一标签
  nums: number, // 商品数
  order: number, // 商品添加进入购物车的顺序
  remark?: string, // 商品额外购物备注 
}

// store仓库初始值
const initialState: {
  productId: number, // 当前所选商品id
  goods: GoodType[], // 商品信息
  cartOrders: CartOrder[], // 购物车订单
} = {
  productId: -1,
  goods,
  cartOrders: [],
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    // 选择商品
    selectProduct: (state, action) => {
      state.productId = action.payload
    },
    // 添加商品进入购物车
    addToCart: (state, action) => {
      const ids: number[] = []
      const orders: number[] = []
      for (let item of state.cartOrders) {
        ids.push(item.id)
        orders.push(item.order)
      }
      const curMaxOrder = Math.max(...orders) || 0
      if (!ids.includes(action.payload)) {
        state.cartOrders.push({
          id: action.payload,
          order: curMaxOrder + 1,
          nums: 1,
        })
      }
    }
  }
})

export default shopSlice
export const { selectProduct, addToCart } = shopSlice.actions