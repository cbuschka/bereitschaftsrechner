const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin({branch: false})

module.exports = function override(config, env) {
    config.plugins = config.plugins || [];
    config.plugins.push(gitRevisionPlugin);
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.__VERSION__': JSON.stringify(gitRevisionPlugin.version()),
            'process.env.__COMMITHASH__': JSON.stringify(gitRevisionPlugin.commithash()),
        })
    );

    return config;
}
