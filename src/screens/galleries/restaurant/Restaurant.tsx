import { ReactElement } from 'react'
// types
import type { TitleTypes } from '../Galleries'
import Galleries from '../Galleries'
// images
import contents from '../../../images/restaurant';


interface Props {

}

export default function Restaurant({ }: Props): ReactElement {
  const title: TitleTypes = {
    position: '30°40′N 114°23′E',
    date: 'April 2022',
    placeName: 'WU HAN',
  }

  return (
    <Galleries
      title={title}
      contents={contents}
    />
  )
}
