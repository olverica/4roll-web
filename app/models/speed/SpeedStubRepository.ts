import SpeedRepository from './SpeedRepository';
import {ChangeCommand} from './SpeedRepository';


export default class SpeedStubRepository implements SpeedRepository
{
    public async change(command: ChangeCommand)
    {
        return {
            id: command.speed.id,
            value: command.value
        }
    }
}