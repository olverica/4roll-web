import CaptureState from 'App/Animation/Sheet/States/CaptureState'
import {StateBase} from 'App/Animation/Sheet/States/State'
import CloseState from 'App/Animation/Sheet/States/CloseState'
import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'


export default class StaticState extends StateBase
{
    public getName(): string
    {
        return 'static';
    }

    public onClose(): void
    {
        this.sheet.changeState(new CloseState(this.sheet));
    }

    public onTouchStart(event: TouchEvent): void
    {
        this.sheet.changeState(new CaptureState(this.sheet, event.fingerAt));
    }
}