import InteractionInfo from 'App/Animation/Scroll/Info/InteractionContext'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'


export default interface ScrollState
{
    onTouchMove(event: MoveEvent): void
    onTouchStart(event: TouchEvent): void
    onTouchRelease(event: ReleaseEvent): void
}


export abstract class StateBase implements ScrollState
{
    protected scroll: InteractionInfo;


    public constructor(info: InteractionInfo)
    {
        this.scroll = info;
        this.onStateAttached();
    }

    public onTouchMove(event: MoveEvent): void
    {
        //
    }

    public onTouchStart(event: TouchEvent): void
    {
        //
    }

    public onTouchRelease(event: ReleaseEvent): void
    {
        //
    }

    public onStateAttached(): void
    {
        //
    }
}