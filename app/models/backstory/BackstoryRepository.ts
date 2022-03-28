import Backstory from './Backstory'

export interface ChangeCommand
{
    backstory: Backstory;
    story: string
} 

export default interface BackstoryRepository
{
    change(command: ChangeCommand);
}