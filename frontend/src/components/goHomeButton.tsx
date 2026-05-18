import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoHomeButton () {
    return (
        <div className="flex flex-row items-center bg-(--bg-card) shadow-(--shadow-lg) w-fit rounded-[99px] cursor-pointer transition duration-300 ease-in-out
        h-12.5 px-4 gap-2.5
        hover:-translate-x-1">
            <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
            <p className="text-[20px] font-bold">go back</p>
        </div>
    )
}