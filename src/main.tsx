import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './assets/index.css'

import { store } from './redux/Store/store.ts'
import { Todo } from './Pages/Todo.tsx'
import { TodoWithCache } from './Pages/TodoWithCache.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Todo /> */}
      <TodoWithCache />
    </Provider>
  </React.StrictMode>,
)
