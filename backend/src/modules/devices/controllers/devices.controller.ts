import { Request, Response } from "express";
import prisma from "../../../lib/prisma.js";
import { ElectronicType } from "../../../generated/prisma/enums.js";
import {string, z,ZodError} from 'zod'


const electronicSchema = z.object({
    name: z.string().min(1, "Device name cannot be empty"),
    type: z.nativeEnum(ElectronicType),
    watt: z.number().nonnegative("Watt must be 0 or positive number"),
    location: z.string().min(1, "location cannot be empty"),
})

export const getAllDevices = async (_req: Request, res: Response) => {
    try {
        const devices = await prisma.electronic.findMany()

        const allDevices = devices.length
        const activeDevices = devices.filter((d) => d.status === true).length
        const inactiveDevices = devices.filter((d) => d.status === false).length
        

        res.status(200).json({
            summary: {
                allDevices,
                activeDevices,
                inactiveDevices
            },
            data: devices
        })

    } catch (e) {
        console.error("Get devices error: ", e);
        if (e instanceof ZodError) {
              return res.status(400).json({
                message: 'Bad Request'
              })
            }
        return res.status(500).json({ message: "Internal Server Error" });

    }
}

export const createDevices = async (req: Request, res: Response) => {
    try {
        const {name, type, watt, location} = electronicSchema.parse(req.body)
        const newDevice = await prisma.electronic.create({
            data: {
                name,
                type,
                watt,
                location,
                status: false,
                is_active: true,
            }
        })

        res.status(201).json({data: newDevice})
    } catch (e) {
        console.error("Post new device error", e);
        if (e instanceof ZodError) {
            return res.status(400).json({
                message: 'Bad Request'
            })
        }
    }
}

export const deleteDevice = async (req:Request, res: Response) => {
    try {
        const id = req.params.id as string
        const device = await prisma.electronic.update({
            where: { id },
            data: {
                is_active: false
            }
        })
        res.status(200).json({message: 'Delete successfully', data: device})
    } catch (e) {
        console.error("Post new device error", e);
        if (e instanceof ZodError) {
            return res.status(400).json({
                message: 'Bad Request'
            })
        }
    }
}

export const updateDeviceStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;

        const device = await prisma.electronic.findUnique({
            where: { id }
        });

        if (!device) {
            return res.status(404).json({
                message: "Device not found"
            });
        }

        const updatedDevice = await prisma.electronic.update({
            where: { id },
            data: {
                status: !device.status
            }
        });

        return res.status(200).json({
            message: "Toggle status successfully",
            data: updatedDevice
        });

    } catch (e) {
        console.error("Update status error", e);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
