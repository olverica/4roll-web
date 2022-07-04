
export default interface Field<T = unknown>
{
    change(value: T): void;
    getName(): string;
    getValue(): T;
}