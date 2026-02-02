import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { PriceCTA as PriceCTAComponent } from '@/components/price-cta';
import { membershipPlans } from '@/.storybook/mocks/pricing';

const meta = {
  component: PriceCTAComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PriceCTAComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingComponent: Story = {
  args: {
    membershipPlans: membershipPlans
  }
};

