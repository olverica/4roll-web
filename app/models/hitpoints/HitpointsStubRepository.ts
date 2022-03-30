import Hitpoints from './Hitpoints'
import HitpointsRepository from './HitpointsRepository'
import {ChangeTemporaryPoints} from './HitpointsRepository'
import {ChangeHealthpoints} from './HitpointsRepository'
import {TakeDamage} from './HitpointsRepository'



export default class HitpointsStubRepository implements HitpointsRepository
{

    public async changeTemporarypoints(command: ChangeTemporaryPoints)
    {
        return {
            id: command.hitpoints.id,
            healthPoints: command.hitpoints.healthPoints,
            temporaryPoints: command.temporaryPoints
        }
    }
    
    public async changeHealthpoints(command: ChangeHealthpoints)
    {
        return {
            id: command.hitpoints.id,
            healthPoints: command.healthPoints,
            temporaryPoints: command.hitpoints.temporaryPoints
        }
    }

    public async takeDamage(command: TakeDamage)
    {
        return {
            id: command.hitpoints.id,
            healthPoints: NaN,
            temporaryPoints: NaN
        }
    }
}