import ValueStorage  from 'App/Fields/Values/ValueStorage'
import ScalarStorage  from 'App/Fields/Values/ScalarStorage'
import Field from 'App/Fields/Field'


export default class RangeField implements Field<number>
{
    private value: ValueStorage<number>;
    
    private step: number;

    private min: number;
    
    private max; number;


    public constructor(value: ValueStorage<number>|number, min: number, max: number, step: number = 1)
    {
        if (typeof value === 'number')
            this.value = new ScalarStorage<number>(value);
        else 
            this.value = value;
        
        this.min = min;
        this.max = max;
        this.step = step;
    }

    public change(value: number)
    {
        this.value.set(value);

        if (this.value.get() > this.max)
            this.value.set(this.max);

        else if (this.value.get() < this.min)
            this.value.set(this.min);
    }

    public getValue(): number
    {
        return this.value.get();    
    }

    public increment(): void
    {
        let nextValue = this.value.get() + this.step;
        nextValue = Number(nextValue.toFixed(3));

        this.change(nextValue);
    }

    public decrement(): void
    {
        let nextValue = this.value.get() - this.step;
        nextValue = Number(nextValue.toFixed(3));

        this.change(nextValue);
    }

    public atMaximum(): boolean
    {
        return this.value.get() === this.max;
    }

    public atMinimum(): boolean
    {
        return this.value.get() === this.min; 
    }
}