import { ReactElement, useEffect, useRef, useState } from 'react';
import ShoppingClass from './Shopping.module.scss';
// images
// import Logo from '../logo.png';
import Logo from '../logo-light.png';
import SectionOneImage from './coffee-g5a6eb854e_1920.jpg';
import SectionThreeImage from './coffee-gdda74bf05_1920.jpg';
// components
import { Parallax } from 'react-parallax';
import CardGood from '../../components/card/good/Good';
import CardProduct from '../../components/card/product/Product';
import ButtonTypeOne from '../../components/button/typeOne/TypeOne';
import Cart from '../../components/cart/Cart';
import CartIcon from '../../components/cart/CartIcon';
// hooks
import { useAppSelector, useAppDispatch } from '../../app/store';
import { selectProduct, addToCart } from '../../app/slices/shop/shopSlice';
// types
import type Shop from '../../app/slices/shop';

interface Props {

}

export default function Shopping({ }: Props): ReactElement {
  const { productId, goods, cartOrders } = useAppSelector(state => (state.shop))
  const dispatch = useAppDispatch()
  // 购物车可视状态
  const [cartVisible, setCartVisible] = useState(false)

  const cardProductRef = useRef<HTMLDivElement>(null)

  // good-card onclick event
  const handleGoodCardClick = (productId: number) => {
    dispatch(selectProduct(productId))
    // setTimeout(...): 使之排在异步状态更新完成后
    setTimeout(() => {
      cardProductRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    })
  }

  // add to cart
  const handleAddToCart = (good: Shop.GoodType): void => {
    setCartVisible(true) // 弹出购物车
    dispatch(addToCart(good)) // 添加商品进入购物车
  }

  // 当前被选中的商品
  const [good, setGood] = useState<Shop.GoodType | null>(null)
  useEffect(() => {
    if (productId !== -1) {
      const good = goods.find((good) => (good.goodId === productId))
      good && setGood(good)
    }
  }, [productId])

  return (
    <>
      {/* 购物车 */}
      <Cart
        width={420}
        visible={cartVisible}
        onClose={() => { setCartVisible(false) }}
      />
      {/* 封面 */}
      <Parallax
        bgImage={SectionOneImage}
        bgImageAlt="random image"
        strength={-200} // strength定义背景移动像素值, 正值向下移动, 负值向上移动, 若值和嵌套元素高度相同, 则视觉上不发生移动
      >
        <div className={ShoppingClass['section-one']}>
          <img className='logo' alt='logo' src={Logo} />
        </div>
      </Parallax>
      {/* 文字描述 */}
      <article className={ShoppingClass['section-two']}>
        <h2 className="title">Welcome to TIAN's small shop</h2>
        <p><em>We honor the beauty and rustic elegance of past eras by creating and curating kitchen and dining goods of uncommon quality.</em></p>
        <p><em>Always made at home, always beautiful. Thank you for supporting our small business.</em></p>
        <p><em>We look forward to creating something for you to treasure.</em></p>
        <p><em>-The TIAN Family</em></p>
      </article>
      {/* 过渡图片 */}
      <Parallax
        bgImage={SectionThreeImage}
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
          <CartIcon
            count={cartOrders.length}
            style={{
              position: 'absolute',
              top: '45px',
              right: '100px',
            }}
            onClick={() => {setCartVisible(true)}}
          />
          <h2 className={`title`}>curated homemade goods</h2>
          <section className={`goods-area`}>
            {goods.map(good => (
              <div className={`good-card`}>
                <CardGood
                  good={good}
                  key={good.goodId}
                  width={300}
                  onClick={() => { handleGoodCardClick(good.goodId) }}
                />
              </div>
            ))}
          </section>
        </section>
      </article>
      {/* 购物详情块 */}
      {
        (good) ? (
          <div
            className={ShoppingClass['section-five']}
            ref={cardProductRef}
          >
            <CardProduct imgsUrl={good.imgsUrl!} dots={false} />
            <div className={`product-info`}>
              <h2 className={`product-name`}>{good.name}</h2>
              <span className={`price`}>{`RMB ${good.price}`}</span>
              <div className={`sperator`}></div>
              <p className={`product-desc`}>{good.desc}</p>
              {
                good.nums ? (
                  <ButtonTypeOne
                    mode='light'
                    text={'add to cart'}
                    style={{
                      textTransform: 'uppercase',
                      width: '100%',
                      margin: '10px auto',
                      position: 'relative',
                      inset: '0',
                    }}
                    onClick={() => { handleAddToCart(good) }}
                  />
                ) : (
                  <ButtonTypeOne
                    mode='light'
                    text={'sold out'}
                    style={{
                      textTransform: 'uppercase',
                      width: '100%',
                      margin: '10px auto',
                      position: 'relative',
                      inset: '0',
                      cursor: 'not-allowed',
                    }}
                  />
                )
              }

            </div>
          </div>
        ) : null
      }
    </>
  )
}
