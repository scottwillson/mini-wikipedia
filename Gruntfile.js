module.exports = function(grunt) {
  grunt.initConfig({
    clean: ["public/*.html"],
    copy: {
      main: {
        files: [
          {expand: true, src: ['article-0.html'], dest: 'public/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('reset-version', function() {
    var redis = require("redis"),
        client = redis.createClient();

    client.on('error', function (err) {
      grunt.log.write('Redis error ' + err);
    });

    var done = this.async();

    client.set('article-1-version', 0);
    client.get('article-1-version', function (err, reply) {
      grunt.log.write('article-1-version reset to ' + reply);
      done();
    });
  });

  grunt.registerTask('default', ['clean', 'copy', 'reset-version']);
};
