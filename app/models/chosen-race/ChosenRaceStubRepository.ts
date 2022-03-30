import ChosenRaceRepository from './ChosenRaceRepository'
import {ChangeCommand} from './ChosenRaceRepository'


export default class BackstoryStubRepository implements ChosenRaceRepository
{
    public async change(command: ChangeCommand)
    {
        return {
            id: command.chosenRace.id,
            race: command.race,
        }
    }
}