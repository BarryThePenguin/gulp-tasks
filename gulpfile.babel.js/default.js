import gulp from 'gulp';
import watch from './watch';

const develop = () => {
	gulp.start('develop');
};

gulp.task('develop', [
	'templates',
	'webpack',
	'html',
	'fonts',
	'extras'
], watch);

gulp.task('default', ['clean'], develop);
