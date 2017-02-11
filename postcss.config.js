const postcssVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');

module.exports = {
    plugins: [
        postcssNested(),
        postcssVars()
    ]
};
