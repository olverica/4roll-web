import Inspiration from './Inspiration'


export interface UseCommand
{
    inspiration: Inspiration;
}

export interface ReceiveCommand
{
    inspiration: Inspiration;
} 

export default interface InspirationRepository
{
    use(command: UseCommand): Promise<Inspiration>;
    receive(command: ReceiveCommand): Promise<Inspiration>;
}