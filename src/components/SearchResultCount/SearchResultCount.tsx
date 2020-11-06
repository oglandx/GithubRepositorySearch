import React from "react";
import {getWordForm} from "../../util/misc";
import styled from "styled-components";

export interface SearchResultCountProps {
    count: number;
    wordForms: [string, string, string];
}

const StyledSearchResultCount = styled.div`
    font-size: 18px;
    margin-bottom: 20px;
    color: #333;
    display: flex;
    justify-content: center;
    padding: 2px;
`

export const SearchResultCount: React.FC<SearchResultCountProps> =
    ({count, wordForms}) => (
        <StyledSearchResultCount>
            {count === 0 ?
                <span>Ничего не найдено</span> :
                <span>
                    {getWordForm(count, "Найден", "Найдено")}
                    &nbsp;
                    {count}
                    &nbsp;
                    {getWordForm(count, wordForms[0], wordForms[1], wordForms[2])}
                </span>
            }
        </StyledSearchResultCount>
    )
