module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'app/js/script.js' : ["app/components/js/*.js"]
        }//files
      }//my_target
    },//uglify
    sass: {
      dev: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },// options
        files:  [{
          expand: true,
          cwd: 'app/components/sass',
          src: ['**/*.scss'],
          dest: 'app/css',
          ext: '.css'
        }]
      }
    },//sass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['app/components/js/*.js'],
        tasks: ['uglify']
      },//scripts
      compileSass: {
        files: ['app/components/sass/*.scss'],
        tasks: ['sass']
      },//sass
      html: {
        files: ['app/*.html']
      }//html
    }//watch
  })//initConfig
  grunt.registerTask('default', 'watch')
}//exports