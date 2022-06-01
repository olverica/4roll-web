import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo';
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import {StateBase} from '~/services/Animation/Sheet/States/State'


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