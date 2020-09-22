import { createContext } from 'react'
import data from './data.json'

export const DataContext = createContext(data)

export interface Link {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  searchUrl?: string
  searchConcat?: string
}

export interface LinkGroup {
  title: string
  links: Record<string, Link>
}

export interface LinkCategory {
  title: string
  groups: Record<string, LinkGroup>
}

export interface Data {
  $schema: string
  categories: Record<string, LinkCategory>
}
