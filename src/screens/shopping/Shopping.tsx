import { ReactElement } from 'react';
import Logo from './logo.png';
import ShoppingClass from './Shopping.module.scss';
// components
import { Parallax } from 'react-parallax';
import CardGood from '../../components/card/good/Good';
// hooks
import { useAppSelector, useAppDispatch } from '../../app/store';
import { selectProduct } from '../../app/slices/shopSlice';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const image1 = 'https://picsum.photos/1500/1500?random=1'
  const image2 = 'https://picsum.photos/1500/1500?random=2'

  const { productId, goods } = useAppSelector(state => (state.shop))
  const dispatch = useAppDispatch()

  // good-card onclick event
  const handleGoodCardClick = (productId: number) => { dispatch(selectProduct(productId)) }

  return (
    <>
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
              <div className={`good-card`}>
                <CardGood
                  good={good}
                  key={good.id}
                  width={300}
                  onClick={() => { handleGoodCardClick(good.id) }}
                />
              </div>
            ))}
          </section>
        </section>
      </article>
      {/* 购物详情块 */}
      {
        (productId !== -1) ? (
          <div>
            123
          </div>
        ) : null
      }
    </>
  )
}
