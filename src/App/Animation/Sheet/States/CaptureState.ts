import InteractionInfo from 'App/Animation/Sheet/Info/InteractionInfo'
import {GestureType} from 'App/Animation/Behaviour/GestureDetector'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import {StateBase} from 'App/Animation/Sheet/States/State'
import ReturnState from 'App/Animation/Sheet/States/ReturnState'
import CloseState from 'App/Animation/Sheet/States/CloseState'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'


export default class CaptureState extends StateBase
{
    private movingFrom: number;


    public constructor(info: InteractionInfo, touchedAt: number)
    {
        super(info);
        this.movingFrom = touchedAt
    }

    public onTouchMove(event: MoveEvent): void
    {
        let behaviour = this.behavior();
        let boundaries = this.boundaries();
        let sheetPosition = event.fingerAt - this.movingFrom;

        if (boundaries.breaksTopAt(sheetPosition))
        {
            this.sheet.changeState(new ReturnState(this.sheet));
            return;
        }
        
        if (boundaries.breaksCloseAt(sheetPosition))
        {
            this.sheet.changeState(new CloseState(this.sheet));
            return;
        }

        behaviour.changePosition(sheetPosition);
    }

    public onTouchRelease(event: ReleaseEvent): void
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

    public onClose(): void
    {
        this.sheet.changeState(new CloseState(this.sheet));
    }

    public getName(): string
    {
        return 'capture';
    }
}