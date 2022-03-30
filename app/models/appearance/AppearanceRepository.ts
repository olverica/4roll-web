import Appearance from './Appearance'


export interface ChangeDescription
{
    appearance: Appearance;
    description: string
} 

export interface ChangeWeight
{
    appearance: Appearance;
    weight: number
} 

export interface ChangeHeight
{
    appearance: Appearance;
    height: number
} 

export interface ChangeEyes
{
    appearance: Appearance;
    eyes: string
} 

export interface ChangeSkin
{
    appearance: Appearance;
    skin: string
} 

export interface ChangeAge
{
    appearance: Appearance;
    age: number
} 


export default interface AppearanceRepository
{
    changeDescription(command: ChangeDescription): Promise<Appearance>;
    changeWeight(command: ChangeWeight): Promise<Appearance>;
    changeHeight(command: ChangeHeight): Promise<Appearance>;
    changeEyes(command: ChangeEyes): Promise<Appearance>;
    changeSkin(command: ChangeSkin): Promise<Appearance>;
    changeAge(command: ChangeAge): Promise<Appearance>; 
}