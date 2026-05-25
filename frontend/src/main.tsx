import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { notificationsPage } from './modules/notifications/routers/notifications.router'
import { dashboardPage } from './modules/dashboard/routers/dashboard.router.tsx'
import { devicesPage } from './modules/devices/routers/devices.router.tsx'
import { electricChargeRouter } from './modules/electricaharge/routers/electricCharge.router.tsx'
import LoginPage from './modules/dashboard/pages/loginPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            ...dashboardPage,
            ...devicesPage,
            ...notificationsPage,
            ...electricChargeRouter, 
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)