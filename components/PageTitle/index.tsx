type PageTitleProps = {
  children: string
}

export default function PageTitle({ children }: Readonly<PageTitleProps>) {
  return <h2 className="text-center text-3xl md:text-4xl font-montserrat font-bold">{children}</h2>
}
