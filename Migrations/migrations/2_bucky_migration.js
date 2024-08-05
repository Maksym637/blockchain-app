const Bucky = artifacts.require("Bucky");

module.exports = function(deployer) {
    deployer.deploy(Bucky, 90);
};
