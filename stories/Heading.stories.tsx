import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  decorators: [
    () => (
      <div>
        <h1>Heading</h1>
        <h2>Heading</h2>
        <h3>Heading</h3>
        <h4>Heading</h4>
        <h5>Heading</h5>
        <h6>Heading</h6>
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
