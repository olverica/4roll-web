import {StateBase} from 'Services/Animation/Sheet/States/State'
import StaticState from 'Services/Animation/Sheet/States/StaticState'
import CloseState from 'Services/Animation/Sheet/States/CloseState'


export default class ReturnState extends StateBase
{
    public getName(): string
    {
        return 'return';
    }

    public onStateAttached(): void {
        let boundaries = this.boundaries();
        let behaviour = this.behavior();

        behaviour
            .moveTo(boundaries.affectedTo())
            .then(() => this.sheet.changeState(new StaticState(this.sheet)))
    }

    public onClose(): void
    {
        this.sheet.changeState(new CloseState(this.sheet));
    }
}