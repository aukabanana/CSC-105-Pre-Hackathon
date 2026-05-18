import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHouse
} from '@fortawesome/free-solid-svg-icons'

export type HeaderProps = {
    title: string;
}

function DashboardHeader({title}: HeaderProps) {
    return(
        <div className="flex p-2 rounded-full shadow-(--shadow-lg) bg-(--bg-card)">
            <div className="flex flex-row items-center gap-5">
                <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center w-12 h-12">
                    <FontAwesomeIcon icon={faHouse} className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
        </div>
    )
}
export default DashboardHeader