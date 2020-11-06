import React from "react";
import {StyledLoading} from "./Styled";

export interface LoadingProps {
    title?: String;
}

export const Loading = ({title}: LoadingProps) => (
    <StyledLoading>
        {title || "Загрузка..."}
    </StyledLoading>
);
