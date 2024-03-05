import RootLayout from "@components/root-layout"
import { FC } from "react"
import { TodoComponent } from "@components/todo"

const App: FC = () => {
  return (
    <RootLayout>
      <TodoComponent />
    </RootLayout>
  )
}

export default App
