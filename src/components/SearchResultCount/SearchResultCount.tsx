import React from "react";
import {getWordForm} from "../../util/misc";
import {StyledSearchResultCount} from "./Styled";

export interface SearchResultCountProps {
    count: number;
    wordForms: [string, string, string];
}

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
