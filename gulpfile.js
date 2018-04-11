var gulp = require('gulp');
var minCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minImg = require('gulp-imagemin');
var minHtml = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

//格式
// gulp.task('名字',function(){
//     内容
// })

//黑框中打印
gulp.task('sayHello', function() {
    console.log('Hello task');
});

//压缩css
gulp.task('yasuocss', function() {
    gulp.src('./*.css')
        .pipe(concat('1.css'))
        .pipe(gulp.dest('./'))
        .pipe(minCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./'))
})

//拷贝文件
gulp.task('copy', function() {
    gulp.src('./1.css')
        .pipe(gulp.dest('./die/'))
})

//压缩图片
gulp.task('yasuoImg', function() {
    gulp.src('./*.png')
        .pipe(minImg())
        .pipe(gulp.dest('./die/image/'))
})

//压缩html
var options = {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    miniCSS: true
};
gulp.task('minHTML', function() {
    gulp.src('./index.html')
        .pipe(minHtml(options))
        .pipe(gulp.dest('./die/html'));
})

//压缩js
gulp.task('minJs', function() {
    gulp.src('./*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./die/js/'))
})