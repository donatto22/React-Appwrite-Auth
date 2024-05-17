import { AppTheme } from "./AppTheme"
import { AuthProvider } from "./context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

function App() {

  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}

export default App
