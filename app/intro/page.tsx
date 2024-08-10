import Image from 'next/image'

import PageTitle from '@/components/PageTitle'

export default function Intro() {
  return (
    <div className="flex flex-col justify-evenly bg-gradient-to-b from-sky-300 via-pink-300 to-amber-300 -mx-4 px-4">
      <PageTitle>WHAT IS AN AIRCRAFT?</PageTitle>
      <p className="text-center font-open-sans">
        An aircraft is a vehicle that is able to fly by gaining support from the air. It counters
        the force of gravity by using either static lift or by using the dynamic lift of an airfoil,
        or in a few cases the downward thrust from jet engines.
      </p>
      <div className="flex justify-center flex-wrap gap-x-16">
        <Image src="/assets/svg/airplane.svg" alt="Airplane" width={100} height={100} />
        <Image src="/assets/svg/helicopter.svg" alt="Helicopter" width={100} height={100} />
        <Image src="/assets/svg/drone.svg" alt="Drone" width={100} height={100} />
      </div>
    </div>
  )
}
