type PageTitleProps = {
  children: string
}

export default function PageTitle({ children }: PageTitleProps) {
  return <h2 className="text-center text-3xl font-montserrat font-bold">{children}</h2>
}
