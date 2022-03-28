import Key from '~/app/types/Key';


export default interface DeathSavingThrows
{
    readonly id: Key;
    readonly failled: number;
    readonly passed: number;
}