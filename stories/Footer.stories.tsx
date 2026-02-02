import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Footer as FooterComponent } from '@/components/footer';

const meta = {
  component: FooterComponent,
  decorators: [
    (Story) => (
      <div className="fixed left-0 bottom-0 w-full flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
