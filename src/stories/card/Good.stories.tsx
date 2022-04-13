import { ComponentStory, ComponentMeta } from '@storybook/react';
import Good from '../../components/card/Good';

const good = {
  id: 0, // 商品编号
  name: '曲奇', // 商品名称
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
}

export default {
  title: 'Good',
  component: Good,
} as ComponentMeta<typeof Good>;

export const Primary: ComponentStory<typeof Good> = () => (
  <Good  
    good={good}
    style={{width: '200px'}}
  />
);