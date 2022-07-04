
export default interface ValueStorage<T>
{
    set(value: T): void;
    get(): T;
}