import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import NotificationsPage from './pages/notificationsPage.tsx'
import DashboardPage from './pages/dashboardPage.tsx'
import { DevicePage } from './pages/devicesPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/notifications',
        element: <NotificationsPage />   
    },
    {
        path: '/dashboard',
        element: <DashboardPage />   
    },
    {
        path: '/devices-controller',
        element: <DevicePage />   
    },

])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
