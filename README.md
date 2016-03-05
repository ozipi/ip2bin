ip2bin [![npm version](https://img.shields.io/npm/v/ip2bin.svg?style=flat)](https://www.npmjs.com/package/ip2bin) [![Build Status](https://travis-ci.org/ozipi/ip2bin.svg?branch=master)](https://travis-ci.org/ozipi/ip2bin) [![Coverage Status](https://coveralls.io/repos/github/ozipi/ip2bin/badge.svg?branch=master)](https://coveralls.io/github/ozipi/ip2bin?branch=master)
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
