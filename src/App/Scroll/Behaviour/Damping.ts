import Vector2D from 'App/Animation/Types/Vector2D'


export default class Damping
{
    private value: number;


    public constructor(value: number)
    {
        this.value = (1 - value);
    }

    public getValue(): Vector2D
    {
        return {
            x: this.value,
            y: this.value
        }
    }
}