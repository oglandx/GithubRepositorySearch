module.exports = {
    webpack: function (config, env) {
        config.module.rules[1].oneOf = [{
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        }, ...config.module.rules[1].oneOf];
        return config;
    }
}
