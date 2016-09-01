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

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/min/'
                }, {
                    expand: true,
                    cwd: 'views/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'views/images/min/'
                }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'imagemin']);

};
