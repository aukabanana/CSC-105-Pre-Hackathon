import DashboardHeader from "../components/dashboardHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons'

function LoginPage() {
    return (
        <div className="flex flex-col p-10 bg-(--bg-main)">
            <DashboardHeader title="Login" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-10 p-10 bg-(--bg-card) rounded-3xl shadow-(--shadow-lg)">
                    <div className="flex flex-col items-center gap-5">
                        <h3 className="text-2xl font-bold">Welcome Back</h3>
                        <p className="text-sm font-medium">Login in to access smart home dashboard</p>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-1.5 ">
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