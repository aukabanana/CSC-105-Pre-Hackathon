export default function NotificationList() {
    return (
        <div className="w-full overflow-hidden overflow-x-scroll scrollbar-none rounded-3xl">
            <div className="w-full min-w-150 h-fit flex flex-row justify-between items-center bg-(--bg-card) border-(--color-orange) shadow-(--shadow-lg)
            border-l-4 p-5 rounded-3xl gap-2.5
            md:gap-0">
                <div className="flex flex-col items-start
                gap-1.25
                md:gap-2.5">

                    <h1 className="font-bold text-(--text-primary)
                    text-[16px]
                    md:text-[20px]
                    ">Device has been running too long</h1>

                    <div className="w-fit h-fit flex flex-row
                    gap-1.25
                    md:gap-2.5">
                        <span className="status-pill info font-bold
                        text-[14px]
                        md:text-[18px]
                        px-2 py-1
                        md:px-2.5 md:py-1.25">warning</span>
                        <span className="status-pill info font-bold
                        text-[14px]
                        md:text-[18px]
                        px-2 py-1
                        md:px-2.5 md:py-1.25">Smart LED Bulb</span>
                    </div>

                    <p className="text-(--text-primary)
                    text-[14px]
                    md:text-[18px]">Living Room Light has been turned on for more than 24 hours.</p>

                </div>

                <div className="flex flex-col justify-center items-center min-w-fit
                gap-2.5">
                    <span className="flex justify-center items-center min-w-fit bg-(--color-primary) text-(--bg-card) font-bold cursor-pointer transition duration-300 ease-in-out
                    py-1.25 px-2.5 rounded-lg text-[14px]
                    md:text-[18px] md:py-2.5 md:px-5
                    hover:shadow-(--shadow-button) hover:bg-(--color-primary-hover)">mark as read</span>
                    <p className="text-(--text-main) font-medium
                    text-[14px]
                    md:text-[18px]">May 16, 2026</p>
                </div>
            </div>
        </div>
    )
}