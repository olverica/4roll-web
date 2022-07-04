import {LooseVector2D} from 'App/Animation/Types/Vector2D'
import Vector2D from 'App/Animation/Types/Vector2D'
import Setting from 'App/Scroll/Settings/Value/Setting'


export default class AxesRestrictor
{
    private horizontal: Setting<boolean>;

    private vertical: Setting<boolean>;


    public constructor(horizontal: Setting<boolean>, vertical: Setting<boolean>)
    {
        this.horizontal = horizontal;
        this.vertical = vertical;
    }

    public restrict(vector: Vector2D): LooseVector2D
    {
        return {
            x: this.horizontal.value() ? vector.x : null,
            y: this.vertical.value() ? vector.y : null,
        }
    }
}