import InteractionBoundaries from 'App/Animation/Sheet/Info/InteractionBoundaries'
import InteractionBehaviour from 'App/Animation/Sheet/Info/InteractionBehaviour'
import InteractionInfo from 'App/Animation/Sheet/Info/InteractionInfo'
import ReleaseEvent from 'App/Animation/Behaviour/Events/ReleaseEvent'
import TouchEvent from 'App/Animation/Behaviour/Events/TouchEvent'
import MoveEvent from 'App/Animation/Behaviour/Events/MoveEvent'


export default interface SheetState
{
    onTouchMove(event: MoveEvent): void
    onTouchStart(event: TouchEvent): void
    onTouchRelease(event: ReleaseEvent): void
    onClose(): void
    getName(): string
}


export abstract class StateBase implements SheetState
{
    protected sheet: InteractionInfo;


    public abstract getName(): string;


    public constructor(info: InteractionInfo)
    {
        this.sheet = info;
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

    public onClose(): void
    {
        //
    }

    protected behavior(): InteractionBehaviour
    {
        return this.sheet.getBehaviour();
    }

    protected boundaries(): InteractionBoundaries
    {
        return this.sheet.getBoundaries();
    }
}