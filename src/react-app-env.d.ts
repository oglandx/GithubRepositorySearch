/// <reference types="react-scripts" />

declare module "*.graphql" {
    import {DocumentNode} from "graphql";

    const content: DocumentNode;
    export default content;
}
