import styled, {css} from "styled-components";

export const StyledInputWrapper = styled.div<{writing?: boolean}>`
    &:after {
        content: url("${process.env.PUBLIC_URL}/writing16.svg");
        position: relative;
        left: calc(100% - 30px);
        top: -31px;
        z-index: 100;
        
        ${({writing}) => writing ? css`display: inline-block`: css`display: none`}
    }
    width: 60%;
    height: 35px;
    margin-bottom: 10px;
    margin-top: 5px;
`

export const StyledInput = styled.input`
    width: calc(100% - 25px);
    height: inherit;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
    border-radius: 6px;
`
