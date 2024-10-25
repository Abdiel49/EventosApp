import { IUser } from "./auth.type"

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

interface Location {
  name: string
  url: string
};

export interface IEvent2 {
  id: string
  title: string
  date: Date
  fee: number;
  description: string
  limiliteDeAsistentes?: number;
  asistentes: IUser[] // extraer
  image: string
  categoryId: string
  facultad: String
}
