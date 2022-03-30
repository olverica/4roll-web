import DependentCharacteristic from './DependentCharacteristic'
import {ModifierDriver} from './DependentCharacteristic'
import {ValueDriver} from './DependentCharacteristic'


export interface ChangeModifierDriver
{
    characteristic: DependentCharacteristic, 
    driver: ModifierDriver,
}

export interface ChangeValueDriver
{
    characteristic: DependentCharacteristic,
    driver: ValueDriver,
}

export interface ChangeValue
{
    characteristic: DependentCharacteristic,
    value: number
}

export default interface DependentCharacteristicRepository
{
    changeModifierDriver(command: ChangeModifierDriver): Promise<DependentCharacteristic>;
    changeValueDriver(command: ChangeValueDriver): Promise<DependentCharacteristic>;
    changeValue(command: ChangeValue): Promise<DependentCharacteristic>;
}