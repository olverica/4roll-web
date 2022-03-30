import DependedntCharacteristicRepository  from './DependedntCharacteristicRepository'
import {ChangeModifierDriver} from './DependedntCharacteristicRepository'
import {ChangeValueDriver} from './DependedntCharacteristicRepository'
import {ChangeValue} from './DependedntCharacteristicRepository'


export default class DependentCharacteristicStubRepository implements DependedntCharacteristicRepository
{
    public async changeModifierDriver(command: ChangeModifierDriver)
    {
        return {
            ...command.characteristic,
            modifierDriver: command.driver
        }
    }

    public async changeValueDriver(command: ChangeValueDriver)
    {
        return {
            ...command.characteristic,
            valueDriver: command.driver
        }
    }

    public async changeValue(command: ChangeValue)
    {
        return {
            ...command.characteristic,
            value: command.value
        }
    }
}