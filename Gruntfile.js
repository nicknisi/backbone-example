/*global module:false*/
module.exports = function(grunt) {

    var path = require('path'),
        lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
        folderMount = function folderMount(connect, point) {
            return connect.static(path.resolve(point));
        };

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 8000,
                    base: '.'
                }
            },
            livereload: {
                options: {
                    base: '.',
                    port: 9001,
                    middleware: function (connect, options) {
                        return [lrSnippet, folderMount(connect, options.base)];
                    }
                }
            }
        },
        regarde: {
            frontend: {
                files: ['index.html', 'lib/**/*.js', 'styles/**/*.less'],
                tasks: ['livereload']
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-regarde');

    // Default task.
    grunt.registerTask('default', ['jasmine']);
    grunt.registerTask('server', ['connect:server'])
    grunt.registerTask('reload', ['livereload-start', 'connect:livereload', 'regarde']);

};
