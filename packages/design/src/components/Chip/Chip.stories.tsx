import { Meta, Story } from '@storybook/react';
import { ChipProps } from 'chip';
import Chip from '.';

export default {
  title: 'components/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = args => <Chip {...args} key="Tag_1" text={`#${'하하'}`} />;

export const DefaultAndHoverPressed = Template.bind({});

export const Closeable = Template.bind({});
Closeable.args = {
  closeable: true,
};
