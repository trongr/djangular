var k = {
    karmaconf: 'tutorila/test/karma.unit.conf.js',
    karmae2econf: 'tutorila/test/karma.e2e.conf.js',
    protractorconf: "tutorila/test/protractor.conf.js",
}

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); // so you don't have to loadNpmTasks
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['gruntfile.js', 'tutorila/quickstart/static/**/*.js']
        },
        karma: {
            unit: {
                configFile: k.karmaconf,
                autoWatch: false,
                singleRun: true
            },
//             e2e: {
//                 configFile: k.karmae2econf,
//                 autoWatch: false,
//                 singleRun: true
//             },
            watch: {
                configFile: k.karmaconf,
                autoWatch: true,
                singleRun: false,
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: k.protractorconf,
            },
            run: {}
        }
    });

    grunt.registerTask('default', ["jshint"]);
    grunt.registerTask('test', ["karma:unit"]);
    grunt.registerTask('e2e', ["protractor:run"]);
    grunt.registerTask("watch", ["karma:watch"])
};