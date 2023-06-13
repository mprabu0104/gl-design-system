import React from 'react';
import { withDesign } from 'storybook-addon-designs'
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: 'Buttons are utilized to initiate an action.'
  },
  args: {
    disabled: false,
    onClick: () => ({})
  }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary Button",
  primary: true
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5A6yas6MUDd004FySSzUXM/Goodlife-2023?type=design&node-id=846%3A57826&t=yOjQ3fOGTlHnmI63-1',
    allowFullscreen: true,
  }
}


export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Button",
  secondary: true
}

Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5A6yas6MUDd004FySSzUXM/Goodlife-2023?type=design&node-id=846%3A57826&t=yOjQ3fOGTlHnmI63-1',
    allowFullscreen: true,
  }
}

export const Light = Template.bind({});

Light.args = {
  label: "Light Button",
  light: true
}

Light.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5A6yas6MUDd004FySSzUXM/Goodlife-2023?type=design&node-id=846%3A57826&t=yOjQ3fOGTlHnmI63-1',
    allowFullscreen: true,
  }
}