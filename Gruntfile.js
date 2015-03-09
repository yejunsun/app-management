module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var appConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '*.html',
          'WEB_INF/pages/*.html',
          'WEB_INF/pages/**/*.html',
          'WEB_INF/pages/**/*.jsp'
        ]
      }
    },
    connect: {
      options: {
        port: 9000, 
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: "."
        }
      }
    }

  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });
};
