declare const abi: [
  {
    "type": "function",
    "name": "setup",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "spawnIndex",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "heroChoice",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "player",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  }
]; export default abi;
