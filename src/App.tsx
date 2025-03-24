import { ViewProvider } from "./context/ViewContext"
import Home from "./pages/Home"

function App() {

  return (
    <ViewProvider>
      <Home />
    </ViewProvider>
  )
}

export default App
