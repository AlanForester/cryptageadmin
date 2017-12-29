/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'ng2-webstorage': 'node_modules/ng2-webstorage',
            'moment': 'node_modules/moment',
            'chartist': 'npm:chartist',
            'chartist-plugin-tooltips': 'npm:chartist-plugin-tooltips',
            "ngx-rating": "node_modules/ngx-rating",
            // "amqplib": "node_modules/amqplib",
            // "util": "node_modules/util",
            // "url": "node_modules/url",
            // // "net": "node_modules/net",
            // // "tls": "node_modules/tls",
            // "querystring": "node_modules/querystring",
            // "bluebird": "node_modules/bluebird",
            // "events": "node_modules/events",
            // "safe-buffer": "node_modules/safe-buffer",
            // "buffer-more-ints": "node_modules/buffer-more-ints",
            // "inherits": "node_modules/inherits",
            // // "stream": "node_modules/stream-browserify",
            // "bitsyntax": "node_modules/bitsyntax",
            // "assert": "node_modules/assert",
            // "buffer": "node_modules/buffer",
            // "isarray": "node_modules/isarray",
            // "ieee754": "node_modules/ieee754",
            // "base64-js": "node_modules/base64-js",
            // "readable-stream/passthrough": "node_modules/readable-stream",
            // "readable-stream/duplex": "node_modules/readable-stream",
            // "string_decoder": "node_modules/string_decoder",
            // "util-deprecate": "node_modules/util-deprecate",
            // "core-util-is": "node_modules/core-util-is",
            // "process-nextick-args": "node_modules/process-nextick-args",
            // "punycode": "node_modules/punycode",
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                main: "Rx.js",
                defaultExtension: 'js'
            },
            'ng2-webstorage': {main: 'bundles/core.umd.js', defaultExtension: 'js'},
            moment: {main: "./moment.js", defaultExtension: 'js'},
            chartist: {main: "dist/chartist.js", defaultExtension: 'js'},
            "chartist-plugin-tooltips": {main: "dist/chartist-plugin-tooltip.js", defaultExtension: 'js'},
            "ngx-rating": { "main": "index.js", "defaultExtension": "js" },
            // "amqplib": { "main": "callback_api.js", "defaultExtension": "js" },
            // "util": { "main": "util.js", "defaultExtension": "js" },
            // "url": { "main": "url.js", "defaultExtension": "js" },
            // "inherits": { "main": "inherits.js", "defaultExtension": "js" },
            // "events": { "main": "events.js", "defaultExtension": "js" },
            // "buffer-more-ints": { "main": "buffer-more-ints.js", "defaultExtension": "js" },
            // "safe-buffer": { "main": "index.js", "defaultExtension": "js" },
            // "querystring": { "main": "index.js", "defaultExtension": "js" },
            // "bitsyntax": { "main": "index.js", "defaultExtension": "js" },
            // "buffer": { "main": "index.js", "defaultExtension": "js" },
            // "isarray": { "main": "index.js", "defaultExtension": "js" },
            // "ieee754": { "main": "index.js", "defaultExtension": "js" },
            // "base64-js": { "main": "index.js", "defaultExtension": "js" },
            // "readable-stream/passthrough": { "main": "passthrough.js", "defaultExtension": "js" },
            // "readable-stream/duplex": { "main": "duplex.js", "defaultExtension": "js" },
            // "assert": { "main": "assert.js", "defaultExtension": "js" },
            // "string_decoder": { "main": "lib/string_decoder", "defaultExtension": "js" },
            // "util-deprecate": { "main": "node", "defaultExtension": "js" },
            // "core-util-is": { "main": "lib/util", "defaultExtension": "js" },
            // "process-nextick-args": { "main": "index", "defaultExtension": "js" },
            // "punycode": { "main": "punycode", "defaultExtension": "js" },
            // "bluebird": { "main": "js/release/bluebird", "defaultExtension": "js" },
            // // "stream": { "main": "index", "defaultExtension": "js" },
        }
    });
})(this);
