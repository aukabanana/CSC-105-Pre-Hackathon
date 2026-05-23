import prisma from "../../../lib/prisma.js";

export async function getNotification() {
    return prisma.notification.findMany({
        orderBy: [
            {
                is_read: "asc",
            },
            {
                created_at: "desc",
            },
        ],
        include: {
            electronic: {
                select: {
                    id: true,
                    name: true,
                    type: true,
                    location: true,
                },
            },
        },
    });
}

export async function markNotificationAsRead(id: string) {
    return prisma.notification.update({
        where: { id },
        data: { is_read: true },
        include: {
            electronic: {
                select: {
                    id: true,
                    name: true,
                    type: true,
                    location: true,
                }
            }
        }
    })
}