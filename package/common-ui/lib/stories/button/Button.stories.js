import React from 'react';
import { Button } from './Button';
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        color: {
            options: ['primary', 'second'],
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
        disable: {
            defaultValue: false,
            type: 'boolean',
        },
        shadow: {
            defaultValue: false,
            type: 'boolean',
        },
    },
};
const Template = (args) => (React.createElement(CNSThemeProvider, { theme: "LIGHT" },
    React.createElement(Button, { ...args })));
export const Primary = Template.bind({});
Primary.args = {
    size: 'sm',
    color: 'primary',
    children: '버튼',
};
export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    color: 'primary',
    children: '버튼',
};
export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    color: 'primary',
    children: '버튼',
};
export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    color: 'primary',
    children: '버튼',
};
