import {MovedEvent, ReleasedEvent} from '~/services/Animation/Sheet/Behaviour/Events'
import {GestureType} from '~/services/Animation/Sheet/Behaviour/GestureDetector'
import {StateBase} from '~/services/Animation/Sheet/States/State'
import ReturnState from '~/services/Animation/Sheet/States/ReturnState'
import CloseState from '~/services/Animation/Sheet/States/CloseState'


export default class CaptureState extends StateBase
{
    public onStateAttached(): void
    {
        this.behavior().makeRough();
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

        console.log(event);
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