/// <binding BeforeBuild='copy.htmlfiles.to.www' />
'use strict';


var gulp = require('gulp');
var tsd = require('gulp-tsd');
var debug = require('gulp-debug');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('install.tsd.files', function (callback) {
    tsd({
        command: 'reinstall',
        config: '.tsd.json'
    }, callback);
});

var gulp = require('gulp');


var sourceroot = 'node_modules';
var files =
[
    './node_modules/rxjs/bundles/rx.min.js',
    './node_modules/angular2/bundles/angular2.dev.js',
    './node_modules/angular2/bundles/angular2-polyfills.min.js',
    './node_modules/systemjs/dist/system.src.js',
    './node_modules/systemjs/dist/system-polyfills.src.js',
    './node_modules/es6-shim/es6-shim.js',
    './node_modules/less/dist/less.min.js',
];

var destinationFolderJS = './www/scripts/Framework';
var destinationFolderHtml = './www/Templates';

gulp.task('copyJS', function () {
    gulp.src(files, { base: './node_modules' }).on('error', debug).pipe(debug())
    .pipe(gulp.dest(destinationFolderJS)).pipe(debug());
});

gulp.task('copyHtml', function () {
    gulp.src('Templates/**/*.html').on('error', debug).pipe(debug()).pipe(gulp.dest(destinationFolderHtml)).pipe(debug());
});

gulp.task('cleanJS', function () {
    return del([destinationFolderJS]);
});

gulp.task('install.tsd', function (callback) {
    ts({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

gulp.task('cleanHtml', function() {
    return del([destinationFolderHtml]);
});

// identifies a dependent task must be complete before this one begins
gulp.task('cleanBeforeCopy', ['cleanJS', 'html'], function () {
    
});

gulp.task('default', function() {
    runSequence('cleanJS', 'copyJS', 'cleanHtml', 'copyHtml', function () {
        console.log('Run something else');
        done();
    });
});


/*
gulp.task("build.appfiles.typescript", gulp.series(
    convertTSJS,
    copyHTMLToWWW
)); */