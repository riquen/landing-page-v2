import Image from 'next/image'

import PageTitle from '@/components/PageTitle'
import { getIntro } from '@/sanity/sanity-utils'
import Description from '@/components/Description'

export default async function Intro() {
  const { title, description, icons } = await getIntro()

  return (
    <div className="flex flex-col justify-evenly -mx-4 px-4 xl:-mx-[336px] xl:px-[336px] bg-gradient-to-b from-sky-300 via-pink-300 to-amber-300">
      <PageTitle>{title}</PageTitle>
      <Description>{description}</Description>
      <div className="flex justify-center flex-wrap gap-x-16">
        {icons.map(({ _key, url, alt }) => (
          <Image key={_key} src={url} alt={alt} width={100} height={100} />
        ))}
      </div>
    </div>
  )
}
