import {LooseVector2D} from 'App/Animation/Types/Vector2D'
import Vector2D from 'App/Animation/Types/Vector2D'


export default class AxesRestrictor
{
    private horizontal: boolean;

    private vertical: boolean;


    public constructor(horizontal: boolean = false, vertical: boolean = false)
    {
        this.horizontal = horizontal;
        this.vertical = vertical;
    }

    public restrict(vector: Vector2D): LooseVector2D
    {
        return {
            x: this.horizontal ? vector.x : null,
            y: this.vertical ? vector.y : null,
        }
    }
}