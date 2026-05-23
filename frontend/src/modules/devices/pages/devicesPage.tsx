import DeviceCard from "../components/deviceCard";
import DashboardHeader from "../../../components/dashboardHeader";
import GoHomeButton from "../../../components/goHomeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import type { DeviceIconCardModel, ElectronicType } from "../types/devices";
import { deleteDevice, getAllDevices } from "../api/devices.api";
import { createDevices } from "../api/devices.api";



export default function DevicePage() {
    const navigate = useNavigate()
    const [addDevice, setAddDevice] = useState<boolean>(false)
    const [devices, setDevices] = useState<DeviceIconCardModel[]>([])

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)

        const bodyDevice = {
            name: form.get('deviceName') as string,
            type: form.get('deviceType') as ElectronicType,
            watt: Number(form.get("deviceWatt")),
            location: form.get('deviceLocation') as string
        }

        try {
            const newDevice = await createDevices(bodyDevice)

            setDevices((prev) => [...prev, newDevice])
            setAddDevice(false)
        } catch (err) {
            console.error("Error fetching devices:", err);
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteDevice(id)
            setDevices((prev) => prev.filter((device) => device.id !== id))
        } catch (err) {
            console.error("Error fetching devices:", err);
        }
    }

    useEffect(() => {
        try {
            getAllDevices().then((data) => setDevices(data))
        } catch (err) {
            console.error("Error fetching devices:", err);
        }
    }, [])

    return (
        <div className="flex flex-col p-5 md:p-10 bg-(--bg-main)
        gap-y-8">
            <DashboardHeader title="Device" username="Admin Username" />

            <div className="flex flex-row justify-between">
                <GoHomeButton onClick={() => navigate("/dashboard")} />
                <button className="px-4 md:px-6 bg-(--color-primary) 
                rounded-full flex flex-row items-center justify-center gap-4
                shadow-(--shadow-button) cursor-pointer hover:bg-(--color-primary-hover)
                sm:h-10 sm:px-2.5 sm:gap-1.25
                md:h-12.5 md:px-4 md:gap-2.5
                " onClick={() => setAddDevice(true)}>
                    <h1 className="text-[16px] md:text-[20px] text-center font-medium text-(--bg-card)">+</h1>
                    <h1 className=" text-[12px] sm:text-[16px] md:text-[20px] text-center font-semibold 
                    text-(--bg-card) flex items-center-safe">Add Device</h1>
                </button>
            </div>

            {addDevice && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-20">

                    <form onSubmit={handleCreate}  className="flex flex-col bg-(--bg-card) p-[clamp(20px,2.5vw,40px)] rounded-2xl md:rounded-3xl shadow-xl min-w-75 w-120 sm:w-140 md:w-180 gap-[clamp(20px,2.5vw,40px)]">
                        <div className="flex flex-col">
                            <p className="text-lg font-bold text-[18px] md:text-[22px]">Add New Device</p>
                            <p className="text-[14px] md:text-[18px] font-light">Create a new device for your smart home system</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,2.5vw,40px)]">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-[14px] md:text-[18px]">Name</label>
                                    <input type="text" name="deviceName" placeholder="Enter device name" className="border rounded-xl px-4 py-2 focus:outline-none" required />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-[14px] md:text-[18px]">Type</label>
                                    <select name="deviceType" className="border rounded-xl px-4 py-2 focus:outline-none bg-white">
                                        <option value="LIGHT">LIGHT</option>
                                        <option value="WATER">WATER</option>
                                        <option value="AC">AC</option>
                                        <option value="FAN">FAN</option>
                                        <option value="TV">TV</option>
                                        <option value="SECURITY">SECURITY</option>
                                        <option value="ETC">ETC</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-[14px] md:text-[18px]">Power Usage</label>
                                    <input type="number" name="deviceWatt" placeholder="Enter power usage (watt)" className="border rounded-xl px-4 py-2 focus:outline-none" required />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold text-[14px] md:text-[18px]">Location</label>
                                    <input type="text" name="deviceLocation" placeholder="Enter device location" className="border rounded-xl px-4 py-2 focus:outline-none" required />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5 justify-center sm:justify-end md:justify-end ">
                            <button type="button" className="cancelButton border-[0.5px] rounded-2xl shadow-(--shadow-cancel) hover:shadow-(--shadow-button) px-5 py-2 cursor-pointer " onClick={() => setAddDevice(false)}>Cancel</button>

                            <button type="submit" className="rounded-2xl shadow-(--shadow-button) px-5 py-2 bg-(--color-primary) text-(--bg-card) cursor-pointer hover:bg-(--color-primary-hover)">Add Device</button>
                        </div>

                    </form> 

                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {devices
                    .filter((device) => device.is_active === true) 
                    .map((device, index) => (
                        <DeviceCard key={index} {...device} onDelete={handleDelete}/>
                    ))
                }
            </div>

        </div>
    )
}