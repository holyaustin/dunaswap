const { ethers } = require("hardhat");

async function deployment() {
  console.log('Preparing deployment..\n')
  
  const accounts = await ethers.getSigners()
  console.log(`Accounts fetched:\n${accounts[0].address}\n`)

  const Token = await ethers.getContractFactory('Token')
  const Exchange = await ethers.getContractFactory('Exchange')

  const Dunaswap = await Token.deploy('Dunaswap Token', 'DUNA', 1000000)
  const mETH = await Token.deploy('Mock Ether', 'mETH', 1000000)
  const mDAI = await Token.deploy('Mock Dai', 'mDAI', 1000000)
  const exchange = await Exchange.deploy(accounts[0].address, 10)

  console.log(`Dunaswap deployed to: ${Dunaswap.address}`)
  console.log(`mETH deployed to: ${mETH.address}`)
  console.log(`mDAI deployed to: ${mDAI.address}`)
  console.log(`Exchange deployed to: ${exchange.address}`)
}

deployment().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
