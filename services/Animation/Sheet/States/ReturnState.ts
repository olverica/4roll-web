import StaticState from '~/services/Animation/Sheet/States/StaticState'
import {StateBase} from '~/services/Animation/Sheet/States/State'
import sleep from '~/services/Support/Helpers/Sleep'


export default class ReturnState extends StateBase
{

    public onStateAttached(): void {
        let boundaries = this.boundaries();
        let behaviour = this.behavior();

        behaviour.smoothMoveTo(boundaries.affectedTo());

        sleep(behaviour.getDelay()).then(() => {
            this.sheet.changeState(new StaticState(this.sheet))
        })
    }
}