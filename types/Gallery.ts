export type Gallery = {
  title: string
  description: string
  images: Image[]
}

export type Image = {
  _key: string
  title: string
  price: number
  image: Asset
}

export type Asset = {
  url: string
  alt: string
}
