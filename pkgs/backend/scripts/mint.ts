import { ethers } from 'hardhat';

/**
 * NFTを発行するコントラクトをデプロイするスクリプト
 */
async function main() {
  console.log(` ============================================== [mint:start] ================================================ `)
  // get signer
  const signer = (await ethers.getSigners())[0];
  // NFT Address
  const NFT_ADDRESS = "0xeBd4B2c48C163cC30CDCaCe3B9b2237c7248a4f2";
  // Get NFT Contract
  const nft = await ethers.getContractAt('NewYearNFT', NFT_ADDRESS);
 
  const tx = await nft.safeMint(signer.address);
  await tx.wait();
  console.log("tx logs", tx.hash)
  console.log(` =============================================== [mint:end]  =============================================== `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})