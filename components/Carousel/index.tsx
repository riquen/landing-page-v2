'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { CarouselImage } from '@/types/CarouselImage'

type CarouselProps = {
  carouselImages: CarouselImage[]
}

export default function Carousel({ carouselImages }: Readonly<CarouselProps>) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <CarouselUI setApi={setApi} opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselContent>
          {carouselImages.map(({ _key, image }, index) => (
            <CarouselItem key={_key}>
              <Image
                src={image.url}
                alt={image.alt}
                width={1920}
                height={1080}
                priority={index === 0}
                className="h-full mx-auto lg:w-[800px] lg:h-[600px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselUI>
      <div className="flex justify-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index + 1}
            className={`outline-none mx-2 w-3 h-3 rounded-full ${
              index + 1 === current ? 'bg-sky-400 hover:bg-sky-400' : 'bg-sky-300'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
