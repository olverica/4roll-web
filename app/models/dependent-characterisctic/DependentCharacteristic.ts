import Key from '~/app/types/Key'


export enum ValueDriver {
    Computable = 'computable', 
    Custom = 'custom'
}

export enum ModifierDriver {
    Computable = 'computable', 
    Custom = 'custom'
}

export default interface DependentCharacteristic
{
    readonly id: Key
    readonly name: string,
    readonly rawValue: number,
    readonly modifiedValue: number,
    readonly valueDriver: ValueDriver,
    readonly modifierDriver: ModifierDriver
}