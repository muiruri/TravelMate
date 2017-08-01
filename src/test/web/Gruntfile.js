/**
 * Created by kenny on 27/07/2016.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        mocha_phantomjs:{
            app: ["html/test*.html"]
        },
    });

    grunt.loadNpmTasks("grunt-mocha-phantomjs");

    grunt.registerTask("test:app", ["mocha_phantomjs:app"]);
    grunt.registerTask("default", ["test:app"]);
};
