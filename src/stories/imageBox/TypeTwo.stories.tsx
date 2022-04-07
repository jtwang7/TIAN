import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImageBoxTypeTwo from '../../components/imageBox/typeTwo/TypeTwo';
import {Thor253} from '../../images/home/index';

export default {
  title: 'ImageBoxTypeTwo',
  component: ImageBoxTypeTwo,
} as ComponentMeta<typeof ImageBoxTypeTwo>;

export const Primary: ComponentStory<typeof ImageBoxTypeTwo> = () => (
  <ImageBoxTypeTwo 
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
  </ImageBoxTypeTwo>
);