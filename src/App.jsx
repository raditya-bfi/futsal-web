import { Helmet } from 'react-helmet-async'

import ProtectedLayout from '~/components/Layout/Protected'
import PublicLayout from '~/components/Layout/Public'
import useAuth from '~/utils/auth/useAuth'

function App() {
  const { state } = useAuth()
  return (
    <>
      <Helmet titleTemplate='%s | Futsal Gembira' defaultTitle='Futsal Gembira'>
        <meta name='description' content='Futsal Gembira' />
      </Helmet>
      {state?.isLoggedIn ? <ProtectedLayout /> : <PublicLayout />}
    </>
  )
}

export default App
