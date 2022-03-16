import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args}></Dropdown>;
export const Default = Template.bind({});
Default.args = {
  options: [
    { value: '1', label: 'item1' },
    { value: '2', label: 'item2' },
    { value: '3', label: 'item3' },
  ],
  width: '100%',
  size: 'medium',
  mustSelect: true,
  onChange: value => console.log(value),
};
