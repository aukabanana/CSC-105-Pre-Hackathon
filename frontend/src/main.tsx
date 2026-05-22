import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NotificationsPage from './modules/notifications/pages/notificationsPage.tsx'
import ElectricChargePage from './pages/electricChargePage.tsx'
import DashboardPage from './pages/dashboardPage.tsx'
import { DevicePage } from './pages/devicesPage.tsx'

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
        path: '/devices-controller',
        element: <DevicePage />
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