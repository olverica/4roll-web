import ProficiencyBonus from './ProficiencyBonus'


export interface ChangeCommand
{
    proficiencyBonus: ProficiencyBonus;
    value: number
} 

export default interface ProficiencyBonusRepository
{
    changeValue(command: ChangeCommand): Promise<ProficiencyBonus>;
}