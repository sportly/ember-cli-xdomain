export function initialize(instance) {
  const config = instance.container.lookupFactory('config:environment');

  if (typeof config.xdomain === 'undefined' || config.xdomain.isDisabled === true) {
      return;
  }

  window.xhook.addWithCredentials = false;
  window.jQuery.support.cors = true;
}

export default {
  name: 'patch-with-credentials',
  initialize: initialize
};