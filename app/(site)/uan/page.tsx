import Description from '@/components/Description'
import PageTitle from '@/components/PageTitle'
import { getUan } from '@/sanity/sanity-utils'

export default async function Uan() {
  const { title, description, itens } = await getUan()

  return (
    <div className="flex flex-col py-6 gap-4">
      <PageTitle>{title}</PageTitle>
      <Description>{description}</Description>
      <div className="flex flex-col gap-6 mt-4">
        {itens.map((item) => (
          <div key={item.title}>
            <h3 className="text-lg font-montserrat font-bold">{item.title}</h3>
            <p className="font-open-sans">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
