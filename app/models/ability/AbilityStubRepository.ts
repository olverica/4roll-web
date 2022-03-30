import AbilityRepository  from './AbilityRepository'
import {ChangeValue} from './AbilityRepository'


export default class AbilityStubRepository implements AbilityRepository
{
    public async changeValue(command: ChangeValue)
    {
        return {
            id: command.ability.id,
            value: command.value,
            score: NaN
        }
    }
}