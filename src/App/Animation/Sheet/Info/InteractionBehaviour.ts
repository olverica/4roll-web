import ActionHandler from 'App/Animation/Transition/ActionHandler'
import BounceAction from 'App/Animation/Sheet/Actions/BounceAction'
import MovingSpeed from 'App/Animation/Behaviour/MovingSpeed'
import MoveAction from 'App/Animation/Sheet/Actions/MoveAction'
import SheetDTO from 'App/Animation/Sheet/SheetDTO';


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