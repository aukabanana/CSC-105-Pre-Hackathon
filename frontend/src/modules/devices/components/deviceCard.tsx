import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { type DeviceIconCardModel } from "../types/devices"
import { useState } from 'react'
import {
    faDroplet,
    faTemperatureLow,
    faFan,
    faTv,
    faShieldHalved,
    faBolt
} from "@fortawesome/free-solid-svg-icons";

import { faLightbulb, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import type { ElectronicType } from "../types/devices";
import { updateDeviceStatus } from "../api/devices.api";

const iconMap: Record<ElectronicType, IconDefinition> = {
    WATER: faDroplet,
    LIGHT: faLightbulb,
    AC: faTemperatureLow,
    FAN: faFan,
    TV: faTv,
    SECURITY: faShieldHalved,
    ETC: faBolt
}

interface DeviceCardProps extends DeviceIconCardModel {
    onDelete: (id: string) => void
}

export default function DeviceCard({ id, name, watt, status, type, location, created_at, onDelete }: DeviceCardProps) {

    const currentIcon = iconMap[type as ElectronicType] || faCircleQuestion

    const getFormattedDate = (dateInput: string | Date | undefined | null) => {
        if (!dateInput) return "May 16, 2026";
        const parsedDate = new Date(dateInput);
        if (isNaN(parsedDate.getTime())) return "May 16, 2026";
        
        return parsedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const formattedDate = getFormattedDate(created_at);

    const [isEnabled, setIsEnabled] = useState(status)

    const handleToggleStatus = async () => {
    try {
        const updatedDevice = await updateDeviceStatus(id);
        setIsEnabled(updatedDevice.status);
    } catch (err) {
        console.error('Failed to update status', err);
        alert("Cannot change status right now.");
    }
}

    return (
        <div className="flex flex-col gap-5 bg-(--bg-card) p-5 rounded-2xl shadow-(--shadow-lg) w-full">
            <div className="flex flex-row items-center justify-between">
                <div className=" flex justify-center items-center w-15 h-15 p-5 bg-(--color-primary)/25 rounded-full">
                    <FontAwesomeIcon icon={currentIcon} className="flex text-3xl text-(--color-primary) align-middle" />
                </div>

                <button
                    onClick={handleToggleStatus}
                    className={`
                        relative inline-flex h-7 w-14 items-center rounded-full border transition-colors duration-300 focus:outline-none cursor-pointer
                        ${isEnabled ? "border-(--color-primary) bg-(--color-primary)" : "border-(--color-primary) bg-(--bg-card)"}
                    `}
                >
                    <span
                        className={`
                            inline-block h-5 w-5 rounded-full transition-transform duration-300
                            ${isEnabled ? "translate-x-8 bg-(--bg-card)" : "translate-x-1 bg-(--color-primary)"}
                        `}
                    />
                </button>
            </div>

            <div className="flex flex-col">
                <h1 className="font-semibold text-lg text-(--color-primary)">{name}</h1>
                <p className="font-medium">{location}</p>
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between">
                    <p className="font-medium">Power Usage</p>
                    <p className="text-(--color-primary) font-semibold">{watt}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-medium">Type</p>
                    <p className="text-(--color-primary) font-semibold">{type}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="font-medium">Installation</p>
                    <p className="text-(--color-primary) font-semibold">{formattedDate}</p>
                </div>
            </div>

            <hr className="border border-(--color-primary)" />

            <div className="flex justify-end w-full">
                <button 
                    className="flex flex-row justify-center items-center gap-1 px-2 py-1.5 bg-(--color-danger)/12 
                    rounded-full w-fit delButton cursor-pointer hover:bg-(--color-danger)/20 transition-all"
                    onClick={() => onDelete(id)}
                >
                    <FontAwesomeIcon icon={faTrashCan} className="text-(--color-danger)" />
                    <p className="text-(--color-danger) font-medium">Delete</p>
                </button>
            </div>
        </div>
    )
}