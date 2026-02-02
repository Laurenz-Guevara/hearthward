import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { items } from '@/.storybook/mocks/accordion';
import { AccordionCard } from '@/components/accordion';

const meta = {
  component: AccordionCard,
} satisfies Meta<typeof AccordionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: items
  }
};

