
export default interface Field<T>
{
    change(value: T): void;
    getValue(): T;
}