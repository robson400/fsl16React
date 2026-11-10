import { AuthProvider  } from './context/AuthContext.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import './Global.css'

function App() {

  return(
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
