-- CreateTable
CREATE TABLE "Electronic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "watt" REAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "temp" REAL,
    "time_usage" INTEGER NOT NULL DEFAULT 0,
    "last_started_at" DATETIME,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "electronic_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'INFO',
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Notification_electronic_id_fkey" FOREIGN KEY ("electronic_id") REFERENCES "Electronic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
