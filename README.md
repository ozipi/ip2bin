ip2bin [![Build Status](https://travis-ci.org/ozipi/ip2bin.svg?branch=master)](https://travis-ci.org/ozipi/ip2bin)
=========

A small method to convert an ipv4 from decimal to binary keeping the format x.x.x.x

## Installation

  npm install ip2bin --save

## Usage

  var ip2bin = require('ip2bin');
  
  var routerIp = ip2bin('192.168.0.1');

  console.log('routerIp', routerIp);

## Tests

  npm test

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
