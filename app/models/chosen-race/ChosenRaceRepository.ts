import ChosenRace from './ChosenRace'

export interface ChangeCommand
{
    chosenRace: ChosenRace;
    race: string
} 

export default interface ChosenRaceRepository
{
    change(command: ChangeCommand);
}