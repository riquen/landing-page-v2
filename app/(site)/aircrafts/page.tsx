import PageTitle from '@/components/PageTitle'
// import { getAircrafts } from '@/sanity/sanity-utils'

export default async function Aircrafts() {
  //   const { titles, descriptions } = await getAircrafts()

  return (
    <div className="relative flex flex-col justify-evenly -mx-4 px-4 bg-gradient-to-t from-sky-950 to-gray-950 text-sky-200">
      <div className="absolute top-0 left-0 w-px h-px rounded-full shadow-small-stars" />
      <div className="absolute top-0 left-0 w-0.5 h-0.5 rounded-full shadow-medium-stars" />
      <div className="absolute top-0 left-0 w-1 h-1 rounded-full shadow-big-stars" />
      <div>
        <PageTitle>AIRPLANE</PageTitle>
        <p className="text-center font-open-sans">
          An airplane (informally plane) is a fixed-wing aircraft that is propelled forward by
          thrust from a jet engine, or propeller, etc. Airplanes come in a variety of sizes, shapes,
          and wing configurations. They can be used for recreation, transportation of goods and
          people, military, and research.
        </p>
      </div>
      <div>
        <PageTitle>HELICOPTER</PageTitle>
        <p className="text-center font-open-sans">
          A helicopter is a type of rotorcraft in which lift and thrust are supplied by
          horizontally-spinning rotors. This allows the helicopter to take off and land vertically,
          to hover, and to fly forward, backward and laterally. These attributes allow helicopters
          to be used in congested or isolated areas.
        </p>
      </div>
    </div>
  )
}
