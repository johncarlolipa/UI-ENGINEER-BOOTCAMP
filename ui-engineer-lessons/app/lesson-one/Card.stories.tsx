import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Design-System/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ---- the card you specified ---- */
export const LargeOutlinedBeach: Story = {
  args: {
    size: 'large',
    variant: 'outlined',
    imageSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&w=800',
    imageAlt: 'beautiful beach',
    title: 'The Beautiful Beach',
    subtitle: 'Delight Yourself',
    description: 'Try this beach here so your stress will go away.',
    tags: ['Bali', 'Boracay', 'Siargao'],
    footer: (
      <div className="flex justify-center gap-4">
        <Button text="Information" type="info" variant="outline" />
        <Button text="Learn More" type="primary" variant="filled" />
      </div>
    ),
  },
};

/* ---- extra variants (optional) ---- */
export const Default = { args: { ...LargeOutlinedBeach.args, size: 'medium' } };
export const Small = { args: { ...LargeOutlinedBeach.args, size: 'small' } };
export const Shadow = { args: { ...LargeOutlinedBeach.args, variant: 'shadow' } };
export const NoImage = { args: { title: 'No image', subtitle: 'Text-only', description: 'Just content.' } };