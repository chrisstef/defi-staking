/* eslint-disable no-undef */
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function issueRewards(callback) {
  let decentralBank = await DecentralBank.deployed();
  await decentralBank.issueTokens();
  console.log("Tokens have been deployed succesfully!");
  callback();
};
