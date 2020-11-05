import React from 'react';
import ReactDOM from 'react-dom';
import {RepositorySearch} from './pages';
import {ApolloProvider} from "react-apollo";
import {Client as ApolloClient} from "./apollo";


ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={ApolloClient}>
            <RepositorySearch/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
