module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            plugincheck: {
                files: {
                    'build/awty.min.js': [
                        'js/awty.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['uglify']);
};
