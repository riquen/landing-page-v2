import Carousel from '@/components/Carousel'
import { getCarouselImages } from '@/sanity/sanity-utils'

export default async function Home() {
  const carouselImages = await getCarouselImages()

  return <Carousel carouselImages={carouselImages} />
}
