import { Meta, Story } from '@storybook/react';
import Input, { InputProps } from '.';

export default {
  title: 'components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => <Input {...args}></Input>;

export const Default = Template.bind({});
Default.args = {
  state: 'disabled',
};
