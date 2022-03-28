import InspirationRepository from './InspirationRepository'
import {ReceiveCommand} from './InspirationRepository'
import {UseCommand} from './InspirationRepository'


export default class InspirationStubRepository implements InspirationRepository
{
    public async use(command: UseCommand)
    {
        return {
            id: command.inspiration.id,
            filled: false,
        }
    }

    public async receive(command: ReceiveCommand)
    {
        return {
            id: command.inspiration.id,
            filled: true,
        }
    }
}