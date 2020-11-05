import {PageInfo} from "../types";
import {BaseConnection} from "./types";

export const DEFAULT_PAGE_INFO: PageInfo = {
    __typename: "PageInfo",
    startCursor: null,
    endCursor: null,
    hasPreviousPage: false,
    hasNextPage: false,
}

export const getPageInfo = <C extends BaseConnection>(connection?: C): PageInfo =>
    connection?.pageInfo ?? DEFAULT_PAGE_INFO;
