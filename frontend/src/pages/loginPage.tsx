import DashboardHeader from "../components/dashboardHeader.tsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons'


function LoginPage() {
    return (
        <div className="flex flex-col p-5 md:p-10 bg-(--bg-card)">
            <DashboardHeader title="Login" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-[clamp(20px,2.5vw,40px)] p-[clamp(20px,2.5vw,40px)] rounded-3xl shadow-(--shadow-lg)">
                    <div className="flex flex-col items-center gap-5">
                        <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">Welcome Back</h3>
                        <p className="text-[14px] md:text-[18px] font-medium">Login in to access smart home dashboard</p>
                    </div>
                    <div className="flex flex-col gap-[clamp(20px,2.5vw,40px)] w-full">
                        <div className="flex flex-col gap-[clamp(5px,2.5vw,10px)] ">
                            <label className="font-bold">Username</label>
                            <div className="flex flex-row items-center border py-3 px-4 rounded-xl gap-4">
                                <FontAwesomeIcon icon={faUser} className="text-gray-500"/>
                                <input type="text" placeholder="Enter username" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 ">
                            <label className="font-bold">Password</label>
                            <div className="flex flex-row items-center border py-3 px-4 rounded-xl gap-4">
                                <FontAwesomeIcon icon={faLock} className="text-gray-500"/>
                                <input type="text" placeholder="Enter password" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-5">
                        <button className="
                            text-center bg-(--color-primary) text-(--bg-card) p-3 rounded-xl shadow-(--shadow-button) w-full">
                            Login
                        </button>
                        <p className="font-light text-xs md:text-sm p-2">Manage devices, monitor energy usage and view alerts</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage