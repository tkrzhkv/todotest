import { TodoComponent } from '@components/todo/todo-component'
import RootLayout from '@components/root-layout/root-layout'
import { FC } from 'react'

const App:FC = () => {
  return (
    <RootLayout>
      <TodoComponent />
    </RootLayout>
  )
}

export default App
