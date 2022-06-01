import Action from '~/services/Animation/Sheet/Transition/Actions/Action'


export default class ActionHandler
{
    private action?: Action = null;


    public setAction(action: Action): void
    {
        if (this.action && !!!this.action.ended())
            throw new Error('Current action is not ended');

        this.action = action;
    }

    public update(tick: number): void
    {
        if (!!!this.action)
            return;

        this.action.update(tick);
        if (this.action.ended())
            this.action = null;
    }
}