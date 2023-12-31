import { ethers } from 'hardhat';

/**
 * NFT コントラクトをデプロイするスクリプト
 */
async function main() {
  console.log(` ============================================== [start] ================================================ `)

  // NFT deploy
  const nft = await ethers.deployContract('NewYearNFT')
  await nft.deployed();
  console.log(` NewYearNFT deployed to ${nft.address}`)
  console.log(` =============================================== [end]  =============================================== `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})