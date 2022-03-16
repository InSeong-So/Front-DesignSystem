import { Meta, Story } from '@storybook/react';
import Asterisk from '.';

export default {
  title: 'components/Asterisk',
  component: Asterisk,
} as Meta;

const Template: Story = args => <Asterisk {...args} text="아니오"></Asterisk>;

export const Default = Template.bind({});
