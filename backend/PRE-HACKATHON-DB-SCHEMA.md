# Database Schema

## Electronic Device Table

ตารางนี้ใช้สำหรับเก็บข้อมูลเครื่องใช้ไฟฟ้าในระบบ IoT & Smart Home Simulator

---

## Fields

| Field             | Type          | Created By        | Purpose                                   |
| ----------------- | ------------- | ----------------- | ----------------------------------------- |
| `id`              | UUID          | Database          | Primary key                               |
| `name`            | String        | User input        | Device name                               |
| `watt`            | Float / Int   | User input        | Power usage, for example 40W or 1200W     |
| `status`          | Boolean       | Database default  | Device ON / OFF status                    |
| `type`            | String / Enum | User input        | Device category                           |
| `location`        | String        | User input        | Device location or room                   |
| `temp`            | Float?        | Mock data         | Simulated temperature value               |
| `time_usage`      | Int           | System calculated | Total accumulated usage time              |
| `last_started_at` | DateTime?     | System updated    | Latest time when the device was turned on |
| `is_active`       | Boolean       | Database default  | Soft delete status                        |
| `created_at`      | DateTime      | Database          | Created date                              |
| `updated_at`      | DateTime      | Database          | Last updated date                         |

---

## User Input Fields

These fields should be provided by the user through the form.

| Field      | Example                       | Required |
| ---------- | ----------------------------- | -------- |
| `name`     | Living Room Light             | Required |
| `watt`     | 40                            | Required |
| `type`     | LIGHT / FAN / AIR_CONDITIONER | Required |
| `location` | Living Room                   | Required |

---

## Prisma Schema

```prisma
model Admin {
  id              String @id @default(uuid())
  username        String
  password        String
}

model Electronic {
  id              String         @id @default(uuid())
  name            String
  watt            Float
  status          Boolean        @default(false)
  type            ElectronicType
  location        String

  temp            Float?
  time_usage      Int            @default(0)
  last_started_at DateTime?

  is_active       Boolean        @default(true)

  created_at      DateTime       @default(now())
  updated_at      DateTime       @updatedAt

  notifications   Notification[]
}

enum ElectronicType {
  WATER
  LIGHT
  AC
  FAN
  TV
  SECURITY
  ETC
}

model Notification {
  id            String            @id @default(uuid())

  electronic_id String
  electronic    Electronic        @relation(fields: [electronic_id], references: [id])

  type          NotificationType
  level         NotificationLevel @default(INFO)

  title         String
  message       String

  is_read       Boolean           @default(false)

  created_at    DateTime          @default(now())
}

enum NotificationType {
  ELECTRIC_COST_EXCEEDED
  DEVICE_ON_TOO_LONG
  DEVICE_OFFLINE
  HIGH_TEMPERATURE
  LOW_TEMPERATURE
  SYSTEM_INFO
}

enum NotificationLevel {
  INFO
  WARNING
  CRITICAL
}
```

```json
{
  "id": "uuid",
  "name": "Living Room Light",
  "watt": 40,
  "status": false,
  "type": "LIGHT",
  "location": "Living Room",
  "temp": null,
  "time_usage": 0,
  "last_started_at": null,
  "is_active": true,
  "created_at": "2026-05-16T10:00:00.000Z",
  "updated_at": "2026-05-16T10:00:00.000Z"
}

{
  "id": "uuid",
  "electronic_id": "device_uuid",
  "type": "DEVICE_ON_TOO_LONG",
  "level": "WARNING",
  "title": "Device has been running too long",
  "message": "Living Room Light has been turned on for more than 24 hours.",
  "is_read": false,
  "created_at": "2026-05-16T12:00:00.000Z"
}
```
