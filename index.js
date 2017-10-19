/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-quaggajs',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('quagga');
  }
};