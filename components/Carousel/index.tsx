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
    <CarouselUI opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} className="">
      <CarouselContent>
        {carouselImages.map(({ url, alt }) => (
          <CarouselItem key={url} className="flex">
            <Image src={url} alt={alt} width={800} height={600} priority />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselUI>
  )
}
