import axios from "axios";
import type { GetNotificationsResponse, Notification } from "../types/notification";

export async function getNotifications(): Promise<Notification[]> {
    const response = await axios.get<GetNotificationsResponse>("http://localhost:3000/api/notifications",
        {
            withCredentials: true
        });
    return response.data.data;
}

export async function markNotificationAsRead(id: string): Promise<Notification> {
    const response = await axios.patch<{
        message: string;
        data: Notification;
    }>(`http://localhost:3000/api/notifications/${id}/read`,
        undefined,
        {
            withCredentials: true
        });

    return response.data.data;
}