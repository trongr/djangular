module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); // so you don't have to loadNpmTasks
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'gruntfile.js',
        'quickstart/static/**/*.js'
      ]
    },

  });


//   grunt.registerTask('default', []);

};
