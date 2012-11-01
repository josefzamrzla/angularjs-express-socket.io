module.exports = function(grunt) {

    // configuration
    grunt.initConfig({
        meta: {
            banner: '/**\n' +
                ' * <%= pkg.description %>\n' +
                ' * @version v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * @link <%= pkg.homepage %>\n' +
                ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
                ' */'
        },
        lint: {
            files: ['*.js', 'routes/*.js', 'public/js/*.js']
        }
    });

    // default task
    grunt.registerTask('default', 'lint');

};