declare const abi: [
  {
    "type": "function",
    "name": "_msgSender",
    "inputs": [],
    "outputs": [
      {
        "name": "sender",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "_msgValue",
    "inputs": [],
    "outputs": [
      {
        "name": "value",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "_world",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "withdrawEth",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "World_FunctionSelectorNotFound",
    "inputs": [
      {
        "name": "functionSelector",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ]
  },
  {
    "type": "error",
    "name": "World_ResourceNotFound",
    "inputs": [
      {
        "name": "resourceId",
        "type": "bytes32",
        "internalType": "ResourceId"
      },
      {
        "name": "resourceIdString",
        "type": "string",
        "internalType": "string"
      }
    ]
  }
]; export default abi;
