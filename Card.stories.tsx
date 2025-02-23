import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: { 
    title: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Cute baby',
  content: 'Here is my lovely baby',
  imageSrc: '/static/images/Sahay.jpg',  
  altText: 'cutie pie',
  footer: 'My dearest',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Cute baby without image',
  content: 'This is content without an image.',
  footer: 'Footer Content',
};
