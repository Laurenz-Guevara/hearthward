import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CTABlock } from '@/components/cta-block';

const meta = {
  component: CTABlock,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CTABlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

