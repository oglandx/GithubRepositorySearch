import styled from "styled-components";

export const StyledSearchEngine = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 60px;
`

export const LoadMoreButton = styled.button`
    font-size: 14px;
    width: fit-content;
    border: 1px solid #777;
    border-radius: 5px;
    padding: 6px 10px;
    background-color: #fff;
    color: #24292e;
    cursor: pointer;
    align-self: center;
    outline: none;
    
    &:hover {
        color: #555;
    }
`
