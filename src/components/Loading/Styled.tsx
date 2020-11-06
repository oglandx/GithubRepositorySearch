import styled from "styled-components";

export const StyledLoading = styled.div`
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
    padding-bottom: 4px;
`
