import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';



const meta: Meta<typeof Navbar> = {
  title: 'Design System/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'UI Engineer',
    links: ['Home', 'About', 'Pricing', 'Contact'],
    signInLabel: 'Sign In',
    signUpLabel: 'Sign Up',
    variant: 'light',
    size: 'medium',
  },
};

export const Dark: Story = {
  args: { ...Default.args, variant: 'dark' },
};

export const Small: Story = {
  args: { ...Default.args, size: 'small' },
};

export const Large: Story = {
  args: { ...Default.args, size: 'large' },
};

export const Minimal: Story = {
  args: {
    title: 'Minimal',
    links: ['Docs', 'Blog'],
  },
};