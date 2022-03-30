
import AppearanceRepository from './AppearanceRepository'
import {ChangeDescription} from './AppearanceRepository'
import {ChangeHeight} from './AppearanceRepository'
import {ChangeWeight} from './AppearanceRepository'
import {ChangeEyes} from './AppearanceRepository'
import {ChangeSkin} from './AppearanceRepository'
import {ChangeAge} from './AppearanceRepository'


export default class AppearanceStubRepository implements AppearanceRepository 
{
    public async changeDescription(command: ChangeDescription)
    {
        return {
            ...command.appearance,
            description: command.description
        }
    }

    public async changeHeight(command: ChangeHeight)
    {
        return {
            ...command.appearance,
            height: command.height
        }
    }

    public async changeWeight(command: ChangeWeight)
    {
        return {
            ...command.appearance,
            weight: command.weight
        }
    }

    public async changeSkin(command: ChangeSkin)
    {
        return {
            ...command.appearance,
            skin: command.skin
        }
    }

    public async changeEyes(command: ChangeEyes)
    {
        return {
            ...command.appearance,
            eyes: command.eyes
        }
    }

    public async changeAge(command: ChangeAge)
    {
        return {
            ...command.appearance,
            age: command.age
        }
    }
}