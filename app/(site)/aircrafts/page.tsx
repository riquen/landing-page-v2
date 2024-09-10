import PageTitle from '@/components/PageTitle'
import Description from '@/components/Description'
import { getAircrafts } from '@/sanity/sanity-utils'

export default async function Aircrafts() {
  const aircrafts = await getAircrafts()

  return (
    <div className="relative flex flex-col justify-evenly -mx-4 px-4 xl:-mx-[336px] xl:px-[336px] bg-gradient-to-t from-sky-950 to-gray-950 text-sky-200">
      <div className="absolute top-0 left-0 w-px h-px rounded-full shadow-small-stars" />
      <div className="absolute top-0 left-0 w-0.5 h-0.5 rounded-full shadow-medium-stars" />
      <div className="absolute top-0 left-0 w-1 h-1 rounded-full shadow-big-stars" />
      {aircrafts.map(({ title, description }) => (
        <div key={title}>
          <PageTitle>{title}</PageTitle>
          <Description>{description}</Description>
        </div>
      ))}
    </div>
  )
}
