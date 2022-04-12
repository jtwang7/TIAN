import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoticeBar from '../components/noticeBar/NoticeBar';

const contents = [
  'abcdefg',
  'hijklmn',
  'opqrstuvwxyz',
]

export default {
  title: 'NoticeBar',
  component: NoticeBar,
} as ComponentMeta<typeof NoticeBar>;

export const Primary: ComponentStory<typeof NoticeBar> = () => <NoticeBar contents={contents} />;