import { Meta, Story } from '@storybook/react';
import Toggle, { ToggleProps } from '.';

export default {
  title: 'components/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = args => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('클릭!'),
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
