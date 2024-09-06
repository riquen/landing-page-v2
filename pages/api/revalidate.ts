import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const paths = req.body.paths

  if (!paths || !Array.isArray(paths)) {
    return res.status(400).json({ message: 'Caminhos inválidos' })
  }

  try {
    await Promise.all(paths.map(async (path) => await res.revalidate(path)))
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: 'Erro ao revalidar páginas' })
  }
}
