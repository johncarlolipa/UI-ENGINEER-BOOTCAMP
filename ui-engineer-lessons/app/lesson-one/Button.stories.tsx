import type { Meta, StoryObj } from '@storybook/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    arrowLeft: { control: 'boolean' },
    arrowRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ---- reusable helper ---- */
const renderWithIcons: Story['render'] = ({ arrowLeft, arrowRight, ...rest }) => (
  <Button
    {...rest}
    arrowLeft={arrowLeft ? <ChevronLeft size={16} /> : undefined}
    arrowRight={arrowRight ? <ChevronRight size={16} /> : undefined}
  />
);

/* ---- single-word stories ---- */
export const Primary: Story = {
  args: { text: 'Primary', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Error: Story = {
  args: { text: 'Error', type: 'error', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Success: Story = {
  args: { text: 'Success', type: 'success', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Outline: Story = {
  args: { text: 'Outline', variant: 'outline', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Large: Story = {
  args: { text: 'Large', size: 'large', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Small: Story = {
  args: { text: 'Small', size: 'small', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
};

export const Disabled: Story = {
  args: { text: 'Disabled', type: 'disabled', arrowLeft: false, arrowRight: false },
  render: renderWithIcons,
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
  render: renderWithIcons,
};