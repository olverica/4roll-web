import ExpirienceRepository from './ExpirienceRepository';
import {ChangeValue} from './ExpirienceRepository';


export default class ExpirienceStubRepository implements ExpirienceRepository
{
    public async changeValue(command: ChangeValue)
    {
        return {
            id: command.expirience.id,
            value: command.value,
            level: NaN
        }
    }
}