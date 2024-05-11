require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.17",
  
  networks: {
    
    localhost: {},
    
    testnet: {     
      url: `https://rpc.sepolia-api.lisk.com`,
      accounts: [process.env.PRIVATE_KEY],
    },
    

  }
}
