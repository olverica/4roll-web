import InteractionInfo from 'App/Animation/Sheet/Info/InteractionInfo';
import MovingSpeed from 'App/Animation/Behaviour/MovingSpeed'
import {StateBase} from 'App/Animation/Sheet/States/State'


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