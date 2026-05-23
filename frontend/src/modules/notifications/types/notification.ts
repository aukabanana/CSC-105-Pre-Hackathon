export type NotificationType =
    | 'ELECTRIC_COST_EXCEEDED'
    | 'DEVICE_ON_TOO_LONG'
    | 'DEVICE_OFFLINE'
    | 'HIGH_TEMPERATURE'
    | 'LOW_TEMPERATURE'
    | 'SYSTEM_INFO';

export type NotificationLevel = 'INFO' | 'WARNING' | 'CRITICAL';

export type NotificationElectronic = {
    id: string;
    name: string;
    type: string;
    location: string;
};

export type Notification = {
    id: string;
    electronic_id: string;
    electronic?: NotificationElectronic;
    type: NotificationType;
    level: NotificationLevel;
    title: string;
    message: string;
    is_read: boolean;
    created_at: string;
};

export type GetNotificationsResponse = {
    message: string;
    data: Notification[];
};