// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract IPFSStorage {
    string private ipfsHash;

    function setHash(string memory _hash) public {
        ipfsHash = _hash;
    }

    function getHash() public view returns (string memory) {
        return ipfsHash;
    }
}
