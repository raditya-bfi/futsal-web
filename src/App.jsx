import ProtectedLayout from '~/components/Layout/Protected'
import PublicLayout from '~/components/Layout/Public'
import useAuth from '~/utils/auth/useAuth'

function App() {
  const { state } = useAuth()
  return <> {state?.isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}</>
}

export default App
