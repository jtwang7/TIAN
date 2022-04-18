import { baseGet, basePost } from './base';
import type Shop from '../app/slices/shop/index';
import type { AxiosPromise } from 'axios';

/** 数据库录入客户信息 */
export interface registerCustomerParams extends Shop.CustomerInfo {
  orderId: string,
}
export const registerCustomer = (params: registerCustomerParams): AxiosPromise => {
  return basePost({
    url: '/shop/register-customer',
    data: params,
  })
}

/** 数据库录入订单信息 */
export interface registerOrderParams extends Pick<Shop.CartOrder, 'goodId' | 'orderNums' | 'remark'> {
  orderId: string,
}
export const registerOrder = (params: registerOrderParams): AxiosPromise => {
  return basePost({
    url: '/shop/register-order',
    data: params,
  })
}