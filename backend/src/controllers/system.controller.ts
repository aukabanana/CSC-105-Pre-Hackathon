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

export const createMockElectric = async (req: Request, res: Response) => {
  try {
    const electronics = [
      {
        id: "123e4567-e89b-12d3-a456-426614174001",
        name: "Living Room Light",
        watt: 40,
        status: false,
        type: "LIGHT",
        location: "Living Room",
        temp: null,
        time_usage: 3600,
        last_started_at: null,
        is_active: true,
        created_at: "2026-05-16T10:00:00.000Z",
        updated_at: "2026-05-16T10:00:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174002",
        name: "Bedroom Fan",
        watt: 65,
        status: true,
        type: "FAN",
        location: "Bedroom",
        temp: 28.5,
        time_usage: 7200,
        last_started_at: "2026-05-16T11:30:00.000Z",
        is_active: true,
        created_at: "2026-05-16T10:05:00.000Z",
        updated_at: "2026-05-16T11:30:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174003",
        name: "Main Air Conditioner",
        watt: 1200,
        status: true,
        type: "AC",
        location: "Living Room",
        temp: 24.2,
        time_usage: 14400,
        last_started_at: "2026-05-16T09:00:00.000Z",
        is_active: true,
        created_at: "2026-05-16T10:10:00.000Z",
        updated_at: "2026-05-16T11:40:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174004",
        name: "Kitchen Water Heater",
        watt: 3500,
        status: false,
        type: "WATER",
        location: "Kitchen",
        temp: 45,
        time_usage: 1800,
        last_started_at: null,
        is_active: true,
        created_at: "2026-05-16T10:15:00.000Z",
        updated_at: "2026-05-16T10:15:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174005",
        name: "Bedroom TV",
        watt: 150,
        status: false,
        type: "TV",
        location: "Bedroom",
        temp: null,
        time_usage: 5400,
        last_started_at: null,
        is_active: true,
        created_at: "2026-05-16T10:20:00.000Z",
        updated_at: "2026-05-16T10:20:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174006",
        name: "Front Door Camera",
        watt: 18,
        status: true,
        type: "SECURITY",
        location: "Front Door",
        temp: 31.2,
        time_usage: 86400,
        last_started_at: "2026-05-15T12:00:00.000Z",
        is_active: true,
        created_at: "2026-05-16T10:25:00.000Z",
        updated_at: "2026-05-16T12:00:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174007",
        name: "Study Desk Light",
        watt: 12,
        status: true,
        type: "LIGHT",
        location: "Study Room",
        temp: null,
        time_usage: 2400,
        last_started_at: "2026-05-16T12:10:00.000Z",
        is_active: true,
        created_at: "2026-05-16T10:30:00.000Z",
        updated_at: "2026-05-16T12:10:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174008",
        name: "Bathroom Water Pump",
        watt: 750,
        status: false,
        type: "WATER",
        location: "Bathroom",
        temp: 33.4,
        time_usage: 1200,
        last_started_at: null,
        is_active: true,
        created_at: "2026-05-16T10:35:00.000Z",
        updated_at: "2026-05-16T10:35:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174009",
        name: "Garage Security Alarm",
        watt: 25,
        status: true,
        type: "SECURITY",
        location: "Garage",
        temp: null,
        time_usage: 43200,
        last_started_at: "2026-05-16T00:00:00.000Z",
        is_active: true,
        created_at: "2026-05-16T10:40:00.000Z",
        updated_at: "2026-05-16T12:20:00.000Z",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174010",
        name: "Smart Plug",
        watt: 10,
        status: false,
        type: "ETC",
        location: "Storage Room",
        temp: null,
        time_usage: 600,
        last_started_at: null,
        is_active: true,
        created_at: "2026-05-16T10:45:00.000Z",
        updated_at: "2026-05-16T10:45:00.000Z",
      },
    ] as const;

    await prisma.notification.deleteMany();
    await prisma.electronic.deleteMany();

    const result = await prisma.electronic.createMany({
      data: electronics.map((item) => ({
        ...item,
        last_started_at: item.last_started_at
          ? new Date(item.last_started_at)
          : null,
        created_at: new Date(item.created_at),
        updated_at: new Date(item.updated_at),
      })),
    });

    res.status(201).json({
      message: "Mock electronics created successfully",
      count: result.count,
    });
  } catch (error) {
    console.error("Create mock electronics error:", error);

    res.status(500).json({
      message: "Failed to create mock electronics",
    });
  }
};

