import axios from "axios";
import { type DeviceIconCardModel } from "../types/devices";

interface GetAllDevicesResponse {
    summary: {
        allDevices: number;
        activeDevices: number;
        inactiveDevices: number;
    };
    data: DeviceIconCardModel[]; 
}

interface CreateDeviceInput {
    name: string;
    type: string;
    watt: number;
    location: string;
}

interface CreateDeviceResponse {
    data: DeviceIconCardModel
}


export async function getAllDevices(): Promise<DeviceIconCardModel[]> {
    try {
        const response = await axios.get<GetAllDevicesResponse>("http://localhost:3000/devices",
            {
                withCredentials: true 
            }
        );
        return response.data.data; 
        
    } catch (err) {
        console.error("Fetch devices failed:", err);
        throw err; 
    }
}



export async function createDevices(input: CreateDeviceInput): Promise<DeviceIconCardModel> {
    try {
        const response = await axios.post<CreateDeviceResponse>(
            "http://localhost:3000/devices", 
            input,                            
            {
                withCredentials: true         
            }
        );
        
        return response.data.data; 
        
    } catch (err) {
        console.error('Create new device failed:', err);
        throw err;
    }
}

export async function deleteDevice(id: string): Promise<DeviceIconCardModel> {
    try {
        const response = await axios.delete(`http://localhost:3000/devices/${id}`,
            {
                withCredentials: true
            }
        )

        return response.data.data
    } catch (err) {
        console.error('Delete Device fail', err)
        throw err
    }
}


export async function updateDeviceStatus(id: string): Promise<DeviceIconCardModel> {
    try {
        const response = await axios.patch(
            `http://localhost:3000/device-status/${id}`,
            {},
            {
                withCredentials: true
            }
        );
        return response.data.data;
    } catch (err) {
        console.error("API Error: updateDeviceStatus failed", err);
        throw err;
    }
}
