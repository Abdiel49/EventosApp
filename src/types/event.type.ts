export interface IEvent {
  id: number
  title: string
  rating: number
  voteCount: number
  poster: string
  categoryId: number
  description: string
  languages: string[]
  formats: string[]
  favorite: boolean
}