import React, { ReactElement } from 'react'
import './App.scss'

interface Foo {
  bar(i: number): number
}

export const foo: Foo = {
  bar(i) {
    if (i > 4) {
      function baz() {
        return 4
      }
      return baz()
    }
    return i + 2
  },
}

function App(): ReactElement {
  return <div className="app"></div>
}

export default App
