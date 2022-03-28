import TemperRepository from './TemperRepository'
import {ChangeAligment} from './TemperRepository'
import {ChangeIdeals} from './TemperRepository'
import {ChangeTraits} from './TemperRepository'
import {ChangeFlaws} from './TemperRepository'
import {ChangeBonds} from './TemperRepository'


export default class TemperStubRepository implements TemperRepository 
{
    public async changeAligment(command: ChangeAligment)
    {
        return {
            ...command.temper,
            aligment: command.aligment
        }
    }

    public async changeTraits(command: ChangeTraits)
    {
        return {
            ...command.temper,
            aligment: command.traits
        }
    }

    public async changeIdeals(command: ChangeIdeals)
    {
        return {
            ...command.temper,
            aligment: command.ideals
        }
    }

    public async changeFlaws(command: ChangeFlaws)
    {
        return {
            ...command.temper,
            aligment: command.flaws
        }
    }

    public async changeBonds(command: ChangeBonds)
    {
        return {
            ...command.temper,
            aligment: command.bonds
        }
    }
}