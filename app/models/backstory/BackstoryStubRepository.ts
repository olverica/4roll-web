import BackstoryRepository from './BackstoryRepository'
import {ChangeCommand} from './BackstoryRepository'


export default class BackstoryStubRepository implements BackstoryRepository
{
    public async change(command: ChangeCommand)
    {
        return {
            id: command.backstory.id,
            story: command.story,
        }
    }
}