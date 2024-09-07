type DescriptionProps = {
  children: string
}

export default function Description({ children }: Readonly<DescriptionProps>) {
  return <p className="text-center font-open-sans">{children}</p>
}
