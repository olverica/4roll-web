import DeathSavingThrows from './DeathSavingThrows';


export interface PassCommnad
{
    deathSavingThrows: DeathSavingThrows;
}

export interface FailCommand
{
    deathSavingThrows: DeathSavingThrows;
} 

export interface ClearCommnad
{
    deathSavingThrows: DeathSavingThrows
}

export default interface DeathSavingThrowsRepository
{
    pass(command: PassCommnad): Promise<DeathSavingThrows>;
    fail(command: FailCommand): Promise<DeathSavingThrows>;
    clear(command: ClearCommnad): Promise<DeathSavingThrows>;
}