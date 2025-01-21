var Voting = artifacts.require("./Voting.sol")

module.exports = function(deployer) {
  deployer.deploy(Voting)

  console.log("Voting contract deployed to:", Voting.address);
}
