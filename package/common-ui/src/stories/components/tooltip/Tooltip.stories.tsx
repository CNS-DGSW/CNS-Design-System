import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { CNSThemeProvider } from '@dgswcns/react-styled-theme';

export default {
    title: 'components/Tooltip',
    component: Tooltip,
    argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <CNSThemeProvider theme="LIGHT">
        <Tooltip {...args} />
    </CNSThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'tooltip',
    children: 'button',
    direction: 'bottom',
};
