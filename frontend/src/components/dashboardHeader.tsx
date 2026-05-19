import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { Header } from "../types/types";
import {
    faHouse,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'


function DashboardHeader({ title, username }: Header) {
    return (
        <div className="flex px-[clamp(10px,2.5vw,20px)] py-[clamp(5px,2.5vw,10px)]  rounded-full shadow-(--shadow-lg) bg-(--bg-card) justify-between">
            <div className="flex flex-row items-center gap-1.25 sm:gap-2.5 md:gap-5">
                <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12">
                    <FontAwesomeIcon icon={faHouse} className="text-[20px] sm:text-[24px] md:text-[28px]" />
                </div>
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold">{title}</h2>
            </div>
            <div className="flex flex-row items-center gap-1.25 sm:gap-2.5 md:gap-5 pr-[clamp(10px, 2.5vw, 20px)]">
                <h2 className="hidden sm:block text-[20px] sm:text-[24px] md:text-[28px] font-bold">
                    {username}
                </h2>                
                {username && <FontAwesomeIcon icon={faRightFromBracket} className="text-[20px] sm:text-[24px] md:text-[28px]" />}
            </div>
        </div>
    )
}
export default DashboardHeader