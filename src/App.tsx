import React, { ReactElement, useCallback, useContext } from 'react'
import './App.scss'
import { Data, DataContext, LinkCategory } from './data'

export function App(): ReactElement {
  const dataContext = useContext(DataContext) as Data

  const getLinksCount = useCallback((category: LinkCategory) => {
    return Object.entries(category.groups).reduce((sum, [key, category]) => {
      return sum + Object.keys(category.links).length
    }, 0)
  }, [])

  return (
    <div className="app">
      <div className="logo">&lt;WebdevHome /&gt;</div>
      <div className="search">Suche...</div>
      <div className="sidebar">
        {Object.entries(dataContext.categories).map(([key, category]) => (
          <div>{category.title} ({getLinksCount(category)})</div>
        ))}
      </div>
      <div className="content">Content</div>
    </div>
  )
}
