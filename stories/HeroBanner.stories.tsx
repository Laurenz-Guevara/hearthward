import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroBanner } from '@/components/hero-banner';

const meta = {
  component: HeroBanner,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


