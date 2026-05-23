import axios from "axios";
import type { GetNotificationsResponse, Notification } from "../types/notification";

export async function getNotifications(): Promise<Notification[]> {
    const response = await axios.get<GetNotificationsResponse>("http://localhost:3000/notifications");
    return response.data.data;
}