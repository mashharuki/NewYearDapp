// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "base64-sol/base64.sol";


contract NewYearNFT is ERC721 {

  constructor() ERC721("NewYearNFT", "NYNFT") {}

  /*************
   * Constants *
   *************/
  string public constant nftName = "NewYearNFT";
  string public constant description = 'This is a New Year NFT 2024!!Thank you very much for your help this year.I look forward to working with you next year.';
  string public constant nftImage = "https://bafkreidbm5qxrmmlfwtyoym2fnfj5dxvcu6gflsf7x2g7grxpothef62xe.ipfs.w3s.link/";

  /*************
   * Variables *
   *************/

  // @dev _nextTokenId for token id
  uint256 private _nextTokenId;

  /*************************
   * Public View Functions *
   *************************/
  function tokenURI(uint256 _tokenId) public view override(ERC721) returns (string memory) {
    return
      string(
        abi.encodePacked(
          'data:application/json;base64,',
          Base64.encode(
            bytes(
              abi.encodePacked(
                '{"name":"', nftName,
                '", "description":"', description,
                '", "image":"', nftImage,
                '"}'
              )
            )
          )
        )
      );
    }

    /********************
     * Public Functions *
     ********************/
    function safeMint(
      address to
    )
      public
    {
      uint256 tokenId = _nextTokenId++;

      _safeMint(to, tokenId);
    }

}