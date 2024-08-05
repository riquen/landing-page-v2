import Carousel from '@/components/Carousel'
import { getCarouselImages } from '@/sanity/sanity-utils'

export default async function Home() {
  const carouselImages = await getCarouselImages()

  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="text-center text-3xl font-montserrat font-bold">WELCOME ABOARD!</h1>
      <Carousel carouselImages={carouselImages} />
    </div>
  )
}
