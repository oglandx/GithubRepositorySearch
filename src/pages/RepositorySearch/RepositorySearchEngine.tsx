import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import {repositoryQueryQuery, repositoryQueryQueryVariables} from "../../types";
import RepositoryQuery from "../../graphql/query/repositoryQuery.graphql";
import {Loading} from "../../components/Loading";
import {Notification} from "../../components/Notification";
import {RepositorySearchResult} from "./RepositorySearchResult";

export interface RepositorySearchEngineProps {
    queryString: string;
    resultsToLoad: number;
}

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
        <div>
            <RepositorySearchResult search={data.search}/>
            {isLoadingMore ? <Loading/>:
                !pageInfo.hasNextPage ? null: (
                    <button onClick={async () => {
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
                    </button>
                )}
        </div>
    )
}
