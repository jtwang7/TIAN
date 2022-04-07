import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '../components/carousel/Carousel';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/12/200/300',
    title: '',
    subTitle: '',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/13/200/300',
    title: '',
    subTitle: '',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/14/200/300',
    title: '',
    subTitle: '',
  },
]

export default {
  title: 'Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const Primary: ComponentStory<typeof Carousel> = () => <Carousel images={images} />;