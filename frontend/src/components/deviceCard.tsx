import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, } from "@fortawesome/free-regular-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
// import { faDroplet, faTemperatureLow, faFan, faShieldHalved, faBolt } from "@fortawesome/free-solid-svg-icons"
import { type DeviceIconCard } from "../types/types"
import { useState } from 'react'


export default function DeviceCard({ icon, name, watt, status, type, location }: DeviceIconCard,) {

    const [isEnabled, setIsEnabled] = useState(status === false)
    return (
        <div className="flex flex-col gap-5 bg-(--bg-card) p-5 rounded-2xl shadow-(--shadow-lg) w-full">
            <div className="flex flex-row items-center justify-between">
                <div className=" flex justifyy-center items-center w-15 h-15 p-5 bg-(--color-primary)/25 rounded-full"><FontAwesomeIcon icon={faLightbulb} className="flex text-3xl text-(--color-primary)" /></div>

                <button
                    onClick={() => setIsEnabled(!isEnabled)}
                    className={`
                        relative inline-flex h-7 w-14 items-center rounded-full border transition-colors duration-300 focus:outline-none
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
                    <p className="text-(--color-primary) font-semibold">May 16, 2026</p>
                </div>
            </div>

            <hr className="border border-(--color-primary)"/>

            <div className="flex justify-end w-full">
                <button className="flex flex-row justify-center items-center gap-1 px-2 py-1.5 bg-(--color-danger)/12 
                rounded-full w-fit delButton">
                    <FontAwesomeIcon icon={faTrashCan} className="text-(--color-danger)"/>
                    <p className="text-(--color-danger)">Delete</p>
                </button>
            </div>
        </div>
    )
}