export const createMockNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = [
      {
        id: "223e4567-e89b-12d3-a456-426614174001",
        electronic_id: "123e4567-e89b-12d3-a456-426614174003",
        type: "ELECTRIC_COST_EXCEEDED",
        level: "WARNING",
        title: "Electricity cost limit exceeded",
        message:
          "Electric cost exceeded: Main air conditioner is using high power and may increase electricity cost.",
        is_read: false,
        created_at: "2026-05-16T12:00:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174002",
        electronic_id: "123e4567-e89b-12d3-a456-426614174006",
        type: "DEVICE_ON_TOO_LONG",
        level: "WARNING",
        title: "Device has been running too long",
        message:
          "Device on too long: Front door camera has been turned on for more than 24 hours.",
        is_read: false,
        created_at: "2026-05-16T12:05:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174003",
        electronic_id: "123e4567-e89b-12d3-a456-426614174010",
        type: "DEVICE_OFFLINE",
        level: "CRITICAL",
        title: "Device is offline",
        message:
          "Device offline: Smart plug is not responding. Please check the connection.",
        is_read: false,
        created_at: "2026-05-16T12:10:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174004",
        electronic_id: "123e4567-e89b-12d3-a456-426614174004",
        type: "HIGH_TEMPERATURE",
        level: "WARNING",
        title: "Temperature is too high",
        message:
          "High temperature: Kitchen water heater temperature is higher than normal.",
        is_read: false,
        created_at: "2026-05-16T12:15:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174005",
        electronic_id: "123e4567-e89b-12d3-a456-426614174003",
        type: "LOW_TEMPERATURE",
        level: "INFO",
        title: "Temperature is low",
        message:
          "Low temperature: Main air conditioner temperature is lower than recommended.",
        is_read: true,
        created_at: "2026-05-16T12:20:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174006",
        electronic_id: "123e4567-e89b-12d3-a456-426614174001",
        type: "SYSTEM_INFO",
        level: "INFO",
        title: "Device status updated",
        message:
          "System info: Living room light status was updated successfully.",
        is_read: true,
        created_at: "2026-05-16T12:25:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174007",
        electronic_id: "123e4567-e89b-12d3-a456-426614174002",
        type: "DEVICE_ON_TOO_LONG",
        level: "WARNING",
        title: "Fan has been running too long",
        message:
          "Device on too long: Bedroom fan has been turned on for a long period.",
        is_read: false,
        created_at: "2026-05-16T12:30:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174008",
        electronic_id: "123e4567-e89b-12d3-a456-426614174008",
        type: "DEVICE_OFFLINE",
        level: "CRITICAL",
        title: "Water pump is offline",
        message:
          "Device offline: Bathroom water pump is not connected to the system.",
        is_read: false,
        created_at: "2026-05-16T12:35:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174009",
        electronic_id: "123e4567-e89b-12d3-a456-426614174009",
        type: "SYSTEM_INFO",
        level: "INFO",
        title: "Security alarm is active",
        message:
          "System info: Garage security alarm is active and monitoring normally.",
        is_read: true,
        created_at: "2026-05-16T12:40:00.000Z",
      },
      {
        id: "223e4567-e89b-12d3-a456-426614174010",
        electronic_id: "123e4567-e89b-12d3-a456-426614174005",
        type: "ELECTRIC_COST_EXCEEDED",
        level: "WARNING",
        title: "TV power usage warning",
        message:
          "Electric cost exceeded: Bedroom tv usage may increase this month electricity cost.",
        is_read: false,
        created_at: "2026-05-16T12:45:00.000Z",
      },
    ] as const;

    const result = await prisma.notification.createMany({
      data: notifications.map((item) => ({
        ...item,
        created_at: new Date(item.created_at),
      })),
    });

    res.status(201).json({
      message: "Mock notifications created successfully",
      count: result.count,
    });
  } catch (error) {
    console.error("Create mock notifications error:", error);

    res.status(500).json({
      message: "Failed to create mock notifications",
    });
  }
};