import Image from 'next/image'

import Description from '@/components/Description'
import PageTitle from '@/components/PageTitle'
import { getGallery } from '@/sanity/sanity-utils'

export default async function Gallery() {
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
            <div key={_key} className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                width={1920}
                height={1080}
                priority={index < 3}
                className="md:h-64"
                sizes="(min-width: 64rem) 35vw,(min-width: 48rem) 50vw, 100vw"
              />
              <div className="py-4 text-center bg-white">
                <h3 className="text-lg md:text-2xl font-montserrat font-bold">{imageTitle}</h3>
                <p className="font-open-sans">{formattedPrice}</p>
              </div>
            </div>
          )
        })}
      </div>
      <p className="font-open-sans text-xs md:text-base italic text-right">
        Values may be out of date
      </p>
    </div>
  )
}
