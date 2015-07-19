import Ember from 'ember';
import config from '../config/environment';

export function initialize() {
  if (typeof config.xdomain === 'undefined' || config.xdomain.isDisabled === true) {
      return;
  }
  Ember.$.support.cors = true;
}

export default {
  name: 'patch-with-credentials',
  initialize: initialize
};