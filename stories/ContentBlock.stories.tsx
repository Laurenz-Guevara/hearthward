import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MediaContentRightCard } from '@/components/media-content-right-card';

const meta = {
  component: MediaContentRightCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaContentRightCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


