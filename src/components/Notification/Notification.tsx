import React from "react";

interface NotificationProps {
    level: "info" | "warning" | "error";
    title?: React.ReactNode;
    message: React.ReactNode;
}

export const Notification = ({level, title, message}: NotificationProps) => (
    <div>
        {title && <div>{title}</div>}
        {message}
    </div>
)
