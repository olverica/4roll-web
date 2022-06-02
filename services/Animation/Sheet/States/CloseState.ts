import InteractionInfo from 'Services/Animation/Sheet/Info/InteractionInfo';
import MovingSpeed from 'Services/Animation/Sheet/Behaviour/MovingSpeed'
import {StateBase} from 'Services/Animation/Sheet/States/State'


export default class CloseState extends StateBase
{
    public getName(): string
    {
        return 'close';
    }

    public constructor(sheet: InteractionInfo, speed?: MovingSpeed)
    {
        super(sheet);

        let boundaries = this.boundaries();
        let behaviour = this.behavior();

        behaviour
            .moveTo(boundaries.closeAt(), speed)
            .then(() => this.sheet.markClosed());
    }

    public onClose(): void {
        //
    }
}