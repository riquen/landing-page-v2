import { createClient, groq } from 'next-sanity'

import { CarouselImage } from '@/types/CarouselImage'
import { Intro } from '@/types/Intro'

import clientConfig from './config/client-config'

export async function getCarouselImages(): Promise<CarouselImage[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "gallery"]{
      images[0...5]{
        image{
          "url": asset->url,
          alt,
        }
      }
    }`,
  )
  const data = response[0].images.map((item: { image: CarouselImage }) => item.image)

  return data
}

export async function getIntro(): Promise<Intro> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "intro"]{
      title,
      description,
      icons[0...3]{
        icon{
          "url": asset->url,
          alt,
        }
      }
    }`,
  )
  console.log(response[0])
}
