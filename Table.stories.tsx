import React from 'react';
import { default as Table } from './Table';  // Adjust the path to your component
import { TableProps } from './Table.types';  // Import the TableProps type
import { Meta, StoryFn } from '@storybook/react'; // Import StoryFn

export default {
  title: 'Table',
  component: Table,
} as Meta;

// Define the Template function with StoryFn<TableProps>
const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Header 1', 'Header 2', 'Header 3'],
  rows: [
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3'],
  ],
  footer: ['Footer 1', 'Footer 2', 'Footer 3'],
};
