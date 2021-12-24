import React from 'react';
import { EvaButton } from '@demo/react-design-system-components';

export default {
  title: 'Components/Button',
  argTypes: {
    size: {
      options: ['giant', 'large', 'medium', 'small', 'tiny'],
      control: { type: 'select' }
    },
    role: {
      options: ['success', 'warning', 'danger', 'info'],
      control: { type: 'select' }
    }
  }
};

const defaultStoryArgs = {
  size: 'medium',
  role: 'success'
};

const ButtonTemplate = function(args) {
  const { label, size, role } = args;

  const params = {};

  if (role) {
    params[role] = true;
  }

  if (size) {
    params[size] = true;
  }

  return (
    <div>
      <EvaButton {...params}>{label}</EvaButton>
    </div>
  );
};

export const Button = ButtonTemplate.bind({});
Button.args = {
  ...defaultStoryArgs,
  label: 'Button'
};
