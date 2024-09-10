'use client'
import { useCallback, useEffect, useRef } from 'react'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

import { Image as ImageType } from '@/types/Gallery'

type ImageModalProps = {
  images: ImageType[]
}

export const ImageModal = ({ images }: ImageModalProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const key = searchParams?.get('key')
  const router = useRouter()

  const findImage = useCallback(() => images.find(({ _key }) => _key === key), [images, key])
  const image = findImage()
  const url = image?.image.url
  const alt = image?.image.alt

  const handleGoBack = useCallback(() => {
    router.back()
  }, [router])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) handleGoBack()
    }

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleGoBack])

  return (
    <div className="fixed px-4 inset-0 backdrop-blur-xl w-full h-full flex items-center justify-center">
      <div ref={ref} className="p-2 shadow-lg rounded-md bg-sky-100">
        {url && alt && (
          <Image
            src={url}
            alt={alt}
            width={1920}
            height={1080}
            priority
            className="lg:w-[800px] lg:h-[600px]"
          />
        )}
      </div>
    </div>
  )
}
