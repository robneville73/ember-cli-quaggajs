module.exports = {
  normalizeEntityName: function() {}, //no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {name: 'quagga', target: '0.11.6'}
    ]); // this is a promise BTW...
  }
};
