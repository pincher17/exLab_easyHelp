import React, { useEffect } from 'react'

import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'containers/Header'
import ThemeProvider from 'providers/ThemeProvider'
import AppRouter from 'router/AppRouter'
import axiosInstance from 'services/axios'
import useUserStore from 'store/user/user.store'

const queryClient = new QueryClient()

const App: React.FC = () => {
  const token = useUserStore((store) => store.token)
  const setIsAuthTrue = useUserStore((store) => store.setIsAuthTrue)
  const logout = useUserStore((store) => store.logout)

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
      setIsAuthTrue()
    } else {
      axiosInstance.defaults.headers.common.Authorization = undefined
      logout()
    }
  }, [token])

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
