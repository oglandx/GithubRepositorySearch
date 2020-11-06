import {repositoryQueryQuery} from "../../types";
import React from "react";
import {SearchResultCount} from "../SearchResultCount";
import {
    Fork,
    Language,
    RepositoryDescription,
    RepositoryLink,
    RepositoryMain,
    RepositoryResultContainer,
    RepositoryResultItem, ShortInfo, Stars
} from "./Styled";

export interface RepositorySearchResultProps {
    search: repositoryQueryQuery["search"];
}

export const RepositorySearchResult = ({search}: RepositorySearchResultProps) =>
    !search ? null: (
        <div>
            <SearchResultCount count={search.repositoryCount}
                               wordForms={["репозиторий", "репозитория", "репозиториев"]}
            />
            <RepositoryResultContainer>
                {search.nodes
                    ?.map(node => node?.__typename !== "Repository" ? null : (
                        <RepositoryResultItem key={`repository-${node.id}`}>
                            <RepositoryMain>
                                <RepositoryLink href={node.url} target="_blank" rel="noreferrer">
                                    {node.nameWithOwner.replace("/", " / ")}
                                </RepositoryLink>
                                <RepositoryDescription>
                                    {node.description}
                                </RepositoryDescription>
                                <ShortInfo>
                                    {node.primaryLanguage && (
                                        <Language color={node.primaryLanguage.color || "#777"}>
                                            {node.primaryLanguage.name}
                                        </Language>
                                    )}
                                    <Fork/>
                                    {node.forkCount}
                                </ShortInfo>
                            </RepositoryMain>
                            <Stars>
                                {node.stargazerCount}
                            </Stars>
                        </RepositoryResultItem>
                    ))
                }
            </RepositoryResultContainer>
        </div>
    )
