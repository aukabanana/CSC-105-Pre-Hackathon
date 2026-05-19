export type NotificationType =
    | 'ELECTRIC_COST_EXCEEDED'
    | 'DEVICE_ON_TOO_LONG'
    | 'DEVICE_OFFLINE'
    | 'HIGH_TEMPERATURE'
    | 'LOW_TEMPERATURE'
    | 'SYSTEM_INFO';

export type NotificationLevel = 'INFO' | 'WARNING' | 'CRITICAL';

export type Notification = {
    id: string;
    electronic_id: string;
    electronic: string;
    type: NotificationType;
    level: NotificationLevel;
    title: string;
    message: string;
    is_read: boolean;
    created_at: string;
}