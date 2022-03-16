import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args} block kind="secondary" size="large" text="아니오" />
);

export const DefaultAndHoverPressed = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
