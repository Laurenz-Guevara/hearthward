import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PriceCard } from '@/components/price-card';
import { membershipPlans } from '@/.storybook/mocks/pricing';

const meta = {
  component: PriceCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isAnnual: {
      control: 'boolean',
    },
  },
  args: {
    isAnnual: false,
  },
} satisfies Meta<typeof PriceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FreePlan: Story = {
  args: {
    priceCard: membershipPlans[0],
  },
};

export const FamilyPlan: Story = {
  args: {
    priceCard: membershipPlans[1],
  },
};

export const HearthPlan: Story = {
  args: {
    priceCard: membershipPlans[2],
  },
};

