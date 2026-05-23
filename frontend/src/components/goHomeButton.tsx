import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function GoHomeButton() {
    const navigate = useNavigate()

    return (
        <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="flex flex-row items-center bg-(--bg-card) shadow-(--shadow-lg) w-fit rounded-[99px] border border-(--bg-card) cursor-pointer transition duration-300 ease-in-out
        h-7.5 px-2.5 gap-1.25
        sm:h-10 sm:px-2.5 sm:gap-1.25
        md:h-12.5 md:px-4 md:gap-2.5
        hover:shadow-(--shadow-button) hover:text-(--color-primary) hover:border hover:border-(--color-primary)">
            <FontAwesomeIcon icon={faAngleLeft} className="text-[20px]" />
            <p className="font-bold
                text-[12px]
                sm:text-[16px]
                md:text-[20px] 
                ">go back</p>
        </button>
    )
}