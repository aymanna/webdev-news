import { articles } from '@/data'

export default function handler(_, res) {
  res.status(200).json(articles)
}
