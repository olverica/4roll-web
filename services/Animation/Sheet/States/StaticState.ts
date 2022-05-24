import {TouchedEvent} from '~/services/Animation/Sheet/Behaviour/Events';
import CaptureState from '~/services/Animation/Sheet/States/CaptureState'
import {StateBase} from '~/services/Animation/Sheet/States/State'


export default class StaticState extends StateBase
{
    public onTouchStart(event: TouchedEvent): void
    {
        this.behavior()
            .changePosition(event.sheetPosition);

        this.boundaries()
            .changeAffectionPoint(event.sheetPosition);
            
        this.sheet.changeState(new CaptureState(this.sheet));
    }
}