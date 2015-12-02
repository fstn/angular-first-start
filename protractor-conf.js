exports.config = {
    allScriptsTimeout: 11000,
    specs: [],
    capabilities: {
        'browserName':'firefox'
    },
    baseUrl: 'http://localhost:4000/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 3000
    }
};
