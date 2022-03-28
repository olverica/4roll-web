import ArmorclassRepository from './ArmorclassRepository'
import {ChangeCommand} from './ArmorclassRepository'


export default class ArmorclassStubRepository implements ArmorclassRepository
{
    public async changeValue(command: ChangeCommand)
    {
        return {
            id: command.armorclass.id,
            value: command.value,
        }
    }
}