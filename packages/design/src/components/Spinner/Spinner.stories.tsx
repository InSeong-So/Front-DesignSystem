import { Meta } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'common/Spinner',
  component: Spinner,
} as Meta;

const Template = () => <Spinner />;

export const Default = Template.bind({});
