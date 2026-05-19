export default function NotificationList() {
    return (
        <div className="w-full h-fit flex flex-row justify-between items-center bg-(--bg-card) border-(--color-orange) shadow-(--shadow-lg)
        border-l-4 p-5 rounded-3xl">
            <div className="flex flex-col items-start
            gap-2.5">

                <h1 className="font-bold text-(--text-primary)
                text-[20px]">Device has been running too long</h1>

                <div className="w-fit h-fit flex flex-row
                gap-2.5">
                    <span className="status-pill info font-bold
                    px-2.5 py-1.25">warning</span>
                    <span className="status-pill info font-bold
                    px-2.5 py-1.25">Smart LED Bulb</span>
                </div>

                <p className="text-(--text-primary)
                text-[18px]">Living Room Light has been turned on for more than 24 hours.</p>

            </div>

            <div className="flex flex-col justify-center items-center
            gap-2.5">
                <span className="flex justify-center items-center bg-(--color-primary) text-(--bg-card) font-bold cursor-pointer transition duration-300 ease-in-out
                py-2.5 px-5 rounded-lg
                hover:shadow-(--shadow-button) hover:bg-(--color-primary-hover)">mark as read</span>
                <p className="text-(--text-main) font-medium">May 16, 2026</p>
            </div>
        </div>
    )
}