var argv = require('yargs').argv;
var gulp = require('gulp');

var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	scope: ['devDependencies']
});

var base = argv.compress ? 'dist' : 'www';
var subfolder = argv.subfolder || '';

var folder = base + subfolder; 

var options = {
	argv : argv,
	pattern : ['gulp/**/*.js'],	
	root: base,
	folder : folder,
	env : argv.compress ? 'production' : 'testing',
	devPaths : {
		base      : 'src/client',
		baseApp   : 'src/client/app',
		allFiles  : 'src/client/app/**/*',
		index     : 'src/client/index.html',
		fonts     : 'src/client/assets/fonts/**/*',
		images    : 'src/client/assets/images/**/*',
		styles    : 'src/client/assets/styles/**/*.less',
		baseStyle : 'src/client/assets/styles/main.less',
		scripts   : 'src/client/app/**/*.js',
		templates : 'src/client/app/**/*.html'
	},
	distPaths : {
		app    : folder + '/app',
		styles : folder + '/assets/styles',
		images : folder + '/assets/images',
		fonts  : folder + '/assets/fonts'
	}
}

require('load-gulp-tasks')(gulp, options, plugins);