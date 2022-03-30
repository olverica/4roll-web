import Armorclass from './Armorclass'


export interface ChangeCommand
{
    armorclass: Armorclass;
    value: number
} 

export default interface ArmorclassRepository
{
    changeValue(command: ChangeCommand);
}