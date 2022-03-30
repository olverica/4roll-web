import Temper from './Temper'


export interface ChangeAligment
{
    temper: Temper;
    aligment: string
} 

export interface ChangeTraits
{
    temper: Temper;
    traits: string
} 

export interface ChangeIdeals
{
    temper: Temper;
    ideals: string
} 

export interface ChangeFlaws
{
    temper: Temper;
    flaws: string
} 

export interface ChangeBonds
{
    temper: Temper;
    bonds: string
} 

export default interface TemperRepository
{
    changeAligment(command: ChangeAligment): Promise<Temper>;
    changeTraits(command: ChangeTraits): Promise<Temper>;
    changeIdeals(command: ChangeIdeals): Promise<Temper>;
    changeFlaws(command: ChangeFlaws): Promise<Temper>;
    changeBonds(command: ChangeBonds): Promise<Temper>;
}