export interface NotificationResponse {
    id: string;
    electronic_id: string;
    type: string;
    level: string;
    title: string;
    message: string;
    is_read: boolean;
    created_at: Date;
    electronic?: {
        id: string;
        name: string;
        type: string;
        location: string;
    };
}