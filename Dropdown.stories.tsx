import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: { disabled: { control: 'boolean' } },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = { options: ['Option 1', 'Option 2', 'Option 3'], onChange: (val) => alert(val) };

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
