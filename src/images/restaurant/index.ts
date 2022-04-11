import type { ImgTypeTwo } from '../../components/lazyLoad/types';
import { dateParse } from '../../functions/dateParse';
// pictures
import April041 from './2022/04-04-酸奶芝士蛋糕.jpeg';
import April051 from './2022/04-05-浓厚乳酪蛋糕.jpeg';
import April071 from './2022/04-07-家庭绿豆糕.jpeg';
import April072 from './2022/04-07-家庭曲奇饼干.jpeg';
import April101 from './2022/04-10-啵啵杨枝甘露.jpeg';


const contents: ImgTypeTwo[] = [
  {
    type: 'two',
    alt: '酸奶芝士蛋糕🍰',
    src: April041,
    date: '2022/04/04',
    name: '灯塔咖啡小盆友与猫咪友好店(水果湖店)',
    place: '水果湖横路水果湖广场B座1805室',
    coord: [114.30266,30.593065],
    desc: '',
  },
  {
    type: 'two',
    alt: '浓厚乳酪蛋糕🧀️',
    src: April051,
    date: '2022/04/05',
    name: '一心烧鸟屋(群光广场店)',
    place: '珞喻路10号群光二馆五楼',
    coord: [114.356771,30.525302],
    desc: '',
  },
  {
    type: 'two',
    alt: '家庭绿豆糕👩',
    src: April071,
    date: '2022/04/07',
    name: '自家出品必属精品🥰',
    place: '武汉大学信息学部宿舍',
    desc: '',
  },
  {
    type: 'two',
    alt: '家庭曲奇饼干👩',
    src: April072,
    date: '2022/04/07',
    name: '自家出品必属精品🥰',
    place: '武汉大学信息学部宿舍',
    desc: '',
  },
  {
    type: 'two',
    alt: '啵啵杨枝甘露🥤',
    src: April101,
    date: '2022/04/10',
    name: '潮牛壹号鲜牛肉火锅(银泰创意城店)',
    place: '珞喻路35号银泰创意城7楼',
    coord: [114.357098,30.526273],
    desc: '',
  },
]

// 基于日期📅排序
contents.sort((a, b) => {
  const dateParseFn = dateParse('/')
  const at = dateParseFn(a.date).getTime()
  const bt = dateParseFn(b.date).getTime()
  return (bt - at)
})

export default contents