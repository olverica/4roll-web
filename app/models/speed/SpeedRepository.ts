import Speed from './Speed'


export interface ChangeCommand
{
    speed: Speed;
    value: number;
}

export default interface SpeedRepository
{
    change(command: ChangeCommand): Promise<Speed>;
}