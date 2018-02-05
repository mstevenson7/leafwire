module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
        files: {
          'custom.css' : 'custom.sass'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'custom.css':'custom.css'
        }
      }
    },
    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'custom.css':'custom.css'
        }
      }
    },
    watch: {
      css: {
        files: '*.sass',
        tasks: ['sass', 'autoprefixer', 'cmq']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.registerTask('default',['watch']);
}