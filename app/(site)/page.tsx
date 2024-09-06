import Carousel from '@/components/Carousel'
import PageTitle from '@/components/PageTitle'
import { getCarouselImages } from '@/sanity/sanity-utils'
import { CarouselImage } from '@/types/CarouselImage'

export default function Home({ homeData }: { homeData: CarouselImage[] }) {
  const carouselImages = homeData

  return (
    <div className="flex flex-col justify-evenly">
      <PageTitle>WELCOME ABOARD!</PageTitle>
      <Carousel carouselImages={carouselImages} />
    </div>
  )
}

export async function getStaticProps() {
  const homeData = await getCarouselImages()

  return {
    props: {
      homeData,
    },
  }
}
