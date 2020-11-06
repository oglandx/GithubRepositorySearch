import styled from "styled-components";

export const StyledSearchEngine = styled.div`
    width: 60%;
    padding-left: 60px;
    @media screen and (max-width: 1080px) {
        width: 80%;
        padding-left: 0;
    }
    
    display: flex;
    justify-content: center;
    flex-direction: column;
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
