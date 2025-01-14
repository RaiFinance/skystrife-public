declare const abi: [
  {
    "type": "function",
    "name": "setCombatOutcome",
    "inputs": [
      {
        "name": "matchEntity",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "combatOutcomeData",
        "type": "tuple",
        "internalType": "struct CombatOutcomeData",
        "components": [
          {
            "name": "attacker",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "defender",
            "type": "bytes32",
            "internalType": "bytes32"
          },
          {
            "name": "attackerDamageReceived",
            "type": "int32",
            "internalType": "int32"
          },
          {
            "name": "defenderDamageReceived",
            "type": "int32",
            "internalType": "int32"
          },
          {
            "name": "attackerDamage",
            "type": "int32",
            "internalType": "int32"
          },
          {
            "name": "defenderDamage",
            "type": "int32",
            "internalType": "int32"
          },
          {
            "name": "ranged",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "attackerDied",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "defenderDied",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "defenderCaptured",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "blockNumber",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
