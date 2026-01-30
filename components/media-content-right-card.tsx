import { IconSquareCheck } from "@tabler/icons-react";
// import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

export function MediaContentRightCard() {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-10 z-0">
        <div className="order-1 my-auto">
          <p className="sm:text-3xl md:max-w-md md:pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <div className="md:max-w-xl lg:pb-5">
            <p>
              Praesent aliquam felis id urna mattis, eget efficitur massa sollicitudin. Nullam ornare, massa vel pharetra vehicula, est erat ornare mauris, ut molestie nisl ipsum sed lectus. Donec lacus sapien, facilisis id tincidunt id, rutrum non ipsum. Nullam felis nibh, interdum non pharetra id, suscipit id turpis. Proin mauris.
            </p>
          </div>
          <div className="py-8 md:pb-0 space-y-4 lg:space-y-8">
            <div className="flex items-center space-x-4">
              <span>
                <IconSquareCheck className="h-8 w-8 lg:h-9 lg:w-9 text-primary" />
              </span>
              <p className=" lg:text-xl font-semibold capitalize">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>
                <IconSquareCheck className="h-8 w-8 lg:h-9 lg:w-9 text-primary" />
              </span>
              <p className="lg:text-xl font-semibold capitalize">
                Donec euismod tellus nec sodales porta.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>
                <IconSquareCheck className="h-8 w-8 lg:h-9 lg:w-9 text-primary" />
              </span>
              <p className="lg:text-xl font-semibold capitalize">
                Nulla eu est congue, accumsan sapien.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>
                <IconSquareCheck className="h-8 w-8 lg:h-9 lg:w-9 text-primary" />
              </span>
              <p className="lg:text-xl font-semibold capitalize">
                Nunc vitae eleifend purus, quis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:max-w-[463px] mx-auto">
            {/* <Image */}
            {/*   className="w-full" */}
            {/*   src="" */}
            {/*   alt="" */}
            {/*   width="" */}
            {/*   height="" */}
            {/* /> */}
            <Skeleton className="w-full h-[500px]" />
            <div className="bg-blue-600">
              <p className="sm:text-xl p-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat sem id
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
