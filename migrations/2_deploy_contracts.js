var ZncToken = artifacts.require("./ZncToken.sol");
var ZncTokenSale = artifacts.require("./ZncTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(ZncToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(ZncTokenSale, ZncToken.address, tokenPrice);
  });
};
