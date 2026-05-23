import DashboardHeader from "../../../components/dashboardHeader";
import GoHomeButton from "../../../components/goHomeButton";
import NotificationList from "../components/notificationList";

import { useEffect, useState } from "react";
import { getNotifications } from "../apis/notificationApi";
import type { Notification } from "../types/notification";

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchNotifications() {
            try {
                const data = await getNotifications();
                setNotifications(data);
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
                setErrorMessage("Failed to load notifications.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchNotifications();
    }, []);


    return (
        <div className="flex flex-col bg-(--bg-main)
        p-5 gap-y-5
        md:p-10 md:gap-y-10">
            <DashboardHeader title="Notifications" username="Admin Username" />

            <GoHomeButton />

            {isLoading && (
                <div className="w-full flex justify-center items-center bg-(--bg-card) rounded-3xl p-5 shadow-(--shadow-lg) text-(--text-primary)
            text-[16px]
            md:text-[20px]">
                    Loading notifications...
                </div>
            )}

            {errorMessage && (
                <div className="w-full flex justify-center items-center bg-(--bg-card) rounded-3xl p-5 shadow-(--shadow-lg) text-(--text-primary)
                text-[16px]
                md:text-[20px]">
                    {errorMessage}
                </div>
            )}

            {!isLoading && !errorMessage && (
                <NotificationList notifications={notifications} />
            )}

        </div>

    )
}