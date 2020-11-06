import React from "react";
import styled from 'styled-components';

export interface LoadingProps {
    title?: String;
}

const LoadingWithSpinner = styled.div`
    &:before {
        content: url("${process.env.PUBLIC_URL}/github.svg");
        display: inline-block;
        position: relative;
        z-index: 100;
        top: 4px;
        padding-right: 3px;
    }
    font-size: 18px;
    width: 100%;
    text-align: center;
    padding: 2px;
`

export const Loading = ({title}: LoadingProps) => (
    <LoadingWithSpinner>
        {title || "Загрузка..."}
    </LoadingWithSpinner>
);
