import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
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
  nums: 10, // 库存
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
  nums: 10, // 库存
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

export interface CartOrder extends GoodType {
  orderNums: number, // 订单数
  remark?: string, // 商品额外购物备注 
}

export interface CustomerInfo {
  email: string, // 邮箱
  firstName?: string, // 姓
  lastName: string, // 名
  socialAccount: string, // 社交账号(wx, qq)
  phone: string, // 电话
  address: string, // 邮寄地址
  apartment?: string, // 团体
  city: string, // 城市
}
export type CustomerInfoPayload = {key: keyof CustomerInfo, value: string}

export type ShopState = {
  productId: number, // 当前所选商品id
  goods: GoodType[], // 商品信息
  cartOrders: CartOrder[], // 购物车订单
  subtotal: number, // 购物总价格
  customerInfo: CustomerInfo, // 客户信息
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
const calSubtotal = <T extends CartOrder[]>(cartOrders: T) => {
  return cartOrders.reduce((prev, item) => (prev + (item.orderNums * item.price)), 0)
}


// reducers
// https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
const selectProductFn: CaseReducer<ShopState, PayloadAction<number>> = (state, action) => {
  state.productId = action.payload
}
const addToCartFn: CaseReducer<ShopState, PayloadAction<GoodType>> = (state, { payload }) => {
  const ids = state.cartOrders.map(item => (item.id))
  if (!ids.includes(payload.id)) {
    /**添加新的商品 */
    state.cartOrders.unshift({
      ...payload,
      orderNums: 1,
    })
    /**更新总价格 */
    state.subtotal = calSubtotal(state.cartOrders)
  }
}
const changeOrderNumsFn: CaseReducer<ShopState, PayloadAction<{ id: number, nums: number }>> = (state, { payload }) => {
  /**更新订单数 */
  for (let item of state.cartOrders) {
    if (item.id === payload.id) {
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
const updateCustomerInfoFn: CaseReducer<ShopState, PayloadAction<CustomerInfoPayload>> = ({ customerInfo }, { payload }) => {
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