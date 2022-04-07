import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonTypeOne from '../../components/button/typeOne/TypeOne';

export default {
  title: 'ButtonTypeOne',
  component: ButtonTypeOne,
  decorators: [
    (Story) => (
      <div style={{backgroundColor: '#111', width: '200px', height: '200px'}}>
        <Story />
      </div>
    )
  ],
} as ComponentMeta<typeof ButtonTypeOne>;

export const Primary: ComponentStory<typeof ButtonTypeOne> = () => <ButtonTypeOne text='123' />;