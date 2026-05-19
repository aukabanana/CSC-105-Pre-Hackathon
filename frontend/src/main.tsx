import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NotificationsPage from './pages/notificationsPage.tsx'
import ElectricChargePage from './pages/electricChargePage.tsx'
import DashboardPage from './pages/dashboardPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <DashboardPage /> 
    },
    {
        path: '/notifications',
        element: <NotificationsPage />   
    },
    {
        path: '/electric-charge',
        element: <ElectricChargePage />   
    },

])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)