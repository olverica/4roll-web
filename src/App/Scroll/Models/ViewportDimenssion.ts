import {LooseVector2D} from 'App/Animation/Types/Vector2D'
import Viewport from 'App/Scroll/Models/Viewport'


export type Axis = 'x'|'y';

export default class ViewportDimenssion
{
    private axis: Axis;

    private viewport: Viewport;


    public constructor(axis: Axis, viewport: Viewport)
    {
        this.viewport = viewport;
        this.axis = axis;
    }

    public chanagePosition(toValue: number): void
    {
        let vector: LooseVector2D = {};
        vector[this.axis] = toValue;
        
        this.viewport.changePosition(vector);
    }

    public addMomentum(addition: number): void
    {
        let vector: LooseVector2D = {};
        vector[this.axis] = addition;
        
        this.viewport.addMomentum(vector);
    }

    public releaseMomentum(): number
    {
        let vector: LooseVector2D = {};
        vector[this.axis] = 0;
        
        let released = this.viewport.getMomentum()[this.axis];
        this.viewport.changeMomentum(vector);

        return released;
    }

    public getPosition(): number
    {
        let position = this.viewport.getPosition();
        return position[this.axis];
    }
}