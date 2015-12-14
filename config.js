'use strict';

(function(module) {

    var options = {
        // Application options
        appPath: "./lib/app/app.js",
        port: 8080,
        livereloadPort: 35729,

        // Build options
        sourcePath: "./src",
        outputPath: "./output",

        // SASS options
        sass: {
            sourcemap: true,
            style: "expanded"
        }
    }

    module.exports = options;

})(module);
