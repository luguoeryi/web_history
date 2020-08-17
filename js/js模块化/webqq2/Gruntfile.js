module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat : {
			webqq : {
				files : {
					'js/dist/main.js' : ['js/main.js','js/drag.js','js/range.js','js/scale.js']
				}
			}
		},
		uglify : {
			webqq : {
				files : {
					'js/dist/main.min.js' : ['js/dist/main.js']
				}
			}
		}
	})
	
	// 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify']);
}