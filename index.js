/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-xdomain',

  contentFor: function(type, config) {
    if (type === 'head-footer') {

      var output = '<script src="//cdn.rawgit.com/jpillora/xdomain/0.6.17/dist/xdomain.min.js"></script>';

      output += '<script>';
      if (config.xdomain.slaves) {
        output += 'xdomain.slaves({';
        for (var key in config.xdomain.slaves) {
            if (config.xdomain.slaves.hasOwnProperty(key)) {
                output += "'" + key + "': '" + config.xdomain.slaves[key] + "',";
            }
        }

        output = output.substring(0, output.length - 1);
        output += '});';
      }

      if (config.xdomain.debug !== false) {
        output += 'xdomain.debug=' + config.xdomain.debug + ';';
      }

      if (config.xdomain.timeout !== 15e3) {
        output += 'xdomain.timeout=' + config.xdomain.timeout + ';';
      }

      output += '</script>';

      return output;
    }

  }
};
