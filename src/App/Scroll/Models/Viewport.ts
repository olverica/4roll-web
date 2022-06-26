import {difference, mutate, multiply, add} from 'App/Animation/Types/Vector2D'
import Vector2D, {LooseVector2D} from 'App/Animation/Types/Vector2D'
import ScrollDTO from 'App/Scroll/Interaction/ScrollDTO'
import Controls from 'App/Scroll/Behaviour/Controls'
import Damping from 'App/Scroll/Behaviour/Damping'
import Size from 'App/Animation/Types/Size'


export default class Viewport 
{
    private position: Vector2D = {
        x: 0, y: 0
    };

    private momentum: Vector2D = {
        x: 0, y: 0
    };

    private size: Size = {
        height: 0, width: 0
    }

    private controls: Controls;

    private damping: Damping;


    constructor(controls: Controls, damping: Damping)
    {
        this.controls = controls;
        this.damping = damping;
    }

    public update(): void
    {
        let damping = this.controls.captured() ? {x: 0, y: 0} : this.damping.getValue();

        let nextMomentum = multiply(this.momentum, damping);
        let stepMomentum = difference(this.momentum, nextMomentum); 

        this.position = add(this.position, stepMomentum);
        this.momentum = nextMomentum;   
        
        if (Math.abs(this.momentum.x) < 0.1)
            this.momentum.x = 0;

        if (Math.abs(stepMomentum.y) < 1)
            this.momentum.y = 0;
    }

    public changePosition(value: LooseVector2D): void
    {
        this.position = mutate(this.position, value);
    }

    public changeMomentum(value: LooseVector2D): void
    {
        this.momentum = mutate(this.momentum, value);
    }

    public addMomentum(addition: LooseVector2D): void
    {
        this.momentum = add(this.momentum, addition);
    }

    public getPosition(): Vector2D
    {
        return this.position;
    }

    public getSize(): Size
    {
        return this.size
    }

    public resize(size: Size): void
    {
        this.size = size;
    }
    
    public render(dto: ScrollDTO): void
    {
        dto.viewport = this.position;
    }
}