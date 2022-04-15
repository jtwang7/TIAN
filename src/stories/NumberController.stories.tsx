import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberController from '../components/numberController/NumberController';

export default {
  title: 'NumberController',
  component: NumberController,
} as ComponentMeta<typeof NumberController>;

export const Primary: ComponentStory<typeof NumberController> = () => <NumberController />;