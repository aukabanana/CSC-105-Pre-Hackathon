import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { notificationsPage } from './modules/notifications/routers/notifications.router'
import ElectricChargePage from './pages/electricChargePage.tsx'
import DashboardPage from './pages/dashboardPage.tsx'
import { DevicePage } from './pages/devicesPage.tsx'
import LoginPage from './pages/loginPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [...notificationsPage],
    },
    {
        index: true,
        element: <LoginPage />, 
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
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