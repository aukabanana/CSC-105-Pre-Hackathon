import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/loginPage.tsx'
// import App from '../App.tsx'
import './index.css'
import DashboardPage from './pages/dashboardPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />   
    },
    {
        path: '/dashboard',
        element: <DashboardPage />   
    },
])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
