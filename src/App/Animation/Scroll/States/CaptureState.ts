import InteractionInfo from 'App/Animation/Scroll/Info/InteractionContext'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import StaticState from 'App/Animation/Scroll/States/StaticState'
import {StateBase} from 'App/Animation/Scroll/States/ScrollState'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'






import Action from '../../Transition/Action'
import TempAction from '../Actions/TempAction'


export default class CaptureState extends StateBase
{
    private previosTouch: number;

    private action: TempAction;


    public constructor(info: InteractionInfo, touchedAt: number)
    {
        super(info);
        this.previosTouch = touchedAt;

        this.action = new TempAction(this.scroll, ()=>null);
        this.scroll.addAction(this.action);
    }

    public onTouchMove(event: MoveEvent): void
    {
        this.action.moveBy(-event.fingerAt + this.previosTouch);
        this.previosTouch = event.fingerAt;
    }

    public onTouchRelease(event: ReleaseEvent): void
    {
        this.scroll.getBehavior().setSpeed(event.movingSpeed);
        this.action.stop();
        
        this.scroll.changeState(new StaticState(this.scroll));
    }
}