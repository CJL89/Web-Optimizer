module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            // 2. Configuration for concatinating files.
            build: {
                src: "js/perfmatters.js", dest: "js/perfmatters.min.js",
                src: "views/js/main.js", dest: "views/js/main.min.js",
            },
        },

        critical: {
            test: {
                options: {
                    base: './',
                    css: [
                        'css/style.css',
                        "views.css/style.css"
                    ],
                    width: 320,
                    height: 70
                },
                src: 'index.html',
                dest: 'critical.css'
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', "critical"]);

};
