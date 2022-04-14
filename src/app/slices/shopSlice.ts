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
  desc: '', // 商品描述
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
  id: 0, // 商品编号
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
  id: 1, // 商品编号
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
},]

// store仓库初始值
const initialState: {
  productId: number, // 当前所选商品id
  goods: GoodType[], // 商品信息
} = {
  productId: -1,
  goods,
}

const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    // 选择商品
    selectProduct: (state, action) => {
      state.productId = action.payload
      return state
    }
  }
})

export default shopSlice
export const { selectProduct } = shopSlice.actions