import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconHomeSpark } from "@tabler/icons-react";
import { Button } from '@/components/ui/button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button size={"sm"}>Small</Button>
        <Button size={"default"}>Default</Button>
        <Button size={"lg"}>Large</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size={"icon"}>Icon</Button>
        <Button size={"icon"}><IconHomeSpark /></Button>
      </div>
    </div>
  ),
};
