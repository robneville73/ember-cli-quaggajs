module.exports = {
  name: 'quagga',

  normalizeEntityName: function() {}, //no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addPackageToProject('quagga');
  }
};