declare const abi: [
  {
    "type": "function",
    "name": "adminDestroyMatch",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createMatch",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "claimedFirstMatchInWindow",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "levelId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createMatchSeasonPass",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "claimedFirstMatchInWindow",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "levelId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "entranceFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "rewardPercentages",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createMatchSkyKey",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "claimedFirstMatchInWindow",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "levelId",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "systemId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "entranceFee",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "rewardPercentages",
        "type": "uint256[]",
        "internalType": "uint256[]"
      },
      {
        "name": "registrationTime",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
