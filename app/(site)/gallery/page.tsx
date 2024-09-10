import Image from 'next/image'
import Link from 'next/link'

import Description from '@/components/Description'
import PageTitle from '@/components/PageTitle'
import { getGallery } from '@/sanity/sanity-utils'
import { ImageModal } from '@/components/ImageModal'

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined
}

export default async function Gallery({ searchParams }: Readonly<SearchParamProps>) {
  const show = searchParams?.show
  const gallery = await getGallery()
  const { title, description, images } = gallery

  return (
    <div className="flex flex-col py-6 gap-4">
      <PageTitle>{title}</PageTitle>
      <Description>{description}</Description>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map(({ _key, image, title: imageTitle, price }, index) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          }).format(price)

          return (
            <Link
              key={_key}
              href={`/gallery?show=true&key=${_key}`}
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer group outline-none"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={1920}
                height={1080}
                priority={index < 3}
                className="md:h-64"
              />
              <div className="py-4 text-center bg-white group-active:bg-sky-100">
                <h3 className="text-lg md:text-2xl font-montserrat font-bold">{imageTitle}</h3>
                <p className="font-open-sans">{formattedPrice}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <p className="font-open-sans text-xs md:text-base italic text-right">
        Values may be out of date
      </p>
      {show && <ImageModal images={images} />}
    </div>
  )
}
