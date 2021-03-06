import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
`

export const FlexRow = styled(FlexContainer)`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const HeaderFlexRow = styled(FlexRow)`
    background-color: #24292e;
`

export const LogoImage = styled.div`
    width: 42px;
    content: url("${process.env.PUBLIC_URL}/github.svg");
    margin-right: 10px;
    filter: invert(100%);
`

export const EmptyPage = styled.div`
    background-image: url("${process.env.PUBLIC_URL}/github-cat-alien.png");
    background-size: 200px;
    height: calc(80vh - 100px);
    width: 100%;
    background-repeat: no-repeat, no-repeat;
    background-position: center;
    transition: visibility 1s ease;
`
