// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

/* Autogenerated file. Do not edit manually. */

import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";

import { IAllowListSystem } from "./IAllowListSystem.sol";
import { IAttackSystem } from "./IAttackSystem.sol";
import { IBuildSystem } from "./IBuildSystem.sol";
import { ICombatOutcomeSystem } from "./ICombatOutcomeSystem.sol";
import { ICopyMapSystem } from "./ICopyMapSystem.sol";
import { ICreateSeasonPassSystem } from "./ICreateSeasonPassSystem.sol";
import { IDelegationSystem } from "./IDelegationSystem.sol";
import { IFinishSystem } from "./IFinishSystem.sol";
import { IHeroConfigSystem } from "./IHeroConfigSystem.sol";
import { ILevelRotationSystem } from "./ILevelRotationSystem.sol";
import { ILevelUploadSystem } from "./ILevelUploadSystem.sol";
import { ILobbySystem } from "./ILobbySystem.sol";
import { IMatchSystem } from "./IMatchSystem.sol";
import { IMoveSystem } from "./IMoveSystem.sol";
import { INameSystem } from "./INameSystem.sol";
import { IOfficialLevelSystem } from "./IOfficialLevelSystem.sol";
import { IPlayerRegisterSystem } from "./IPlayerRegisterSystem.sol";
import { IPlayerSetupSystem } from "./IPlayerSetupSystem.sol";
import { ISeasonPassSystem } from "./ISeasonPassSystem.sol";
import { ITemplateSpawnSystem } from "./ITemplateSpawnSystem.sol";
import { IWithdrawSystem } from "./IWithdrawSystem.sol";

/**
 * @title IWorld
 * @notice This interface integrates all systems and associated function selectors
 * that are dynamically registered in the World during deployment.
 * @dev This is an autogenerated file; do not edit manually.
 */
interface IWorld is
  IBaseWorld,
  IAllowListSystem,
  IAttackSystem,
  IBuildSystem,
  ICombatOutcomeSystem,
  ICopyMapSystem,
  ICreateSeasonPassSystem,
  IDelegationSystem,
  IFinishSystem,
  IHeroConfigSystem,
  ILevelRotationSystem,
  ILevelUploadSystem,
  ILobbySystem,
  IMatchSystem,
  IMoveSystem,
  INameSystem,
  IOfficialLevelSystem,
  IPlayerRegisterSystem,
  IPlayerSetupSystem,
  ISeasonPassSystem,
  ITemplateSpawnSystem,
  IWithdrawSystem
{

}
