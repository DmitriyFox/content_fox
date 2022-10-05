const {
	src
} = require('gulp');
const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const multiDest = require('gulp-multi-dest');
const plumber = require('gulp-plumber');

module.exports = function webp() {
	return src('./app/img/output/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('./app/img/', {
			extension: '.webp'
		}))
		.pipe(webpConv())
		.pipe(multiDest(['src/img', 'build/img']))
}