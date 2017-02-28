/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-quaggajs',

  included(app) {
    this._super.included.apply(this, arguments);
    this.app.import(app.bowerDirectory + '/quagga/dist/quagga.min.js');
    this.app.import('vendor/quagga.shim.js', {
      type: 'vendor',
      exports: { 'quagga': ['default'] }
    });
  }
};
