import Carousel from '@/components/Carousel'
import PageTitle from '@/components/PageTitle'
import { getCarouselImages } from '@/sanity/sanity-utils'

export default async function Home() {
  const carouselImages = await getCarouselImages()

  return (
    <div className="flex flex-col justify-evenly">
      <PageTitle>WELCOME ABOARD!</PageTitle>
      <Carousel carouselImages={carouselImages} />
    </div>
  )
}
