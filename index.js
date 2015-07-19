/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-xdomain',

  contentFor: function(type, config) {

    if (config.xdomain.isDisabled === true) {
      return;
    }

    if (type === 'head') {
      var output = '<script src="' + config.xdomain.src + '"></script>';

      if (config.xdomain.debug && config.xdomain.debugSrc !== null) {
        output += '<script src="' + config.xdomain.debugSrc + '"></script>';
      }

      output += '<script type="text/javascript">' +
        'window.xhook.addWithCredentials = false;' +
        '</script>';

      output += '<script type="text/javascript">';
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
