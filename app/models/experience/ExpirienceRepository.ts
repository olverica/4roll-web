import Expirience from './Expirience';


export interface ChangeValue
{
    expirience: Expirience;
    value: number
}

export default interface ExpirienceRepository
{
    changeValue(command: ChangeValue): Promise<Expirience>;
}