import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  type { Header }  from "../types/header";
import {
    faHouse
} from '@fortawesome/free-solid-svg-icons'


function DashboardHeader({title, username}: Header) {
    return(
        <div className="flex p-2 rounded-full shadow-(--shadow-lg) bg-(--bg-card) justify-between">
            <div className="flex flex-row items-center gap-5">
                <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center w-12 h-12">
                    <FontAwesomeIcon icon={faHouse} className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="flex flex-row items-center gap-5 pr-5">
                <h2 className="text-2xl font-bold">{username}</h2>
                {username && <FontAwesomeIcon icon={faHouse} className="text-2xl" />}
            </div>
        </div>
    )
}
export default DashboardHeader