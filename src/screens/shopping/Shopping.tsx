import { ReactElement } from 'react';
import Logo from './logo.png';
import ShoppingClass from './Shopping.module.scss';
// components
import { Parallax } from 'react-parallax';
import NoticeBar from '../../components/noticeBar/NoticeBar';
import Good from '../../components/card/Good';
// types
import type { GoodType } from '../../components/card/types';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const noticeInfos: string[] = [
    'Thank you for your support of our small family business!',
    'To talk health, happiness,and prosperity to every person you meet.',
    'Laughter is always open, youth is always there.',
    'All things are difficult before they are easy.',
  ]


  const image1 = 'https://picsum.photos/1500/1500?random=1'
  const image2 = 'https://picsum.photos/1500/1500?random=2'

  const goods: GoodType[] = [{
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
  }, {
    id: 1, // 商品编号
    name: '曲奇', // 商品名称
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
    name: '曲奇', // 商品名称
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
    name: '曲奇', // 商品名称
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
  }]

  return (
    <>
      <NoticeBar contents={noticeInfos} style={{ zIndex: 1 }} interval={5000} height={60} />
      <Parallax
        bgImage={image1}
        bgImageAlt="random image"
        strength={-200} // strength定义背景移动像素值, 正值向下移动, 负值向上移动, 若值和嵌套元素高度相同, 则视觉上不发生移动
      >
        <div className={ShoppingClass['section-one']}>
          <img className='logo' alt='logo' src={Logo} />
        </div>
      </Parallax>
      <article className={ShoppingClass['section-two']}>
        <h2 className="title">Welcome to TIAN's small shop</h2>
        <p><em>We honor the beauty and rustic elegance of past eras by creating and curating kitchen and dining goods of uncommon quality.</em></p>
        <p><em>Always made at home, always beautiful. Thank you for supporting our small business.</em></p>
        <p><em>We look forward to creating something for you to treasure.</em></p>
        <p><em>-The TIAN Family</em></p>
      </article>
      <Parallax
        bgImage={image2}
        bgImageAlt="random image"
        strength={-300}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
          }}
          className={ShoppingClass['section-three']}
        >
        </div>
      </Parallax>
      <article className={ShoppingClass['section-four']}>
        <header className={`head-bar`}></header>
        <section className={`body-area`}>
          <h2 className={`title`}>curated homemade goods</h2>
          <section className={`goods-area`}>
            {goods.map(good => (
              <Good good={good} key={good.id} width={300} />
            ))}
          </section>
        </section>
      </article>
    </>
  )
}
