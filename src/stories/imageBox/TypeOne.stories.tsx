import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageBoxTypeOne from '../../components/imageBox/typeOne/TypeOne';
import {Thor253} from '../../images/home/index';

export default {
  title: 'ImageBoxTypeOne',
  component: ImageBoxTypeOne,
} as ComponentMeta<typeof ImageBoxTypeOne>;

export const Primary: ComponentStory<typeof ImageBoxTypeOne> = () => (
  <ImageBoxTypeOne 
    style={{width: '200px', height: '200px'}}
    imageUrl={Thor253}
  >
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <span>123</span>
      <span>456</span>
    </div>
  </ImageBoxTypeOne>
);