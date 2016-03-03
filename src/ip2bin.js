var tobinary = require('to-binary');

function ip2bin(ip) {
  var ipSplit = ip.split(".");
  var result = [];
  for (var i = 0; i < ipSplit.length; i++) {
	  var binarySegment = tobinary(ipSplit[i]);
	  result.push(binarySegment);
  }

  return result.join(".");
}

module.exports = ip2bin;