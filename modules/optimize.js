const SVGO = require('svgo');

const svgo = new SVGO({
    plugins: [
        {cleanupAttrs: true},
        {removeDoctype: true},
        {removeComments: true},
        {removeMetadata: true},
        {removeEmptyAttrs: true},
        {removeUselessDefs: false},
        {cleanupIDs: false},
    ]
});

const optimize = async svg => {
    const optimizedSVG = await svgo.optimize(svg);
    return optimizedSVG.data;
};

module.exports = optimize;
