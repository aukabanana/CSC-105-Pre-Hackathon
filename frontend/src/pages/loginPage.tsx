import DashboardHeader from "../components/dashboardHeader.tsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { z } from 'zod'
import {
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { loginAdmin } from "../api/nearBan.ts"
import { useState } from "react"
import { ErrorMessage } from "../api/nearBan.ts"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const loginSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
})
type loginFormData = z.infer<typeof loginSchema>;



function LoginPage() {
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginFormData>({
        resolver: zodResolver(loginSchema)
    })

    const submitForm = async (data: loginFormData) => {
        try {
            console.log(data)
            const response = await loginAdmin(data)
            console.log(response)

            console.log('Login Succesfully', response)
            navigate('/dashboard')
        } catch (err) {
            setLoginError(ErrorMessage(err))
        }
    }

    return (
        <div className="flex flex-col p-5 md:p-10 bg-(--bg-card)">
            <DashboardHeader title="Login" />

            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col items-center gap-[clamp(20px,2.5vw,40px)] p-[clamp(20px,2.5vw,40px)] rounded-3xl shadow-(--shadow-lg)">
                    <div className="flex flex-col items-center gap-5">
                        <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">Welcome Back</h3>
                        <p className="text-[14px] md:text-[18px] font-medium">Login in to access smart home dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-[clamp(20px,2.5vw,40px)]">
                        <div className="flex flex-col w-full gap-[clamp(20px,2.5vw,40px)]">
                            <div className="flex flex-col gap-[clamp(5px,2.5vw,10px)] ">
                                <label className="font-bold">Username</label>
                                <div className="flex flex-row items-center border py-3 px-4 rounded-xl gap-4">
                                    <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                                    <input type="text" placeholder="Enter username" {...register('username')} className="w-full bg-transparent outline-none"/>
                                </div>
                                {errors.username && <span className="text-red-700">{errors.username.message}</span>}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-bold">Password</label>
                                <div className="flex flex-row items-center border py-3 px-4 rounded-xl gap-4">
                                    <FontAwesomeIcon icon={faLock} className="text-gray-500" />
                                    <input type="text" placeholder="Enter password" {...register('password')} className="w-full bg-transparent outline-none"/>
                                </div>
                                {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <button className="
                            text-center bg-(--color-primary) text-(--bg-card) p-3 rounded-xl shadow-(--shadow-button) w-full cursor-pointer
                            hover:bg-(--color-primary-hover)"
                                type="submit">
                                Login
                            </button>
                            <p className="font-light text-xs md:text-sm p-2">Manage devices, monitor energy usage and view alerts</p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginPage