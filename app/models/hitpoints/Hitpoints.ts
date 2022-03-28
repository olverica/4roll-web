import Key from '~/app/types/Key';


export default interface HitPoints
{
    readonly id: Key;
    readonly healthPoints: number;
    readonly temporaryPoints: number;
}