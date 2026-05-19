import DashboardHeader from "../components/dashboardHeader";
import GoHomeButton from "../components/goHomeButton";
import NotificationList from "../components/notificationList";

export default function NotificationsPage () {
    return (
        <div className="flex flex-col bg-(--bg-main)
        p-5 gap-y-5
        md:p-10 md:gap-y-10">
            <DashboardHeader title="Notifications" username="Admin Username" />
            
            <GoHomeButton />
            
            <NotificationList />

        </div>

    )
}