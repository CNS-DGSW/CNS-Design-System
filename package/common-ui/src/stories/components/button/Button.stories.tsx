import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        color: {
            options: ['blue400', 'white', 'gray400'],
            control: { type: 'radio' },
        },
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <CNSThemeProvider theme="LIGHT">
        <Button {...args} />
    </CNSThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    size: 'sm',
    color: 'blue400',
    children: '버튼',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    color: 'blue400',
    children: '버튼',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'md',
    color: 'blue400',
    children: '버튼',
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    color: 'blue400',
    children: '버튼',
};
