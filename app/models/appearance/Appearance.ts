import Key from '~/app/types/Key';


export default interface Appearance
{
    readonly id: Key;
    readonly description: string;
    readonly weight: number;
    readonly height: number;
    readonly eyes: string;
    readonly skin: string;
    readonly age: number;
}