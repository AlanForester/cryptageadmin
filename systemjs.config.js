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
            "ngx-rating": "node_modules/ngx-rating"
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
            "ngx-rating": { "main": "index.js", "defaultExtension": "js" }
        }
    });
})(this);
