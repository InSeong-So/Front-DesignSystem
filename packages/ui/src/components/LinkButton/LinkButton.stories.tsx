import { Meta, Story } from '@storybook/react';
import LinkButton, { LinkButtonProps } from '.';

export default {
  title: 'components/LinkButton',
  component: LinkButton,
} as Meta;

const Template: Story<LinkButtonProps> = args => (
  <LinkButton {...args}>하하 링크버튼이에요!</LinkButton>
);

export const Default = Template.bind({});
Default.args = {
  text: '로그인 후 재인증하기',
  href: '/login',
  onClick: () => alert('/login'),
  'data-event': '',
  style: {
    marginTop: '16px',
  },
};
