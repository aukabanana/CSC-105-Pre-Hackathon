import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

export const getCalElectronics = async (req: Request, res: Response) => {
    try {

        const electronics = await prisma.electronic.findMany();

        const calculatedData = electronics.map((item: { time_usage: number; watt: number }) => {
            const hours = item.time_usage / 3600;
            const kwh = (item.watt * hours) / 1000;
            const rate = 4.5; // บาทต่อหน่วย
            const cost = kwh * rate;

            return {
                ...item,
                calculated_kwh: kwh.toFixed(4),
                calculated_cost: cost.toFixed(2),
            };
        });

        res.json(calculatedData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const getCalElectronicsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { time_usage, status, temp } = req.body;

    try {
        const updated = await prisma.electronic.update({
            where: {
                id: id as string
            },
            data: { time_usage, status, temp }
        });
        res.json({ message: 'Success', data: updated });
    } catch (error) {
        res.status(404).json({ message: 'Device not found' });
    }
}