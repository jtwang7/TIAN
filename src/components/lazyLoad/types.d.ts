export declare type ImgTypeOne = {
  type: 'one',
  alt: string,
  src: string,
}

export declare type ImgTypeTwo = {
  type: 'two',
  alt: string, // 图片描述
  src: string, // 图片链接
  date: string, // 拍摄日期
  name: string, // 店名
  place: string, // 地点
  desc: string = '', // 描述
  coord?: [number, number], // 地理坐标
}

export declare type ImgsType = (ImgTypeOne | ImgTypeTwo)[]