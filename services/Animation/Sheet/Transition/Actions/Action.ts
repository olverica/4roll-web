
export default interface Action
{
    update(time: number): void;
    ended(): boolean;
}