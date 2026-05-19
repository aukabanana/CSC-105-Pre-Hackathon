import DeviceCard from "../components/deviceCard";
import DashboardHeader from "../components/dashboardHeader";
import GoHomeButton from "../components/goHomeButton";
import { useState } from "react";

export function DevicePage() {
    const [addDevice, setAddDevice] = useState<boolean>(false)
    return (
        <div className="flex flex-col p-10 bg-(--bg-main)
        gap-y-8">
            <DashboardHeader title="Device" username="Admin Username" />

            <div className="flex flex-row justify-between">
                <GoHomeButton />
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
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="flex flex-col bg-(--bg-card) p-10 rounded-2xl md:rounded-3xl shadow-xl min-w-75 w-180 gap-10">
                        <div className="flex flex-col">
                            <p className="text-lg font-bold">Add New Device</p>
                            <p>Create a new device for your smart home system</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Name</label>
                                    <input type="text" placeholder="Enter device name" className="border rounded-xl px-4 py-2 focus:outline-none" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Type</label>
                                    <input type="text" placeholder="Enter device type" className="border rounded-xl px-4 py-2 focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Power Usage</label>
                                    <input type="text" placeholder="Enter power usage (watt)" className="border rounded-xl px-4 py-2 focus:outline-none" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-semibold">Location</label>
                                    <input type="text" placeholder="Enter device location" className="border rounded-xl px-4 py-2 focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5 justify-end">
                            <button className="cancelButton border-[0.5px] rounded-2xl shadow-(--shadow-cancel) hover:shadow-(--shadow-button) px-5 py-2 cursor-pointer " onClick={() => setAddDevice(false)}>Cancel</button>
                            <button className="rounded-2xl shadow-(--shadow-button) px-5 py-2 bg-(--color-primary) text-(--bg-card) cursor-pointer hover:bg-(--color-primary-hover)">Add Device</button>
                        </div>

                    </div>

                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
                <DeviceCard name="Smart LED Bulb" location="Living Room" watt="9W" type="Lighting" />
            </div>

        </div>
    )
}