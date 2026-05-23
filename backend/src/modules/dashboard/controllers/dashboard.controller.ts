import { Request, Response } from "express";
import prisma from "../../../lib/prisma.js";

export const getDashboardData = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const devices = await prisma.electronic.findMany({
            where: {
                is_active: true
            }
        });

        const allDevices: number = devices.length;
        const activeDevices: number = devices.filter((d) => d.status === true).length;
        const inactiveDevices: number = devices.filter((d) => d.status === false).length;

        const categoriesCount: Record<string, number> = {
            LIGHT: 0,
            WATER: 0,
            AC: 0,
            FAN: 0,
            TV: 0,
            SECURITY: 0,
            ETC: 0
        };

        devices.forEach((d) => {
            if (categoriesCount[d.type] !== undefined) {
                categoriesCount[d.type]++;
            }
        });

        const generateMockTemp = (min: number, max: number): number[] => {
            return Array.from({ length: 5 }, () => Math.floor(Math.random() * (max - min + 1)) + min);
        };

        const hasAC: boolean = devices.some((d) => d.type === "AC" && d.status === true);
        const hasWater: boolean = devices.some((d) => d.type === "WATER" && d.status === true);

        const acTempHistory: number[] = hasAC ? generateMockTemp(60, 90) : [0, 0, 0, 0, 0];
        const waterTempHistory: number[] = hasWater ? generateMockTemp(-10, 20) : [0, 0, 0, 0, 0];

        return res.status(200).json({
            summary: {
                allDevices,
                activeDevices,
                inactiveDevices
            },
            categoriesCount,
            temperatureHistory: {
                ac: acTempHistory,
                water: waterTempHistory
            }
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};