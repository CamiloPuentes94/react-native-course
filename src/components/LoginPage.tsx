import { useEffect } from "react"
import { useAuthStore } from "../store/auth.store"

export const LoginPage = () => {

  const authStatus = useAuthStore(state => state.status)

  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)

  useEffect(() => {
    setTimeout(() => {
      logout()
    }, 1500)
  }, [])


  if (authStatus === 'checking') {
    return <h3>Checking authentication...</h3>
  }

  return (
    <>
      <h3>Login page</h3>

      {authStatus === 'authenticated' ? (
        <>
          <p>Authenticated</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Not authenticated</p>
          <button onClick={() => login('juan@utefectiva.com', '123456')}>Login</button>
        </>
      )
      }
    </>
  )
}
