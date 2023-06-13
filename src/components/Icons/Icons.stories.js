import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import SvgShare from './Share';

const sizes = ['small', 'medium', 'large'];

export default {
  title: 'Components/Icon Share',
  component: SvgShare,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'One icon to rule them all'
  },
  argsTable: {
    size: {
      control: {
        type: 'select',
        options: sizes
      }
    }
  }
};


export const IconHouse = (args) => <SvgShare
  {...args} />;