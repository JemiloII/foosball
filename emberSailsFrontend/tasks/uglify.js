module.exports = {
	options: {
		banner: '/*! <%= grunt.template.today("mm/dd/yyyy") %> */\n'
	},
	dist:{
		files: {
			'.tmp/<%= pkg.name %>.min.js': '.tmp/<%= pkg.name %>.js',
			'.tmp/libs.min.js': '.tmp/libs.js'
		}
	}
};
