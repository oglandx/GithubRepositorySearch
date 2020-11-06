import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import {repositoryQueryQuery, repositoryQueryQueryVariables} from "../../types";
import RepositoryQuery from "../../graphql/query/repositoryQuery.graphql";
import {Loading} from "../../components/Loading";
import {Notification} from "../../components/Notification";
import {RepositorySearchResult} from "./RepositorySearchResult";
import styled from "styled-components";

export interface RepositorySearchEngineProps {
    queryString: string;
    resultsToLoad: number;
}

const StyledSearchEngine = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 60px;
`

const LoadMoreButton = styled.button`
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

export const RepositorySearchEngine = ({queryString, resultsToLoad}: RepositorySearchEngineProps) =>  {
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const {data, error, loading, fetchMore} = useQuery<repositoryQueryQuery, repositoryQueryQueryVariables>(
        RepositoryQuery, {variables: {queryString, withCount: true, first: resultsToLoad}}
    );

    if(loading) {
        return (
            <Loading/>
        )
    }

    if(error) {
        return (
            <Notification level="error"
                          title="При загрузке произошла ошибка"
                          message="Это совершенно неожиданная ситуация"
            />
        )
    }

    if(!data?.search) {
        return (
            <Notification level="error"
                          title="При загрузке произошла ошибка"
                          message="Формат ответа сервера не соответствует ожидаемому формату"
            />
        )
    }

    const pageInfo = data.search.pageInfo;

    return (
        <StyledSearchEngine>
            <RepositorySearchResult search={data.search}/>
            {isLoadingMore ? <Loading/>:
                !pageInfo.hasNextPage ? null: (
                    <LoadMoreButton onClick={async () => {
                        setIsLoadingMore(true);
                        await fetchMore({
                            variables: {
                                after: pageInfo.endCursor
                            },
                            updateQuery: (prevResult, {fetchMoreResult}) =>
                                !fetchMoreResult || !fetchMoreResult.search ? prevResult: {
                                    search: {
                                        ...fetchMoreResult.search,
                                        nodes: [
                                            ...prevResult?.search?.nodes ?? [],
                                            ...fetchMoreResult.search.nodes ?? []
                                        ]
                                    }
                                }
                        })
                        setIsLoadingMore(false);
                    }}>
                        Загрузить ещё!
                    </LoadMoreButton>
                )}
        </StyledSearchEngine>
    )
}
