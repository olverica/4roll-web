import Key from '~/app/types/Key';


export default interface ProficiencyBonus
{
    readonly id: Key;
    readonly aligment: string;
    readonly ideals: string;
    readonly traits: string;
    readonly flaws: string;
    readonly bonds: string;
}