import React, {useState} from 'react';
import {RepositorySearchEngine} from "./RepositorySearchEngine";
import {SearchInput} from "../../components/SearchInput";

export const RepositorySearch = () =>  {
    const [queryString, setQueryString] = useState<string>("");

    return (
        <div>
            <SearchInput onChange={value => setQueryString(value)}/>
            <RepositorySearchEngine queryString={queryString} resultsToLoad={20}/>
        </div>
    );
}
