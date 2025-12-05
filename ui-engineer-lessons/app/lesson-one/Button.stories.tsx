import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design-System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['filled', 'outline'] },
    type: { control: 'select', options: ['primary', 'error', 'success', 'warning', 'info', 'disabled'] },
    text: { control: 'text' },
    arrowLeft: { control: 'boolean' },   // quick toggle
    arrowRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ---- single-word stories ---- */
export const Primary: Story = {
  args: { text: 'Primary' },
};

export const Error: Story = {
  args: { text: 'Error', type: 'error' },
};

export const Success: Story = {
  args: { text: 'Success', type: 'success' },
};

export const Outline: Story = {
  args: { text: 'Outline', variant: 'outline' },
};

export const Large: Story = {
  args: { text: 'Large', size: 'large' },
};

export const Small: Story = {
  args: { text: 'Small', size: 'small' },
};

export const Disabled: Story = {
  args: { text: 'Disabled', type: 'disabled' },
};

/* ---- interactive combo ---- */
export const Playground: Story = {
  args: {
    text: 'Playground',
    size: 'medium',
    variant: 'filled',
    type: 'primary',
    arrowLeft: false,
    arrowRight: false,
  },
  render: ({ arrowLeft, arrowRight, ...rest }) => (
    <Button
      {...rest}
      arrowLeft={arrowLeft ? '←' : undefined}
      arrowRight={arrowRight ? '→' : undefined}
    />
  ),
};