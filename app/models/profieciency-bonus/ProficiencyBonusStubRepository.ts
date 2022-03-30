import ProficiencyBonusRepository from './ProficiencyBonusRepository'
import {ChangeCommand} from './ProficiencyBonusRepository'


export default class ProficiencyBonusStubRepository implements ProficiencyBonusRepository
{
    public async changeValue(command: ChangeCommand)
    {
        return {
            id: command.proficiencyBonus.id,
            value: command.value,
        }
    }
}