declare const abi: [
  {
    "type": "function",
    "name": "createNewSeasonPass",
    "inputs": [
      {
        "name": "name",
        "type": "bytes14",
        "internalType": "bytes14"
      },
      {
        "name": "seasonStart",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "seasonEnd",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "mintEnd",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "priceDecreaseRate",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "startingPrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "minPrice",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "buyMultiplier",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
