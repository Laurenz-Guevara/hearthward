import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconDog } from "@tabler/icons-react"

export function MultiBlockCard() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><IconDog /><span>Lorem ipsum</span></CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><IconDog /><span>Dolor sit</span></CardTitle>
          <CardDescription>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><IconDog /><span>Privacy Controls</span></CardTitle>
          <CardDescription>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}
