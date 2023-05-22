import { CNSThemeProvider } from '@dgswcns/react-styled-theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

export default {
    title: 'components/Input',
    component: Input,
    argTypes: {
        inputSize: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        value: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        disable: {
            defaultValue: false,
            type: 'boolean',
        },
        radius: {
            defaultValue: 8,
            type: 'number',
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <CNSThemeProvider theme="LIGHT">
        <Input {...args} />
    </CNSThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    inputSize: 'sm',
};

export const Small = Template.bind({});
Small.args = {
    inputSize: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
    inputSize: 'md',
};

export const Large = Template.bind({});
Large.args = {
    inputSize: 'lg',
};
