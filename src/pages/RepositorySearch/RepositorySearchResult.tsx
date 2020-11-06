import {repositoryQueryQuery} from "../../types";
import React from "react";
import {SearchResultCount} from "../../components/SearchResultCount";
import styled from "styled-components";

export interface RepositorySearchResultProps {
    search: repositoryQueryQuery["search"];
}

const RepositoryResultContainer = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

const RepositoryResultItem = styled.li`
    background-color: #fefefe;
    border: 1px solid #ddd;
    
    padding: 12px 20px;
    min-height: 60px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:first-of-type {
        border-radius: 8px 8px 0 0;
    }
    
    &:not(:last-of-type) {
        border-bottom: none;
    }
    
    &:last-of-type {
        border-radius: 0 0 8px 8px;
    }
`

const RepositoryMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const RepositoryLink = styled.a`
    color: #0366d6;
    text-decoration: none;
    font-size: 20px;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:before {
        content: url("${process.env.PUBLIC_URL}/repo.svg");
        filter: invert(50%);
        display: inline-block;
        position: relative;
        top: 3px;
        margin-right: 5px;
    }
`

const RepositoryDescription = styled.div`
    color: #777;
    font-size: 14px;
    margin-top: 5px;
`

const ShortInfo = styled.div`
    width: 100%;
    color: #555;
    font-size: 12px;
    margin-top: 16px;
    height: 20px;
    
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
    div + div {
        margin-left: 10px;
    }
`

const Language = styled.div<{color: string}>`
    &:before {
        background-size: 12px;
        content: "\u2b24";
        color: ${({color}) => color};
        
        position: relative;
        display: inline-block;
        margin-right: 5px;
        top: -1px;
    }
`

const Fork = styled.div`
    &:before {
        content: url("${process.env.PUBLIC_URL}/fork.svg");
        filter: invert(70%);
        
        position: relative;
        display: inline-block;
        margin-right: 3px;
        top: 3px;
    }
`

const Stars = styled.div`
    color: #aaa;
    font-size: 14px;
    
    &:before {
        content: url("${process.env.PUBLIC_URL}/star.svg");
        filter: invert(70%);
        display: inline-block;
        position: relative;
        margin-right: 3px;
        top: 3px;
    }
`

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
                                    {node.nameWithOwner}
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
