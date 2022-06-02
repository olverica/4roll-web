import {MovedEvent, TouchedEvent, ReleasedEvent} from 'Services/Animation/Sheet/Behaviour/Events';
import InteractionBoundaries from 'Services/Animation/Sheet/Info/InteractionBoundaries';
import InteractionBehaviour from 'Services/Animation/Sheet/Info/InteractionBehaviour';
import InteractionInfo from 'Services/Animation/Sheet/Info/InteractionInfo'


export default interface SheetState
{
    onTouchMove(event: MovedEvent): void
    onTouchStart(event: TouchedEvent): void
    onTouchRelease(event: ReleasedEvent): void
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

    public onTouchMove(event: MovedEvent): void
    {
        //
    }

    public onTouchStart(event: TouchedEvent): void
    {
        //
    }

    public onTouchRelease(event: ReleasedEvent): void
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