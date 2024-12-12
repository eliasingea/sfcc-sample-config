// Product records customizer example file
// The exported function will be executed after all attributes have been
// fetched, just before sending the record to Algolia for indexing.
module.exports = function (algoliaRecord) {
    algoliaRecord['objectID'] = algoliaRecord['masterID'] + '-' + algoliaRecord['colorValue'];
};
