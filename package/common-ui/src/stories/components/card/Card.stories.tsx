import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';

export default {
    title: 'components/Card',
    component: Card,
    argTypes: {
        backgroundColor: {
            options: ['blue300', 'blue400', 'blue900', 'gray200'],
            control: { type: 'radio' },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        children: {
            type: 'string',
        },
        clickEvent: {
            type: 'function',
        },
        hover: {
            type: 'string',
        },
        border: {
            type: 'string',
        },
        radius: {
            defaultValue: 0,
            type: 'number',
        },
        shadow: {
            defaultValue: false,
            type: 'boolean',
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <CNSThemeProvider theme="LIGHT">
        <Card {...args} />
    </CNSThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    size: 'sm',
    backgroundColor: 'blue400',
    children: 'Card',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    backgroundColor: 'blue400',
    children: 'Card',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    backgroundColor: 'blue400',
    children: 'Card',
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    backgroundColor: 'blue400',
    children: 'Card',
};
