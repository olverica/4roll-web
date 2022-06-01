import {StateBase} from '~/services/Animation/Sheet/States/State'
import StaticState from '~/services/Animation/Sheet/States/StaticState'
import CloseState from '~/services/Animation/Sheet/States/CloseState'


export default class AppeareState extends StateBase
{
    public getName(): string
    {
        return 'appear';
    }

    public onClose(): void
    {
        this.sheet.changeState(new CloseState(this.sheet));
    }

    public onStateAttached()
    {
        let behaviour = this.behavior();
        let boundaires = this.boundaries();
        
        // this.randomMove();
        behaviour.bounceTo(boundaires.affectedTo())
           .then(() => this.sheet.changeState(new StaticState(this.sheet)));
    }

    public randomMove() {
        let position = Math.ceil(Math.random() * 844) - 400
        this.behavior()
            .bounceTo(position)
            .then(this.randomMove.bind(this));
    }
}