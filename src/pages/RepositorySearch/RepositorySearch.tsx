import React, {useState} from 'react';
import {RepositorySearchEngine} from "../../components/RepositorySearchEngine";
import {SearchInput} from "../../components/SearchInput";
import {FlexContainer, FlexRow, HeaderFlexRow, LogoImage} from "./Styled";

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
