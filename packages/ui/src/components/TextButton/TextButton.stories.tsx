import { Meta, Story } from '@storybook/react';
import TextButton, { TextButtonProps } from '.';
import { Icon20BookmarkSelected } from '../../assets/svg/startupCompanyProfile/icons';

export default {
  title: 'components/TextButton',
  component: TextButton,
} as Meta;

const Template: Story<TextButtonProps> = args => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '북마크 완료',
  icon: Icon20BookmarkSelected,
  onClick: () => alert('클릭!'),
  'data-event': 'user/bookmark/off',
};
