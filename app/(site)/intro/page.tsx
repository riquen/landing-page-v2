import Image from 'next/image'

import PageTitle from '@/components/PageTitle'
import { getIntro } from '@/sanity/sanity-utils'

export default async function Intro() {
  const { title, description, icons } = await getIntro()

  return (
    <div className="flex flex-col justify-evenly -mx-4 px-4 bg-gradient-to-b from-sky-300 via-pink-300 to-amber-300">
      <PageTitle>{title}</PageTitle>
      <p className="text-center font-open-sans">{description}</p>
      <div className="flex justify-center flex-wrap gap-x-16">
        {icons.map(({ _key, url, alt }) => (
          <Image key={_key} src={url} alt={alt} width={100} height={100} />
        ))}
      </div>
    </div>
  )
}
