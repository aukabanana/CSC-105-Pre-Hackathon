import type { Notification } from "../types/notification"

type NotificationListProps = {
    notifications: Notification[];
    onMarkAsRead: (id: string) => void;
}

export default function NotificationList({ notifications, onMarkAsRead }: NotificationListProps) {
    if (!notifications || notifications.length === 0) {
        return (
            <div className="w-full flex justify-center items-center bg-(--bg-card) rounded-3xl p-5 shadow-(--shadow-lg) text-(--text-primary)
                            text-[16px]
                            md:text-[20px]">
                No notifications found.
            </div>
        )

    }

    const levelClassMap = {
        INFO: "info",
        WARNING: "warning",
        CRITICAL: "critical",
    } as const;

    const levelClassButton = {
        read: "read",
        unread: "unread",
    } as const;

    return (
        <div className="w-full flex flex-col
                        gap-5
                        md:gap-10">
            {notifications.map((notification) => (
                <div key={notification.id} className="w-full overflow-hidden overflow-x-scroll scrollbar-none rounded-3xl">
                    <div className={`w-full min-w-150 h-fit flex flex-row justify-between items-center bg-(--bg-card) ${levelClassMap[notification.level]} shadow-(--shadow-lg)
                                    border-l-4 p-5 rounded-3xl gap-2.5
                                    md:gap-0`}>
                        <div className="flex flex-col items-start
                                        gap-1.25
                                        md:gap-2.5">

                            <h1 className="font-bold text-(--text-primary)
                                            text-[16px]
                                            md:text-[20px]">
                                {notification.title}
                            </h1>

                            <div className="w-fit h-fit flex flex-row
                                            gap-1.25
                                            md:gap-2.5">
                                <span className={`status-pill ${levelClassMap[notification.level]} font-bold
                                                    text-[14px]
                                                    md:text-[18px]
                                                    px-2 py-1
                                                    md:px-2.5 md:py-1.25`}>
                                    {notification.level.toLowerCase()}
                                </span>
                                <span className="status-pill info font-bold
                                                text-[14px]
                                                md:text-[18px]
                                                px-2 py-1
                                                md:px-2.5 md:py-1.25">
                                    {notification.electronic
                                            ? `${notification.electronic.name} • ${notification.electronic.location}`
                                            : "Unknown Device"}
                                </span>
                            </div>

                            <p className="text-(--text-primary)
                                            text-[14px]
                                            md:text-[18px]">
                                {notification.message}
                            </p>

                        </div>

                        <div className="flex flex-col justify-center items-center min-w-fit gap-2.5">

                            <button
                                type="button"
                                disabled={notification.is_read}
                                onClick={() => onMarkAsRead(notification.id)}
                                className={`flex justify-center items-center min-w-fit bg-(--color-primary) text-(--bg-card) font-bold cursor-pointer transition duration-300 ease-in-out
                                            py-1.25 px-2.5 rounded-lg text-[14px] 
                                            ${notification.is_read ? levelClassButton.read : levelClassButton.unread}
                                            md:text-[18px] md:py-2.5 md:px-5
                                            hover:shadow-(--shadow-button) hover:bg-(--color-primary-hover)`}>
                                {notification.is_read ? "read" : "mark as read"}
                            </button>

                            <p className="text-(--text-main) font-medium
                                          text-[14px]
                                          md:text-[18px]">
                                {new Date(notification.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}