import { Meta, Story } from '@storybook/react';
import AssistiveButton, { AssistiveButtonProps } from '.';

export default {
  title: 'components/AssistiveButton',
  component: AssistiveButton,
} as Meta;

const Template: Story<AssistiveButtonProps> = args => (
  <AssistiveButton {...args} text="아니오"></AssistiveButton>
);

export const Default = Template.bind({});
