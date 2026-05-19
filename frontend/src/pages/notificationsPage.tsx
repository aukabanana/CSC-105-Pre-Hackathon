import DashboardHeader from "../components/dashboardHeader";
import GoHomeButton from "../components/goHomeButton";
import NotificationList from "../components/notificationList";

export default function NotificationsPage () {
    return (
        <div className="flex flex-col p-10 bg-(--bg-main)
        gap-y-8">
            <DashboardHeader title="Notifications" username="Admin Username" />
            
            <GoHomeButton />
            
            <NotificationList />

        </div>

    )
}