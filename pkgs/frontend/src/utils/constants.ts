export const RPC_URL = "https://api.avax-test.network/ext/bc/C/rpc";
export const NFT_ADDRESS = "0xeBd4B2c48C163cC30CDCaCe3B9b2237c7248a4f2"; // Avanache
export const TESTNET_OPENSEA_BASE_URL = "https://testnets.opensea.io/ja/";

/**
 * 数字を16進数に変換するためのメソッド
 * @param decimalNumber 変換した数字
 * @returns 
 */
export const decimalToHex = (
  decimalNumber: number
): string => {
  if (isNaN(decimalNumber) || !Number.isInteger(decimalNumber) || decimalNumber < 0) {
    throw new Error("Invalid input. Please provide a non-negative integer.");
  }

  const hexString = decimalNumber.toString(16);
  return "0x" + hexString.toUpperCase();
}