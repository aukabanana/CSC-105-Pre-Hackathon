import axios from "axios";

const API_URL = "http://localhost:3000/api/dashboard";

interface DashboardSummaryResponse {
    summary: {
        allDevices: number;
        activeDevices: number;
        inactiveDevices: number;
    };
    categoriesCount: {
        LIGHT: number;
        WATER: number;
        AC: number;
        FAN: number;
        TV: number;
        SECURITY: number;
        ETC: number;
    };
    temperatureHistory: {
        ac: number[];
        water: number[];
    };
}

export async function getDashboardData(): Promise<DashboardSummaryResponse> {
    try {
        const response = await axios.get<DashboardSummaryResponse>(`${API_URL}`, {
            withCredentials: true
        });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}