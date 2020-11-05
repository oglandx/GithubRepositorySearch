import {ApolloClient} from 'apollo-client';
import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import {ApolloLink} from "apollo-link";
import {createHttpLink} from "apollo-link-http";
import {IntrospectionResultData} from "apollo-cache-inmemory/lib/types";
import introspectionSchema from "./introspectionSchema.json";
import Settings from "./settings";


const getAuth = () => `Bearer ${Settings.ACCESS_TOKEN}`;

const httpLink = createHttpLink({
    uri: Settings.API_URL,
    credentials: "same-origin",
});

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({headers = {}}) => ({
        headers: {
            ...headers,
            Authorization: getAuth()
        }
    }));
    return forward(operation);
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionSchema as IntrospectionResultData
});

export const Client = new ApolloClient<any>({
    link: authMiddleware.concat(httpLink),
    cache: new InMemoryCache({
        fragmentMatcher
    }),
});
