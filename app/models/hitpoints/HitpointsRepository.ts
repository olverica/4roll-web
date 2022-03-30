import Hitpoints from './Hitpoints';


export interface ChangeTemporaryPoints
{
    hitpoints: Hitpoints;
    temporaryPoints: number
}

export interface ChangeHealthpoints
{
    hitpoints: Hitpoints;
    healthPoints: number
}

export interface TakeDamage
{
    hitpoints: Hitpoints;
    damage: number
}

export default interface HitpointsRepository
{
    changeTemporarypoints(command: ChangeTemporaryPoints): Promise<Hitpoints>;
    changeHealthpoints(command: ChangeHealthpoints): Promise<Hitpoints>;
    takeDamage(command: TakeDamage): Promise<Hitpoints>;
}