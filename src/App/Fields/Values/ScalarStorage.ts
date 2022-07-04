import ValueStorage  from 'App/Fields/Values/ValueStorage'


export default class ScalarStorage<T> implements ValueStorage<T>
{
    private value: T;


    public constructor(inital: T)
    {
        this.value = inital;
    }

    public get(): T
    {
        return this.value;
    }

    public set(value: T): void
    {
        this.value = value;
    }
}