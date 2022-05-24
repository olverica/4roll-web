import InteractionInfo from '~/services/Animation/Sheet/Info/InteractionInfo';
import MovingSpeed from '~/services/Animation/Sheet/Behaviour/MovingSpeed'
import {StateBase} from '~/services/Animation/Sheet/States/State'
import sleep from '~/services/Support/Helpers/Sleep'


export default class CloseState extends StateBase
{
    public constructor(sheet: InteractionInfo, speed?: MovingSpeed)
    {
        super(sheet);

        let boundaries = this.boundaries();
        let behaviour = this.behavior();

        behaviour.smoothMoveTo(boundaries.closeAt(), speed);

        sleep(behaviour.getDelay()).then(() => {
            behaviour.markClosed();
        })
    }
}