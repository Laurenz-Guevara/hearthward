import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const MockAuthButton = () => (
  <div className="flex gap-2">
    <Button asChild size="sm" variant={"outline"}>
      <Link href="/auth/login">Sign in</Link>
    </Button>
    <Button asChild size="sm" variant={"default"}>
      <Link href="/auth/sign-up">Sign up</Link>
    </Button>
  </div>
);

const meta = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    authButton: <MockAuthButton />,
  },
};

export const LoggedIn: Story = {
  args: {
    authButton: (
      <div className="flex items-center gap-4">
        <Button variant={"default"}>Logout</Button>
      </div>
    ),
  },
};
