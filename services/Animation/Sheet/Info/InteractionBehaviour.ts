import ActionHandler from 'Services/Animation/Sheet/Transition/ActionHandler'
import BounceAction from 'Services/Animation/Sheet/Transition/Actions/BounceAction'
import MoveAction from 'Services/Animation/Sheet/Transition/Actions/MoveAction'
import MovingSpeed from 'Services/Animation/Sheet/Behaviour/MovingSpeed'
import SheetDTO from 'Services/Animation/Sheet/SheetDTO';


export default class InteractionBehaviour
{
    private actions: ActionHandler;

    private dto: SheetDTO;


    public constructor(actions: ActionHandler, dto: SheetDTO)
    {
        this.actions = actions;
        this.dto = dto;
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

    public changeDelay(value: number): void
    {
        this.dto.changeDelay(value);
    }

    public changePosition(value: number): void
    {
        this.dto.changePosition(value);
    }

    public getPosition(): number
    {
        return this.dto.getPosition();
    }
}