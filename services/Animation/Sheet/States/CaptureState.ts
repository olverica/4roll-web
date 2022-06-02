import {MovedEvent, ReleasedEvent} from 'Services/Animation/Sheet/Behaviour/Events'
import {GestureType} from 'Services/Animation/Sheet/Behaviour/GestureDetector'
import {StateBase} from 'Services/Animation/Sheet/States/State'
import ReturnState from 'Services/Animation/Sheet/States/ReturnState'
import CloseState from 'Services/Animation/Sheet/States/CloseState'


export default class CaptureState extends StateBase
{
    public getName(): string
    {
        return 'capture';
    }

    public onClose(): void
    {
        this.sheet.changeState(new CloseState(this.sheet));
    }

    public onTouchMove(event: MovedEvent): void
    {
        let behaviour = this.behavior();
        let boundaries = this.boundaries();

        if (boundaries.breaksTopAt(event.sheetPosition))
        {
            this.sheet.changeState(new ReturnState(this.sheet));
            return;
        } 
        
        if (boundaries.breaksCloseAt(event.sheetPosition))
        {
            this.sheet.changeState(new CloseState(this.sheet));
            return;
        }

        behaviour.changePosition(event.sheetPosition);
    }

    public onTouchRelease(event: ReleasedEvent): void
    {
        let boundaries = this.boundaries();
        let behaviour = this.behavior();
        let position = behaviour.getPosition();

        if (GestureType.SwipeDown === event.gesture.type)
        {
            this.sheet.changeState(new CloseState(this.sheet, event.gesture.speed))
            return;
        }

        if (boundaries.breaksBottomAt(position))
        {
            this.sheet.changeState(new CloseState(this.sheet));
            return;
        }

        this.sheet.changeState(new ReturnState(this.sheet))
    }
}