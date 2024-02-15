require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
// const { ACCOUNT_PRIVATE_KEY,ALCHEMY_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepholia: {
      url: `https://rpc.ankr.com/eth_sepolia`,
      accounts: [`0xc0f0e2e9f56881c5577f4211aaf7deb935b29d96d57971919918166937bb2319`]
    }
  },
};