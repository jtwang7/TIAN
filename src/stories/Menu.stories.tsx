import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from '../components/menu/Menu';

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

export const Primary: ComponentStory<typeof Menu> = () => <Menu />;