import ActionHandler from '~/services/Animation/Sheet/Transition/ActionHandler'
import BounceAction from '~/services/Animation/Sheet/Transition/Actions/BounceAction'
import MoveAction from '~/services/Animation/Sheet/Transition/Actions/MoveAction'
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'


export default class InteractionBehaviour
{
    private speed: {acceleration: number, slowdown: number} = {acceleration: 0.002, slowdown: 0.001};
    
    private position: number;
    
    private actions: ActionHandler;


    public constructor(actions: ActionHandler)
    {
        this.actions = actions;
        this.position = 0;
    }

    public moveTo(to: number, speed?: MovingSpeed): Promise<void>
    {
        return new Promise(resolve =>
            this.actions.setAction(new MoveAction(to, this, resolve, speed))
        );
    }

    public bounceTo(to: number): Promise<void>
    {
        return new Promise(resolve =>
            this.actions.setAction(new BounceAction(to, this, resolve))
        );
    }

    public changePosition(value: number): void
    {
        this.position = value;
    }

    public speedInfo()
    {
        return this.speed;
    }

    public getPosition(): number
    {
        return this.position;
    }
}