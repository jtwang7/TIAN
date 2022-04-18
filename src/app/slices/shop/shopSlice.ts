import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import type Shop from './index';

const goods: Shop.GoodType[] = [{
  goodId: 0, // 商品编号
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
  goodId: 1, // 商品编号
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
  goodId: 2, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=4',
    'https://picsum.photos/200/300?random=5',
    'https://picsum.photos/200/300?random=6',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 10, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  goodId: 3, // 商品编号
  name: 'Cookie', // 商品名称
  imgsUrl: [
    'https://picsum.photos/200/300?random=7',
    'https://picsum.photos/200/300?random=8',
    'https://picsum.photos/200/300?random=9',
  ], // 商品图片地址
  price: 10, // 价格
  nums: 10, // 库存
  desc: '', // 商品描述
  comment: ['abc', 'defg'], // 评论
  score: 4.7, // 评分
  likes: 3, // 喜好数目
}, {
  goodId: 4, // 商品编号
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
  goodId: 5, // 商品编号
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
  goodId: 6, // 商品编号
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
  goodId: 7, // 商品编号
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

export type ShopState = {
  productId: number, // 当前所选商品id
  goods: Shop.GoodType[], // 商品信息
  cartOrders: Shop.CartOrder[], // 购物车订单
  subtotal: number, // 购物总价格
  customerInfo: Shop.CustomerInfo, // 客户信息
}
// store仓库初始值
const initialState: ShopState = {
  productId: -1,
  goods,
  cartOrders: [],
  subtotal: 0,
  customerInfo: {
    email: '',
    firstName: '',
    lastName: '',
    socialAccount: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
  },
}

// common function
const calSubtotal = <T extends Shop.CartOrder[]>(cartOrders: T) => {
  return cartOrders.reduce((prev, item) => (prev + (item.orderNums * item.price)), 0)
}


// reducers
// https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
const selectProductFn: CaseReducer<ShopState, PayloadAction<number>> = (state, action) => {
  state.productId = action.payload
}
const addToCartFn: CaseReducer<ShopState, PayloadAction<Shop.GoodType>> = (state, { payload }) => {
  const ids = state.cartOrders.map(item => (item.goodId))
  if (!ids.includes(payload.goodId)) {
    /**添加新的商品 */
    state.cartOrders.unshift({
      ...payload,
      orderNums: 1,
    })
    /**更新总价格 */
    state.subtotal = calSubtotal(state.cartOrders)
  }
}
const changeOrderNumsFn: CaseReducer<ShopState, PayloadAction<{ goodId: number, nums: number }>> = (state, { payload }) => {
  /**更新订单数 */
  for (let item of state.cartOrders) {
    if (item.goodId === payload.goodId) {
      item.orderNums = payload.nums
    }
  }
  /**更新总价格 */
  state.subtotal = calSubtotal(state.cartOrders)
}
const deleteZeroFn: CaseReducer<ShopState> = (state) => {
  /**清除商品数为0的订单 */
  state.cartOrders = state.cartOrders.filter(item => (item.orderNums !== 0))
}
const updateCustomerInfoFn: CaseReducer<ShopState, PayloadAction<Shop.CustomerInfoPayload>> = ({ customerInfo }, { payload }) => {
  customerInfo[payload.key] = payload.value
}



const shopSlice = createSlice({
  name: 'shop',
  initialState: initialState,
  reducers: {
    /** 选择商品 */
    selectProduct: selectProductFn,
    /** 添加商品进入购物车 */
    addToCart: addToCartFn,
    /** 修改商品订单数目 */
    changeOrderNums: changeOrderNumsFn,
    /** 清除商品数为0的订单 */
    deleteZero: deleteZeroFn,
    /** 更新客户信息 */
    updateCustomerInfo: updateCustomerInfoFn,
  }
})

export default shopSlice
export const {
  selectProduct,
  addToCart,
  changeOrderNums,
  deleteZero,
  updateCustomerInfo,
} = shopSlice.actions