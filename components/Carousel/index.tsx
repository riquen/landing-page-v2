'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel as CarouselUI, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { CarouselImage } from '@/types/CarouselImage'

type CarouselProps = {
  carouselImages: CarouselImage[]
}

export default function Carousel({ carouselImages }: Readonly<CarouselProps>) {
  return (
    <CarouselUI opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
      <CarouselContent>
        {carouselImages.map(({ _key, image }) => (
          <CarouselItem key={_key}>
            <Image
              src={image.url}
              alt={image.alt}
              width={800}
              height={600}
              priority
              className="h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselUI>
  )
}
