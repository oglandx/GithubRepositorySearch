import React from "react";


export interface LoadingProps {
    title?: String;
}

export const Loading = ({title}: LoadingProps) => (
    <span>{title || "Загрузка..."}</span>
);
