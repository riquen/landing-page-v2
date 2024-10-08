import { createClient, groq } from 'next-sanity'

import { CarouselImage } from '@/types/CarouselImage'
import { Intro } from '@/types/Intro'
import { Aircrafts } from '@/types/Aircrafts'
import { Uan } from '@/types/Uan'
import { Gallery } from '@/types/Gallery'

import clientConfig from './config/client-config'

export async function getCarouselImages(): Promise<CarouselImage[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "gallery"]{
      images[0...5]{
        _key,
        image{
          "url": asset->url,
          alt,
        }
      }
    }`,
  )
  return response[0].images
}

export async function getIntro(): Promise<Intro> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "intro"]{
      title,
      description,
      icons[0...3]{
        _key,
        "url": asset->url,
        alt,
      }
    }`,
  )
  return response[0]
}

export async function getAircrafts(): Promise<Aircrafts[]> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "aircrafts"]{
      title,
      description,
    }`,
  )
  return response
}

export async function getUan(): Promise<Uan> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "uan"]{
      title,
      description,
      itens,
    }`,
  )
  return response[0]
}

export async function getGallery(): Promise<Gallery> {
  const response = await createClient(clientConfig).fetch(
    groq`*[_type == "gallery"]{
      title,
      description,
      images[]{
        _key,
        title,
        price,
        image{
          "url": asset->url,
          alt,
        }
      }
    }`,
  )
  return response[0]
}
