var should = require('chai').should(),
    ip2bin = require('../src/ip2bin.js');

describe('#ip2bin', function() {
  it('converts 127.0.0.1 into 01111111.00000000.00000000.00000001;', function() {
    ip2bin('127.0.0.1').should.equal('01111111.00000000.00000000.00000001');
  });

  it('converts 192.168.0.1 into 11000000.10101000.00000000.00000001;', function() {
    ip2bin('192.168.0.1').should.equal('11000000.10101000.00000000.00000001');
  });
});