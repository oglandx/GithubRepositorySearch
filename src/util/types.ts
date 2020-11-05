import {Maybe, Node, Package, PageInfo, Scalars} from "../types";

export type BaseNode = Node & {
    __typename?: string;
    id: Scalars['ID'];
};

export type BaseEdge = {
    __typename?: string;
    cursor: Scalars['String'];
    node?: Maybe<Package>;
};


export type EmptyConnection = undefined | string | {
    __typename?: string;
}

export type BaseConnection = {
    __typename?: string;
    edges?: Maybe<Array<Maybe<BaseEdge>>>;
    nodes?: Maybe<Array<Maybe<BaseNode>>>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};

export type BaseQuery = {
    [connectionName: string]: Partial<BaseConnection> | EmptyConnection;
}
