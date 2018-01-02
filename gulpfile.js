//引用
const gulp = require('gulp');
//压缩css
const minify = require('gulp-minify-css');
//压缩js
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');
const html = require('gulp-htmlmin');
//压缩并拷贝到public文件夹中（css）
gulp.task('minify',function(){
    gulp.src('./css/*.css')
        .pipe(minify())
        .pipe(gulp.dest("public"))
})
//压缩并拷贝到public文件夹中（js）
gulp.task('uglify',function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest("public"))
})
//压缩并拷贝到public文件夹中（html）
gulp.task('libHtml', function(){
	gulp.src('./index.html')
		.pipe(html({
			removeComments: true,
			collapseWhitespace: true, 
			removeScriptTypeAttributes: true, 
			removeStyleLinkTypeAttributes: true, 
			minifyJS: true,	
			minifyCSS: true	
		}))
		.pipe(gulp.dest('public'));
})
//启动服务器（8888）
gulp.task("webserver",function(){
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8888,
            livereload: true,
            open:true,
            fallback:"index.html"
        }))
})
//链接应用
gulp.task('default',["minify","uglify","libHtml","webserver"]);
