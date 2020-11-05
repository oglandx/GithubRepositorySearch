import {repositoryQueryQuery} from "../../types";
import React from "react";
import {getWordForm} from "../../util/misc";

export interface RepositorySearchResultProps {
    search: repositoryQueryQuery["search"];
}

export const RepositorySearchResult = ({search}: RepositorySearchResultProps) =>
    !search ? null: (
        <div>
            <div>
                {search.repositoryCount === 0 ?
                    <span>Ничего не найдено</span> :
                    <span>
                        {getWordForm(search.repositoryCount, "Найден", "Найдено")}
                        &nbsp;
                        {search.repositoryCount}
                        &nbsp;
                        {getWordForm(search.repositoryCount, "репозиторий",
                            "репозитория", "репозиториев")}
                    </span>
                }
            </div>
            <div>
                {search.nodes
                    ?.map(node => node?.__typename !== "Repository" ? null : (
                        <div key={`repository-${node.id}`}>
                            <a href={node.url} target="_blank" rel="noreferrer">
                                {node.nameWithOwner}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
