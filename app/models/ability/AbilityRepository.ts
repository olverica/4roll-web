import Ability from './Ability'


export interface ChangeValue
{
    ability: Ability,
    value: number
}

export default interface AbilityRepository
{
    changeValue(command: ChangeValue): Promise<Ability>;
}