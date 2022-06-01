import {TouchedEvent} from '~/services/Animation/Sheet/Behaviour/Events';
import CaptureState from '~/services/Animation/Sheet/States/CaptureState'
import CloseState from '~/services/Animation/Sheet/States/CloseState'
import {StateBase} from '~/services/Animation/Sheet/States/State'


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

    public onTouchStart(event: TouchedEvent): void
    {
        this.behavior()
            .changePosition(event.sheetPosition);

        this.sheet.changeState(new CaptureState(this.sheet));
    }
}