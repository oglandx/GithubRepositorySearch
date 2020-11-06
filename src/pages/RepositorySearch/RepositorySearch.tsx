import React, {useState} from 'react';
import {RepositorySearchEngine} from "./RepositorySearchEngine";
import {SearchInput} from "../../components/SearchInput";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
`

const FlexRow = styled(FlexContainer)`
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
`

const HeaderFlexRow = styled(FlexRow)`
    background-color: #24292e;
`

const LogoImage = styled.div`
    width: 42px;
    content: url("${process.env.PUBLIC_URL}/github.svg");
    margin-right: 10px;
    filter: invert(100%);
`

export const RepositorySearch = () =>  {
    const [queryString, setQueryString] = useState<string>("");

    return (
        <FlexContainer>
            <HeaderFlexRow>
                <LogoImage/>
                <SearchInput onChange={value => setQueryString(value)}
                             placeholder="Начните набирать имя репозитория"
                />
            </HeaderFlexRow>
            <FlexRow>
                <RepositorySearchEngine queryString={queryString} resultsToLoad={20}/>
            </FlexRow>
        </FlexContainer>
    );
}
