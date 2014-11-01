exports.config = {
    //     seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.spec.js'],
    baseUrl: 'http://localhost:8000',
    capabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },
    rootElement: 'body', // change if ng-app isn't in body
    // The timeout for each script run on the browser. This should be longer
    // than the maximum time your application needs to stabilize between tasks.
    allScriptsTimeout: 10000,
    jasmineNodeOpts: {
        onComplete: function() {},
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        //         defaultTimeoutInterval: 30000
    }
}
